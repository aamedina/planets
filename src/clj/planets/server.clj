(ns planets.server
  (:require [ring.adapter.jetty :as jetty]
            [ring.util.response :as response]
            [compojure.core :refer [defroutes GET routes]]
            [compojure.route :as route]
            [compojure.handler :refer [site]]
            [hiccup.def :refer [defhtml defelem]]
            [hiccup.page :refer [html5 include-css include-js]]
            [ring.middleware.reload :refer [wrap-reload]])
  (:gen-class))

(defhtml layout [& body]
  (html5
   [:head
    [:title "Reactive"]
    [:style "canvas { width: 100%; height: 100%; }"]
    (include-js "js/three.min.js")
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

(defn -main [& args]
  (jetty/run-jetty
   (handler)
   {:port (Integer/parseInt (get (System/getenv) "PORT" "8000"))}))
