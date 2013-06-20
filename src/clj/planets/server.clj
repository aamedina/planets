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
            [planets.shaders :refer [fragment-shader vertex-shader]]
            cljs.repl cljs.repl.browser cemerick.piggieback)
  (:import [com.mongodb  MongoOptions ServerAddress]))

(defhtml layout [& body]
  (html5
   [:head
    [:title "Planets"]
    [:style "canvas { width: 100%; height: 100%; }"]
    (include-js "js/three.min.js"
                "textures/planets/js/shaders/CopyShader.js"
                "textures/planets/js/shaders/FilmShader.js"
                "textures/planets/js/loaders/OBJLoader.js"
                "textures/planets/js/postprocessing/EffectComposer.js"
                "textures/planets/js/postprocessing/ShaderPass.js"
                "textures/planets/js/postprocessing/MaskPass.js"
                "textures/planets/js/postprocessing/RenderPass.js"
                "textures/planets/js/postprocessing/FilmPass.js")
    (include-js "js/cljs.js")]
   [:body
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
