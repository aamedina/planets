(ns planets.shaders
  (:require [hiccup.def :refer [defhtml defelem]]
            [ring.util.response :as response]
            [hiccup.page :refer [html5 include-css include-js]]))

(defelem vertex-shader [shader-file]
  [:script {:type "x-shader/x-vertex"}
   (slurp (str (System/getProperty "user.dir")
               "/resources/public/shaders/" shader-file))])
(defelem fragment-shader [shader-file]
  [:script {:type "x-shader/x-fragment"}
   (slurp (str (System/getProperty "user.dir")
               "/resources/public/shaders/" shader-file))])
