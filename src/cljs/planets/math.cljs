(ns planets.math)

(defn integrate [f a b]
  (let [small-dx 0.0001
        integrate-gen (fn [f x b dx sum]
                        (if (> x b)
                          sum
                          (recur f (+ x dx) b dx (+ sum (* (f x) dx)))))]
    (integrate-gen f a b small-dx 0)))

(defn derivative
  ([f & {:keys [dx] :or {dx 0.0001}}]
     (fn [x] (/ (- (f (+ x dx)) (f x)) dx))))

