goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_36447 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_36447(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_36448 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_36448(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__35750 = coll;
var G__35751 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__35750,G__35751) : shadow.dom.lazy_native_coll_seq.call(null,G__35750,G__35751));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4212__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__35754 = arguments.length;
switch (G__35754) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__35756 = arguments.length;
switch (G__35756) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__35758 = arguments.length;
switch (G__35758) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__35764 = arguments.length;
switch (G__35764) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__35786 = arguments.length;
switch (G__35786) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__35808 = arguments.length;
switch (G__35808) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e35824){if((e35824 instanceof Object)){
var e = e35824;
return console.log("didnt support attachEvent",el,e);
} else {
throw e35824;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__35825 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__35826 = null;
var count__35827 = (0);
var i__35828 = (0);
while(true){
if((i__35828 < count__35827)){
var el = chunk__35826.cljs$core$IIndexed$_nth$arity$2(null,i__35828);
var handler_36455__$1 = ((function (seq__35825,chunk__35826,count__35827,i__35828,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35825,chunk__35826,count__35827,i__35828,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36455__$1);


var G__36456 = seq__35825;
var G__36457 = chunk__35826;
var G__36458 = count__35827;
var G__36459 = (i__35828 + (1));
seq__35825 = G__36456;
chunk__35826 = G__36457;
count__35827 = G__36458;
i__35828 = G__36459;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35825);
if(temp__5753__auto__){
var seq__35825__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35825__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35825__$1);
var G__36460 = cljs.core.chunk_rest(seq__35825__$1);
var G__36461 = c__4638__auto__;
var G__36462 = cljs.core.count(c__4638__auto__);
var G__36463 = (0);
seq__35825 = G__36460;
chunk__35826 = G__36461;
count__35827 = G__36462;
i__35828 = G__36463;
continue;
} else {
var el = cljs.core.first(seq__35825__$1);
var handler_36464__$1 = ((function (seq__35825,chunk__35826,count__35827,i__35828,el,seq__35825__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35825,chunk__35826,count__35827,i__35828,el,seq__35825__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36464__$1);


var G__36465 = cljs.core.next(seq__35825__$1);
var G__36466 = null;
var G__36467 = (0);
var G__36468 = (0);
seq__35825 = G__36465;
chunk__35826 = G__36466;
count__35827 = G__36467;
i__35828 = G__36468;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__35836 = arguments.length;
switch (G__35836) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__35853 = cljs.core.seq(events);
var chunk__35854 = null;
var count__35855 = (0);
var i__35856 = (0);
while(true){
if((i__35856 < count__35855)){
var vec__35890 = chunk__35854.cljs$core$IIndexed$_nth$arity$2(null,i__35856);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35890,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35890,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36470 = seq__35853;
var G__36471 = chunk__35854;
var G__36472 = count__35855;
var G__36473 = (i__35856 + (1));
seq__35853 = G__36470;
chunk__35854 = G__36471;
count__35855 = G__36472;
i__35856 = G__36473;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35853);
if(temp__5753__auto__){
var seq__35853__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35853__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35853__$1);
var G__36474 = cljs.core.chunk_rest(seq__35853__$1);
var G__36475 = c__4638__auto__;
var G__36476 = cljs.core.count(c__4638__auto__);
var G__36477 = (0);
seq__35853 = G__36474;
chunk__35854 = G__36475;
count__35855 = G__36476;
i__35856 = G__36477;
continue;
} else {
var vec__35905 = cljs.core.first(seq__35853__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35905,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35905,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36478 = cljs.core.next(seq__35853__$1);
var G__36479 = null;
var G__36480 = (0);
var G__36481 = (0);
seq__35853 = G__36478;
chunk__35854 = G__36479;
count__35855 = G__36480;
i__35856 = G__36481;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__35913 = cljs.core.seq(styles);
var chunk__35914 = null;
var count__35915 = (0);
var i__35916 = (0);
while(true){
if((i__35916 < count__35915)){
var vec__35935 = chunk__35914.cljs$core$IIndexed$_nth$arity$2(null,i__35916);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35935,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35935,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36482 = seq__35913;
var G__36483 = chunk__35914;
var G__36484 = count__35915;
var G__36485 = (i__35916 + (1));
seq__35913 = G__36482;
chunk__35914 = G__36483;
count__35915 = G__36484;
i__35916 = G__36485;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35913);
if(temp__5753__auto__){
var seq__35913__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35913__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35913__$1);
var G__36486 = cljs.core.chunk_rest(seq__35913__$1);
var G__36487 = c__4638__auto__;
var G__36488 = cljs.core.count(c__4638__auto__);
var G__36489 = (0);
seq__35913 = G__36486;
chunk__35914 = G__36487;
count__35915 = G__36488;
i__35916 = G__36489;
continue;
} else {
var vec__35938 = cljs.core.first(seq__35913__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35938,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35938,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36490 = cljs.core.next(seq__35913__$1);
var G__36491 = null;
var G__36492 = (0);
var G__36493 = (0);
seq__35913 = G__36490;
chunk__35914 = G__36491;
count__35915 = G__36492;
i__35916 = G__36493;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__35941_36494 = key;
var G__35941_36495__$1 = (((G__35941_36494 instanceof cljs.core.Keyword))?G__35941_36494.fqn:null);
switch (G__35941_36495__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_36497 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4212__auto__ = goog.string.startsWith(ks_36497,"data-");
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return goog.string.startsWith(ks_36497,"aria-");
}
})())){
el.setAttribute(ks_36497,value);
} else {
(el[ks_36497] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35946){
var map__35947 = p__35946;
var map__35947__$1 = cljs.core.__destructure_map(map__35947);
var props = map__35947__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35947__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35948 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35948,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35948,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35948,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35951 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35951,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35951;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35955 = arguments.length;
switch (G__35955) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35959){
var vec__35960 = p__35959;
var seq__35961 = cljs.core.seq(vec__35960);
var first__35962 = cljs.core.first(seq__35961);
var seq__35961__$1 = cljs.core.next(seq__35961);
var nn = first__35962;
var first__35962__$1 = cljs.core.first(seq__35961__$1);
var seq__35961__$2 = cljs.core.next(seq__35961__$1);
var np = first__35962__$1;
var nc = seq__35961__$2;
var node = vec__35960;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35963 = nn;
var G__35964 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35963,G__35964) : create_fn.call(null,G__35963,G__35964));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35965 = nn;
var G__35966 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35965,G__35966) : create_fn.call(null,G__35965,G__35966));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35967 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35967,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35967,(1),null);
var seq__35971_36499 = cljs.core.seq(node_children);
var chunk__35972_36500 = null;
var count__35973_36501 = (0);
var i__35974_36502 = (0);
while(true){
if((i__35974_36502 < count__35973_36501)){
var child_struct_36503 = chunk__35972_36500.cljs$core$IIndexed$_nth$arity$2(null,i__35974_36502);
var children_36504 = shadow.dom.dom_node(child_struct_36503);
if(cljs.core.seq_QMARK_(children_36504)){
var seq__36021_36505 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36504));
var chunk__36023_36506 = null;
var count__36024_36507 = (0);
var i__36025_36508 = (0);
while(true){
if((i__36025_36508 < count__36024_36507)){
var child_36509 = chunk__36023_36506.cljs$core$IIndexed$_nth$arity$2(null,i__36025_36508);
if(cljs.core.truth_(child_36509)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36509);


var G__36510 = seq__36021_36505;
var G__36511 = chunk__36023_36506;
var G__36512 = count__36024_36507;
var G__36513 = (i__36025_36508 + (1));
seq__36021_36505 = G__36510;
chunk__36023_36506 = G__36511;
count__36024_36507 = G__36512;
i__36025_36508 = G__36513;
continue;
} else {
var G__36514 = seq__36021_36505;
var G__36515 = chunk__36023_36506;
var G__36516 = count__36024_36507;
var G__36517 = (i__36025_36508 + (1));
seq__36021_36505 = G__36514;
chunk__36023_36506 = G__36515;
count__36024_36507 = G__36516;
i__36025_36508 = G__36517;
continue;
}
} else {
var temp__5753__auto___36518 = cljs.core.seq(seq__36021_36505);
if(temp__5753__auto___36518){
var seq__36021_36519__$1 = temp__5753__auto___36518;
if(cljs.core.chunked_seq_QMARK_(seq__36021_36519__$1)){
var c__4638__auto___36520 = cljs.core.chunk_first(seq__36021_36519__$1);
var G__36521 = cljs.core.chunk_rest(seq__36021_36519__$1);
var G__36522 = c__4638__auto___36520;
var G__36523 = cljs.core.count(c__4638__auto___36520);
var G__36524 = (0);
seq__36021_36505 = G__36521;
chunk__36023_36506 = G__36522;
count__36024_36507 = G__36523;
i__36025_36508 = G__36524;
continue;
} else {
var child_36525 = cljs.core.first(seq__36021_36519__$1);
if(cljs.core.truth_(child_36525)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36525);


var G__36526 = cljs.core.next(seq__36021_36519__$1);
var G__36527 = null;
var G__36528 = (0);
var G__36529 = (0);
seq__36021_36505 = G__36526;
chunk__36023_36506 = G__36527;
count__36024_36507 = G__36528;
i__36025_36508 = G__36529;
continue;
} else {
var G__36530 = cljs.core.next(seq__36021_36519__$1);
var G__36531 = null;
var G__36532 = (0);
var G__36533 = (0);
seq__36021_36505 = G__36530;
chunk__36023_36506 = G__36531;
count__36024_36507 = G__36532;
i__36025_36508 = G__36533;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36504);
}


var G__36534 = seq__35971_36499;
var G__36535 = chunk__35972_36500;
var G__36536 = count__35973_36501;
var G__36537 = (i__35974_36502 + (1));
seq__35971_36499 = G__36534;
chunk__35972_36500 = G__36535;
count__35973_36501 = G__36536;
i__35974_36502 = G__36537;
continue;
} else {
var temp__5753__auto___36538 = cljs.core.seq(seq__35971_36499);
if(temp__5753__auto___36538){
var seq__35971_36539__$1 = temp__5753__auto___36538;
if(cljs.core.chunked_seq_QMARK_(seq__35971_36539__$1)){
var c__4638__auto___36540 = cljs.core.chunk_first(seq__35971_36539__$1);
var G__36541 = cljs.core.chunk_rest(seq__35971_36539__$1);
var G__36542 = c__4638__auto___36540;
var G__36543 = cljs.core.count(c__4638__auto___36540);
var G__36544 = (0);
seq__35971_36499 = G__36541;
chunk__35972_36500 = G__36542;
count__35973_36501 = G__36543;
i__35974_36502 = G__36544;
continue;
} else {
var child_struct_36545 = cljs.core.first(seq__35971_36539__$1);
var children_36546 = shadow.dom.dom_node(child_struct_36545);
if(cljs.core.seq_QMARK_(children_36546)){
var seq__36047_36547 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36546));
var chunk__36049_36548 = null;
var count__36050_36549 = (0);
var i__36051_36550 = (0);
while(true){
if((i__36051_36550 < count__36050_36549)){
var child_36551 = chunk__36049_36548.cljs$core$IIndexed$_nth$arity$2(null,i__36051_36550);
if(cljs.core.truth_(child_36551)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36551);


var G__36552 = seq__36047_36547;
var G__36553 = chunk__36049_36548;
var G__36554 = count__36050_36549;
var G__36555 = (i__36051_36550 + (1));
seq__36047_36547 = G__36552;
chunk__36049_36548 = G__36553;
count__36050_36549 = G__36554;
i__36051_36550 = G__36555;
continue;
} else {
var G__36556 = seq__36047_36547;
var G__36557 = chunk__36049_36548;
var G__36558 = count__36050_36549;
var G__36559 = (i__36051_36550 + (1));
seq__36047_36547 = G__36556;
chunk__36049_36548 = G__36557;
count__36050_36549 = G__36558;
i__36051_36550 = G__36559;
continue;
}
} else {
var temp__5753__auto___36560__$1 = cljs.core.seq(seq__36047_36547);
if(temp__5753__auto___36560__$1){
var seq__36047_36561__$1 = temp__5753__auto___36560__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36047_36561__$1)){
var c__4638__auto___36562 = cljs.core.chunk_first(seq__36047_36561__$1);
var G__36563 = cljs.core.chunk_rest(seq__36047_36561__$1);
var G__36564 = c__4638__auto___36562;
var G__36565 = cljs.core.count(c__4638__auto___36562);
var G__36566 = (0);
seq__36047_36547 = G__36563;
chunk__36049_36548 = G__36564;
count__36050_36549 = G__36565;
i__36051_36550 = G__36566;
continue;
} else {
var child_36567 = cljs.core.first(seq__36047_36561__$1);
if(cljs.core.truth_(child_36567)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36567);


var G__36568 = cljs.core.next(seq__36047_36561__$1);
var G__36569 = null;
var G__36570 = (0);
var G__36571 = (0);
seq__36047_36547 = G__36568;
chunk__36049_36548 = G__36569;
count__36050_36549 = G__36570;
i__36051_36550 = G__36571;
continue;
} else {
var G__36572 = cljs.core.next(seq__36047_36561__$1);
var G__36573 = null;
var G__36574 = (0);
var G__36575 = (0);
seq__36047_36547 = G__36572;
chunk__36049_36548 = G__36573;
count__36050_36549 = G__36574;
i__36051_36550 = G__36575;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36546);
}


var G__36576 = cljs.core.next(seq__35971_36539__$1);
var G__36577 = null;
var G__36578 = (0);
var G__36579 = (0);
seq__35971_36499 = G__36576;
chunk__35972_36500 = G__36577;
count__35973_36501 = G__36578;
i__35974_36502 = G__36579;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__36063 = cljs.core.seq(node);
var chunk__36064 = null;
var count__36065 = (0);
var i__36066 = (0);
while(true){
if((i__36066 < count__36065)){
var n = chunk__36064.cljs$core$IIndexed$_nth$arity$2(null,i__36066);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36580 = seq__36063;
var G__36581 = chunk__36064;
var G__36582 = count__36065;
var G__36583 = (i__36066 + (1));
seq__36063 = G__36580;
chunk__36064 = G__36581;
count__36065 = G__36582;
i__36066 = G__36583;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36063);
if(temp__5753__auto__){
var seq__36063__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36063__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__36063__$1);
var G__36584 = cljs.core.chunk_rest(seq__36063__$1);
var G__36585 = c__4638__auto__;
var G__36586 = cljs.core.count(c__4638__auto__);
var G__36587 = (0);
seq__36063 = G__36584;
chunk__36064 = G__36585;
count__36065 = G__36586;
i__36066 = G__36587;
continue;
} else {
var n = cljs.core.first(seq__36063__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36588 = cljs.core.next(seq__36063__$1);
var G__36589 = null;
var G__36590 = (0);
var G__36591 = (0);
seq__36063 = G__36588;
chunk__36064 = G__36589;
count__36065 = G__36590;
i__36066 = G__36591;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__36074 = arguments.length;
switch (G__36074) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__36076 = arguments.length;
switch (G__36076) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__36090 = arguments.length;
switch (G__36090) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4212__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4824__auto__ = [];
var len__4818__auto___36597 = arguments.length;
var i__4819__auto___36598 = (0);
while(true){
if((i__4819__auto___36598 < len__4818__auto___36597)){
args__4824__auto__.push((arguments[i__4819__auto___36598]));

var G__36599 = (i__4819__auto___36598 + (1));
i__4819__auto___36598 = G__36599;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__36092_36600 = cljs.core.seq(nodes);
var chunk__36093_36601 = null;
var count__36094_36602 = (0);
var i__36095_36603 = (0);
while(true){
if((i__36095_36603 < count__36094_36602)){
var node_36604 = chunk__36093_36601.cljs$core$IIndexed$_nth$arity$2(null,i__36095_36603);
fragment.appendChild(shadow.dom._to_dom(node_36604));


var G__36605 = seq__36092_36600;
var G__36606 = chunk__36093_36601;
var G__36607 = count__36094_36602;
var G__36608 = (i__36095_36603 + (1));
seq__36092_36600 = G__36605;
chunk__36093_36601 = G__36606;
count__36094_36602 = G__36607;
i__36095_36603 = G__36608;
continue;
} else {
var temp__5753__auto___36609 = cljs.core.seq(seq__36092_36600);
if(temp__5753__auto___36609){
var seq__36092_36610__$1 = temp__5753__auto___36609;
if(cljs.core.chunked_seq_QMARK_(seq__36092_36610__$1)){
var c__4638__auto___36611 = cljs.core.chunk_first(seq__36092_36610__$1);
var G__36612 = cljs.core.chunk_rest(seq__36092_36610__$1);
var G__36613 = c__4638__auto___36611;
var G__36614 = cljs.core.count(c__4638__auto___36611);
var G__36615 = (0);
seq__36092_36600 = G__36612;
chunk__36093_36601 = G__36613;
count__36094_36602 = G__36614;
i__36095_36603 = G__36615;
continue;
} else {
var node_36616 = cljs.core.first(seq__36092_36610__$1);
fragment.appendChild(shadow.dom._to_dom(node_36616));


var G__36617 = cljs.core.next(seq__36092_36610__$1);
var G__36618 = null;
var G__36619 = (0);
var G__36620 = (0);
seq__36092_36600 = G__36617;
chunk__36093_36601 = G__36618;
count__36094_36602 = G__36619;
i__36095_36603 = G__36620;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq36091){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36091));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__36102_36621 = cljs.core.seq(scripts);
var chunk__36103_36622 = null;
var count__36104_36623 = (0);
var i__36105_36624 = (0);
while(true){
if((i__36105_36624 < count__36104_36623)){
var vec__36125_36625 = chunk__36103_36622.cljs$core$IIndexed$_nth$arity$2(null,i__36105_36624);
var script_tag_36626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36125_36625,(0),null);
var script_body_36627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36125_36625,(1),null);
eval(script_body_36627);


var G__36628 = seq__36102_36621;
var G__36629 = chunk__36103_36622;
var G__36630 = count__36104_36623;
var G__36631 = (i__36105_36624 + (1));
seq__36102_36621 = G__36628;
chunk__36103_36622 = G__36629;
count__36104_36623 = G__36630;
i__36105_36624 = G__36631;
continue;
} else {
var temp__5753__auto___36632 = cljs.core.seq(seq__36102_36621);
if(temp__5753__auto___36632){
var seq__36102_36633__$1 = temp__5753__auto___36632;
if(cljs.core.chunked_seq_QMARK_(seq__36102_36633__$1)){
var c__4638__auto___36634 = cljs.core.chunk_first(seq__36102_36633__$1);
var G__36635 = cljs.core.chunk_rest(seq__36102_36633__$1);
var G__36636 = c__4638__auto___36634;
var G__36637 = cljs.core.count(c__4638__auto___36634);
var G__36638 = (0);
seq__36102_36621 = G__36635;
chunk__36103_36622 = G__36636;
count__36104_36623 = G__36637;
i__36105_36624 = G__36638;
continue;
} else {
var vec__36131_36639 = cljs.core.first(seq__36102_36633__$1);
var script_tag_36640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36131_36639,(0),null);
var script_body_36641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36131_36639,(1),null);
eval(script_body_36641);


var G__36642 = cljs.core.next(seq__36102_36633__$1);
var G__36643 = null;
var G__36644 = (0);
var G__36645 = (0);
seq__36102_36621 = G__36642;
chunk__36103_36622 = G__36643;
count__36104_36623 = G__36644;
i__36105_36624 = G__36645;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__36135){
var vec__36136 = p__36135;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36136,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36136,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__36140 = arguments.length;
switch (G__36140) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__36147 = cljs.core.seq(style_keys);
var chunk__36148 = null;
var count__36149 = (0);
var i__36150 = (0);
while(true){
if((i__36150 < count__36149)){
var it = chunk__36148.cljs$core$IIndexed$_nth$arity$2(null,i__36150);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36648 = seq__36147;
var G__36649 = chunk__36148;
var G__36650 = count__36149;
var G__36651 = (i__36150 + (1));
seq__36147 = G__36648;
chunk__36148 = G__36649;
count__36149 = G__36650;
i__36150 = G__36651;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36147);
if(temp__5753__auto__){
var seq__36147__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36147__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__36147__$1);
var G__36652 = cljs.core.chunk_rest(seq__36147__$1);
var G__36653 = c__4638__auto__;
var G__36654 = cljs.core.count(c__4638__auto__);
var G__36655 = (0);
seq__36147 = G__36652;
chunk__36148 = G__36653;
count__36149 = G__36654;
i__36150 = G__36655;
continue;
} else {
var it = cljs.core.first(seq__36147__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36656 = cljs.core.next(seq__36147__$1);
var G__36657 = null;
var G__36658 = (0);
var G__36659 = (0);
seq__36147 = G__36656;
chunk__36148 = G__36657;
count__36149 = G__36658;
i__36150 = G__36659;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k36164,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__36177 = k36164;
var G__36177__$1 = (((G__36177 instanceof cljs.core.Keyword))?G__36177.fqn:null);
switch (G__36177__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36164,else__4464__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__36181){
var vec__36182 = p__36181;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36182,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36182,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36163){
var self__ = this;
var G__36163__$1 = this;
return (new cljs.core.RecordIter((0),G__36163__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36165,other36166){
var self__ = this;
var this36165__$1 = this;
return (((!((other36166 == null)))) && ((((this36165__$1.constructor === other36166.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36165__$1.x,other36166.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36165__$1.y,other36166.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36165__$1.__extmap,other36166.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k36164){
var self__ = this;
var this__4468__auto____$1 = this;
var G__36203 = k36164;
var G__36203__$1 = (((G__36203 instanceof cljs.core.Keyword))?G__36203.fqn:null);
switch (G__36203__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k36164);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__36163){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__36207 = cljs.core.keyword_identical_QMARK_;
var expr__36208 = k__4470__auto__;
if(cljs.core.truth_((pred__36207.cljs$core$IFn$_invoke$arity$2 ? pred__36207.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__36208) : pred__36207.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__36208)))){
return (new shadow.dom.Coordinate(G__36163,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36207.cljs$core$IFn$_invoke$arity$2 ? pred__36207.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__36208) : pred__36207.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__36208)))){
return (new shadow.dom.Coordinate(self__.x,G__36163,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__36163),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__36163){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__36163,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__36170){
var extmap__4501__auto__ = (function (){var G__36216 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36170,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__36170)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36216);
} else {
return G__36216;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__36170),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__36170),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k36222,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__36242 = k36222;
var G__36242__$1 = (((G__36242 instanceof cljs.core.Keyword))?G__36242.fqn:null);
switch (G__36242__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36222,else__4464__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__36248){
var vec__36250 = p__36248;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36250,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36250,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Size{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36221){
var self__ = this;
var G__36221__$1 = this;
return (new cljs.core.RecordIter((0),G__36221__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36223,other36224){
var self__ = this;
var this36223__$1 = this;
return (((!((other36224 == null)))) && ((((this36223__$1.constructor === other36224.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36223__$1.w,other36224.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36223__$1.h,other36224.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36223__$1.__extmap,other36224.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k36222){
var self__ = this;
var this__4468__auto____$1 = this;
var G__36265 = k36222;
var G__36265__$1 = (((G__36265 instanceof cljs.core.Keyword))?G__36265.fqn:null);
switch (G__36265__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k36222);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__36221){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__36266 = cljs.core.keyword_identical_QMARK_;
var expr__36267 = k__4470__auto__;
if(cljs.core.truth_((pred__36266.cljs$core$IFn$_invoke$arity$2 ? pred__36266.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__36267) : pred__36266.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__36267)))){
return (new shadow.dom.Size(G__36221,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36266.cljs$core$IFn$_invoke$arity$2 ? pred__36266.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__36267) : pred__36266.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__36267)))){
return (new shadow.dom.Size(self__.w,G__36221,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__36221),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__36221){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__36221,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__36236){
var extmap__4501__auto__ = (function (){var G__36291 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36236,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__36236)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36291);
} else {
return G__36291;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__36236),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__36236),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4692__auto__ = opts;
var l__4693__auto__ = a__4692__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4693__auto__)){
var G__36672 = (i + (1));
var G__36673 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36672;
ret = G__36673;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36327){
var vec__36328 = p__36327;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36328,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36328,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__36336 = arguments.length;
switch (G__36336) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__36678 = ps;
var G__36679 = (i + (1));
el__$1 = G__36678;
i = G__36679;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__36378 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36378,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36378,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36378,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__36381_36680 = cljs.core.seq(props);
var chunk__36382_36681 = null;
var count__36383_36682 = (0);
var i__36384_36683 = (0);
while(true){
if((i__36384_36683 < count__36383_36682)){
var vec__36391_36684 = chunk__36382_36681.cljs$core$IIndexed$_nth$arity$2(null,i__36384_36683);
var k_36685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36391_36684,(0),null);
var v_36686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36391_36684,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_36685);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36685),v_36686);


var G__36687 = seq__36381_36680;
var G__36688 = chunk__36382_36681;
var G__36689 = count__36383_36682;
var G__36690 = (i__36384_36683 + (1));
seq__36381_36680 = G__36687;
chunk__36382_36681 = G__36688;
count__36383_36682 = G__36689;
i__36384_36683 = G__36690;
continue;
} else {
var temp__5753__auto___36691 = cljs.core.seq(seq__36381_36680);
if(temp__5753__auto___36691){
var seq__36381_36692__$1 = temp__5753__auto___36691;
if(cljs.core.chunked_seq_QMARK_(seq__36381_36692__$1)){
var c__4638__auto___36693 = cljs.core.chunk_first(seq__36381_36692__$1);
var G__36694 = cljs.core.chunk_rest(seq__36381_36692__$1);
var G__36695 = c__4638__auto___36693;
var G__36696 = cljs.core.count(c__4638__auto___36693);
var G__36697 = (0);
seq__36381_36680 = G__36694;
chunk__36382_36681 = G__36695;
count__36383_36682 = G__36696;
i__36384_36683 = G__36697;
continue;
} else {
var vec__36394_36698 = cljs.core.first(seq__36381_36692__$1);
var k_36699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36394_36698,(0),null);
var v_36700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36394_36698,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_36699);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36699),v_36700);


var G__36701 = cljs.core.next(seq__36381_36692__$1);
var G__36702 = null;
var G__36703 = (0);
var G__36704 = (0);
seq__36381_36680 = G__36701;
chunk__36382_36681 = G__36702;
count__36383_36682 = G__36703;
i__36384_36683 = G__36704;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__36398 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36398,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36398,(1),null);
var seq__36401_36708 = cljs.core.seq(node_children);
var chunk__36403_36709 = null;
var count__36404_36710 = (0);
var i__36405_36711 = (0);
while(true){
if((i__36405_36711 < count__36404_36710)){
var child_struct_36712 = chunk__36403_36709.cljs$core$IIndexed$_nth$arity$2(null,i__36405_36711);
if((!((child_struct_36712 == null)))){
if(typeof child_struct_36712 === 'string'){
var text_36713 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36713),child_struct_36712].join(''));
} else {
var children_36714 = shadow.dom.svg_node(child_struct_36712);
if(cljs.core.seq_QMARK_(children_36714)){
var seq__36419_36715 = cljs.core.seq(children_36714);
var chunk__36421_36716 = null;
var count__36422_36717 = (0);
var i__36423_36718 = (0);
while(true){
if((i__36423_36718 < count__36422_36717)){
var child_36719 = chunk__36421_36716.cljs$core$IIndexed$_nth$arity$2(null,i__36423_36718);
if(cljs.core.truth_(child_36719)){
node.appendChild(child_36719);


var G__36720 = seq__36419_36715;
var G__36721 = chunk__36421_36716;
var G__36722 = count__36422_36717;
var G__36723 = (i__36423_36718 + (1));
seq__36419_36715 = G__36720;
chunk__36421_36716 = G__36721;
count__36422_36717 = G__36722;
i__36423_36718 = G__36723;
continue;
} else {
var G__36724 = seq__36419_36715;
var G__36725 = chunk__36421_36716;
var G__36726 = count__36422_36717;
var G__36727 = (i__36423_36718 + (1));
seq__36419_36715 = G__36724;
chunk__36421_36716 = G__36725;
count__36422_36717 = G__36726;
i__36423_36718 = G__36727;
continue;
}
} else {
var temp__5753__auto___36728 = cljs.core.seq(seq__36419_36715);
if(temp__5753__auto___36728){
var seq__36419_36729__$1 = temp__5753__auto___36728;
if(cljs.core.chunked_seq_QMARK_(seq__36419_36729__$1)){
var c__4638__auto___36730 = cljs.core.chunk_first(seq__36419_36729__$1);
var G__36731 = cljs.core.chunk_rest(seq__36419_36729__$1);
var G__36732 = c__4638__auto___36730;
var G__36733 = cljs.core.count(c__4638__auto___36730);
var G__36734 = (0);
seq__36419_36715 = G__36731;
chunk__36421_36716 = G__36732;
count__36422_36717 = G__36733;
i__36423_36718 = G__36734;
continue;
} else {
var child_36735 = cljs.core.first(seq__36419_36729__$1);
if(cljs.core.truth_(child_36735)){
node.appendChild(child_36735);


var G__36736 = cljs.core.next(seq__36419_36729__$1);
var G__36737 = null;
var G__36738 = (0);
var G__36739 = (0);
seq__36419_36715 = G__36736;
chunk__36421_36716 = G__36737;
count__36422_36717 = G__36738;
i__36423_36718 = G__36739;
continue;
} else {
var G__36740 = cljs.core.next(seq__36419_36729__$1);
var G__36741 = null;
var G__36742 = (0);
var G__36743 = (0);
seq__36419_36715 = G__36740;
chunk__36421_36716 = G__36741;
count__36422_36717 = G__36742;
i__36423_36718 = G__36743;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36714);
}
}


var G__36744 = seq__36401_36708;
var G__36745 = chunk__36403_36709;
var G__36746 = count__36404_36710;
var G__36747 = (i__36405_36711 + (1));
seq__36401_36708 = G__36744;
chunk__36403_36709 = G__36745;
count__36404_36710 = G__36746;
i__36405_36711 = G__36747;
continue;
} else {
var G__36748 = seq__36401_36708;
var G__36749 = chunk__36403_36709;
var G__36750 = count__36404_36710;
var G__36751 = (i__36405_36711 + (1));
seq__36401_36708 = G__36748;
chunk__36403_36709 = G__36749;
count__36404_36710 = G__36750;
i__36405_36711 = G__36751;
continue;
}
} else {
var temp__5753__auto___36752 = cljs.core.seq(seq__36401_36708);
if(temp__5753__auto___36752){
var seq__36401_36753__$1 = temp__5753__auto___36752;
if(cljs.core.chunked_seq_QMARK_(seq__36401_36753__$1)){
var c__4638__auto___36754 = cljs.core.chunk_first(seq__36401_36753__$1);
var G__36755 = cljs.core.chunk_rest(seq__36401_36753__$1);
var G__36756 = c__4638__auto___36754;
var G__36757 = cljs.core.count(c__4638__auto___36754);
var G__36758 = (0);
seq__36401_36708 = G__36755;
chunk__36403_36709 = G__36756;
count__36404_36710 = G__36757;
i__36405_36711 = G__36758;
continue;
} else {
var child_struct_36763 = cljs.core.first(seq__36401_36753__$1);
if((!((child_struct_36763 == null)))){
if(typeof child_struct_36763 === 'string'){
var text_36764 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36764),child_struct_36763].join(''));
} else {
var children_36765 = shadow.dom.svg_node(child_struct_36763);
if(cljs.core.seq_QMARK_(children_36765)){
var seq__36425_36766 = cljs.core.seq(children_36765);
var chunk__36427_36767 = null;
var count__36428_36768 = (0);
var i__36429_36769 = (0);
while(true){
if((i__36429_36769 < count__36428_36768)){
var child_36770 = chunk__36427_36767.cljs$core$IIndexed$_nth$arity$2(null,i__36429_36769);
if(cljs.core.truth_(child_36770)){
node.appendChild(child_36770);


var G__36771 = seq__36425_36766;
var G__36772 = chunk__36427_36767;
var G__36773 = count__36428_36768;
var G__36774 = (i__36429_36769 + (1));
seq__36425_36766 = G__36771;
chunk__36427_36767 = G__36772;
count__36428_36768 = G__36773;
i__36429_36769 = G__36774;
continue;
} else {
var G__36775 = seq__36425_36766;
var G__36776 = chunk__36427_36767;
var G__36777 = count__36428_36768;
var G__36778 = (i__36429_36769 + (1));
seq__36425_36766 = G__36775;
chunk__36427_36767 = G__36776;
count__36428_36768 = G__36777;
i__36429_36769 = G__36778;
continue;
}
} else {
var temp__5753__auto___36779__$1 = cljs.core.seq(seq__36425_36766);
if(temp__5753__auto___36779__$1){
var seq__36425_36780__$1 = temp__5753__auto___36779__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36425_36780__$1)){
var c__4638__auto___36781 = cljs.core.chunk_first(seq__36425_36780__$1);
var G__36782 = cljs.core.chunk_rest(seq__36425_36780__$1);
var G__36783 = c__4638__auto___36781;
var G__36784 = cljs.core.count(c__4638__auto___36781);
var G__36785 = (0);
seq__36425_36766 = G__36782;
chunk__36427_36767 = G__36783;
count__36428_36768 = G__36784;
i__36429_36769 = G__36785;
continue;
} else {
var child_36786 = cljs.core.first(seq__36425_36780__$1);
if(cljs.core.truth_(child_36786)){
node.appendChild(child_36786);


var G__36787 = cljs.core.next(seq__36425_36780__$1);
var G__36788 = null;
var G__36789 = (0);
var G__36790 = (0);
seq__36425_36766 = G__36787;
chunk__36427_36767 = G__36788;
count__36428_36768 = G__36789;
i__36429_36769 = G__36790;
continue;
} else {
var G__36791 = cljs.core.next(seq__36425_36780__$1);
var G__36792 = null;
var G__36793 = (0);
var G__36794 = (0);
seq__36425_36766 = G__36791;
chunk__36427_36767 = G__36792;
count__36428_36768 = G__36793;
i__36429_36769 = G__36794;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36765);
}
}


var G__36795 = cljs.core.next(seq__36401_36753__$1);
var G__36796 = null;
var G__36797 = (0);
var G__36798 = (0);
seq__36401_36708 = G__36795;
chunk__36403_36709 = G__36796;
count__36404_36710 = G__36797;
i__36405_36711 = G__36798;
continue;
} else {
var G__36799 = cljs.core.next(seq__36401_36753__$1);
var G__36800 = null;
var G__36801 = (0);
var G__36802 = (0);
seq__36401_36708 = G__36799;
chunk__36403_36709 = G__36800;
count__36404_36710 = G__36801;
i__36405_36711 = G__36802;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___36803 = arguments.length;
var i__4819__auto___36804 = (0);
while(true){
if((i__4819__auto___36804 < len__4818__auto___36803)){
args__4824__auto__.push((arguments[i__4819__auto___36804]));

var G__36805 = (i__4819__auto___36804 + (1));
i__4819__auto___36804 = G__36805;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq36431){
var G__36432 = cljs.core.first(seq36431);
var seq36431__$1 = cljs.core.next(seq36431);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36432,seq36431__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__36434 = arguments.length;
switch (G__36434) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4210__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4210__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4210__auto__;
}
})())){
var c__33683__auto___36807 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33684__auto__ = (function (){var switch__33599__auto__ = (function (state_36439){
var state_val_36440 = (state_36439[(1)]);
if((state_val_36440 === (1))){
var state_36439__$1 = state_36439;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36439__$1,(2),once_or_cleanup);
} else {
if((state_val_36440 === (2))){
var inst_36436 = (state_36439[(2)]);
var inst_36437 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_36439__$1 = (function (){var statearr_36441 = state_36439;
(statearr_36441[(7)] = inst_36436);

return statearr_36441;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36439__$1,inst_36437);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__33600__auto__ = null;
var shadow$dom$state_machine__33600__auto____0 = (function (){
var statearr_36442 = [null,null,null,null,null,null,null,null];
(statearr_36442[(0)] = shadow$dom$state_machine__33600__auto__);

(statearr_36442[(1)] = (1));

return statearr_36442;
});
var shadow$dom$state_machine__33600__auto____1 = (function (state_36439){
while(true){
var ret_value__33601__auto__ = (function (){try{while(true){
var result__33602__auto__ = switch__33599__auto__(state_36439);
if(cljs.core.keyword_identical_QMARK_(result__33602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33602__auto__;
}
break;
}
}catch (e36443){var ex__33603__auto__ = e36443;
var statearr_36444_36808 = state_36439;
(statearr_36444_36808[(2)] = ex__33603__auto__);


if(cljs.core.seq((state_36439[(4)]))){
var statearr_36445_36809 = state_36439;
(statearr_36445_36809[(1)] = cljs.core.first((state_36439[(4)])));

} else {
throw ex__33603__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36810 = state_36439;
state_36439 = G__36810;
continue;
} else {
return ret_value__33601__auto__;
}
break;
}
});
shadow$dom$state_machine__33600__auto__ = function(state_36439){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33600__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33600__auto____1.call(this,state_36439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33600__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33600__auto____0;
shadow$dom$state_machine__33600__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33600__auto____1;
return shadow$dom$state_machine__33600__auto__;
})()
})();
var state__33685__auto__ = (function (){var statearr_36446 = f__33684__auto__();
(statearr_36446[(6)] = c__33683__auto___36807);

return statearr_36446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33685__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
