goog.provide('scbi.app');
scbi.app.items = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [scbi.img.factories.metal,scbi.img.factories.wood,scbi.img.factories.plastic,scbi.img.factories.seeds,scbi.img.factories.minerals], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [scbi.img.factories.chemicals,scbi.img.factories.textiles,scbi.img.factories.sugar_and_spices,scbi.img.factories.glass,scbi.img.factories.animal_feed,scbi.img.factories.ic], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [scbi.img.stores.nails,scbi.img.stores.planks,scbi.img.stores.bricks,scbi.img.stores.cement,scbi.img.stores.glue,scbi.img.stores.paint], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [scbi.img.stores.hammer,scbi.img.stores.measuring_tape,scbi.img.stores.shovel,scbi.img.stores.cooking_utensils,scbi.img.stores.ladder,scbi.img.stores.drill], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [scbi.img.stores.vegetables,scbi.img.stores.flour_bag,scbi.img.stores.fruit_and_berries,scbi.img.stores.cream,scbi.img.stores.corn,scbi.img.stores.cheese,scbi.img.stores.beef], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [scbi.img.stores.chair,scbi.img.stores.tables,scbi.img.stores.home_textiles,scbi.img.stores.cupboard,scbi.img.stores.couch], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [scbi.img.stores.grass,scbi.img.stores.tree_saplings,scbi.img.stores.garden_furniture,scbi.img.stores.fire_pit,scbi.img.stores.lawn_mower,scbi.img.stores.garden_gnomes], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [scbi.img.stores.donuts,scbi.img.stores.green_smoothie,scbi.img.stores.bread_roll,scbi.img.stores.cherry_cheesecake,scbi.img.stores.frozen_yogurt,scbi.img.stores.coffee], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [scbi.img.stores.cap,scbi.img.stores.shoes,scbi.img.stores.watch,scbi.img.stores.business_suits,scbi.img.stores.backpack], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [scbi.img.stores.ice_cream_sandwich,scbi.img.stores.pizza,scbi.img.stores.burgers,scbi.img.stores.cheese_fries,scbi.img.stores.lemonade_bottle,scbi.img.stores.popcorn], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [scbi.img.stores.bbq_grill,scbi.img.stores.refrigerator,scbi.img.stores.lighting_system,scbi.img.stores.tv,scbi.img.stores.microwave], null)], null);
scbi.app.item_names = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["metal","wood","plastic","seeds","minerals"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["chemicals","textiles","sugar-and-spices","glass","animal-feed","ic"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["nails","planks","bricks","cement","glue","paint"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["hammer","measuring-tape","shovel","cooking-utensils","ladder","drill"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vegetables","flour-bag","fruit-and-berries","cream","corn","cheese","beef"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["chair","tables","home-textiles","cupboard","couch"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["grass","tree-saplings","garden-furniture","fire-pit","lawn-mower","garden-gnomes"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["donuts","green-smoothie","bread-roll","cherry-cheesecake","frozen-yogurt","coffee"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cap","shoes","watch","business-suits","backpack"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ice-cream-sandwich","pizza","burgers","cheese-fries","lemonade-bottle","popcorn"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bbq-grill","refrigerator","lighting-system","tv","microwave"], null)], null);
scbi.app.square_root = (function scbi$app$square_root(x){
return Math.sqrt(x);
});
if((typeof scbi !== 'undefined') && (typeof scbi.app !== 'undefined') && (typeof scbi.app.hover !== 'undefined')){
} else {
scbi.app.hover = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof scbi !== 'undefined') && (typeof scbi.app !== 'undefined') && (typeof scbi.app.upgrades !== 'undefined')){
} else {
scbi.app.upgrades = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
}
if((typeof scbi !== 'undefined') && (typeof scbi.app !== 'undefined') && (typeof scbi.app.building !== 'undefined')){
} else {
scbi.app.building = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
if((typeof scbi !== 'undefined') && (typeof scbi.app !== 'undefined') && (typeof scbi.app.inventory !== 'undefined')){
} else {
scbi.app.inventory = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.zipmap((function (){var iter__4611__auto__ = (function scbi$app$iter__78759(s__78760){
return (new cljs.core.LazySeq(null,(function (){
var s__78760__$1 = s__78760;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__78760__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var x = cljs.core.first(xs__6308__auto__);
var iterys__4607__auto__ = ((function (s__78760__$1,x,xs__6308__auto__,temp__5753__auto__){
return (function scbi$app$iter__78759_$_iter__78761(s__78762){
return (new cljs.core.LazySeq(null,((function (s__78760__$1,x,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__78762__$1 = s__78762;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__78762__$1);
if(temp__5753__auto____$1){
var s__78762__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__78762__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__78762__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__78764 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__78763 = (0);
while(true){
if((i__78763 < size__4610__auto__)){
var y = cljs.core._nth(c__4609__auto__,i__78763);
cljs.core.chunk_append(b__78764,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__78866 = (i__78763 + (1));
i__78763 = G__78866;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__78764),scbi$app$iter__78759_$_iter__78761(cljs.core.chunk_rest(s__78762__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__78764),null);
}
} else {
var y = cljs.core.first(s__78762__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),scbi$app$iter__78759_$_iter__78761(cljs.core.rest(s__78762__$2)));
}
} else {
return null;
}
break;
}
});})(s__78760__$1,x,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__78760__$1,x,xs__6308__auto__,temp__5753__auto__))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((11))));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,scbi$app$iter__78759(cljs.core.rest(s__78760__$1)));
} else {
var G__78867 = cljs.core.rest(s__78760__$1);
s__78760__$1 = G__78867;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((7)));
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1((0))));
}
if((typeof scbi !== 'undefined') && (typeof scbi.app !== 'undefined') && (typeof scbi.app.status !== 'undefined')){
} else {
scbi.app.status = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
scbi.app.count_item = (function scbi$app$count_item(building,col,row){
var clicks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.group_by(cljs.core.butlast,building),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
return (cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__78765_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up","up",-269712113),cljs.core.last(p1__78765_SHARP_));
}),clicks)) - cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__78766_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"down","down",1565245570),cljs.core.last(p1__78766_SHARP_));
}),clicks)));
});
scbi.app.building_selector = (function scbi$app$building_selector(){
var hovered = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),(30),new cljs.core.Keyword(null,"view-box","view-box",-1792199155),"0 -0.5 10 11",new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(0,10)",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(hovered),new cljs.core.Keyword(null,"left","left",-399115937)))?null:"scale(0.8)")].join(''),new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (){
cljs.core.reset_BANG_(hovered,new cljs.core.Keyword(null,"left","left",-399115937));

return cljs.core.reset_BANG_(scbi.app.status,"Previous");
}),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(function (){
cljs.core.reset_BANG_(hovered,null);

return cljs.core.reset_BANG_(scbi.app.status,null);
}),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.deref(scbi.app.building))){
return cljs.core.reset_BANG_(scbi.app.building,(cljs.core.count(cljs.core.deref(scbi.app.upgrades)) - (1)));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(scbi.app.building,cljs.core.dec);
}
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#000000",new cljs.core.Keyword(null,"d","d",1972142424),"M4 0h1M3 1h2M2 2h1M4 2h3M1 3h1M0 4h1M1 5h1M2 6h1M4 6h3M3 7h2M4 8h1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#f8f800",new cljs.core.Keyword(null,"d","d",1972142424),"M3 2h1M2 3h5M1 4h6M2 5h5M3 6h1"], null)], null)], null),["Building: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(scbi.app.building))].join(''),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),(30),new cljs.core.Keyword(null,"view-box","view-box",-1792199155),"0 -0.5 10 11",new cljs.core.Keyword(null,"transform","transform",1381301764),["translate (0,5),rotate (180)",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(hovered),new cljs.core.Keyword(null,"right","right",-452581833)))?null:"scale(0.8)")].join(''),new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (){
cljs.core.reset_BANG_(hovered,new cljs.core.Keyword(null,"right","right",-452581833));

return cljs.core.reset_BANG_(scbi.app.status,"Next");
}),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(function (){
cljs.core.reset_BANG_(hovered,null);

return cljs.core.reset_BANG_(scbi.app.status,null);
}),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.count(cljs.core.deref(scbi.app.upgrades)) - (1)),cljs.core.deref(scbi.app.building))){
return cljs.core.reset_BANG_(scbi.app.building,(0));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(scbi.app.building,cljs.core.inc);
}
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#000000",new cljs.core.Keyword(null,"d","d",1972142424),"M4 0h1M3 1h2M2 2h1M4 2h3M1 3h1M0 4h1M1 5h1M2 6h1M4 6h3M3 7h2M4 8h1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#f8f800",new cljs.core.Keyword(null,"d","d",1972142424),"M3 2h1M2 3h5M1 4h6M2 5h5M3 6h1"], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(50),new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"-1 -1 100 50"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"cx","cx",1272694324),new cljs.core.Keyword(null,"cy","cy",755331060),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552)],[((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(hovered),new cljs.core.Keyword(null,"plus","plus",211540661)))?(22):(20)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(hovered),new cljs.core.Keyword(null,"plus","plus",211540661)))?"black":null),(function (){
cljs.core.reset_BANG_(hovered,null);

return cljs.core.reset_BANG_(scbi.app.status,null);
}),"green",(function (){
cljs.core.reset_BANG_(scbi.app.upgrades,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.deref(scbi.app.building) + (1)),cljs.core.deref(scbi.app.upgrades))),cljs.core.PersistentVector.EMPTY),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.deref(scbi.app.building) + (1)),cljs.core.deref(scbi.app.upgrades)))));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(scbi.app.building,cljs.core.inc);
}),(4),(25),(25),(function (){
cljs.core.reset_BANG_(hovered,new cljs.core.Keyword(null,"plus","plus",211540661));

return cljs.core.reset_BANG_(scbi.app.status,"Add building");
})])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"d","d",1972142424),"M19.5 13.25 19.5 19.5 13.25 19.5 13.25 28.875 13.25 28.875 19.5 28.875 19.5 35.125 28.875 35.125 28.875 28.875 35.125 28.875 35.125 19.5 28.875 19.5 28.875 13.25Z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"cx","cx",1272694324),new cljs.core.Keyword(null,"cy","cy",755331060),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552)],[((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(hovered),new cljs.core.Keyword(null,"minus","minus",-1683561492)))?(22):(20)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(hovered),new cljs.core.Keyword(null,"minus","minus",-1683561492)))?"black":null),(function (){
cljs.core.reset_BANG_(hovered,null);

return cljs.core.reset_BANG_(scbi.app.status,null);
}),"red",(function (){
cljs.core.reset_BANG_(scbi.app.upgrades,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(scbi.app.upgrades),(0),cljs.core.deref(scbi.app.building)),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(scbi.app.upgrades),(cljs.core.deref(scbi.app.building) + (1)),cljs.core.count(cljs.core.deref(scbi.app.upgrades))))));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(scbi.app.building,cljs.core.dec);
}),(4),(75),(25),(function (){
cljs.core.reset_BANG_(hovered,new cljs.core.Keyword(null,"minus","minus",-1683561492));

return cljs.core.reset_BANG_(scbi.app.status,"Remove building");
})])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"white",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(10),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"x1","x1",-1863922247),(65),new cljs.core.Keyword(null,"y1","y1",589123466),(25),new cljs.core.Keyword(null,"x2","x2",-1362513475),(85),new cljs.core.Keyword(null,"y2","y2",-718691301),(25)], null)], null)], null),(cljs.core.truth_(cljs.core.deref(scbi.app.status))?(function (){var text = cljs.core.deref(scbi.app.status);
var width = cljs.core.count(text);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(270),new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"-1 -1 270 30"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),(20),new cljs.core.Keyword(null,"y","y",-1757859776),(5),new cljs.core.Keyword(null,"width","width",-384071477),((25) + (width * 7.7)),new cljs.core.Keyword(null,"height","height",1025178622),(23),new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"grey"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(25),new cljs.core.Keyword(null,"y","y",-1757859776),(22),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(18),new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"right",new cljs.core.Keyword(null,"fill","fill",883462889),"black"], null),text], null)], null);
})():null)], null)], null);
});
});
scbi.app.buildings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4611__auto__ = (function scbi$app$iter__78767(s__78768){
return (new cljs.core.LazySeq(null,(function (){
var s__78768__$1 = s__78768;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__78768__$1);
if(temp__5753__auto__){
var s__78768__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__78768__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__78768__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__78770 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__78769 = (0);
while(true){
if((i__78769 < size__4610__auto__)){
var building = cljs.core._nth(c__4609__auto__,i__78769);
cljs.core.chunk_append(b__78770,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4611__auto__ = ((function (i__78769,building,c__4609__auto__,size__4610__auto__,b__78770,s__78768__$2,temp__5753__auto__){
return (function scbi$app$iter__78767_$_iter__78771(s__78772){
return (new cljs.core.LazySeq(null,((function (i__78769,building,c__4609__auto__,size__4610__auto__,b__78770,s__78768__$2,temp__5753__auto__){
return (function (){
var s__78772__$1 = s__78772;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__78772__$1);
if(temp__5753__auto____$1){
var s__78772__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__78772__$2)){
var c__4609__auto____$1 = cljs.core.chunk_first(s__78772__$2);
var size__4610__auto____$1 = cljs.core.count(c__4609__auto____$1);
var b__78774 = cljs.core.chunk_buffer(size__4610__auto____$1);
if((function (){var i__78773 = (0);
while(true){
if((i__78773 < size__4610__auto____$1)){
var vec__78775 = cljs.core._nth(c__4609__auto____$1,i__78773);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78775,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78775,(1),null);
if((scbi.app.count_item(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(scbi.app.upgrades),building),row,col) > (0))){
cljs.core.chunk_append(b__78774,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(scbi.app.item_names,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null))),scbi.app.count_item(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(scbi.app.upgrades),building),row,col)], null));

var G__78868 = (i__78773 + (1));
i__78773 = G__78868;
continue;
} else {
var G__78869 = (i__78773 + (1));
i__78773 = G__78869;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__78774),scbi$app$iter__78767_$_iter__78771(cljs.core.chunk_rest(s__78772__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__78774),null);
}
} else {
var vec__78778 = cljs.core.first(s__78772__$2);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78778,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78778,(1),null);
if((scbi.app.count_item(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(scbi.app.upgrades),building),row,col) > (0))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(scbi.app.item_names,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null))),scbi.app.count_item(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(scbi.app.upgrades),building),row,col)], null),scbi$app$iter__78767_$_iter__78771(cljs.core.rest(s__78772__$2)));
} else {
var G__78870 = cljs.core.rest(s__78772__$2);
s__78772__$1 = G__78870;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__78769,building,c__4609__auto__,size__4610__auto__,b__78770,s__78768__$2,temp__5753__auto__))
,null,null));
});})(i__78769,building,c__4609__auto__,size__4610__auto__,b__78770,s__78768__$2,temp__5753__auto__))
;
return iter__4611__auto__(cljs.core.keys(cljs.core.group_by(cljs.core.butlast,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(scbi.app.upgrades),building))));
})()));

var G__78871 = (i__78769 + (1));
i__78769 = G__78871;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__78770),scbi$app$iter__78767(cljs.core.chunk_rest(s__78768__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__78770),null);
}
} else {
var building = cljs.core.first(s__78768__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4611__auto__ = ((function (building,s__78768__$2,temp__5753__auto__){
return (function scbi$app$iter__78767_$_iter__78781(s__78782){
return (new cljs.core.LazySeq(null,(function (){
var s__78782__$1 = s__78782;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__78782__$1);
if(temp__5753__auto____$1){
var s__78782__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__78782__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__78782__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__78784 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__78783 = (0);
while(true){
if((i__78783 < size__4610__auto__)){
var vec__78785 = cljs.core._nth(c__4609__auto__,i__78783);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78785,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78785,(1),null);
if((scbi.app.count_item(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(scbi.app.upgrades),building),row,col) > (0))){
cljs.core.chunk_append(b__78784,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(scbi.app.item_names,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null))),scbi.app.count_item(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(scbi.app.upgrades),building),row,col)], null));

var G__78872 = (i__78783 + (1));
i__78783 = G__78872;
continue;
} else {
var G__78873 = (i__78783 + (1));
i__78783 = G__78873;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__78784),scbi$app$iter__78767_$_iter__78781(cljs.core.chunk_rest(s__78782__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__78784),null);
}
} else {
var vec__78788 = cljs.core.first(s__78782__$2);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78788,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78788,(1),null);
if((scbi.app.count_item(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(scbi.app.upgrades),building),row,col) > (0))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(scbi.app.item_names,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null))),scbi.app.count_item(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(scbi.app.upgrades),building),row,col)], null),scbi$app$iter__78767_$_iter__78781(cljs.core.rest(s__78782__$2)));
} else {
var G__78874 = cljs.core.rest(s__78782__$2);
s__78782__$1 = G__78874;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});})(building,s__78768__$2,temp__5753__auto__))
;
return iter__4611__auto__(cljs.core.keys(cljs.core.group_by(cljs.core.butlast,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(scbi.app.upgrades),building))));
})()),scbi$app$iter__78767(cljs.core.rest(s__78768__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(scbi.app.upgrades))));
})());
scbi.app.app = (function scbi$app$app(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#app","div#app",840279329),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#grid","div#grid",-592800222),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"-1 -1 702 1052"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905)], null),(function (){var iter__4611__auto__ = (function scbi$app$app_$_iter__78798(s__78799){
return (new cljs.core.LazySeq(null,(function (){
var s__78799__$1 = s__78799;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__78799__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var x = cljs.core.first(xs__6308__auto__);
var iterys__4607__auto__ = ((function (s__78799__$1,x,xs__6308__auto__,temp__5753__auto__){
return (function scbi$app$app_$_iter__78798_$_iter__78800(s__78801){
return (new cljs.core.LazySeq(null,((function (s__78799__$1,x,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__78801__$1 = s__78801;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__78801__$1);
if(temp__5753__auto____$1){
var s__78801__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__78801__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__78801__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__78803 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__78802 = (0);
while(true){
if((i__78802 < size__4610__auto__)){
var y = cljs.core._nth(c__4609__auto__,i__78802);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(scbi.app.item_names,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)))){
cljs.core.chunk_append(b__78803,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),(x * (95)),new cljs.core.Keyword(null,"y","y",-1757859776),(y * (95)),new cljs.core.Keyword(null,"width","width",-384071477),(95),new cljs.core.Keyword(null,"height","height",1025178622),(95),new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black"], null)], null));

var G__78875 = (i__78802 + (1));
i__78802 = G__78875;
continue;
} else {
var G__78876 = (i__78802 + (1));
i__78802 = G__78876;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__78803),scbi$app$app_$_iter__78798_$_iter__78800(cljs.core.chunk_rest(s__78801__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__78803),null);
}
} else {
var y = cljs.core.first(s__78801__$2);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(scbi.app.item_names,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),(x * (95)),new cljs.core.Keyword(null,"y","y",-1757859776),(y * (95)),new cljs.core.Keyword(null,"width","width",-384071477),(95),new cljs.core.Keyword(null,"height","height",1025178622),(95),new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black"], null)], null),scbi$app$app_$_iter__78798_$_iter__78800(cljs.core.rest(s__78801__$2)));
} else {
var G__78877 = cljs.core.rest(s__78801__$2);
s__78801__$1 = G__78877;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__78799__$1,x,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__78799__$1,x,xs__6308__auto__,temp__5753__auto__))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((11))));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,scbi$app$app_$_iter__78798(cljs.core.rest(s__78799__$1)));
} else {
var G__78878 = cljs.core.rest(s__78799__$1);
s__78799__$1 = G__78878;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((7)));
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905)], null),(function (){var iter__4611__auto__ = (function scbi$app$app_$_iter__78804(s__78805){
return (new cljs.core.LazySeq(null,(function (){
var s__78805__$1 = s__78805;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__78805__$1);
if(temp__5753__auto__){
var s__78805__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__78805__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__78805__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__78807 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__78806 = (0);
while(true){
if((i__78806 < size__4610__auto__)){
var col = cljs.core._nth(c__4609__auto__,i__78806);
cljs.core.chunk_append(b__78807,(function (){var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(scbi.app.items,col);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905)], null),(function (){var iter__4611__auto__ = ((function (i__78806,row,col,c__4609__auto__,size__4610__auto__,b__78807,s__78805__$2,temp__5753__auto__){
return (function scbi$app$app_$_iter__78804_$_iter__78808(s__78809){
return (new cljs.core.LazySeq(null,((function (i__78806,row,col,c__4609__auto__,size__4610__auto__,b__78807,s__78805__$2,temp__5753__auto__){
return (function (){
var s__78809__$1 = s__78809;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__78809__$1);
if(temp__5753__auto____$1){
var s__78809__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__78809__$2)){
var c__4609__auto____$1 = cljs.core.chunk_first(s__78809__$2);
var size__4610__auto____$1 = cljs.core.count(c__4609__auto____$1);
var b__78811 = cljs.core.chunk_buffer(size__4610__auto____$1);
if((function (){var i__78810 = (0);
while(true){
if((i__78810 < size__4610__auto____$1)){
var item = cljs.core._nth(c__4609__auto____$1,i__78810);
cljs.core.chunk_append(b__78811,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((10) + ((95) * item))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((5) + (col * (95)))),")"].join('')], null)], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,item)));

var G__78879 = (i__78810 + (1));
i__78810 = G__78879;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__78811),scbi$app$app_$_iter__78804_$_iter__78808(cljs.core.chunk_rest(s__78809__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__78811),null);
}
} else {
var item = cljs.core.first(s__78809__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((10) + ((95) * item))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((5) + (col * (95)))),")"].join('')], null)], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,item)),scbi$app$app_$_iter__78804_$_iter__78808(cljs.core.rest(s__78809__$2)));
}
} else {
return null;
}
break;
}
});})(i__78806,row,col,c__4609__auto__,size__4610__auto__,b__78807,s__78805__$2,temp__5753__auto__))
,null,null));
});})(i__78806,row,col,c__4609__auto__,size__4610__auto__,b__78807,s__78805__$2,temp__5753__auto__))
;
return iter__4611__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(row)));
})());
})());

var G__78880 = (i__78806 + (1));
i__78806 = G__78880;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__78807),scbi$app$app_$_iter__78804(cljs.core.chunk_rest(s__78805__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__78807),null);
}
} else {
var col = cljs.core.first(s__78805__$2);
return cljs.core.cons((function (){var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(scbi.app.items,col);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905)], null),(function (){var iter__4611__auto__ = ((function (row,col,s__78805__$2,temp__5753__auto__){
return (function scbi$app$app_$_iter__78804_$_iter__78812(s__78813){
return (new cljs.core.LazySeq(null,(function (){
var s__78813__$1 = s__78813;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__78813__$1);
if(temp__5753__auto____$1){
var s__78813__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__78813__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__78813__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__78815 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__78814 = (0);
while(true){
if((i__78814 < size__4610__auto__)){
var item = cljs.core._nth(c__4609__auto__,i__78814);
cljs.core.chunk_append(b__78815,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((10) + ((95) * item))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((5) + (col * (95)))),")"].join('')], null)], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,item)));

var G__78881 = (i__78814 + (1));
i__78814 = G__78881;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__78815),scbi$app$app_$_iter__78804_$_iter__78812(cljs.core.chunk_rest(s__78813__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__78815),null);
}
} else {
var item = cljs.core.first(s__78813__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((10) + ((95) * item))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((5) + (col * (95)))),")"].join('')], null)], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,item)),scbi$app$app_$_iter__78804_$_iter__78812(cljs.core.rest(s__78813__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,col,s__78805__$2,temp__5753__auto__))
;
return iter__4611__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(row)));
})());
})(),scbi$app$app_$_iter__78804(cljs.core.rest(s__78805__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(scbi.app.items)));
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905)], null),(function (){var iter__4611__auto__ = (function scbi$app$app_$_iter__78816(s__78817){
return (new cljs.core.LazySeq(null,(function (){
var s__78817__$1 = s__78817;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__78817__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var x = cljs.core.first(xs__6308__auto__);
var iterys__4607__auto__ = ((function (s__78817__$1,x,xs__6308__auto__,temp__5753__auto__){
return (function scbi$app$app_$_iter__78816_$_iter__78818(s__78819){
return (new cljs.core.LazySeq(null,((function (s__78817__$1,x,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__78819__$1 = s__78819;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__78819__$1);
if(temp__5753__auto____$1){
var s__78819__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__78819__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__78819__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__78821 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__78820 = (0);
while(true){
if((i__78820 < size__4610__auto__)){
var y = cljs.core._nth(c__4609__auto__,i__78820);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(scbi.app.item_names,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)))){
cljs.core.chunk_append(b__78821,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"height","height",1025178622)],[(y * (95)),((function (i__78820,s__78819__$1,s__78817__$1,y,c__4609__auto__,size__4610__auto__,b__78821,s__78819__$2,temp__5753__auto____$1,x,xs__6308__auto__,temp__5753__auto__){
return (function (){
cljs.core.reset_BANG_(scbi.app.hover,null);

return cljs.core.reset_BANG_(scbi.app.status,null);
});})(i__78820,s__78819__$1,s__78817__$1,y,c__4609__auto__,size__4610__auto__,b__78821,s__78819__$2,temp__5753__auto____$1,x,xs__6308__auto__,temp__5753__auto__))
,(95),((function (i__78820,s__78819__$1,s__78817__$1,y,c__4609__auto__,size__4610__auto__,b__78821,s__78819__$2,temp__5753__auto____$1,x,xs__6308__auto__,temp__5753__auto__){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scbi.app.upgrades,cljs.core.assoc,cljs.core.deref(scbi.app.building),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(scbi.app.upgrades),cljs.core.deref(scbi.app.building)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,new cljs.core.Keyword(null,"up","up",-269712113)], null)));
});})(i__78820,s__78819__$1,s__78817__$1,y,c__4609__auto__,size__4610__auto__,b__78821,s__78819__$2,temp__5753__auto____$1,x,xs__6308__auto__,temp__5753__auto__))
,((function (i__78820,s__78819__$1,s__78817__$1,y,c__4609__auto__,size__4610__auto__,b__78821,s__78819__$2,temp__5753__auto____$1,x,xs__6308__auto__,temp__5753__auto__){
return (function (){
cljs.core.reset_BANG_(scbi.app.hover,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,new cljs.core.Keyword(null,"up","up",-269712113)], null));

return cljs.core.reset_BANG_(scbi.app.status,["Add ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(scbi.app.item_names,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)))].join(''));
});})(i__78820,s__78819__$1,s__78817__$1,y,c__4609__auto__,size__4610__auto__,b__78821,s__78819__$2,temp__5753__auto____$1,x,xs__6308__auto__,temp__5753__auto__))
,(x * (95)),"all","hidden",47.5])], null));

var G__78882 = (i__78820 + (1));
i__78820 = G__78882;
continue;
} else {
var G__78883 = (i__78820 + (1));
i__78820 = G__78883;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__78821),scbi$app$app_$_iter__78816_$_iter__78818(cljs.core.chunk_rest(s__78819__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__78821),null);
}
} else {
var y = cljs.core.first(s__78819__$2);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(scbi.app.item_names,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"height","height",1025178622)],[(y * (95)),((function (s__78819__$1,s__78817__$1,y,s__78819__$2,temp__5753__auto____$1,x,xs__6308__auto__,temp__5753__auto__){
return (function (){
cljs.core.reset_BANG_(scbi.app.hover,null);

return cljs.core.reset_BANG_(scbi.app.status,null);
});})(s__78819__$1,s__78817__$1,y,s__78819__$2,temp__5753__auto____$1,x,xs__6308__auto__,temp__5753__auto__))
,(95),((function (s__78819__$1,s__78817__$1,y,s__78819__$2,temp__5753__auto____$1,x,xs__6308__auto__,temp__5753__auto__){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scbi.app.upgrades,cljs.core.assoc,cljs.core.deref(scbi.app.building),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(scbi.app.upgrades),cljs.core.deref(scbi.app.building)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,new cljs.core.Keyword(null,"up","up",-269712113)], null)));
});})(s__78819__$1,s__78817__$1,y,s__78819__$2,temp__5753__auto____$1,x,xs__6308__auto__,temp__5753__auto__))
,((function (s__78819__$1,s__78817__$1,y,s__78819__$2,temp__5753__auto____$1,x,xs__6308__auto__,temp__5753__auto__){
return (function (){
cljs.core.reset_BANG_(scbi.app.hover,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,new cljs.core.Keyword(null,"up","up",-269712113)], null));

return cljs.core.reset_BANG_(scbi.app.status,["Add ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(scbi.app.item_names,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)))].join(''));
});})(s__78819__$1,s__78817__$1,y,s__78819__$2,temp__5753__auto____$1,x,xs__6308__auto__,temp__5753__auto__))
,(x * (95)),"all","hidden",47.5])], null),scbi$app$app_$_iter__78816_$_iter__78818(cljs.core.rest(s__78819__$2)));
} else {
var G__78884 = cljs.core.rest(s__78819__$2);
s__78819__$1 = G__78884;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__78817__$1,x,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__78817__$1,x,xs__6308__auto__,temp__5753__auto__))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((11))));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,scbi$app$app_$_iter__78816(cljs.core.rest(s__78817__$1)));
} else {
var G__78885 = cljs.core.rest(s__78817__$1);
s__78817__$1 = G__78885;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((7)));
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905)], null),(function (){var iter__4611__auto__ = (function scbi$app$app_$_iter__78822(s__78823){
return (new cljs.core.LazySeq(null,(function (){
var s__78823__$1 = s__78823;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__78823__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var x = cljs.core.first(xs__6308__auto__);
var iterys__4607__auto__ = ((function (s__78823__$1,x,xs__6308__auto__,temp__5753__auto__){
return (function scbi$app$app_$_iter__78822_$_iter__78824(s__78825){
return (new cljs.core.LazySeq(null,((function (s__78823__$1,x,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__78825__$1 = s__78825;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__78825__$1);
if(temp__5753__auto____$1){
var s__78825__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__78825__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__78825__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__78827 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__78826 = (0);
while(true){
if((i__78826 < size__4610__auto__)){
var y = cljs.core._nth(c__4609__auto__,i__78826);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(scbi.app.item_names,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)))){
cljs.core.chunk_append(b__78827,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"height","height",1025178622)],[(47.5 + (y * (95))),((function (i__78826,s__78825__$1,s__78823__$1,y,c__4609__auto__,size__4610__auto__,b__78827,s__78825__$2,temp__5753__auto____$1,x,xs__6308__auto__,temp__5753__auto__){
return (function (){
cljs.core.reset_BANG_(scbi.app.hover,null);

return cljs.core.reset_BANG_(scbi.app.status,null);
});})(i__78826,s__78825__$1,s__78823__$1,y,c__4609__auto__,size__4610__auto__,b__78827,s__78825__$2,temp__5753__auto____$1,x,xs__6308__auto__,temp__5753__auto__))
,(95),((function (i__78826,s__78825__$1,s__78823__$1,y,c__4609__auto__,size__4610__auto__,b__78827,s__78825__$2,temp__5753__auto____$1,x,xs__6308__auto__,temp__5753__auto__){
return (function (){
if((scbi.app.count_item(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(scbi.app.upgrades),cljs.core.deref(scbi.app.building)),y,x) > (0))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scbi.app.upgrades,cljs.core.assoc,cljs.core.deref(scbi.app.building),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(scbi.app.upgrades),cljs.core.deref(scbi.app.building)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,new cljs.core.Keyword(null,"down","down",1565245570)], null)));
} else {
return null;
}
});})(i__78826,s__78825__$1,s__78823__$1,y,c__4609__auto__,size__4610__auto__,b__78827,s__78825__$2,temp__5753__auto____$1,x,xs__6308__auto__,temp__5753__auto__))
,((function (i__78826,s__78825__$1,s__78823__$1,y,c__4609__auto__,size__4610__auto__,b__78827,s__78825__$2,temp__5753__auto____$1,x,xs__6308__auto__,temp__5753__auto__){
return (function (){
cljs.core.reset_BANG_(scbi.app.hover,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,new cljs.core.Keyword(null,"down","down",1565245570)], null));

return cljs.core.reset_BANG_(scbi.app.status,["Subtract ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(scbi.app.item_names,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)))].join(''));
});})(i__78826,s__78825__$1,s__78823__$1,y,c__4609__auto__,size__4610__auto__,b__78827,s__78825__$2,temp__5753__auto____$1,x,xs__6308__auto__,temp__5753__auto__))
,(x * (95)),"all","hidden",47.5])], null));

var G__78886 = (i__78826 + (1));
i__78826 = G__78886;
continue;
} else {
var G__78887 = (i__78826 + (1));
i__78826 = G__78887;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__78827),scbi$app$app_$_iter__78822_$_iter__78824(cljs.core.chunk_rest(s__78825__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__78827),null);
}
} else {
var y = cljs.core.first(s__78825__$2);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(scbi.app.item_names,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"height","height",1025178622)],[(47.5 + (y * (95))),((function (s__78825__$1,s__78823__$1,y,s__78825__$2,temp__5753__auto____$1,x,xs__6308__auto__,temp__5753__auto__){
return (function (){
cljs.core.reset_BANG_(scbi.app.hover,null);

return cljs.core.reset_BANG_(scbi.app.status,null);
});})(s__78825__$1,s__78823__$1,y,s__78825__$2,temp__5753__auto____$1,x,xs__6308__auto__,temp__5753__auto__))
,(95),((function (s__78825__$1,s__78823__$1,y,s__78825__$2,temp__5753__auto____$1,x,xs__6308__auto__,temp__5753__auto__){
return (function (){
if((scbi.app.count_item(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(scbi.app.upgrades),cljs.core.deref(scbi.app.building)),y,x) > (0))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scbi.app.upgrades,cljs.core.assoc,cljs.core.deref(scbi.app.building),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(scbi.app.upgrades),cljs.core.deref(scbi.app.building)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,new cljs.core.Keyword(null,"down","down",1565245570)], null)));
} else {
return null;
}
});})(s__78825__$1,s__78823__$1,y,s__78825__$2,temp__5753__auto____$1,x,xs__6308__auto__,temp__5753__auto__))
,((function (s__78825__$1,s__78823__$1,y,s__78825__$2,temp__5753__auto____$1,x,xs__6308__auto__,temp__5753__auto__){
return (function (){
cljs.core.reset_BANG_(scbi.app.hover,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,new cljs.core.Keyword(null,"down","down",1565245570)], null));

return cljs.core.reset_BANG_(scbi.app.status,["Subtract ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(scbi.app.item_names,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)))].join(''));
});})(s__78825__$1,s__78823__$1,y,s__78825__$2,temp__5753__auto____$1,x,xs__6308__auto__,temp__5753__auto__))
,(x * (95)),"all","hidden",47.5])], null),scbi$app$app_$_iter__78822_$_iter__78824(cljs.core.rest(s__78825__$2)));
} else {
var G__78888 = cljs.core.rest(s__78825__$2);
s__78825__$1 = G__78888;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__78823__$1,x,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__78823__$1,x,xs__6308__auto__,temp__5753__auto__))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((11))));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,scbi$app$app_$_iter__78822(cljs.core.rest(s__78823__$1)));
} else {
var G__78889 = cljs.core.rest(s__78823__$1);
s__78823__$1 = G__78889;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((7)));
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905)], null),(function (){var iter__4611__auto__ = (function scbi$app$app_$_iter__78828(s__78829){
return (new cljs.core.LazySeq(null,(function (){
var s__78829__$1 = s__78829;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__78829__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var x = cljs.core.first(xs__6308__auto__);
var iterys__4607__auto__ = ((function (s__78829__$1,x,xs__6308__auto__,temp__5753__auto__){
return (function scbi$app$app_$_iter__78828_$_iter__78830(s__78831){
return (new cljs.core.LazySeq(null,((function (s__78829__$1,x,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__78831__$1 = s__78831;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__78831__$1);
if(temp__5753__auto____$1){
var s__78831__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__78831__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__78831__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__78833 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__78832 = (0);
while(true){
if((i__78832 < size__4610__auto__)){
var y = cljs.core._nth(c__4609__auto__,i__78832);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(scbi.app.hover),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,new cljs.core.Keyword(null,"up","up",-269712113)], null))){
cljs.core.chunk_append(b__78833,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path.fade","path.fade",1486073865),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"d","d",1972142424),"M0 21.5H9V39H32V21.5H41L20.5 0",new cljs.core.Keyword(null,"fill","fill",883462889),"#0C0",new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((22.5 + (x * (95)))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((y * (95))),")"].join(''),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none"], null)], null));

var G__78890 = (i__78832 + (1));
i__78832 = G__78890;
continue;
} else {
var G__78891 = (i__78832 + (1));
i__78832 = G__78891;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__78833),scbi$app$app_$_iter__78828_$_iter__78830(cljs.core.chunk_rest(s__78831__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__78833),null);
}
} else {
var y = cljs.core.first(s__78831__$2);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(scbi.app.hover),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,new cljs.core.Keyword(null,"up","up",-269712113)], null))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path.fade","path.fade",1486073865),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"d","d",1972142424),"M0 21.5H9V39H32V21.5H41L20.5 0",new cljs.core.Keyword(null,"fill","fill",883462889),"#0C0",new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((22.5 + (x * (95)))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((y * (95))),")"].join(''),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none"], null)], null),scbi$app$app_$_iter__78828_$_iter__78830(cljs.core.rest(s__78831__$2)));
} else {
var G__78892 = cljs.core.rest(s__78831__$2);
s__78831__$1 = G__78892;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__78829__$1,x,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__78829__$1,x,xs__6308__auto__,temp__5753__auto__))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((11))));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,scbi$app$app_$_iter__78828(cljs.core.rest(s__78829__$1)));
} else {
var G__78893 = cljs.core.rest(s__78829__$1);
s__78829__$1 = G__78893;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((7)));
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905)], null),(function (){var iter__4611__auto__ = (function scbi$app$app_$_iter__78834(s__78835){
return (new cljs.core.LazySeq(null,(function (){
var s__78835__$1 = s__78835;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__78835__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var x = cljs.core.first(xs__6308__auto__);
var iterys__4607__auto__ = ((function (s__78835__$1,x,xs__6308__auto__,temp__5753__auto__){
return (function scbi$app$app_$_iter__78834_$_iter__78836(s__78837){
return (new cljs.core.LazySeq(null,((function (s__78835__$1,x,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__78837__$1 = s__78837;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__78837__$1);
if(temp__5753__auto____$1){
var s__78837__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__78837__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__78837__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__78839 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__78838 = (0);
while(true){
if((i__78838 < size__4610__auto__)){
var y = cljs.core._nth(c__4609__auto__,i__78838);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(scbi.app.hover),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,new cljs.core.Keyword(null,"down","down",1565245570)], null))){
cljs.core.chunk_append(b__78839,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path.fade","path.fade",1486073865),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"d","d",1972142424),"M9 0v17.5h-9l20.5 21.5 20.5-21.5h-9V0z",new cljs.core.Keyword(null,"fill","fill",883462889),"#f00",new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((22.5 + (x * (95)))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((60) + (y * (95)))),")"].join(''),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none"], null)], null));

var G__78894 = (i__78838 + (1));
i__78838 = G__78894;
continue;
} else {
var G__78895 = (i__78838 + (1));
i__78838 = G__78895;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__78839),scbi$app$app_$_iter__78834_$_iter__78836(cljs.core.chunk_rest(s__78837__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__78839),null);
}
} else {
var y = cljs.core.first(s__78837__$2);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(scbi.app.hover),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,new cljs.core.Keyword(null,"down","down",1565245570)], null))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path.fade","path.fade",1486073865),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"d","d",1972142424),"M9 0v17.5h-9l20.5 21.5 20.5-21.5h-9V0z",new cljs.core.Keyword(null,"fill","fill",883462889),"#f00",new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((22.5 + (x * (95)))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((60) + (y * (95)))),")"].join(''),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none"], null)], null),scbi$app$app_$_iter__78834_$_iter__78836(cljs.core.rest(s__78837__$2)));
} else {
var G__78896 = cljs.core.rest(s__78837__$2);
s__78837__$1 = G__78896;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__78835__$1,x,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__78835__$1,x,xs__6308__auto__,temp__5753__auto__))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((11))));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,scbi$app$app_$_iter__78834(cljs.core.rest(s__78835__$1)));
} else {
var G__78897 = cljs.core.rest(s__78835__$1);
s__78835__$1 = G__78897;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((7)));
})())], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [scbi.app.building_selector], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function scbi$app$app_$_iter__78840(s__78841){
return (new cljs.core.LazySeq(null,(function (){
var s__78841__$1 = s__78841;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__78841__$1);
if(temp__5753__auto__){
var s__78841__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__78841__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__78841__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__78843 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__78842 = (0);
while(true){
if((i__78842 < size__4610__auto__)){
var vec__78844 = cljs.core._nth(c__4609__auto__,i__78842);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78844,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78844,(1),null);
if((scbi.app.count_item(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(scbi.app.upgrades),cljs.core.deref(scbi.app.building)),row,col) > (0))){
cljs.core.chunk_append(b__78843,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"width","width",-384071477),"77.3",new cljs.core.Keyword(null,"height","height",1025178622),"77.3",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 77.3 79"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(scbi.app.items,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),(70),new cljs.core.Keyword(null,"y","y",-1757859776),(72),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(18),new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"right",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"fill","fill",883462889),"black"], null),scbi.app.count_item(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(scbi.app.upgrades),cljs.core.deref(scbi.app.building)),row,col)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col,row], null)], null)));

var G__78898 = (i__78842 + (1));
i__78842 = G__78898;
continue;
} else {
var G__78899 = (i__78842 + (1));
i__78842 = G__78899;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__78843),scbi$app$app_$_iter__78840(cljs.core.chunk_rest(s__78841__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__78843),null);
}
} else {
var vec__78847 = cljs.core.first(s__78841__$2);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78847,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78847,(1),null);
if((scbi.app.count_item(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(scbi.app.upgrades),cljs.core.deref(scbi.app.building)),row,col) > (0))){
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"width","width",-384071477),"77.3",new cljs.core.Keyword(null,"height","height",1025178622),"77.3",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 77.3 79"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(scbi.app.items,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),(70),new cljs.core.Keyword(null,"y","y",-1757859776),(72),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(18),new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"right",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"fill","fill",883462889),"black"], null),scbi.app.count_item(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(scbi.app.upgrades),cljs.core.deref(scbi.app.building)),row,col)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col,row], null)], null)),scbi$app$app_$_iter__78840(cljs.core.rest(s__78841__$2)));
} else {
var G__78900 = cljs.core.rest(s__78841__$2);
s__78841__$1 = G__78900;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.keys(cljs.core.group_by(cljs.core.butlast,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(scbi.app.upgrades),cljs.core.deref(scbi.app.building)))));
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rows","rows",850049680),(5),new cljs.core.Keyword(null,"cols","cols",-1914801295),(50),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stores","stores",1203804823),(function (){var iter__4611__auto__ = (function scbi$app$app_$_iter__78854(s__78855){
return (new cljs.core.LazySeq(null,(function (){
var s__78855__$1 = s__78855;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__78855__$1);
if(temp__5753__auto__){
var s__78855__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__78855__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__78855__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__78857 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__78856 = (0);
while(true){
if((i__78856 < size__4610__auto__)){
var store = cljs.core._nth(c__4609__auto__,i__78856);
cljs.core.chunk_append(b__78857,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (i__78856,store,c__4609__auto__,size__4610__auto__,b__78857,s__78855__$2,temp__5753__auto__){
return (function (p1__78793_SHARP_){
return cljs.core.first(cljs.core.vals(p1__78793_SHARP_));
});})(i__78856,store,c__4609__auto__,size__4610__auto__,b__78857,s__78855__$2,temp__5753__auto__))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (i__78856,store,c__4609__auto__,size__4610__auto__,b__78857,s__78855__$2,temp__5753__auto__){
return (function (p1__78794_SHARP_){
return (cljs.core.first(cljs.core.vals(p1__78794_SHARP_)) === (0));
});})(i__78856,store,c__4609__auto__,size__4610__auto__,b__78857,s__78855__$2,temp__5753__auto__))
,store)))));

var G__78901 = (i__78856 + (1));
i__78856 = G__78901;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__78857),scbi$app$app_$_iter__78854(cljs.core.chunk_rest(s__78855__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__78857),null);
}
} else {
var store = cljs.core.first(s__78855__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (store,s__78855__$2,temp__5753__auto__){
return (function (p1__78793_SHARP_){
return cljs.core.first(cljs.core.vals(p1__78793_SHARP_));
});})(store,s__78855__$2,temp__5753__auto__))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (store,s__78855__$2,temp__5753__auto__){
return (function (p1__78794_SHARP_){
return (cljs.core.first(cljs.core.vals(p1__78794_SHARP_)) === (0));
});})(store,s__78855__$2,temp__5753__auto__))
,store)))),scbi$app$app_$_iter__78854(cljs.core.rest(s__78855__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (s){
return scbi.items.parts(s,(function (){var orders = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,cljs.core._PLUS_,scbi.app.buildings);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (x){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (p1__78792_SHARP_,p2__78791_SHARP_){
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(p2__78791_SHARP_,p1__78792_SHARP_);
}),x);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(orders,cljs.core.keys(orders))], 0));
})());
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keys,scbi.items.stores)));
})()], null)),new cljs.core.Keyword(null,"read-only","read-only",-191706886),true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rows","rows",850049680),(5),new cljs.core.Keyword(null,"cols","cols",-1914801295),(50),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"factories","factories",1443149712),cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__78795_SHARP_){
return cljs.core.first(cljs.core.vals(p1__78795_SHARP_));
}),(function (){var iter__4611__auto__ = (function scbi$app$app_$_iter__78862(s__78863){
return (new cljs.core.LazySeq(null,(function (){
var s__78863__$1 = s__78863;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__78863__$1);
if(temp__5753__auto__){
var s__78863__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__78863__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__78863__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__78865 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__78864 = (0);
while(true){
if((i__78864 < size__4610__auto__)){
var m = cljs.core._nth(c__4609__auto__,i__78864);
cljs.core.chunk_append(b__78865,cljs.core.PersistentArrayMap.createAsIfByAssoc([m,scbi.items.n(m,(function (){var orders = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,cljs.core._PLUS_,scbi.app.buildings);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (i__78864,orders,m,c__4609__auto__,size__4610__auto__,b__78865,s__78863__$2,temp__5753__auto__){
return (function (x){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(((function (i__78864,orders,m,c__4609__auto__,size__4610__auto__,b__78865,s__78863__$2,temp__5753__auto__){
return (function (p1__78797_SHARP_,p2__78796_SHARP_){
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(p2__78796_SHARP_,p1__78797_SHARP_);
});})(i__78864,orders,m,c__4609__auto__,size__4610__auto__,b__78865,s__78863__$2,temp__5753__auto__))
,x);
});})(i__78864,orders,m,c__4609__auto__,size__4610__auto__,b__78865,s__78863__$2,temp__5753__auto__))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(orders,cljs.core.keys(orders))], 0));
})())]));

var G__78902 = (i__78864 + (1));
i__78864 = G__78902;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__78865),scbi$app$app_$_iter__78862(cljs.core.chunk_rest(s__78863__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__78865),null);
}
} else {
var m = cljs.core.first(s__78863__$2);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([m,scbi.items.n(m,(function (){var orders = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,cljs.core._PLUS_,scbi.app.buildings);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (orders,m,s__78863__$2,temp__5753__auto__){
return (function (x){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (p1__78797_SHARP_,p2__78796_SHARP_){
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(p2__78796_SHARP_,p1__78797_SHARP_);
}),x);
});})(orders,m,s__78863__$2,temp__5753__auto__))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(orders,cljs.core.keys(orders))], 0));
})())]),scbi$app$app_$_iter__78862(cljs.core.rest(s__78863__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(scbi.items.materials);
})()))], null)),new cljs.core.Keyword(null,"read-only","read-only",-191706886),true], null)], null)], null)], null)], null);
});
scbi.app.render = (function scbi$app$render(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [scbi.app.app], null),document.getElementById("root"));
});
scbi.app.start = (function scbi$app$start(){
scbi.app.render();

return console.log("start");
});
scbi.app.init = (function scbi$app$init(){
console.log("init");

return scbi.app.start();
});
goog.exportSymbol('scbi.app.init', scbi.app.init);
scbi.app.stop = (function scbi$app$stop(){
return console.log("stop");
});

//# sourceMappingURL=scbi.app.js.map
