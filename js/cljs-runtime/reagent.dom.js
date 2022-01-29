goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__39773 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__39774 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__39774);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__39776 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__39777 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__39777);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__39776);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__39773);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__39785 = arguments.length;
switch (G__39785) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__39790 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39790,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39790,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__39797_39814 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__39798_39815 = null;
var count__39799_39816 = (0);
var i__39800_39817 = (0);
while(true){
if((i__39800_39817 < count__39799_39816)){
var vec__39807_39818 = chunk__39798_39815.cljs$core$IIndexed$_nth$arity$2(null,i__39800_39817);
var container_39819 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39807_39818,(0),null);
var comp_39820 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39807_39818,(1),null);
reagent.dom.re_render_component(comp_39820,container_39819);


var G__39821 = seq__39797_39814;
var G__39822 = chunk__39798_39815;
var G__39823 = count__39799_39816;
var G__39824 = (i__39800_39817 + (1));
seq__39797_39814 = G__39821;
chunk__39798_39815 = G__39822;
count__39799_39816 = G__39823;
i__39800_39817 = G__39824;
continue;
} else {
var temp__5753__auto___39825 = cljs.core.seq(seq__39797_39814);
if(temp__5753__auto___39825){
var seq__39797_39826__$1 = temp__5753__auto___39825;
if(cljs.core.chunked_seq_QMARK_(seq__39797_39826__$1)){
var c__4638__auto___39827 = cljs.core.chunk_first(seq__39797_39826__$1);
var G__39828 = cljs.core.chunk_rest(seq__39797_39826__$1);
var G__39829 = c__4638__auto___39827;
var G__39830 = cljs.core.count(c__4638__auto___39827);
var G__39831 = (0);
seq__39797_39814 = G__39828;
chunk__39798_39815 = G__39829;
count__39799_39816 = G__39830;
i__39800_39817 = G__39831;
continue;
} else {
var vec__39810_39832 = cljs.core.first(seq__39797_39826__$1);
var container_39833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39810_39832,(0),null);
var comp_39834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39810_39832,(1),null);
reagent.dom.re_render_component(comp_39834,container_39833);


var G__39835 = cljs.core.next(seq__39797_39826__$1);
var G__39836 = null;
var G__39837 = (0);
var G__39838 = (0);
seq__39797_39814 = G__39835;
chunk__39798_39815 = G__39836;
count__39799_39816 = G__39837;
i__39800_39817 = G__39838;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
