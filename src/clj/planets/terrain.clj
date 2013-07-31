(ns planets.terrain
  (:require [clojure.java.io :refer [output-stream]]
            [clojure.core.reducers :as r])
  (:import [com.nativelibs4java.opencl
            JavaCL CLBuffer CLContext CLPlatform CLDevice
            CLDevice$QueueProperties CLImage CLQueue CLEvent
            CLEvent$CommandExecutionStatus CLEvent$CommandType CLProgram
            CLKernel LocalSize CLMem CLMem$Usage CLImage2D CLSampler]
           [com.nativelibs4java.opencl.util ReductionUtils
            ReductionUtils$Reductor ReductionUtils$Operation OpenCLType]
           [com.nativelibs4java.util NIOUtils]
           [org.bridj Pointer]
           [org.lwjgl LWJGLException]
           [org.lwjgl.opengl Display DisplayMode]
           [com.oddlabs.procedurality Channel Mountain Voronoi Midpoint Utils]
           [com.jme3.terrain.heightmap MidpointDisplacementHeightMap
            AbstractHeightMap FaultHeightMap FluidSimHeightMap HillHeightMap
            ParticleDepositionHeightMap]))

(def ^:private event-type-map
  {CLEvent$CommandType/CopyBuffer :copy-buffer
   CLEvent$CommandType/CopyBufferToImage :copy-buffer-to-image
   CLEvent$CommandType/CopyImageToBuffer :copy-image-to-buffer
   CLEvent$CommandType/ReadBuffer :read-buffer
   CLEvent$CommandType/WriteBuffer :write-buffer
   CLEvent$CommandType/ReadImage :copy-image
   CLEvent$CommandType/WriteImage :write-image
   CLEvent$CommandType/NDRangeKernel :execute-kernel})

(def ^{:doc "The current platform."} ^:dynamic *platform* nil)
(def ^{:doc "The current context."} ^:dynamic *context* nil)
(def ^{:doc "The current queue."} ^:dynamic *queue* nil)
(def ^{:doc "The current program"} ^:dynamic *program* nil)
(def ^{:doc "The size of the workgroup"} ^:dynamic *workgroup-size* nil)
(def ^{:doc "The params given to a kernel"} ^:dynamic *params* nil)
(def ^{:doc "A function which will return a program, given the current params."}
  ^:dynamic *program-template* nil)

(defprotocol HasEvent
  (event [e] "Returns the event which represents the completion of this object.")
  (description [e] "Describes the event."))

(extend-type CLEvent
  HasEvent
  (event [e]
    e)
  (description [e]
    (or
     (event-type-map (.getCommandType e))
     :other)))

(defmacro with-queue  
  "Executes inner scope within the queue."
  [q & body]
  `(binding [*queue* ~q]
     ~@body))

(defn queue
  "Returns the current queue, or throws an exception if it's not defined."
  []
  (when-not *queue*
    (throw (Exception. "OpenCL queue not defined within this scope.")))
  *queue*)

(defn enqueue-marker
  "Returns an event which represents the progress of all previously enqueued commands."
  [q]
  (.enqueueMarker ^CLQueue (queue)))

(extend-type CLQueue
  HasEvent
  (event [q]
    (with-queue q
      (enqueue-marker)))
  (description [q]
    :queue
    ))

(defn available-platforms
  "Returns a list of all available platforms."
  []
  (seq (JavaCL/listPlatforms)))

(defn platform
  "Returns the current platform, or throws an exception if it's not defined."
  []
  (or *platform* (first (available-platforms))))

(defn context
  "Returns the current context, or throws an exception if it's not defined."
  []
  (when-not *context*
    ;; (throw (Exception. "OpenCL context not defined within this scope."))
    (JavaCL/createBestContext))
  (:context *context*))

(defn devices
  "Returns the devices of the current context, or an exception if they're not defined."
  []
  (seq (.getDevices (context))))

(defn cache
  "Returns the current data cache"
  []
  (when-not *context*
    (throw (Exception. "OpenCL context not defined within this scope.")))
  (:cache *context*))

(defn program
  "Returns the current program, or throws an exception if it's not defined."
  []
  (cond
   *program-template* (*program-template*)
   *program* *program*
   :else  (throw (Exception. "OpenCL program not defined within this scope."))))

;;;

(defn available-devices
  "Returns all available devices."
  ([]
     (available-devices (platform)))
  ([platform]
     (seq (.listAllDevices ^CLPlatform platform true))))

(defn available-cpu-devices
  "Returns all available CPU devices."
  ([]
     (available-cpu-devices (platform)))
  ([platform]
     (seq (.listCPUDevices ^CLPlatform platform true))))

(defn available-gpu-devices
  "Returns all available GPU devices."
  ([]
     (available-gpu-devices (platform)))
  ([platform]
     (seq (.listGPUDevices ^CLPlatform platform true))))

(defn best-device
  "Returns the best available device."
  ([]
     (best-device (platform)))
  ([platform]
     (.getBestDevice ^CLPlatform platform)))

(defn version
  "Returns the version of the OpenCL implementation."
  ([]
     (version (platform)))
  ([platform]
     (.getVersion ^CLPlatform platform)))

(defn create-queue
  "Creates a queue."
  ([]
     (create-queue (first (devices))))
  ([^CLDevice device & properties]
     (.createQueue
      device
      (context)
      (if (empty? properties)
        (make-array CLDevice$QueueProperties 0)
        (into-array properties)))))

(defn create-context
  "Creates a context which uses the specified devices.  Using more than one device is not recommended."
  [& devices]
  {:context (.createContext ^CLPlatform (platform) nil (into-array devices))
   :cache (ref [])})

(defn finish
  "Halt execution until all enqueued operations are complete."
  []
  (.finish ^CLQueue (queue)))

(defn enqueue-barrier
  "Ensures that all previously enqueued commands will complete before new commands will begin."
  []
  (.enqueueBarrier ^CLQueue (queue)))

(defn enqueue-wait-for
  "Enqueues a barrier which will halt execution until all events given as parameters have completed."
  [& events]
  (.enqueueWaitForEvents ^CLQueue (queue) (into-array (map event events))))

(defmacro with-queue-and-wait
  "Executes inner scope within the queue, and waits for all commands to complete."
  [q & body]
  `(with-queue ~q
     (try
       ~@body
       (finally
         (finish)))))

(defmacro with-program [program & body]
  `(binding [*program* ~program]
     ~@body))

(defmacro with-platform
  "Defines the platform within the inner scope."
  [platform & body]
  `(binding [*platform* ~platform]
     ~@body))

(defmacro with-context
  "Defines the context within the inner scope."
  [context & body]
  `(let [context# ~context]
     (with-platform (.getPlatform ^CLContext (:context context#))
       (binding [*context* context#]
         (with-queue-and-wait (create-queue)
           ~@body)))))

(defmacro with-devices
  "Defines the devices within the inner scope.
   Creates a context using these devices,
   and releases the context once the scope is exited."
  [devices & body]
  `(with-platform nil
     (let [context# (apply create-context ~devices)]
       (try
         (with-context context#
           ~@body)
         (finally
           (.release ^CLContext (:context context#)))))))

(defmacro with-cl
  "Executes the inner scope inside a context using the best available device."
  [& body]
  `(with-devices [(best-device)] ~@body))

;; (defn gen-heightmap
;;   [& {:keys [size features hills seed]
;;       :or {size 512 seed 42 features 4 hills 0.5}}]
;;   (let [height
;;         (.toChannel (Mountain. size (- (Utils/powerOf2Log2 size) 6) 0.5 seed))
;;         voronoi (Voronoi. size features features 1 1.0 seed)
;;         cliffs (doto (.getDistance voronoi -1.0 1.0 0.0)
;;                  (.brightness 1.5)
;;                  (.multiply 0.33))]
;;     (doto height
;;       (.multiply 0.67)
;;       (.channelAdd cliffs)
;;       (.channelSubtract
;;        (-> (.getDistance voronoi 1.0 0.0 0.0)        
;;            (.gamma 0.5)
;;            (.flipV)
;;            (.rotate 90)))
;;       (.perturb (.toChannel (Midpoint. size 2 0.5 seed)) 0.25)
;;       (.erode (/ (- 24.0 (* hills 12.0)) size) (bit-shift-right size 2))
;;       (.smooth 1))
;;     (-> (doto (Channel. size size)
;;           (.add 0.5)
;;           (.bump height 0.1 0.0 0.1 1.0 0.0)
;;           (.normalize))
;;         (.toLayer)
;;         (.saveAsPNG "resources/public/textures/heightmap"))
;;     ))

(defn midpoint-displacement-heightmap
  [& {:keys [size range persistence seed]
      :or {size 512 range 1 persistence 0.5 seed 42}}]  
  (let [heightmap
        (MidpointDisplacementHeightMap. (inc size) range persistence seed)]
    (.getHeightMap
     (doto heightmap
       (.load)))))

(defn save [heightmap file]
  (let [img-data (-> (map int (.getHeightMap heightmap)) vec)]
    img-data))

(defn reduction [vals & device]
  (if (> (* (count vals) 4) (apply #(.getMaxMemAllocSize %) device))
    (r/fold
     +
     (fn [part]
       (println part)
       (count part)
       ;; (with-devices (into-array ^CLContext device)
       ;;   (let [cl-context (context)
       ;;         cl-queue (queue)
       ;;         data-size (count vals)
       ;;         ptr (doto (Pointer/pointerToFloats vals)
       ;;               (.order (.getByteOrder cl-context)))
       ;;         channels 1 max-reduction-size 64
       ;;         cl-buffer-input
       ;;         (.createBuffer cl-context CLMem$Usage/Input ptr false)
       ;;         reductor
       ;;         (ReductionUtils/createReductor
       ;;          cl-context ReductionUtils$Operation/Add OpenCLType/Float 1)
       ;;         result (.reduce ^ReductionUtils$Reductor reductor
       ;;                         ^CLQueue cl-queue
       ;;                         ^CLBuffer cl-buffer-input
       ;;                         data-size (int 64) nil)]
       ;;     (.get result 0)))
       )
     (partition-all (* (count vals) 4) (vec vals)))
    (with-devices (into-array ^CLContext device)
      (let [cl-context (context)
            cl-queue (queue)
            data-size (count vals)
            ptr (doto (Pointer/pointerToFloats vals)
                  (.order (.getByteOrder cl-context)))
            channels 1 max-reduction-size 64
            cl-buffer-input (.createBuffer cl-context CLMem$Usage/Input ptr false)
            reductor
            (ReductionUtils/createReductor
             cl-context ReductionUtils$Operation/Add OpenCLType/Float 1)
            result (.reduce ^ReductionUtils$Reductor reductor
                            ^CLQueue cl-queue
                            ^CLBuffer cl-buffer-input
                            data-size (int 64) nil)]
        (.get result 0)))))
