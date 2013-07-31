(ns planets.server
  (:gen-class)
  (:require [ring.adapter.jetty :as jetty]
            [ring.util.response :as response]
            [compojure.core :refer [defroutes GET routes]]
            [compojure.route :as route]
            [compojure.handler :refer [site]]
            [hiccup.def :refer [defhtml defelem]]
            [aleph.http :refer [start-http-server]]
            [lamina.core :refer [siphon receive channel]]
            [monger.core :as mg]
            [monger.collection :as mc]
            [hiccup.page :refer [html5 include-css include-js]]
            [ring.middleware.reload :refer [wrap-reload]]
            [planets.shaders :refer [vertex-shader fragment-shader]]
            cljs.repl cljs.repl.browser cemerick.piggieback)
  (:import [com.mongodb MongoOptions ServerAddress]))

(defhtml layout [& body]
  (html5
   [:head
    [:title "Planets"]
    [:style "canvas { width: 100%; height: 100%; }"]]
   [:body
    (fragment-shader {:id "fragment-terrain"} "fragment_terrain.glsl")
    (vertex-shader {:id "vertex-terrain"} "vertex_terrain.glsl")
    (fragment-shader {:id "snow"} "snow.glsl")
    (fragment-shader {:id "planet-heightmap"} "planet_heightmap.glsl")
    (fragment-shader {:id "fragmentShaderNoise"} "fragment_shader_noise.glsl")
    (vertex-shader {:id "vertexShader"} "vertex_shader_noise.glsl")
    (fragment-shader {:id "simplex_noise_fs"} "simplex_noise_fs.glsl")
    (vertex-shader {:id "simplex_noise_vs"} "simplex_noise_vs.glsl")
    (fragment-shader {:id "bake_color_and_specularity_fs"}
                     "bake_color_and_specularity_fs.glsl")
    (vertex-shader {:id "bake_color_and_specularity_vs"}
                   "bake_color_and_specularity_vs.glsl")
    (fragment-shader {:id "planet_composition_fs"} "planet_composition_fs.glsl")
    (vertex-shader {:id "planet_composition_vs"} "planet_composition_vs.glsl")
    (fragment-shader {:id "unlit_alpha_fs"} "unlit_alpha_fs.glsl")
    (vertex-shader {:id "unlit_alpha_vs"} "unlit_alpha_vs.glsl")
    (include-js "js/three.min.js"
                "textures/planets/js/shaders/CopyShader.js"
                "textures/planets/js/shaders/FilmShader.js"
                "textures/planets/js/shaders/BleachBypassShader.js"
                "textures/planets/js/shaders/ConvolutionShader.js"
                "textures/planets/js/shaders/CopyShader.js"
                "textures/planets/js/shaders/HorizontalTiltShiftShader.js"
                "textures/planets/js/shaders/LuminosityShader.js"
                "textures/planets/js/shaders/NormalMapShader.js"
                "textures/planets/js/shaders/VerticalTiltShiftShader.js"
                "textures/planets/js/loaders/OBJLoader.js"                
                "textures/planets/js/loaders/OBJMTLLoader.js"
                "textures/planets/js/loaders/MTLLoader.js"
                "textures/planets/js/math/ColorConverter.js"
                "textures/planets/js/postprocessing/EffectComposer.js"
                "textures/planets/js/postprocessing/RenderPass.js"
                "textures/planets/js/postprocessing/BloomPass.js"
                "textures/planets/js/postprocessing/ShaderPass.js"
                "textures/planets/js/postprocessing/MaskPass.js"
                "textures/planets/js/postprocessing/SavePass.js"
                "textures/planets/js/ShaderTerrain.js"
                "js/cannon/src/Cannon.js"
                "js/cljs.js")
    [:script "planets.three._main()"]]))

(defroutes application-routes
  (GET "/" [] (layout))
  (route/resources "/")
  (route/not-found "404"))

(defn handler []
  (-> #'application-routes
      (site)
      (wrap-reload {:dirs ["src/clj" "src/cljs"]})))

(defn cljs-repl []
  (cemerick.piggieback/cljs-repl
   :repl-env (doto (cljs.repl.browser/repl-env :port 9000)
               cljs.repl/-setup)))

(def broadcast-channel (channel))

(defn websockets-handler [ch handshake]
  (receive
   ch
   (fn [name]
     (siphon broadcast-channel ch))))

(defn -main [& args]
  (mg/connect!)
  (mg/set-db! (mg/get-db "galaxy"))
  (jetty/run-jetty (handler) {:port 8000})
  (start-http-server websockets-handler {:port 8080 :websocket true}))
