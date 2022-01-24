(ns scbi.app
  (:require 
   [reagent.core :as r]
   [reagent.dom :as rdom]
   [scbi.img.factories :as factories]
   [scbi.img.stores :as stores]))

(defn square-root
  [x]
  (.sqrt js/Math x))

(defonce hover (r/atom nil))  

(defn app []
  [:div#app
   [:div#grid
    [:svg {:width   "100%"
           :viewBox "-1 -1 702 1102"}
     (into [:g]
           (for [x (range 7)
                 y (range 11)]
             [:rect {:x      (* x 100)
                     :y      (* y 100)
                     :width  100
                     :height 100
                     :fill   "none"
                     :stroke "black"}]))
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

     ;hover targets --up
     (into [:g]
           (for [x (range 7)
                 y (range 11)]
             [:rect {:x      (* x 100)
                     :y      (* y 100)
                     :width  100
                     :height 50
                     :visibility "hidden"
                     :pointer-events "all"
                     :on-mouse-over #(reset! hover [x y :up])}]))
     
      ;hover targets --down
     (into [:g]
           (for [x (range 7)
                 y (range 11)]
             [:rect {:x              (* x 100)
                     :y              (+ 50 (* y 100))
                     :width          100
                     :height         50
                     :visibility     "hidden"
                     :pointer-events "all"
                     :on-mouse-over  #(reset! hover [x y :down])}]))
     
     ]
     
     [:p (str "Hover: " @hover)]]])

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
