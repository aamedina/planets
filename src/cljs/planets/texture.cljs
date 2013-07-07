(ns planets.texture
  (:require [planets.utils :refer [set-nested! apply-nested! sel-shader]]
            [planets.shader :as shaders]
            [planets.rtt :as rtt!]))

(defn mapping
  ([options]
     (THREE.WebGLRenderTarget. js/window.innerWidth js/window.innerHeight
                               (clj->js options)))
  ([width height options]
     (THREE.WebGLRenderTarget. width height (clj->js options))))

(defn load-texture [path options]
  (let [texture (.loadTexture THREE.ImageUtils path)]
    (doto texture
      (set-nested! options))))

(defn data-texture [width height color params]
  (doto (.generateDataTexture THREE.ImageUtils width height color)
    (set-nested! params)))
