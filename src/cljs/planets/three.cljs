(ns planets.three
  (:require [dommy.core :as dommy]
            [clojure.browser.repl :as repl]
            [planets.utils :refer [destruct-map set-nested! apply-nested!]]
            [planets.maps :as maps])
  (:use-macros [dommy.macros :only [node deftemplate sel1 sel]]))

(defprotocol IRenderable
  (setup [this options])
  (render [this renderables options]))

(defprotocol IAnimatable
  (animate [this renderables animatables options])
  (animate! [this options delta]))

(extend-type THREE.Mesh
  IRenderable
  (setup [this options]
    (doto this
      (set-nested! options)))
  IAnimatable
  (animate! [this options delta]
    (doto this
      (apply-nested! options))))

(extend-type THREE.EffectComposer
  IRenderable
  (setup [this options]))

(extend-type THREE.WebGLRenderer
  IRenderable
  (setup [this options]    
    (let [{:keys [width height renderables]} options
          render-target (THREE.WebGLRenderTarget.
                         width height
                         (clj->js
                          {:minFilter THREE.LinearFilter
                           :magFilter THREE.LinearFilter
                           :format THREE.RGBFormat :stencilBuffer false}))
          composer (THREE.EffectComposer. this render-target)
          render-model
          (THREE.RenderPass. (:scene renderables) (:camera renderables))
          bleach-effect (let [bleach (THREE.ShaderPass. THREE.BleachBypassShader)
                              uniforms (.-uniforms bleach)]
                          (set-nested! uniforms {:opacity {:value 0.65}})
                          bleach)
          bloom-effect (THREE.BloomPass. 0.6)
          hblur (let [hblur (THREE.ShaderPass. THREE.HorizontalTiltShiftShader)
                      uniforms (.-uniforms hblur)]
                  (set-nested! uniforms {:h {:value (/ 1.5 width)}
                                         :r {:value 0.5}})
                  hblur)
          vblur (let [vblur (THREE.ShaderPass. THREE.VerticalTiltShiftShader)
                      uniforms (.-uniforms vblur)]
                  (set-nested! uniforms {:v {:value (/ 1.5 height)}
                                         :r {:value 0.5}})                  
                  vblur)]
      (aset vblur "renderToScreen" true)
      (set! (.-sortObjects this) false)
      (.addPass composer render-model)
      (.addPass composer bloom-effect)
      (.addPass composer hblur)
      (.addPass composer vblur)
      (doto this
        (.setSize width height)
        (set-nested! {:gammaInput true :gammaOutput true})
        (aset "autoClear" false)
        (aset "alpha" false)
        (aset "composer" composer))))
  (render [this renderables options]
    (let [delta @(:delta options) composer (aget this "composer")]      
      (.render composer delta)))
  IAnimatable
  (animate [this renderables animatables options]
    (.lookAt (:camera renderables) (.-position (:scene renderables)))
    (let [-animate
          (fn -animate []
            (let [delta (reset! (:delta options) (.getDelta (:clock options)))]
              (.requestAnimationFrame js/window -animate)              
              (doseq [animatable animatables]
                (animate! (:animatable animatable)
                          (:animation animatable) delta))
              (render this renderables options)))]
      (-animate))))

(extend-type THREE.WebGLRenderTarget
  IRenderable
  (setup [this options]
    (doto this
      (set-nested! options)))
  IAnimatable
  (animate! [this options delta]
    (.render (:renderer options) (:scene options) (:camera options) this true)))

(extend-type THREE.PerspectiveCamera
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

(extend-type THREE.Scene
  IRenderable
  (setup [this options]
    (let [{:keys [objects params]} options]
      (doseq [obj objects]
        (doto this
          (.add obj)
          (set-nested! params)))))
  IAnimatable
  (animate! [this options delta]
    (doto this
      (apply-nested! options))))

(extend-type THREE.PointLight
  IRenderable
  (setup [this options]
    (doto this
      (set-nested! options))))

(extend-type THREE.DirectionalLight
  IRenderable
  (setup [this options]
    (doto this
      (set-nested! options))))

(extend-type THREE.ParticleSystem
  IRenderable
  (setup [this options]
    (doto this
      (set-nested! options)))
  IAnimatable
  (animate! [this options delta]
    (doto this
      (apply-nested! options))))

(extend-type THREE.ParticleBasicMaterial
  IRenderable
  (setup [this options]
    (doto this
      (set-nested! options)))
  IAnimatable
  (animate! [this options delta]
    (doto this
      (apply-nested! options))))

(extend-type THREE.Geometry
  IRenderable
  (setup [this options]
    (let [{:keys [particle-count vertex-range]} options
          particles
          (->
           (reduce
            (fn [particles p]
              (let [particle
                    (apply #(THREE.Vector3. %1 %2 %3)
                           (repeatedly 3 #(- (* (rand) 2) 1)))]
                (.multiplyScalar particle 6371)
                (conj particles particle)))
            [] (range particle-count))
           (clj->js)
           (#(doto this (aset "vertices" %))))]
      this))
  IAnimatable)

(extend-type THREE.Texture
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

(extend-type THREE.FogExp2
  IRenderable
  IAnimatable)

(extend-type THREE.Vector3
  IRenderable
  (setup [this options])
  IAnimatable)

(extend-type THREE.SphereGeometry
  IRenderable)

(defn mouse-observer [mouse]
  (dommy/listen! (sel1 :canvas) :click
                 #(.webkitRequestPointerLock (sel1 :canvas)))
  (dommy/listen!
   js/document :mousemove
   (fn [e]
     (if (= js/document.webkitPointerLockElement (sel1 :canvas))
       (reset! mouse {:x (.-webkitMovementX e)
                      :y (-(.-webkitMovementY e))
                      :event e})
       (reset! mouse {:x 0 :y 0 :event e})))))

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
  (let [ship (atom {:up 0 :down 0 :left 0 :right 0 :forward 0 :back 0
                    :pitch-down 0 :pitch-up 0 :yaw-left 0 :yaw-right 0
                    :roll-left 0 :roll-right 0
                    :move-vector (THREE.Vector3. 0 0 0)
                    :rotation-vector (THREE.Vector3. 0 0 0)
                    :speed 2000 :roll-speed
                    (/ Math/PI 36) :quaternion (THREE.Quaternion.)})
        clock (THREE.Clock.)
        delta (atom 0)
        mouse (atom {:x 0 :y 0 :drag-to-look false})
        keyboard (atom {:key-code nil :event nil})
        fog (doto (THREE.Fog. 0x050505 2000 4000)
              (apply-nested! {:color (fn [clr] clr)}))
        sovereign (atom nil)        
        load-fn (fn [e] (reset! sovereign (.-content e)))
        loader (doto (THREE.OBJMTLLoader.) (.addEventListener "load" load-fn))
        load (do (.load loader
                        "textures/planets/Sovereign/Sovereign.obj"
                        "textures/planets/Sovereign/Sovereign.mtl"))
        loader-watcher (add-watch sovereign nil
                                  (fn [a b c obj]
                                    (doto obj
                                      (setup {:position {:z (* 5 6371)}}))
                                    (setup scene {:objects [obj]})))        
        container (-> (sel1 :body)
                      (dommy/append! (.-domElement renderer)))
        spectral-nebula
        (.loadTexture THREE.ImageUtils
                      "textures/planets/textures/planets/47tuc.png")
        nebula
        (.loadTexture THREE.ImageUtils
                      "textures/planets/textures/planets/NGC1499.png")
        moon-texture
        (.loadTexture
         THREE.ImageUtils "textures/planets/textures/planets/moon_1024.jpg")
        shader-textures (maps/simplex-noise-terrain renderer camera delta)
        lambert-material
        (THREE.MeshLambertMaterial.
         (clj->js {:color 0xffffff :blending THREE.AdditiveBlending :map nebula}))
        planet-geometry (doto (THREE.SphereGeometry. 6371 100 50)
                          (.computeFaceNormals)
                          (.computeVertexNormals)
                          (.computeTangents))
        moon-material
        (THREE.MeshPhongMaterial. (clj->js {:color 0xffffff :map moon-texture}))
        moon (doto (THREE.Mesh. planet-geometry moon-material)
               (setup {:position {:x (* 6371 5) :y 0 :z 0}
                       :scale {:x 0.23 :y 0.23 :z 0.23}}))
        ;; light-options (atom {:position {:x 1 :y 1 :z 1}})
        light-source (let [light (THREE.DirectionalLight. 0xffffff 1)]
                       (.set (.-position light) 500 2000 0)
                       ;; (doto light
                       ;;   (set-nested! {:shadowMapWidth 2048
                       ;;                 :shadowMapHeight 2048}))
                       light)
        point-light (THREE.PointLight. 0xffffff 1.15)
        hemi-light (let [light (THREE.HemisphereLight. 0xffffff 0xffffff 1)]
                     (.setHSL (.-color light) 0.6 0.75 1)
                     (.setHSL (.-groundColor light) 0.295 0.5 1)
                     (doto light
                       (set-nested! {:position {:x 500 :y 2000 :z 0}} )))
        ambient-light (THREE.AmbientLight. 0x111111)
        particle-materials
        (reduce
         (fn [materials params]
           (conj
            materials
            (doto (THREE.ParticleBasicMaterial.
                   (clj->js
                    (merge
                     params
                     {:blending THREE.AdditiveBlending :transparent true
                      :map (.loadTexture
                            THREE.ImageUtils
                            (rand-nth ["textures/flare5.jpeg"]))})))
              (apply-nested!
               {:color (fn [clr] (.setHSL clr 0.50 (.-g clr) (.-b clr)))}))))
         [] [{:color 0x555555 :size 20} {:color 0x3a3a3a :size 15}
             {:color 0x555555 :size 17} {:color 0x1a1a1a :size 18}
             {:color 0x333333 :size 13}])
        particle-systems
        (reduce
         (fn [systems particle-material]
           (let [particles
                 (-> (THREE.Geometry.)
                     (doto (setup {:particle-count 20000 :vertex-range 2000})))
                 system
                 (doto (THREE.ParticleSystem. particles particle-material)
                   (setup {:rotation {:x (* (rand) 6)
                                      :y (* (rand) 6)
                                      :z (* (rand) 6)}
                           :scale {:x (* 15 (+ 10 (count systems)))
                                   :y (* 15 (+ 10 (count systems)))
                                   :z (* 15 (+ 10 (count systems)))}
                           :matrixAutoUpdate false}))]
             (.updateMatrix system)
             (conj systems system)))
         [] particle-materials)
        ray (THREE.Raycaster.)
        light-val (atom 0)
        light-dir (atom 1)
        anim-delta (atom 0)
        anim-delta-dir (atom -1)
        scene-objects
        (into [moon light-source camera ambient-light hemi-light point-light
               (:terrain-mesh shader-textures)] particle-systems)]    
    (.set (.-position point-light) 0 0 0)
    (mouse-observer mouse)
    (keyboard-observer keyboard)
    (ship-observer ship mouse keyboard)
    (doto scene (setup {:objects scene-objects}))
    ;; (set! (.-fog scene) (THREE.Fog. 0x050505 2048 4096))
    (doto camera
      (setup {:position {:x 0 :y 0 :z (* 6371 1)} :useQuaternion true}))
    (doto renderer (setup {:width (:width options) :height (:height options)
                           :renderables {:scene scene :camera camera}}))
    (animate renderer {:scene scene :camera camera}
             (reduce
              into
              [
               {:animatable (:terrain-mesh shader-textures)
                :animation {:rotation
                            {:y (fn [y-pos]
                                  (+ y-pos (* @delta 0)))}}}
               {:animatable camera
                :animation {:clock clock :ship ship}}]
              []) {:clock clock :delta delta :shader-textures shader-textures
                   :anim-delta anim-delta :light-val light-val
                   :light-dir light-dir :anim-delta-dir anim-delta-dir})
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
  ;; (repl/connect "http://localhost:9000/repl")
  (let [camera-options
        (atom {:fov 45 :near 1 :far 1e7
               :width js/window.innerWidth
               :height js/window.innerHeight})
        {:keys [fov width height near far]} @camera-options
        camera (THREE.PerspectiveCamera. fov (/ width height) near far)
        scene (THREE.Scene.)
        renderer (THREE.WebGLRenderer.)]
    (draw-canvas scene renderer camera @camera-options)))
