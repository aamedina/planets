(defproject planets "0.0.1"
  :description "Refresh to generate a planet!"
  :url "http://github.com/aamedina/planets"
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-1806"]
                 [compojure "1.1.5"]
                 [ring "1.2.0-beta3"]
                 [org.clojure/data.json "0.2.2"]
                 [com.cemerick/piggieback "0.0.4"]
                 [hiccup "1.0.3"]
                 [prismatic/dommy "0.1.1"]]
  :min-lein-version "2.0.0"
  :plugins [[lein-cljsbuild "0.3.2"]
            [lein-ring "0.8.3"]]
  :hooks [leiningen.cljsbuild]
  :profiles {:production
             {:env {:production true}
              :offline true}}
  :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
  :source-paths ["src/clj"]
  :cljsbuild {:builds {:main
                       {:source-paths ["src/cljs"]
                        :compiler {:output-to "resources/public/js/cljs.js"
                                   :optimizations :whitespace
                                   :externs ["resources/public/js/externs.js"]
                                   :pretty-print true}}}}
  :main planets.server  
  :ring {:handler planets.server/app})
