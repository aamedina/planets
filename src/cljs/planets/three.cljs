(ns planets.three
  (:require [dommy.core :as dommy]
            [planets.utils :refer [destruct-map set-nested! apply-nested!]])
  (:use-macros [dommy.macros :only [node deftemplate sel1 sel]]))

(def THREE js/THREE)
(def Camera THREE.Camera)
(def PerspectiveCamera THREE.PerspectiveCamera)
(def Scene THREE.Scene)
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
  (setup [this objects])
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
  (setup [this objects]
    (doseq [obj objects]
      (doto this
        (.add obj)))))

(extend-type PointLight
  IRenderable
  (setup [this options]
    (doto this
      (set-nested! options))))

(extend-type ParticleSystem
  IAnimatable
  (animate! [this options]
    (doto this
      (apply-nested! options))))

(extend-type ParticleBasicMaterial
  IRenderable)

(extend-type Geometry
  IRenderable
  IAnimatable)

(extend-type Vertex
  IRenderable
  IAnimatable)

(extend-type SphereGeometry
  IRenderable)

(defn generate-particles [particle-count]
  (let [particle-material
        (ParticleBasicMaterial.
         (clj->js
          {:color 0xffffff :size (+ (rand 1.5) 1)
           :map (.loadTexture ImageUtils
                              (rand-nth ["textures/flare2.jpeg"
                                         "textures/flare3.jpeg"
                                         "textures/flare4.jpeg"
                                         "textures/flare5.jpeg"
                                         "textures/flare6.jpeg"]))
           :blending AdditiveBlending
           :transparent true}))
        particles
        (->
         (reduce
          (fn [particles p]
            (let [particle
                  (apply #(Vector3. %1 %2 %3)
                         (repeatedly 3 #(- (rand 500) 250)))]
              (conj particles
                    (doto particle
                      (aset "velocity" (Vector3. 0 (-(rand)) 0))
                      (aset "position" (Vector3. 0 0 0))))))
          [] (range particle-count))
         (clj->js)
         (#(doto (Geometry.) (aset "vertices" %))))
        particle-system
        (ParticleSystem. particles particle-material)]
    (doto particle-system
      (aset "sortParticles" true))))

(defn ^:export -main [& args]
  (let [camera-options
        (atom {:fov 75 :width js/window.innerWidth
               :height js/window.innerHeight :near 0.1 :far 1000})
        {:keys [fov width height near far]} @camera-options
        camera (PerspectiveCamera. fov (/ width height) near far)
        scene (Scene.)   
        renderer (Renderer.)
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
        planet-options (atom {:radius 1.5 :segmentsWidth 56 :segmentsHeight 56})
        {:keys [radius segmentsWidth segmentsHeight]} @planet-options
        planet-geometry (SphereGeometry. 1.5 56 56)
        planet (Mesh. planet-geometry lambert-material)
        light-options (atom {:position {:x 10 :y 50 :z 130}})
        light-source (PointLight. 0xffffff)
        particle-system (generate-particles 1800)]
    (doto light-source (setup @light-options))
    (doto scene (setup [particle-system planet light-source camera]))
    (doto camera (setup {:position {:z 3}}))
    (doto renderer (setup {:width width :height height}))
    (animate renderer scene camera
             [{:animatable planet
               :animation {:rotation {:y (partial + 0.001)}}}])))
