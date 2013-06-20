(ns planets.three
  (:require [dommy.core :as dommy]
            [clojure.browser.repl :as repl]
            [planets.utils :refer [destruct-map set-nested! apply-nested!]])
  (:use-macros [dommy.macros :only [node deftemplate sel1 sel]]))

(def THREE js/THREE)
(def Camera THREE.Camera)
(def OBJLoader THREE.OBJLoader)
(def Color THREE.Color)
(def Raycaster THREE.Raycaster)
(def Quaternion THREE.Quaternion)
(def PerspectiveCamera THREE.PerspectiveCamera)
(def Scene THREE.Scene)
(def FogExp2 THREE.FogExp2)
(def Renderer THREE.WebGLRenderer)
(def Texture THREE.Texture)
(def ImageUtils THREE.ImageUtils)
(def AdditiveBlending THREE.AdditiveBlending)
(def RenderPass THREE.RenderPass)
(def FilmPass THREE.FilmPass)
(def Mesh THREE.Mesh)
(def ShaderLib THREE.ShaderLib)
(def Geometry THREE.Geometry)
(def Vertex THREE.Vertex)
(def Vector3 THREE.Vector3)
(def EffectComposer THREE.EffectComposer)
(def ParticleBasicMaterial THREE.ParticleBasicMaterial)
(def MeshPhongMaterial THREE.MeshPhongMaterial)
(def ParticleSystem THREE.ParticleSystem)
(def SphereGeometry THREE.SphereGeometry)
(def CubeGeometry THREE.CubeGeometry)
(def MeshLambertMaterial THREE.MeshLambertMaterial)
(def MeshBasicMaterial THREE.MeshBasicMaterial)
(def ShaderMaterial THREE.ShaderMaterial)
(def Clock THREE.Clock)
(def PointLight THREE.PointLight)
(def DirectionalLight THREE.DirectionalLight)
(def AmbientLight THREE.AmbientLight)
(def UniformsUtils THREE.UniformsUtils)

(defprotocol IRenderable
  (setup [this options])
  (render [this renderables options]))

(defprotocol IAnimatable
  (animate [this renderables animatables options])
  (animate! [this options delta]))

(extend-type Mesh
  IRenderable
  (setup [this options]
    (doto this
      (set-nested! options)))
  IAnimatable
  (animate! [this options delta]
    (doto this
      (apply-nested! options))))

(extend-type Renderer
  IRenderable
  (setup [this options]
    (let [{:keys [width height renderables]} options
          render-model (RenderPass. (:scene renderables) (:camera renderables))
          film-effect (FilmPass. 0.35 0.75 2048 false)
          composer (EffectComposer. this)]
      (aset film-effect "renderToScreen" true)
      (.addPass composer render-model)
      (.addPass composer film-effect)
      (doto this
        (.setSize width height)
        (aset "sortObjects" false)
        (aset "autoClear" false)
        (aset "clearAlpha" 1)
        (aset "antialias" true)
        (aset "composer" composer))))
  (render [this renderables options]
    (let [delta @(:delta options) composer (aget this "composer")]
      (.render composer delta)))
  IAnimatable
  (animate [this renderables animatables options]
    (let [-animate
          (fn -animate []
            (let [delta (reset! (:delta options) (.getDelta (:clock options)))]
              (.requestAnimationFrame js/window -animate)
              (.lookAt (:camera renderables) (.-position (:scene renderables)))
              (doseq [animatable animatables]
                (animate! (:animatable animatable)
                          (:animation animatable) delta))
              (render this renderables options)))]
      (-animate))))

(extend-type PerspectiveCamera
  IRenderable  
  (setup [this options]
    (doto this
      (set-nested! options)))
  IAnimatable
  (animate! [this options delta]
    (let [ship (:ship options)
          quaternion (:quaternion @ship)
          move-mult (* (:speed @ship) delta)
          rot-mult (* (:roll-speed @ship) delta)]
      (doto quaternion
        (.set (* (.-x (:rotation-vector @ship)) rot-mult)
              (* (.-y (:rotation-vector @ship)) rot-mult)
              (* (.-z (:rotation-vector @ship)) rot-mult) 1)
        (.normalize))
      (.multiply (.-quaternion this) quaternion)
      (.setEulerFromQuaternion
       (.-rotation this) (.-quaternion this) (.-eulerOrder this))
      (doto this
        (.translateX (* (.-x (:move-vector @ship)) move-mult))
        (.translateY (* (.-y (:move-vector @ship)) move-mult))
        (.translateZ (* (.-z (:move-vector @ship)) move-mult))))))

(extend-type Scene
  IRenderable
  (setup [this options]
    (let [{:keys [objects]} options]
      (doseq [obj objects]
        (doto this
          (.add obj))))))

(extend-type PointLight
  IRenderable
  (setup [this options]
    (doto this
      (set-nested! options))))

(extend-type DirectionalLight
  IRenderable
  (setup [this options]
    (doto this
      (set-nested! options))))

(extend-type ParticleSystem
  IRenderable
  (setup [this options]
    (doto this
      (set-nested! options)))
  IAnimatable
  (animate! [this options delta]
    (doto this
      (apply-nested! options))))

(extend-type ParticleBasicMaterial
  IRenderable
  (setup [this options]
    (doto this
      (set-nested! options)))
  IAnimatable
  (animate! [this options delta]
    (doto this
      (apply-nested! options))))

(extend-type Geometry
  IRenderable
  (setup [this options]
    (let [{:keys [particle-count vertex-range]} options
          particles
          (->
           (reduce
            (fn [particles p]
              (let [particle
                    (apply #(Vector3. %1 %2 %3)
                           (repeatedly 3 #(- (* (rand) 2) 1)))]
                (.multiplyScalar particle 6371)
                (conj particles particle)))
            [] (range particle-count))
           (clj->js)
           (#(doto this (aset "vertices" %))))]
      this))
  IAnimatable)

(extend-type Texture
  IRenderable
  (setup [this options]
    (doto this
      (set-nested! options)))
  IAnimatable)

(extend-type object
  IRenderable
  (setup [this options]
    (doto this
      (set-nested! options))))

(extend-type FogExp2
  IRenderable
  IAnimatable)

(extend-type Vector3
  IRenderable
  (setup [this options])
  IAnimatable)

(extend-type SphereGeometry
  IRenderable)

(defn mouse-observer [mouse]
  (dommy/listen! (sel1 :canvas) :click
                 #(.webkitRequestPointerLock (sel1 :canvas)))
  (dommy/listen!
   js/document :mousemove
   (fn [e]
     (reset! mouse {:x (.-webkitMovementX e)
                    :y (.-webkitMovementY e)
                    :event e}))))

(defn ship-observer [ship mouse keyboard]
  (add-watch
   mouse nil
   (fn [s k o m]
     (let [e (:event m)]       
       (swap! ship update-in [:yaw-right] (fn [v] (:x m)))
       (swap! ship update-in [:pitch-up] (fn [v] (:y m))))))
  (add-watch
   keyboard nil
   (fn [s k o m]
     (let [key-map
           {87 [:forward] 83 [:back] 65 [:left] 68 [:right] 82 [:up]
            70 [:down] 40 [:pitch-up] 38 [:pitch-down] 37 [:yaw-left]
            39 [:yaw-right] 81 [:roll-left] 69 [:roll-right]}
           new-val (if (= :keydown (:event m)) 1 0) key-code (:key m)]
       (swap! ship update-in (get key-map key-code) (fn [old-val] new-val)))))
  (add-watch
   ship nil
   (fn [s k o ship-state]
     (let [move-vector (:move-vector ship-state)
           rotation-vector (:rotation-vector ship-state)]
       (.set move-vector
             (+ (-(:left ship-state)) (:right ship-state))
             (+ (-(:down ship-state)) (:up ship-state))
             (+ (-(:forward ship-state)) (:back ship-state)))
       (.set rotation-vector
             (+ (-(:pitch-down ship-state)) (:pitch-up ship-state))
             (+ (-(:yaw-right ship-state)) (:yaw-left ship-state))
             (+ (-(:roll-right ship-state)) (:roll-left ship-state)))))))

(defn keyboard-observer [keyboard]
  (dommy/listen!
   js/document :keydown
   (fn [e]
     (.preventDefault e)
     (reset! keyboard {:key (.-keyCode e) :event :keydown})))
  (dommy/listen!
   js/document :keyup
   (fn [e]
     (.preventDefault e)
     (reset! keyboard {:key (.-keyCode e) :event :keyup}))))

(defn random-planet []
  (rand-nth
   (reduce
    (fn [planets planet]
      (conj planets (str "planets/" planet "_class.png")))
    [] "abcdefghijklmnopqrstxyz")))

(defn draw-canvas [scene renderer camera options]
  (let [galaxy-options {:radius 6371 :tilt 0.41 :rotationSpeed 0.02}
        ship (atom {:up 0 :down 0 :left 0 :right 0 :forward 0 :back 0
                    :pitch-down 0 :pitch-up 0 :yaw-left 0 :yaw-right 0
                    :roll-left 0 :roll-right 0 :move-vector (Vector3. 0 0 0)
                    :rotation-vector (Vector3. 0 0 0) :speed 1000 :roll-speed
                    (/ Math/PI 36) :quaternion (Quaternion.)})
        mouse (atom {:x 0 :y 0 :drag-to-look false})
        keyboard (atom {:key-code nil :event nil})
        fog (FogExp2. 0x000000 0.00000025)
        loader (OBJLoader.)
        sovereign (.load loader "textures/planets/Sovereign/Sovereign.obj"
                         (fn [obj]
                           (setup
                            scene
                            {:objects [(doto obj
                                         
                                         (setup
                                          {:position {:x (* 3 6371)}}))]})))
        container (-> (sel1 :body)
                      (dommy/set-style! :background-color "#000")
                      (dommy/append! (.-domElement renderer)))
        sun-texture
        (.loadTexture
         ImageUtils "textures/planets/sun.png")
        planet-texture
        (.loadTexture
         ImageUtils "textures/planets/textures/planets/earth_atmos_2048.jpg")
        clouds-texture
        (.loadTexture
         ImageUtils "textures/planets/textures/planets/earth_clouds_1024.png")
        normal-texture
        (.loadTexture
         ImageUtils "textures/planets/textures/planets/earth_normal_2048.jpg")
        specular-texture
        (.loadTexture
         ImageUtils "textures/planets/textures/planets/earth_specular_2048.jpg")
        moon-texture
        (.loadTexture
         ImageUtils "textures/planets/textures/planets/moon_1024.jpg")
        shader (aget ShaderLib "normalmap")
        uniforms (let [uniforms
                       (doto (.clone UniformsUtils (.-uniforms shader))
                         (set-nested!
                          {:tNormal {:value normal-texture}
                           :tDiffuse {:value planet-texture}
                           :tSpecular {:value specular-texture}
                           :enableAO {:value false}
                           :enableDiffuse {:value true}
                           :enableSpecular {:value true}
                           :uDiffuseColor {:value (Color. 0xffffff)}
                           :uSpecularColor {:value (Color. 0x333333)}
                           :uAmbientColor {:value (Color. 0x000000)}
                           :uShininess {:value 15}}))]
                   (.set (.-value (aget uniforms "uNormalScale")) 0.85 0.85)
                   uniforms)
        material-normal-map
        (ShaderMaterial.
         (clj->js {:fragmentShader (.-fragmentShader shader)
                   :vertexShader (.-vertexShader shader)
                   :uniforms uniforms :lights true :fog true}))
        lambert-material
        (MeshLambertMaterial.
         (clj->js {:color 0xffffff :blending AdditiveBlending
                   :map planet-texture}))
        planet-geometry (doto (SphereGeometry. 6371 100 50)
                          (.computeTangents))
        planet (doto (Mesh. planet-geometry material-normal-map)
                 (setup {:rotation {:y 0 :z 0.41}}))
        clouds-material
        (MeshLambertMaterial.
         (clj->js {:color 0xffffff :map clouds-texture :transparent true}))
        clouds (doto (Mesh. planet-geometry clouds-material)
                 (setup {:rotation {:z 0.41}
                         :scale {:x 1.005 :y 1.005 :z 1.005}}))
        moon-material
        (MeshPhongMaterial. (clj->js {:color 0xffffff :map moon-texture}))
        moon (doto (Mesh. planet-geometry moon-material)
               (setup {:position {:x (* 6371 5) :y 0 :z 0}
                       :scale {:x 0.23 :y 0.23 :z 0.23}}))
        light-options (atom {:position {:x -1 :y 0 :z 1}
                             :shadowMapWidth 1024
                             :shadowMapHeight 1024
                             :shadowMapShadow 0.95})
        light-source (let [light (DirectionalLight. 0xffffff)]
                       (.normalize (.set (.-position light) -1 0 1)) light)
        ambient-light (AmbientLight. 0x000000)
        clock (Clock.)
        delta (atom 0)
        particle-materials
        (reduce
         (fn [materials params]
           (conj
            materials
            (ParticleBasicMaterial.
             (clj->js
              (merge
               params
               {:blending AdditiveBlending :transparent true
                :map (.loadTexture ImageUtils (rand-nth
                                               ["textures/flare5.jpeg"]))})))))
         [] [{:color 0x555555 :size 8} {:color 0x3a3a3a :size 6}
             {:color 0x555555 :size 5} {:color 0x1a1a1a :size 4}
             {:color 0x333333 :size 3}])
        particle-systems
        (reduce
         (fn [systems particle-material]
           (let [particles
                 (-> (Geometry.)
                     (doto (setup {:particle-count 20000 :vertex-range 2000})))
                 system
                 (doto (ParticleSystem. particles particle-material)
                   (setup {:rotation {:x (* (rand) 6)
                                      :y (* (rand) 6)
                                      :z (* (rand) 6)}
                           :scale {:x (* 10 (+ 10 (count systems)))
                                   :y (* 10 (+ 10 (count systems)))
                                   :z (* 10 (+ 10 (count systems)))}
                           :matrixAutoUpdate false}))]
             (.updateMatrix system)
             (conj systems system)))
         [] particle-materials)
        ray (Raycaster.)
        scene-objects
        (into [planet clouds moon light-source camera ambient-light sovereign]
              particle-systems)]
    (doto light-source (setup @light-options))
    (doto scene (setup {:objects scene-objects}))
    (js/console.log scene)
    (doto camera (setup {:position {:z (* 5 6371)} :useQuaternion true}))
    (doto renderer (setup {:width (:width options) :height (:height options)
                           :renderables {:scene scene :camera camera}}))
    (animate renderer {:scene scene :camera camera}
             (reduce
              into
              [{:animatable planet
                 :animation {:rotation
                            {:y (fn [y-pos]
                                  (+ y-pos (* @delta 0.02)))}}}
               {:animatable clouds
                :animation {:rotation
                            {:y (fn [y-pos]
                                   (+ y-pos (* 1.25 @delta 0.02)))}}}
               {:animatable camera
                :animation {:clock clock :ship ship}}]
              [(reduce
                (fn [animations material]
                  (conj animations
                        {:animatable material
                         :animation
                         {:color
                          (fn [clr]
                            (.setHSL clr 0.5 (.-g clr) (.-b clr)))}}))
                [] particle-materials)]) {:clock clock :delta delta})
    (mouse-observer mouse)    
    (keyboard-observer keyboard)
    (ship-observer ship mouse keyboard)    
    (defn redraw-canvas []
      (dommy/remove! (sel1 :canvas))
      (doseq [obj (.-__objects scene)]
        (.remove scene obj)
        (map #(.dispose %) [(.-material obj)
                            (.-texture (.-material obj))
                            (.-geometry obj)]))
      (doseq [obj (.-children scene)]
        (.remove scene obj))
      (draw-canvas scene renderer camera options))))

(defn ^:export -main [& args]
  (repl/connect "http://localhost:9000/repl")
  (let [camera-options
        (atom {:fov 45 :width js/window.innerWidth
               :height js/window.innerHeight :near 50 :far 1e7})
        {:keys [fov width height near far]} @camera-options
        camera (PerspectiveCamera. fov (/ width height) near far)
        scene (Scene.)
        renderer (Renderer.)]
    (draw-canvas scene renderer camera @camera-options)))
