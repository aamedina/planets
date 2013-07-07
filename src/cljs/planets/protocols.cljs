(ns planets.prototypes)

(defprotocol IRenderable
  (setup [this options])
  (render [this renderables options]))

(defprotocol IAnimatable
  (animate [this renderables animatables options])
  (animate! [this options delta]))
