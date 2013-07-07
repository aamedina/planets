(ns planets.rtt
  (:require [planets.utils :refer [set-nested! apply-nested! sel-shader]]))

(defn rtt-scene []
  (let [camera
        (doto
            ;; (THREE.PerspectiveCamera.
            ;;  js/window.innerWidth js/window.innerHeight
            ;;  -10000 10000)
            (THREE.OrthographicCamera.
             (/ js/window.innerWidth -2) (/ js/window.innerWidth 2)
             (/ js/window.innerHeight 2) (/ js/window.innerHeight -2)
             -10000 10000)
          (set-nested! {:position {:x 0 :y 0 :z -500}}))
        scene (doto (THREE.Scene.)
                (.add camera))]
    {:camera camera :scene scene}))

(defn rtt! [material mappings renderer]
  (let [rtt-scene (rtt-scene)
        mesh
        (doto (THREE.Mesh.
               (THREE.PlaneGeometry. js/window.innerWidth js/window.innerHeight)
               material)
          (set-nested! {:position {:x 0 :y 0 :z -500}}))
        scene (:scene rtt-scene) camera (:camera rtt-scene)]
    (.add (:scene rtt-scene) mesh)
    (doseq [mapping mappings]
      (.render renderer scene camera mapping true))))
