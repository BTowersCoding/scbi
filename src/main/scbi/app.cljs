(ns scbi.app
  (:require 
   [reagent.core :as r]
   [reagent.dom :as rdom]
   [scbi.items :as items]
   [scbi.img.factories :as factories]
   [scbi.img.stores :as stores]))

(def items
  [[factories/metal  factories/wood factories/plastic factories/seeds factories/minerals]
   [factories/chemicals factories/textiles factories/sugar-and-spices factories/glass factories/animal-feed factories/ic]
   [stores/nails stores/planks stores/bricks stores/cement stores/glue stores/paint]
   [stores/hammer stores/measuring-tape stores/shovel stores/cooking-utensils stores/ladder stores/drill]
   [stores/vegetables stores/flour-bag stores/fruit-and-berries stores/cream stores/corn stores/cheese stores/beef]
   [stores/chair stores/tables stores/home-textiles stores/cupboard stores/couch]
   [stores/grass stores/tree-saplings stores/garden-furniture stores/fire-pit stores/lawn-mower stores/garden-gnomes]
   [stores/donuts stores/green-smoothie stores/bread-roll stores/cherry-cheesecake stores/frozen-yogurt stores/coffee]
   [stores/cap stores/shoes stores/watch stores/business-suits stores/backpack]
   [stores/ice-cream-sandwich stores/pizza stores/burgers stores/cheese-fries stores/lemonade-bottle stores/popcorn]
   [stores/bbq-grill stores/refrigerator stores/lighting-system stores/tv stores/microwave]])

(def item-names
  [["metal"  "wood" "plastic" "seeds" "minerals"]
   ["chemicals" "textiles" "sugar-and-spices" "glass" "animal-feed" "ic"]
   ["nails" "planks" "bricks" "cement" "glue" "paint"]
   ["hammer" "measuring-tape" "shovel" "cooking-utensils" "ladder" "drill"]
   ["vegetables" "flour-bag" "fruit-and-berries" "cream" "corn" "cheese" "beef"]
   ["chair" "tables" "home-textiles" "cupboard" "couch"]
   ["grass" "tree-saplings" "garden-furniture" "fire-pit" "lawn-mower" "garden-gnomes"]
   ["donuts" "green-smoothie" "bread-roll" "cherry-cheesecake" "frozen-yogurt" "coffee"]
   ["cap" "shoes" "watch" "business-suits" "backpack"]
   ["ice-cream-sandwich" "pizza" "burgers" "cheese-fries" "lemonade-bottle" "popcorn"]
   ["bbq-grill" "refrigerator" "lighting-system" "tv" "microwave"]])

(defn square-root
  [x]
  (.sqrt js/Math x))

(defonce hover (r/atom nil))  

(defonce upgrades (r/atom [[]]))

(defonce building (r/atom 0))

(defonce inventory 
  (r/atom (zipmap
           (for [x (range 7)
                 y (range 11)] [x y])
           (repeat 0))))

(defonce status (r/atom nil))

(defn count-item [building col row]
  (let [clicks (get (group-by butlast building) [row col])]
    (- (count (filter #(= :up (last %)) clicks))
       (count (filter #(= :down (last %)) clicks)))))

(defn building-selector []
  (let [hovered (r/atom nil)]
    (fn []
      [:div
       [:span
        [:svg {:width         30
               :view-box      "0 -0.5 10 11"
               :transform     (str "translate(0,10)" (when-not (= @hovered :left) "scale(0.8)"))
               :cursor        "pointer"
               :on-mouse-over #(do (reset! hovered :left)
                                   (reset! status "Previous"))
               :on-mouse-out  #(do (reset! hovered nil)
                                   (reset! status nil))
               :on-click      #(if (= 0 @building)
                                 (reset! building (dec (count @upgrades)))
                                 (swap! building dec))}
         [:path {:stroke "#000000"
                 :d      "M4 0h1M3 1h2M2 2h1M4 2h3M1 3h1M0 4h1M1 5h1M2 6h1M4 6h3M3 7h2M4 8h1"}]
         [:path {:stroke "#f8f800"
                 :d      "M3 2h1M2 3h5M1 4h6M2 5h5M3 6h1"}]]
        (str "Building: " @building)
        [:svg {:width         30
               :view-box      "0 -0.5 10 11"
               :transform     (str "translate (0,5),rotate (180)" (when-not (= @hovered :right) "scale(0.8)"))
               :cursor        "pointer"
               :on-mouse-over #(do (reset! hovered :right)
                                   (reset! status "Next"))
               :on-mouse-out  #(do (reset! hovered nil)
                                   (reset! status nil))
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
          [:circle {:cx            25
                    :cy            25
                    :r             (if (= @hovered :plus) 22 20)
                    :fill          "green"
                    :stroke        (when (= @hovered :plus) "black")
                    :stroke-width  4
                    :on-mouse-over #(do (reset! hovered :plus)
                                        (reset! status "Add building"))
                    :on-mouse-out  #(do (reset! hovered nil)
                                        (reset! status nil))
                    :on-click      #(do (reset! upgrades (vec (concat
                                                               (conj (vec (take (inc @building) @upgrades)) [])
                                                               (drop (inc @building) @upgrades))))
                                        (swap! building inc))}]
          [:path {:fill           "white" 
                  :pointer-events "none"
                  :d              "M19.5 13.25 19.5 19.5 13.25 19.5 13.25 28.875 13.25 28.875 19.5 28.875 19.5 35.125 28.875 35.125 28.875 28.875 35.125 28.875 35.125 19.5 28.875 19.5 28.875 13.25Z"}]
     ;; remove building
          [:circle {:cx            75
                    :cy            25
                    :r             (if (= @hovered :minus) 22 20)
                    :fill          "red"
                    :stroke        (when (= @hovered :minus) "black")
                    :stroke-width  4
                    :on-mouse-over #(do (reset! hovered :minus)
                                        (reset! status "Remove building"))
                    :on-mouse-out  #(do (reset! hovered nil)
                                        (reset! status nil))
                    :on-click      #(do (reset! upgrades (vec (concat
                                                               (subvec @upgrades 0 @building)
                                                               (subvec @upgrades (inc @building) (count @upgrades)))))
                                        (swap! building dec))}]
          [:line {:stroke         "white"
                  :stroke-width   10
                  :pointer-events "none"
                  :x1             65
                  :y1             25
                  :x2             85
                  :y2             25}]]
    ;; status
          (when @status
            (let [text @status
                  width (count text)]
              [:svg {:width   270
                     :viewBox "-1 -1 270 30"}

               [:rect {:x 20 :y 5 :width (+ 25 (* width 7.7)) :height 23 :fill "none" :stroke "grey"}]
               [:text  {:x 25 :y 22 :font-size 18 :text-anchor "right" :fill "black"}
                text]]))]
       ])))

(defn buildings []
  (into []
        (for [building (range (count @upgrades))]
          (into {}
                (for [[col row] (keys (group-by butlast (get @upgrades building)))
                      :when     (pos? (count-item (get @upgrades building) row col))]
                  [(keyword (get-in item-names [row col])) (count-item (get @upgrades building) row col)])))))


(select-keys (apply merge (buildings)) (map keyword (apply concat (take 2 item-names))))

(def store-names
  ["building-supplies" "hardware" "fashion" "furniture" "farmers-market" "gardening-supplies" "donut-shop" "fast-food" "home-appliances"])

(defn item-map []
  (zipmap store-names 
          (map (fn [s] 
                 (remove #(zero? (first (vals %)))
                         (items/parts s  (let [orders (apply merge-with + (buildings))]
                                           (mapcat (fn [x] (apply #(repeat %2 %) x))
                                                   (select-keys orders (keys orders)))))))
               (map keys items/stores))))

(defn app []
  [:div#app
   [:div#grid
    [:svg {:width   400 :viewBox "-1 -1 702 1052"}
     ;; grid lines
     (into [:g]
           (for [x (range 7) y (range 11)
                 :when (get-in item-names [y x])]
             [:rect {:x      (* x 95) :y (* y 95)
                     :width  95 :height 95
                     :fill   "none" :stroke "black"}]))
     ;; items
     (into [:g]
           (for [col (range (count items))]
             (let [row (get items col)]
               (into [:g]
                     (for [item (range (count row))]
                       (into [:g {:transform (str "translate(" (+ 10 (* 95 item)) "," (+ 5 (* col 95)) ")")}] (get row item)))))))

     ;mouse targets --up
     (into [:g]
           (for [x (range 7) y (range 11)
                 :when (get-in item-names [y x])]
             [:rect {:x      (* x 95) :y      (* y 95)
                     :width  95 :height 47.5
                     :visibility "hidden"
                     :pointer-events "all"
                     :on-mouse-over #(do (reset! hover [x y :up])
                                         (reset! status (str "Add " (get-in item-names [y x]))))
                     :on-mouse-out #(do (reset! hover nil)
                                        (reset! status nil))
                     :on-click
                     #(swap! upgrades assoc @building
                             (conj (get @upgrades @building) [x y :up]))}]))

      ;mouse targets --down
     (into [:g]
           (for [x (range 7)  y (range 11)
                 :when (get-in item-names [y x])]
             [:rect {:x              (* x 95) :y              (+ 47.5 (* y 95))
                     :width          95  :height         47.5
                     :visibility     "hidden"
                     :pointer-events "all"
                     :on-mouse-over #(do (reset! hover [x y :down])
                                         (reset! status (str "Subtract " (get-in item-names [y x]))))
                     :on-mouse-out #(do (reset! hover nil)
                   (reset! status nil))
                     :on-click (fn [] 
                                 (when (pos? (count-item (get @upgrades @building) y x))
                                   (swap! upgrades assoc @building (conj (get @upgrades @building) [x y :down]))))}]))

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
                          :transform (str "translate(" (+ 22.5 (* x 95)) "," (+ 57 (* y 95)) ")")
                          :pointer-events "none"}]))]
  [building-selector]
  [:p]
  ;; building upgrade items
  (doall
   (for [[col row] (keys (group-by butlast (get @upgrades @building)))
         :when     (pos? (count-item (get @upgrades @building) row col))]
     ^{:key [col row]}
     [:svg {:xmlns "http://www.w3.org/2000/svg", :width "77.3", :height "77.3", :viewBox "0 0 77.3 79"}
     [:g (get-in items [row col])
      [:text  {:x 70 :y 72 :font-size 18 :text-anchor "right" :font-weight "bold" :fill "black"}
       (count-item (get @upgrades @building) row col)]
      ]]))
[:p]
  ;;total items by store
  (into [:div]
        (for [[store items] (item-map)
              :when (seq items)]
          [:div [:span (str store ": ")]
           [:span (for [[k v] (apply merge items)]
                 (str v " " (name k) " "))]]))
  [:p]
;; total materials by factory
(into [:div]
      (for [[k v] (apply merge (reverse (sort-by #(first (vals %))
                                                 (remove #(zero? (first (vals %)))
                                                         (for [m items/materials]
                                                           {m (items/n m (let [orders (apply merge-with + (buildings))]
                                                                           (mapcat (fn [x] (apply #(repeat %2 %) x))
                                                                                   (select-keys orders (keys orders)))))})))))]
        (str v " " (name k) " ")))]])

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
