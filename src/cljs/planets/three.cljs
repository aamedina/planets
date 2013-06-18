(ns planets.three
  (:require [dommy.core :as dommy]
            [planets.utils :refer [destruct-map set-nested! apply-nested!]])
  (:use-macros [dommy.macros :only [node deftemplate sel1 sel]]))

(def THREE js/THREE)
(def Camera THREE.Camera)
(def PerspectiveCamera THREE.PerspectiveCamera)
(def Scene THREE.Scene)
(def FogExp2 THREE.FogExp2)
(def Renderer THREE.WebGLRenderer)
(def Texture THREE.Texture)
(def ImageUtils THREE.ImageUtils)
(def AdditiveBlending THREE.AdditiveBlending)
(def Mesh THREE.Mesh)
(def Geometry THREE.Geometry)
(def Vertex THREE.Vertex)
(def Vector3 THREE.Vector3)
(def ParticleBasicMaterial THREE.ParticleBasicMaterial)
(def ParticleSystem THREE.ParticleSystem)
(def SphereGeometry THREE.SphereGeometry)
(def CubeGeometry THREE.CubeGeometry)
(def MeshLambertMaterial THREE.MeshLambertMaterial)
(def MeshBasicMaterial THREE.MeshBasicMaterial)
(def PointLight THREE.PointLight)

(defprotocol IRenderable
  (setup [this options])
  (render [this renderables]))

(defprotocol IAnimatable
  (animate [this scene camera animatables])
  (animate! [this options]))

(extend-type Mesh
  IRenderable
  IAnimatable
  (animate! [this options]
    (doto this
      (apply-nested! options))))

(extend-type Renderer
  IRenderable
  (setup [this options]
    (let [{:keys [width height]} options]
      (doto this
        (.setSize width height))))
  (render [this renderables]
    (.render this (first renderables) (second renderables)))
  IAnimatable
  (animate [this scene camera animatables]
    (let [-animate
          (fn -animate []
            (.requestAnimationFrame js/window -animate)
            (.lookAt camera (.-position scene))
            (doseq [animatable animatables]
              (animate! (:animatable animatable) (:animation animatable)))
            (.render this scene camera))]
      (-animate))))

(extend-type PerspectiveCamera
  IRenderable  
  (setup [this options]
    (doto this
      (set-nested! options)))
  IAnimatable
  (animate! [this options]
    (doto this
      (apply-nested! options))))

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

(extend-type ParticleSystem
  IRenderable
  (setup [this options]
    (doto this
      (set-nested! options)))
  IAnimatable
  (animate! [this options]
    (doto this
      (apply-nested! options))))

(extend-type ParticleBasicMaterial
  IRenderable
  (setup [this options]
    (doto this
      (set-nested! options)))
  IAnimatable
  (animate! [this options]
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
                           (repeatedly 3 #(- (* (rand) vertex-range)
                                             (/ vertex-range))))]
                (conj particles particle)))
            [] (range particle-count))
           (clj->js)
           (#(doto this (aset "vertices" %))))]
      this))
  IAnimatable)

(extend-type FogExp2
  IRenderable
  IAnimatable)

(extend-type Vector3
  IRenderable
  (setup [this options])
  IAnimatable)

(extend-type SphereGeometry
  IRenderable)

(defn draw-canvas [scene renderer camera options]
  (let [mouse (atom {:x 0 :y 0})
        keyboard (atom #{})
        fog (FogExp2. 0x000000 0.0007)
        container (-> (sel1 :body)
                      (dommy/set-style! :background-color "#000")
                      (dommy/append! (.-domElement renderer)))
        lambert-material
        (MeshLambertMaterial.
         (clj->js
          {:color 0xffffff
           :map (.loadTexture
                 ImageUtils
                 (rand-nth
                  (reduce
                   (fn [planets planet]
                     (conj planets (str "planets/" planet "_class.png")))
                   [] "abcdefghijklmnopqrstxyz")))
           :blending AdditiveBlending}))
        planet-options (atom {:radius 75 :segmentsWidth 28 :segmentsHeight 28})
        {:keys [radius segmentsWidth segmentsHeight]} @planet-options
        planet-geometry (SphereGeometry. 10.0 56 56)
        planet (Mesh. planet-geometry lambert-material)
        light-options (atom {:position {:x 10 :y 50 :z 130}})
        light-source (PointLight. 0xffffff)
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
                :map (.loadTexture ImageUtils
                                   (rand-nth ["textures/flare2.jpeg"
                                              "textures/flare3.jpeg"
                                              "textures/flare4.jpeg"
                                              "textures/flare5.jpeg"
                                              "textures/flare6.jpeg"]))})))))
         [] [{:color 0xffff88 :size 5}
             {:color 0xeeff88 :size 4}
             {:color 0xddff88 :size 3}
             {:color 0xccff88 :size 2}
             {:color 0xbbff88 :size 1}])
        particle-systems
        (reduce
         (fn [systems particle-material]
           (let [particles
                 (-> (Geometry.)
                     (doto (setup {:particle-count 20000 :vertex-range 2000})))]
             (-> (ParticleSystem. particles particle-material)
                 (setup {:rotation {:x (* (rand) 6)
                                    :y (* (rand) 6)
                                    :z (* (rand) 6)}})
                 (#(conj systems %)))))
         [] particle-materials)
        scene-objects (into [planet light-source camera] particle-systems)]
    (doto light-source (setup @light-options))
    (doto scene (setup {:objects scene-objects}))
    (doto camera (setup {:position {:z 20}}))
    (doto renderer (setup {:width (:width options) :height (:height options)}))
    (animate renderer scene camera
             (reduce
              into
              [{:animatable planet
                :animation {:rotation
                            {:y (partial + 0.001)}}}
               {:animatable camera
                :animation {:position
                            {:x #(+ % (* (- (:x @mouse) %) 0.05))
                             :y #(+ % (* (- (:y @mouse) %) 0.05))}}}]
              [(reduce
                (fn [animations system]
                  (conj animations
                        {:animatable system
                         :animation
                         {:rotation
                          {:y #(* (* (js/Date.) 0.00005)
                                  (if (< (count animations) 4)
                                    (inc (count animations))
                                    (-(inc (count animations)))))}}}))
                [] particle-systems)
               (reduce
                (fn [animations material]
                  (conj animations
                        {:animatable material
                         :animation
                         {:color
                          (fn [clr]
                            (.setHSL clr 0.5 (.-g clr) (.-b clr)))}}))
                [] particle-materials)]))
    
    (defn mouse-observer [mouse]
      (dommy/listen!
       js/document :mousemove
       (fn [e]
         (reset! mouse {:x (- (.-clientX e) (/ js/window.innerWidth 2))
                        :y (- (.-clientY e) (/ js/window.innerHeight 2))})))
      (add-watch mouse nil (fn [s k o m] (js/console.log (:x m) (:y m)))))
    
    (defn keyboard-observer [keyboard]
      (dommy/listen!
       js/document :keydown
       (fn [e]
         (swap! keyboard conj (.-keyIdentifier e))))
      (dommy/listen!
       js/document :keyup
       (fn [e]
         (swap! keyboard disj (.-keyIdentifier e))))
      (add-watch
       keyboard nil (fn [s k o m] (doall (map #(js/console.log %) m)))))
    
    (mouse-observer mouse)
    (keyboard-observer keyboard)
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
  (let [camera-options
        (atom {:fov 75 :width js/window.innerWidth
               :height js/window.innerHeight :near 1 :far 3000})
        {:keys [fov width height near far]} @camera-options
        camera (PerspectiveCamera. fov (/ width height) near far)
        scene (Scene.)
        renderer (Renderer.)]
    (draw-canvas scene renderer camera @camera-options)))
