(ns scbi.app
  (:require [reagent.dom :as rdom]
            [scbi.img.factories :as factories]
            [scbi.img.stores :as stores]))

(defn square-root
  [x]
  (.sqrt js/Math x))

(defn app []
  [:div#app
   factories/metal
   factories/wood
   factories/plastic
   factories/seeds
   factories/minerals
   factories/chemicals
   factories/textiles
   factories/sugar-and-spices
   factories/glass
   factories/animal-feed
    factories/ic
   [:p]
   stores/nails
   stores/planks
   stores/bricks
   stores/cement
   stores/glue
   stores/paint
   [:p]
   stores/hammer
   stores/measuring-tape
   stores/shovel
   stores/cooking-utensils
   stores/ladder
   stores/drill
   [:p]
   stores/vegetables
   stores/flour-bag
   stores/fruit-and-berries
   stores/cream
    stores/corn
   stores/cheese
   stores/beef
   [:p]
   stores/chair
   stores/tables
   stores/home-textiles
   stores/cupboard
   stores/couch
   [:p]
   stores/grass
   stores/tree-saplings
   stores/garden-furniture
   stores/fire-pit
   stores/lawn-mower
   stores/garden-gnomes
   [:p]
   stores/donuts
   stores/green-smoothie
   stores/bread-roll
    stores/cherry-cheesecake
   stores/frozen-yogurt
   stores/coffee
   [:p]
   stores/cap
   stores/shoes
   stores/watch
   stores/business-suits
   stores/backpack
   [:p]
   stores/ice-cream-sandwich
   stores/pizza
   stores/burgers
   stores/cheese-fries
   stores/lemonade-bottle
   stores/popcorn
   [:p]
   stores/bbq-grill
   stores/refrigerator
   stores/lighting-system
   stores/tv
   stores/microwave
   ])

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
