(ns planets.planet
  (:require [planets.utils :refer [set-nested! apply-nested! sel-shader]]
            [planets.rtt :refer [rtt! rtt-scene]]
            [planets.texture :as texture]
            [planets.materials :as materials]))

(defn noise-uniforms [renderer]  
  {:resolution
   {:value
    (THREE.Vector3. (* js/window.innerWidth
                       (.-devicePixelRatio renderer))
                    (* js/window.innerHeight
                       (.-devicePixelRatio renderer)) 0)}})

(defn terrain-uniforms
  [normal-map height-map specular-map diffuse1 diffuse2 detail]
  {:tNormal {:value normal-map}
   :uNormalScale {:value 1}
   :tDisplacement {:value height-map}
   :tDiffuse1 {:value (doto diffuse1 (set-nested! {:anisotropy 16}))}
   :tDiffuse2 {:value (doto diffuse2 (set-nested! {:anisotropy 16}))}
   :tSpecular {:value (doto specular-map (set-nested! {:anisotropy 16}))}
   :tDetail {:value (doto detail (set-nested! {:anisotropy 16}))}
   :enableDiffuse1 {:value true}
   :enableDiffuse2 {:value true}
   :enableSpecular {:value true}
   :uDiffuseColor
   {:value (THREE.Color. 0xffffff)}
   :uSpecularColor
   {:value (THREE.Color. 0xffffff)}
   :uAmbientColor {:value (THREE.Color. 0x111111)}
   :uDisplacementScale {:value 375}
   :uRepeatOverlay {:value (THREE.Vector2. 128 128)}
   :uShininess {:value 3}})

(defn normal-uniforms [height-map]
  {:height {:value 0.05}
   :resolution {:value (THREE.Vector2. 512 512)}
   :heightMap {:value height-map}})

(def simplex-uniforms
  {:scale {:value 50}})

(defn gen-planet [renderer]
  (let [normal-map
        (texture/mapping 512 512
                         {:minFilter THREE.LinearMipMapLinearFilter
                          :magFilter THREE.LinearFilter
                          :format THREE.RGBFormat})
        height-map
        (texture/load-texture "textures/heightmap.png")
        ;; (texture/mapping 512 512 {:minFilter THREE.LinearMipMapLinearFilter
        ;;                             :magFilter THREE.LinearFilter
        ;;                             :format THREE.RGBFormat})
        specular-map (texture/mapping 2048 2048
                                      {:minFilter THREE.LinearMipMapLinearFilter
                                       :magFilter THREE.LinearFilter
                                       :format THREE.RGBFormat
                                       :wrapS THREE.RepeatWrapping
                                       :wrapT THREE.RepeatWrapping})
        s1
        (doto (texture/data-texture 1024 1024 (THREE.Color. 0x864B00))
          (set-nested!
           {:wrapS THREE.RepeatWrapping
            :wrapT THREE.RepeatWrapping}))
        s2
        (texture/data-texture
         1024 1024 (THREE.Color. 0x064B00)
         (set-nested!
           {:wrapS THREE.RepeatWrapping
            :wrapT THREE.RepeatWrapping}))
        s3
        (texture/data-texture
         1024 1024 (THREE.Color. 0xf64B00)
         (set-nested!
           {:wrapS THREE.RepeatWrapping
            :wrapT THREE.RepeatWrapping}))
        diffuse1
        (texture/load-texture
         "textures/grasslight.jpg"
         ;; {:wrapS THREE.RepeatWrapping
         ;;  :wrapT THREE.RepeatWrapping}
         )
        diffuse2
        (texture/load-texture
         "textures/bg.jpg"
         ;; {:wrapS THREE.RepeatWrapping
         ;;  :wrapT THREE.RepeatWrapping}
         )
        detail
        (texture/load-texture
         "textures/grasslight-nm.jpg"
         ;; {:wrapS THREE.RepeatWrapping
         ;;  :wrapT THREE.RepeatWrapping}
         )
        luminosity-material
        (materials/luminosity-material {:tDiffuse {:value diffuse1}})]
    ;; (rtt! texture/height-map-material
    ;;       [(texture/mapping 256 256 {:minFilter THREE.LinearFilter})]
    ;;       renderer)
    (rtt! luminosity-material [specular-map] renderer)
    {:height-map height-map
     :normal-map normal-map
     :specular-map specular-map
     :luminosity-material luminosity-material
     :normal-material (materials/normal-material (normal-uniforms height-map))
     :terrain-material (materials/terrain-material
                        (terrain-uniforms normal-map height-map specular-map
                                          diffuse1 diffuse2 detail))
     :height-map-material (materials/height-map-material
                           (noise-uniforms renderer))}))
