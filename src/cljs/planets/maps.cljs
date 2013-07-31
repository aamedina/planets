(ns planets.maps
  (:require [dommy.core :as dommy]
            [planets.utils :refer [sel-shader set-nested! apply-nested!]]
            [planets.planet :refer [gen-planet]]
            [planets.texture :as texture]
            [planets.rtt :refer [rtt! rtt-scene]])
  (:use-macros [dommy.macros :only [node deftemplate sel1 sel]]))

(defn simplex-noise-terrain [renderer camera delta]
  (let [planet (gen-planet renderer)
        geometry-terrain (doto (THREE.PlaneGeometry. 8192 8192 512 512)
                           (.computeCentroids)
                           ;; (.computeFaceNormals)
                           ;; (.computeVertexNormals)
                           (.computeTangents))
        terrain (THREE.Mesh. geometry-terrain (:terrain-material planet))]
    (set-nested! terrain {:position {:x 0 :y -125 :z 0}})
    ;; (rtt! (:height-map-material planet)
    ;;       [(:height-map planet)] renderer)
    ;; (rtt! (:luminosity-material planet)
    ;;       [(:specular-map planet)] renderer)
    (rtt! (:normal-material planet)
          [(:normal-map planet)] renderer)
    {:terrain-mesh terrain}))

;; lod-geometries
;; (reduce (fn [geometries detail]
;;           (conj geometries (THREE.IcosahedronGeometry. (* 6371 detail))))
;;         []
;;         (range 0 9))
;; lod (THREE.LOD.)
;; lod-meshes
;; (reduce (fn [meshes geometry]
;;           (let [mesh (THREE.Mesh. (val geometry)
;;                                   (:terrain-material planet))]
;;             (.set (.-scale mesh) 1.5 1.5 1.5)
;;             (.updateMatrix mesh)
;;             (set! (.-matrixAutoUpdate mesh) false)
;;             (.addLevel lod mesh (key geometry))
;;             (conj meshes mesh)))
;;         []
;;      (zipmap [8000 4000 2000 1000 500 250 100 50 25] lod-geometries))
