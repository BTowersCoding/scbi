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
              :x2 85 :y2 25}]
      ]]
    ]
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
    [:svg {:width   "50%" :viewBox "-1 -1 702 1102"}
     (into [:g]
           (for [x (range 7) y (range 11)]
             [:rect {:x      (* x 100) :y (* y 100)
                     :width  100 :height 100
                     :fill   "none" :stroke "black"}]))
     (into [:g {:transform "translate(10,10)"}] factories/metal)
     (into [:g {:transform "translate(110,10)"}] factories/wood)
     (into [:g {:transform "translate(210,10)"}] factories/plastic)
     (into [:g {:transform "translate(310,10)"}] factories/seeds)
     (into [:g {:transform "translate(410,10)"}] factories/minerals)
     (into [:g {:transform "translate(510,10)"}] factories/chemicals)
     (into [:g {:transform "translate(10,110)"}] factories/textiles)
     (into [:g {:transform "translate(110,110)"}] factories/sugar-and-spices)
     (into [:g {:transform "translate(210,110)"}] factories/glass)
     (into [:g {:transform "translate(310,110)"}] factories/animal-feed)
     (into [:g {:transform "translate(410,110)"}] factories/ic)
     (into [:g {:transform "translate(10,210)"}] stores/nails)
     (into [:g {:transform "translate(110,210)"}] stores/planks)
     (into [:g {:transform "translate(210,210)"}] stores/bricks)
     (into [:g {:transform "translate(310,210)"}] stores/cement)
     (into [:g {:transform "translate(410,210)"}] stores/glue)
     (into [:g {:transform "translate(510,210)"}] stores/paint)
     (into [:g {:transform "translate(10,310)"}]  stores/hammer)
     (into [:g {:transform "translate(110,310)"}] stores/measuring-tape)
     (into [:g {:transform "translate(210,310)"}] stores/shovel)
     (into [:g {:transform "translate(310,310)"}] stores/cooking-utensils)
     (into [:g {:transform "translate(410,310)"}] stores/ladder)
     (into [:g {:transform "translate(510,310)"}] stores/drill)
     (into [:g {:transform "translate(10,410)"}]  stores/vegetables)
     (into [:g {:transform "translate(110,410)"}] stores/flour-bag)
     (into [:g {:transform "translate(210,410)"}] stores/fruit-and-berries)
     (into [:g {:transform "translate(310,410)"}] stores/cream)
     (into [:g {:transform "translate(410,410)"}] stores/corn)
     (into [:g {:transform "translate(510,410)"}] stores/cheese)
     (into [:g {:transform "translate(610,410)"}] stores/beef)
     (into [:g {:transform "translate(10,510)"}]  stores/chair)
     (into [:g {:transform "translate(110,510)"}] stores/tables)
     (into [:g {:transform "translate(210,510)"}] stores/home-textiles)
     (into [:g {:transform "translate(310,510)"}] stores/cupboard)
     (into [:g {:transform "translate(410,510)"}] stores/couch)
     (into [:g {:transform "translate(10,610)"}]  stores/grass)
     (into [:g {:transform "translate(110,610)"}] stores/tree-saplings)
     (into [:g {:transform "translate(210,610)"}] stores/garden-furniture)
     (into [:g {:transform "translate(310,610)"}] stores/fire-pit)
     (into [:g {:transform "translate(410,610)"}] stores/lawn-mower)
     (into [:g {:transform "translate(510,610)"}] stores/garden-gnomes)
     (into [:g {:transform "translate(10,710)"}] stores/donuts)
     (into [:g {:transform "translate(110,710)"}] stores/green-smoothie)
     (into [:g {:transform "translate(210,710)"}] stores/bread-roll)
     (into [:g {:transform "translate(310,710)"}] stores/cherry-cheesecake)
     (into [:g {:transform "translate(410,710)"}] stores/frozen-yogurt)
     (into [:g {:transform "translate(510,710)"}] stores/coffee)
     (into [:g {:transform "translate(10,810)"}] stores/cap)
     (into [:g {:transform "translate(110,810)"}] stores/shoes)
     (into [:g {:transform "translate(210,810)"}] stores/watch)
     (into [:g {:transform "translate(310,810)"}] stores/business-suits)
     (into [:g {:transform "translate(410,810)"}] stores/backpack)
     (into [:g {:transform "translate(10,910)"}] stores/ice-cream-sandwich)
     (into [:g {:transform "translate(110,910)"}] stores/pizza)
     (into [:g {:transform "translate(210,910)"}] stores/burgers)
     (into [:g {:transform "translate(310,910)"}] stores/cheese-fries)
     (into [:g {:transform "translate(410,910)"}] stores/lemonade-bottle)
     (into [:g {:transform "translate(510,910)"}] stores/popcorn)
     (into [:g {:transform "translate(10,1010)"}] stores/bbq-grill)
     (into [:g {:transform "translate(110,1010)"}] stores/refrigerator)
     (into [:g {:transform "translate(210,1010)"}] stores/lighting-system)
     (into [:g {:transform "translate(310,1010)"}] stores/tv)
     (into [:g {:transform "translate(410,1010)"}] stores/microwave)

     ;mouse targets --up
     (into [:g]
           (for [x (range 7) y (range 11)]
             [:rect {:x      (* x 100) :y      (* y 100)
                     :width  100 :height 50
                     :visibility "hidden"
                     :pointer-events "all"
                     :on-mouse-over #(reset! hover [x y :up])
                     :on-mouse-out #(reset! hover nil)
                     :on-click (fn [] (swap! upgrades assoc @building (conj (get @upgrades @building) [x y :up])))}]))
     
      ;mouse targets --down
     (into [:g]
           (for [x (range 7)  y (range 11)]
             [:rect {:x              (* x 100) :y              (+ 50 (* y 100))
                     :width          100  :height         50
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
                     :transform (str "translate(" (+ 25 (* x 100)) "," (* y 100) ")")
                     :pointer-events "none"}]))

     ;down arrows
     (into [:g]
           (for [x (range 7)  y (range 11)
                  :when (= @hover [x y :down])]
             [:path.fade {:d "M9 0v17.5h-9l20.5 21.5 20.5-21.5h-9V0z" :fill "#f00"
                          :transform (str "translate(" (+ 25 (* x 100)) "," (+ 60 (* y 100)) ")")
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
