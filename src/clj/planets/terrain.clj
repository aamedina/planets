(ns planets.terrain
  (:import [org.lwjgl LWJGLException]
           [org.lwjgl.opengl Display DisplayMode]
           [com.oddlabs.procedurality Channel Mountain Voronoi Midpoint Utils]))

(defn gen-heightmap
  [& {:keys [size features hills seed]
      :or {size 512 seed 42 features 4 hills 0.5}}]
  (let [height
        (.toChannel (Mountain. size (- (Utils/powerOf2Log2 size) 6) 0.5 seed))
        voronoi (Voronoi. size features features 1 1.0 seed)
        cliffs (doto (.getDistance voronoi -1.0 1.0 0.0)
                 (.brightness 1.5)
                 (.multiply 0.33))]
    (doto height
      (.multiply 0.67)
      (.channelAdd cliffs)
      (.channelSubtract
       (-> (.getDistance voronoi 1.0 0.0 0.0)        
           (.gamma 0.5)
           (.flipV)
           (.rotate 90)))
      (.perturb (.toChannel (Midpoint. size 2 0.5 seed)) 0.25)
      (.erode (/ (- 24.0 (* hills 12.0)) size) (bit-shift-right size 2))
      (.smooth 1))
    (-> (doto (Channel. size size)
          (.add 0.5)
          (.bump height 0.1 0.0 0.1 1.0 0.0)
          (.normalize))
        (.toLayer))
    ))

