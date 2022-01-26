(ns scbi.app
  (:require 
   [reagent.core :as r]
   [reagent.dom :as rdom]
   [scbi.items :as items]
   [scbi.img.factories :as factories]
   [scbi.img.stores :as stores]
   [scbi.img.util :as util]))

(defn square-root
  [x]
  (.sqrt js/Math x))

(defonce hover (r/atom nil))  

(defonce upgrades (r/atom []))

(defonce building (r/atom 0))

(defonce inventory 
  (r/atom (zipmap
           (for [x (range 7)
                 y (range 11)] [x y])
           (repeat 0))))

(defn building-selector []
  (let [hovered (r/atom nil)]
    (fn []
      [:div
       [:span
        [:svg {:width     30
               :view-box  "0 -0.5 10 11"
               :transform (str "translate(0,10)" (when-not (= @hovered :left) "scale(0.7)"))
               :cursor    "pointer"
               :on-mouse-over #(reset! hovered :left)
               :on-mouse-out #(reset! hovered nil)
               :on-click  #(if (= 0 @building)
                             (reset! building (dec (count @upgrades)))
                             (swap! building dec))}
         [:path {:stroke "#000000"
                 :d      "M4 0h1M3 1h2M2 2h1M4 2h3M1 3h1M0 4h1M1 5h1M2 6h1M4 6h3M3 7h2M4 8h1"}]
         [:path {:stroke "#f8f800"
                 :d      "M3 2h1M2 3h5M1 4h6M2 5h5M3 6h1"}]]
    (str "Building: " @building)
        [:svg {:width         30
               :view-box      "0 -0.5 10 11"
               :transform     (str "translate (0,5),rotate (180)" (when-not (= @hovered :right) "scale(0.7)"))
               :cursor        "pointer"
               :on-mouse-over #(reset! hovered :right)
               :on-mouse-out  #(reset! hovered nil)
               :on-click      #(if (= (dec (count @upgrades)) @building)
                                 (reset! building 0)
                                 (swap! building inc))}
         [:path {:stroke "#000000"
                 :d      "M4 0h1M3 1h2M2 2h1M4 2h3M1 3h1M0 4h1M1 5h1M2 6h1M4 6h3M3 7h2M4 8h1"}]
         [:path {:stroke "#f8f800"
                 :d      "M3 2h1M2 3h5M1 4h6M2 5h5M3 6h1"}]]
    
    ;; Add building
    [:svg {:width   50
           :viewBox "-1 -1 100 50"}
     [:g
      [:circle {:cx            25
                :cy            25
                :r             (if (= @hovered :plus) 22 20)
                :fill          "green"
                :stroke        (when (= @hovered :plus) "black")
                :stroke-width  4
                :on-mouse-over #(reset! hovered :plus)
                :on-mouse-out  #(reset! hovered nil)
                :on-click      #(swap! upgrades conj [])}]
      [:path {:fill           "white" 
              :pointer-events "none"
              :d              "M19.5 13.25 19.5 19.5 13.25 19.5 13.25 28.875 13.25 28.875 19.5 28.875 19.5 35.125 28.875 35.125 28.875 28.875 35.125 28.875 35.125 19.5 28.875 19.5 28.875 13.25Z"}]
     ;; remove building
      [:circle {:cx            75
                :cy            25
                :r             (if (= @hovered :minus) 22 20)
                :fill          "red"
                :stroke (when (= @hovered :minus) "black")
                :stroke-width 4
                :on-mouse-over #(reset! hovered :minus)
                :on-mouse-out  #(reset! hovered nil)
                :on-click      #(swap! upgrades conj {})}]
      [:line {:stroke "white"
              :stroke-width 10 :pointer-events "none"
              :x1 65 :y1 25
              :x2 85 :y2 25}]]]]
       [:br]
       [:div
        [:textarea
         {:rows      10
          :cols      30
          :value   (str @upgrades)
          :read-only true}]]])))

(defn app []
  [:div#app
   [:div#grid
    [:svg {:width   "60%" :viewBox "-1 -1 702 1102"}
     (into [:g]
           (for [x (range 7) y (range 11)]
             [:rect {:x      (* x 95) :y (* y 95)
                     :width  95 :height 95
                     :fill   "none" :stroke "black"}]))
     (into [:g {:transform "translate(10,10)"}] factories/metal)
     (into [:g {:transform "translate(105,10)"}] factories/wood)
     (into [:g {:transform "translate(200,10)"}] factories/plastic)
     (into [:g {:transform "translate(295,10)"}] factories/seeds)
     (into [:g {:transform "translate(390,10)"}] factories/minerals)
     (into [:g {:transform "translate(485,10)"}] factories/chemicals)
     (into [:g {:transform "translate(10,105)"}] factories/textiles)
     (into [:g {:transform "translate(105,105)"}] factories/sugar-and-spices)
     (into [:g {:transform "translate(200,105)"}] factories/glass)
     (into [:g {:transform "translate(295,105)"}] factories/animal-feed)
     (into [:g {:transform "translate(390,105)"}] factories/ic)
     (into [:g {:transform "translate(10,205)"}] stores/nails)
     (into [:g {:transform "translate(105,205)"}] stores/planks)
     (into [:g {:transform "translate(200,205)"}] stores/bricks)
     (into [:g {:transform "translate(295,205)"}] stores/cement)
     (into [:g {:transform "translate(390,205)"}] stores/glue)
     (into [:g {:transform "translate(485,205)"}] stores/paint)
     (into [:g {:transform "translate(10,295)"}]  stores/hammer)
     (into [:g {:transform "translate(105,295)"}] stores/measuring-tape)
     (into [:g {:transform "translate(200,295)"}] stores/shovel)
     (into [:g {:transform "translate(295,295)"}] stores/cooking-utensils)
     (into [:g {:transform "translate(390,295)"}] stores/ladder)
     (into [:g {:transform "translate(485,295)"}] stores/drill)
     (into [:g {:transform "translate(10,395)"}]  stores/vegetables)
     (into [:g {:transform "translate(105,395)"}] stores/flour-bag)
     (into [:g {:transform "translate(200,395)"}] stores/fruit-and-berries)
     (into [:g {:transform "translate(295,395)"}] stores/cream)
     (into [:g {:transform "translate(390,395)"}] stores/corn)
     (into [:g {:transform "translate(485,395)"}] stores/cheese)
     (into [:g {:transform "translate(580,395)"}] stores/beef)
     (into [:g {:transform "translate(10,490)"}]  stores/chair)
     (into [:g {:transform "translate(105,490)"}] stores/tables)
     (into [:g {:transform "translate(200,490)"}] stores/home-textiles)
     (into [:g {:transform "translate(295,490)"}] stores/cupboard)
     (into [:g {:transform "translate(390,490)"}] stores/couch)
     (into [:g {:transform "translate(10,585)"}]  stores/grass)
     (into [:g {:transform "translate(105,585)"}] stores/tree-saplings)
     (into [:g {:transform "translate(200,585)"}] stores/garden-furniture)
     (into [:g {:transform "translate(295,585)"}] stores/fire-pit)
     (into [:g {:transform "translate(390,585)"}] stores/lawn-mower)
     (into [:g {:transform "translate(485,585)"}] stores/garden-gnomes)
     (into [:g {:transform "translate(10,680)"}] stores/donuts)
     (into [:g {:transform "translate(105,680)"}] stores/green-smoothie)
     (into [:g {:transform "translate(200,680)"}] stores/bread-roll)
     (into [:g {:transform "translate(295,680)"}] stores/cherry-cheesecake)
     (into [:g {:transform "translate(390,680)"}] stores/frozen-yogurt)
     (into [:g {:transform "translate(485,680)"}] stores/coffee)
     (into [:g {:transform "translate(10,770)"}] stores/cap)
     (into [:g {:transform "translate(105,770)"}] stores/shoes)
     (into [:g {:transform "translate(200,770)"}] stores/watch)
     (into [:g {:transform "translate(295,770)"}] stores/business-suits)
     (into [:g {:transform "translate(390,770)"}] stores/backpack)
     (into [:g {:transform "translate(10,865)"}] stores/ice-cream-sandwich)
     (into [:g {:transform "translate(105,865)"}] stores/pizza)
     (into [:g {:transform "translate(200,865)"}] stores/burgers)
     (into [:g {:transform "translate(295,865)"}] stores/cheese-fries)
     (into [:g {:transform "translate(390,865)"}] stores/lemonade-bottle)
     (into [:g {:transform "translate(485,865)"}] stores/popcorn)
     (into [:g {:transform "translate(10,955)"}] stores/bbq-grill)
     (into [:g {:transform "translate(105,955)"}] stores/refrigerator)
     (into [:g {:transform "translate(200,955)"}] stores/lighting-system)
     (into [:g {:transform "translate(295,955)"}] stores/tv)
     (into [:g {:transform "translate(390,955)"}] stores/microwave)

     ;mouse targets --up
     (into [:g]
           (for [x (range 7) y (range 11)]
             [:rect {:x      (* x 95) :y      (* y 95)
                     :width  95 :height 47.5
                     :visibility "hidden"
                     :pointer-events "all"
                     :on-mouse-over #(reset! hover [x y :up])
                     :on-mouse-out #(reset! hover nil)
                     :on-click (fn [] (swap! upgrades assoc @building (conj (get @upgrades @building) [x y :up])))}]))
     
      ;mouse targets --down
     (into [:g]
           (for [x (range 7)  y (range 11)]
             [:rect {:x              (* x 95) :y              (+ 47.5 (* y 95))
                     :width          95  :height         47.5
                     :visibility     "hidden"
                     :pointer-events "all"
                     :on-mouse-over  #(reset! hover [x y :down])
                     :on-mouse-out #(reset! hover nil)
                     :on-click (fn [] (swap! upgrades assoc @building (conj (get @upgrades @building) [x y :down])))}]))
     
     ;up arrows
 (into [:g]
       (for [x (range 7)  y (range 11)
             :when (= @hover [x y :up])]
        [:path.fade {:d "M0 21.5H9V39H32V21.5H41L20.5 0" :fill "#0C0"
                     :transform (str "translate(" (+ 22.5 (* x 95)) "," (* y 95) ")")
                     :pointer-events "none"}]))

     ;down arrows
     (into [:g]
           (for [x (range 7)  y (range 11)
                  :when (= @hover [x y :down])]
             [:path.fade {:d "M9 0v17.5h-9l20.5 21.5 20.5-21.5h-9V0z" :fill "#f00"
                          :transform (str "translate(" (+ 22.5 (* x 95)) "," (+ 60 (* y 95)) ")")
                          :pointer-events "none"}]))]
     

[building-selector]
]])

@upgrades

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
