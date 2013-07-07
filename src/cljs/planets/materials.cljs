(ns planets.materials
  (:require [planets.utils :refer [set-nested! apply-nested! sel-shader]]
            [planets.shader :as shaders]))

(defn shader-material [shader uniforms options]
  (THREE.ShaderMaterial.
   (clj->js
    (merge-with (partial merge-with merge) shader {:uniforms uniforms} options))))

(defn simplex-material [simplex-uniforms]
  (shader-material shaders/simplex-shader simplex-uniforms
                   {:lights false :fog true}))

(defn normal-material [normal-uniforms]
  (shader-material shaders/normal-shader normal-uniforms
                   {:lights false :fog true}))

(defn terrain-material [terrain-uniforms]
  (shader-material shaders/terrain-shader terrain-uniforms
                   {:lights true :fog true}))

(defn height-map-material [noise-uniforms]
  (shader-material shaders/height-map-shader noise-uniforms
                   {:lights false :fog true}))

(defn luminosity-material [luminosity-uniforms]
  (shader-material shaders/luminosity-shader luminosity-uniforms {}))

(defn snowy-terrain-material [snowy-terrain-uniforms]
  (shader-material shaders/snowy-terrain-shader snowy-terrain-uniforms {}))
