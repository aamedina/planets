(ns planets.utils
  (:require [clojure.walk :refer [stringify-keys]]))

(defn destruct-map [m]
  (->> (stringify-keys m)
       (map (fn [nm]
              (if (map? (val nm))
                (->> (map #(hash-map (key nm) %) (val nm))
                     (map vec)
                     (reduce into []))
                nm)))
       (map (fn [kv] (into [] kv)))
       (reduce into [])
       (map flatten)
       (map #(map (fn [v] (if (map? v) (reduce into [] v) v)) %))
       (map flatten)
       (map vec)
       doall))

(defn set-nested! [obj options]
  (let [params (destruct-map options)]
    (doseq [param params]
      (if (= (count param) 2)
        (aset obj (first param) (second param))
        (aset (apply aget (into [obj] (drop-last 2 param)))
              (first (take-last 2 param))
              (last param))))))

(defn apply-nested! [obj options]
  (let [params (destruct-map options)]
    (doseq [param params]
      (if (= (count param) 2)
        (aset obj (first param) (apply (second param) (aget obj (first param))))
        (aset (apply aget (into [obj] (drop-last 2 param)))
              (first (take-last 2 param))
              (apply (last param)
                     [(apply aget (into [obj] (drop-last param)))]))))))
