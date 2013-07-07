(ns planets.shader
  (:require [planets.utils :refer [sel-shader clone set-nested!]]))

;; Uniforms from THREE.UniformLib
(def common (clone (aget THREE.UniformsLib "common")))
(def bump (clone (aget THREE.UniformsLib "bump")))
(def normalmap (clone (aget THREE.UniformsLib "normalmap")))
(def fog (clone (aget THREE.UniformsLib "fog")))
(def lights (clone (aget THREE.UniformsLib "lights")))
(def particle (clone (aget THREE.UniformsLib "particle")))
(def shadowmap (clone (aget THREE.UniformsLib "shadowmap")))

;; ShaderChunks
(def fog-params-fragment (aget THREE.ShaderChunk "fog_pars_fragment"))
(def fog-fragment (aget THREE.ShaderChunk "fog_fragment"))
(def envmap-params-fragment (aget THREE.ShaderChunk "envmap_pars_fragment"))
(def envmap-fragment (aget THREE.ShaderChunk "envmap_fragment"))
(def envmap-params-vertex (aget THREE.ShaderChunk "envmap_pars_vertex"))
(def envmap-vertex (aget THREE.ShaderChunk "envmap_vertex"))
(def worldpos-vertex (aget THREE.ShaderChunk "worldpos_vertex"))
(def map-particle-params-fragment (aget THREE.ShaderChunk "map_particle_pars_fragment"))
(def map-particle-fragment (aget THREE.ShaderChunk "map_particle_fragment"))
(def map-params-fragment (aget THREE.ShaderChunk "map_pars_fragment"))
(def map-params-vertex (aget THREE.ShaderChunk "map_pars_vertex"))
(def map-vertex (aget THREE.ShaderChunk "map_vertex"))
(def map-fragment (aget THREE.ShaderChunk "map_fragment"))
(def lightmap-params-fragment (aget THREE.ShaderChunk "lightmap_pars_fragment"))
(def lightmap-params-vertex (aget THREE.ShaderChunk "lightmap_pars_vertex"))
(def lightmap-fragment (aget THREE.ShaderChunk "lightmap_fragment"))
(def lightmap-vertex (aget THREE.ShaderChunk "lightmap_vertex"))
(def bumpmap-params-fragment (aget THREE.ShaderChunk "bumpmap_pars_fragment"))
(def normalmap-params-fragment (aget THREE.ShaderChunk "normalmap_pars_fragment"))
(def specularmap-params-fragment (aget THREE.ShaderChunk "specularmap_pars_fragment"))
(def specularmap-fragment (aget THREE.ShaderChunk "specularmap_fragment"))
(def lights-lambert-params-vertex (aget THREE.ShaderChunk "lights_lambert_pars_vertex"))
(def lights-lambert-vertex (aget THREE.ShaderChunk "lights_lambert_vertex"))
(def lights-phong-params-vertex (aget THREE.ShaderChunk "lights_phong_pars_vertex"))
(def lights-phong-vertex (aget THREE.ShaderChunk "lights_phong_vertex"))
(def lights-phong-params-fragment (aget THREE.ShaderChunk "lights_phong_pars_fragment"))
(def lights-phong-fragment (aget THREE.ShaderChunk "lights_phong_fragment"))
(def color-params-fragment (aget THREE.ShaderChunk "color_pars_fragment"))
(def color-phong-fragment (aget THREE.ShaderChunk "color_fragment"))
(def color-params-vertex (aget THREE.ShaderChunk "color_pars_vertex"))
(def color-phong-vertex (aget THREE.ShaderChunk "color_vertex"))
(def skinning-params-vertex (aget THREE.ShaderChunk "skinning_pars_vertex"))
(def skinning-vertex (aget THREE.ShaderChunk "skinning_vertex"))
(def skinbase-vertex (aget THREE.ShaderChunk "skinbase_vertex"))
(def morphtarget-params-vertex (aget THREE.ShaderChunk "morphtarget_pars_vertex"))
(def morphtarget-vertex (aget THREE.ShaderChunk "morphtarget_vertex"))
(def morphnormal-vertex (aget THREE.ShaderChunk "morphnormal_vertex"))
(def skinnormal-vertex (aget THREE.ShaderChunk "skinnormal_vertex"))
(def defaultnormal-vertex (aget THREE.ShaderChunk "defaultnormal_vertex"))
(def default-vertex (aget THREE.ShaderChunk "default_vertex"))
(def shadowmap-params-fragment (aget THREE.ShaderChunk "shadowmap_pars_fragment"))
(def shadowmap-fragment (aget THREE.ShaderChunk "shadowmap_fragment"))
(def shadowmap-params-vertex (aget THREE.ShaderChunk "shadowmap_pars_vertex"))
(def shadowmap-vertex (aget THREE.ShaderChunk "shadowmap_vertex"))
(def alphatest-fragment (aget THREE.ShaderChunk "alphatest_fragment"))
(def linear-to-gamma-fragment (aget THREE.ShaderChunk "linear_to_gamma_fragment"))


;; Shaders from THREE.ShaderLib and imported GLSL files
(def simplex-shader
  {:fragmentShader (sel-shader :#simplex_noise_fs)
   :vertexShader (sel-shader :#simplex_noise_vs)
   :uniforms (merge fog lights shadowmap
                    {:scale {:type "f" :value 20}})})

(def terrain-shader
  {:fragmentShader (sel-shader :#fragment-terrain)
   :vertexShader (sel-shader :#vertex-terrain)
   :uniforms
   (merge
    fog lights shadowmap
    {:enableDiffuse1 {:type "i" :value 0}
    :enableDiffuse2 {:type "i" :value 0}
    :enableSpecular {:type "i" :value 0}
    :enableReflection {:type "i" :value 0}
    :tDiffuse1 {:type "t" :value nil }
    :tDiffuse2 {:type "t" :value nil }
    :tDetail {:type "t" :value nil }
    :tNormal {:type "t" :value nil}
    :tSpecular {:type "t" :value nil }
    :tDisplacement {:type "t" :value nil}
    :uNormalScale {:type "f" :value 1.0}
    :uDisplacementBias {:type "f" :value 0.0 }
    :uDisplacementScale {:type "f" :value 1.0 }
    :uDiffuseColor {:type "c" :value (THREE.Color. 0xeeeeee)}
    :uSpecularColor { :type "c" :value (THREE.Color. 0x111111)}
    :uAmbientColor {:type "c" :value (THREE.Color. 0x050505)}
    :uShininess {:type "f" :value 30 }
    :uOpacity {:type "f" :value 1.0 }
    :uRepeatBase {:type "v2" :value (THREE.Vector2. 1 1)}
    :uRepeatOverlay {:type "v2" :value (THREE.Vector2. 1 1)}
    :uOffset {:type "v2" :value (THREE.Vector2. 0 0)}})})

(def normal-shader
  (let [shader THREE.NormalMapShader]
    {:fragmentShader (.-fragmentShader shader)
     :vertexShader (.-vertexShader shader)
     :uniforms (clone (.-uniforms shader))}))

(def specularity-shader
  {:fragmentShader (sel-shader :#bake_color_and_specularity_fs)
   :vertexShader (sel-shader :#bake_color_and_specularity_vs)
   :uniforms 
   {:heightMap {:type "t" :value nil}
    :color0 {:type "v4" :value [1 1 1 1]}
    :color1 {:type "v4" :value [1 1 1 1]}
    :color2 {:type "v4" :value [1 1 1 1]}
    :color3 {:type "v4" :value [1 1 1 1]}
    :color4 {:type "v4" :value [1 1 1 1]}
    :color5 {:type "v4" :value [1 1 1 1]}
    :color6 {:type "v4" :value [1 1 1 1]}
    :colorStop0 {:type "f" :value 0.2}
    :colorStop1 {:type "f" :value 0.4}
    :colorStop2 {:type "f" :value 0.6}
    :colorStop3 {:type "f" :value 0.8}
    :waterLevel {:type "f" :value 0.2}}})

(def height-map-shader
  {:fragmentShader (sel-shader :#fragmentShaderNoise)
   :vertexShader (sel-shader :#vertexShader)
   :uniforms
   {:time {:type "f" :value 1.0}
    :scale {:type "v2" :value (THREE.Vector2. 1.5 1.5)}
    :offset {:type "v2" :value (THREE.Vector2. 0 0)}
    :resolution {:type "v3" :value (THREE.Vector3. 0 0 0)}}})

(def planet-shader
  {:fragmentShader (sel-shader :#planet_composition_fs)
   :vertexShader (sel-shader :#planet_composition_vs)
   :uniforms {:heightMap {:type "t" :value nil}
              :mainTexture {:type "t" :value nil}
              :bumpmapTextureStep {:type "fv1" :value []}
              :atmosphereColor
              {:type "c" :value
               (doto (THREE.Color.) (set-nested! {:r 0.0 :b 0.0 :g 0.9}))}
              :maxHeight {:type "fv1" :value [2.00]}
              :waterLevel {:type "fv1" :value [0.50]}}})

(def luminosity-shader
  (let [shader THREE.LuminosityShader]
    {:fragmentShader (.-fragmentShader shader)
     :vertexShader (.-vertexShader shader)
     :uniforms (clone (.-uniforms shader))}))

(def mountain-shader
  {:fragmentShader (sel-shader :#simplex_noise_fs)
   :vertexShader (sel-shader :#simplex_noise_vs)
   :uniforms (merge fog lights shadowmap
                    {:scale {:type "f" :value 20}})})

(def snowy-terrain-shader
  {:fragmentShader (sel-shader :#snow)
   :vertexShader (sel-shader :#vertexShader)
   :uniforms {:time {:type "f" :value 1.0}
              :resolution {:type "v2" :value (THREE.Vector2.)}}})
