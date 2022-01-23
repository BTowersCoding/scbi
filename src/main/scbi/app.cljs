(ns scbi.app
  (:require [reagent.dom :as rdom]
            [scbi.img.factories :as factories]
            [scbi.img.stores :as stores]))

(defn square-root
  [x]
  (.sqrt js/Math x))

(defn app []
  [:div#app
    [:svg {:width 300 :height 200}
            stores/nails]])

(defn render []
  (rdom/render [app]
            (.getElementById js/document "root")))

(defn ^:dev/after-load start []
  (render)
  (js/console.log "start"))

(defn ^:export init []
  (js/console.log "init")
  (start))

(defn ^:dev/before-load stop []
  (js/console.log "stop"))
