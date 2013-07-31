(defproject planets "0.0.1"
  :description "Refresh to generate a planet!"
  :url "http://github.com/aamedina/planets"
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-1835"]
                 [com.google.javascript/closure-compiler "r2180"]
                 [org.clojure/google-closure-library "0.0-2029-2"]
                 [org.clojure/data.json "0.2.2"]
                 [ring "1.2.0-beta3"]
                 [compojure "1.1.5"]                 
                 [cljs-ajax "0.1.3"]
                 [aleph "0.3.0-rc1"]          
                 [com.novemberain/monger "1.6.0-beta2"]
                 [com.cemerick/piggieback "0.0.5"]
                 [hiccup "1.0.3"]
                 [gloss "0.2.2-beta4"]
                 [byte-streams "0.1.0"]
                 [vertigo "0.1.0-SNAPSHOT"]
                 [net.mikera/clisk "0.7.0"]
                 [org.jocl/jocl "0.1.9"]
                 [org.clojure/clojure-contrib "1.2.0"]
                 [net.mikera/imagez "0.0.2"]
                 [com.nativelibs4java/javacl "1.0.0-RC3"]
                 [prismatic/dommy "0.1.1"]
                 [org.codehaus.jsr166-mirror/jsr166y "1.7.0"]]
  :min-lein-version "2.0.0"
  :plugins [[lein-cljsbuild "0.3.2"] [lein-ring "0.8.3"]]
  :hooks [leiningen.cljsbuild]
  :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
  :profiles {:production
             {:env {:production true}
              :offline true}}
  :source-paths ["src/clj"]
  :cljsbuild {:builds [{:source-paths ["src/cljs"]
                        :compiler {:output-to "resources/public/js/cljs.js"
                                   :optimizations :whitespace
                                   :pretty-print true}}]}
  :main planets.server
  :resource-paths ["resources" "jars/*"]
  :jvm-opts ["-Xmx6g"]
  :ring {:handler planets.server/handler})
