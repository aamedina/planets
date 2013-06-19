(defproject planets "0.0.1"
  :description "Refresh to generate a planet!"
  :url "http://github.com/aamedina/planets"
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-1806"]
                 [com.google.javascript/closure-compiler "r1592"]
                 [org.clojure/google-closure-library "0.0-790"]
                 [com.google.javascript/closure-compiler "r2388"]
                 [org.clojure/google-closure-library "0.0-2029-2"]
                 [compojure "1.1.5"]
                 [ring "1.2.0-beta3"]
                 [cljs-ajax "0.1.3"]
                 [aleph "0.3.0-rc1"]
                 [org.clojure/data.json "0.2.2"]
                 [com.novemberain/monger "1.6.0-beta2"]
                 [hiccup "1.0.3"]
                 [prismatic/dommy "0.1.1"]]
  :min-lein-version "2.0.0"
  :plugins [[lein-cljsbuild "0.3.2"] [lein-ring "0.8.3"]]
  :hooks [leiningen.cljsbuild]
  :profiles {:production
             {:env {:production true}
              :offline true}}
  :source-paths ["src/clj"]
  :cljsbuild {:builds [{:source-paths ["src/cljs"]
                        :compiler {:output-to "resources/public/js/cljs.js"
                                   ;; :externs ["resources/public/js/externs.js"]
                                   ;; :optimizations :advanced
                                   :optimizations :whitespace
                                   :pretty-print true}}]}
  :main planets.server
  :ring {:handler planets.server/app})
