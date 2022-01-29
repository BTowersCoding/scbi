goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___39333 = arguments.length;
var i__4819__auto___39334 = (0);
while(true){
if((i__4819__auto___39334 < len__4818__auto___39333)){
args__4824__auto__.push((arguments[i__4819__auto___39334]));

var G__39335 = (i__4819__auto___39334 + (1));
i__4819__auto___39334 = G__39335;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq39155){
var G__39156 = cljs.core.first(seq39155);
var seq39155__$1 = cljs.core.next(seq39155);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39156,seq39155__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__39163 = cljs.core.seq(sources);
var chunk__39164 = null;
var count__39165 = (0);
var i__39166 = (0);
while(true){
if((i__39166 < count__39165)){
var map__39171 = chunk__39164.cljs$core$IIndexed$_nth$arity$2(null,i__39166);
var map__39171__$1 = cljs.core.__destructure_map(map__39171);
var src = map__39171__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39171__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39171__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39171__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39171__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e39172){var e_39336 = e39172;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39336);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39336.message)].join('')));
}

var G__39337 = seq__39163;
var G__39338 = chunk__39164;
var G__39339 = count__39165;
var G__39340 = (i__39166 + (1));
seq__39163 = G__39337;
chunk__39164 = G__39338;
count__39165 = G__39339;
i__39166 = G__39340;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39163);
if(temp__5753__auto__){
var seq__39163__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39163__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__39163__$1);
var G__39341 = cljs.core.chunk_rest(seq__39163__$1);
var G__39342 = c__4638__auto__;
var G__39343 = cljs.core.count(c__4638__auto__);
var G__39344 = (0);
seq__39163 = G__39341;
chunk__39164 = G__39342;
count__39165 = G__39343;
i__39166 = G__39344;
continue;
} else {
var map__39173 = cljs.core.first(seq__39163__$1);
var map__39173__$1 = cljs.core.__destructure_map(map__39173);
var src = map__39173__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39173__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39173__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39173__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39173__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e39174){var e_39345 = e39174;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39345);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39345.message)].join('')));
}

var G__39346 = cljs.core.next(seq__39163__$1);
var G__39347 = null;
var G__39348 = (0);
var G__39349 = (0);
seq__39163 = G__39346;
chunk__39164 = G__39347;
count__39165 = G__39348;
i__39166 = G__39349;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__39178 = cljs.core.seq(js_requires);
var chunk__39179 = null;
var count__39180 = (0);
var i__39181 = (0);
while(true){
if((i__39181 < count__39180)){
var js_ns = chunk__39179.cljs$core$IIndexed$_nth$arity$2(null,i__39181);
var require_str_39350 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39350);


var G__39351 = seq__39178;
var G__39352 = chunk__39179;
var G__39353 = count__39180;
var G__39354 = (i__39181 + (1));
seq__39178 = G__39351;
chunk__39179 = G__39352;
count__39180 = G__39353;
i__39181 = G__39354;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39178);
if(temp__5753__auto__){
var seq__39178__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39178__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__39178__$1);
var G__39355 = cljs.core.chunk_rest(seq__39178__$1);
var G__39356 = c__4638__auto__;
var G__39357 = cljs.core.count(c__4638__auto__);
var G__39358 = (0);
seq__39178 = G__39355;
chunk__39179 = G__39356;
count__39180 = G__39357;
i__39181 = G__39358;
continue;
} else {
var js_ns = cljs.core.first(seq__39178__$1);
var require_str_39359 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39359);


var G__39360 = cljs.core.next(seq__39178__$1);
var G__39361 = null;
var G__39362 = (0);
var G__39363 = (0);
seq__39178 = G__39360;
chunk__39179 = G__39361;
count__39180 = G__39362;
i__39181 = G__39363;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__39187){
var map__39188 = p__39187;
var map__39188__$1 = cljs.core.__destructure_map(map__39188);
var msg = map__39188__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39188__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39188__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39189(s__39190){
return (new cljs.core.LazySeq(null,(function (){
var s__39190__$1 = s__39190;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__39190__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__39195 = cljs.core.first(xs__6308__auto__);
var map__39195__$1 = cljs.core.__destructure_map(map__39195);
var src = map__39195__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39195__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39195__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4607__auto__ = ((function (s__39190__$1,map__39195,map__39195__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__39188,map__39188__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39189_$_iter__39191(s__39192){
return (new cljs.core.LazySeq(null,((function (s__39190__$1,map__39195,map__39195__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__39188,map__39188__$1,msg,info,reload_info){
return (function (){
var s__39192__$1 = s__39192;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__39192__$1);
if(temp__5753__auto____$1){
var s__39192__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__39192__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__39192__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__39194 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__39193 = (0);
while(true){
if((i__39193 < size__4610__auto__)){
var warning = cljs.core._nth(c__4609__auto__,i__39193);
cljs.core.chunk_append(b__39194,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__39364 = (i__39193 + (1));
i__39193 = G__39364;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39194),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39189_$_iter__39191(cljs.core.chunk_rest(s__39192__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39194),null);
}
} else {
var warning = cljs.core.first(s__39192__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39189_$_iter__39191(cljs.core.rest(s__39192__$2)));
}
} else {
return null;
}
break;
}
});})(s__39190__$1,map__39195,map__39195__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__39188,map__39188__$1,msg,info,reload_info))
,null,null));
});})(s__39190__$1,map__39195,map__39195__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__39188,map__39188__$1,msg,info,reload_info))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(warnings));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39189(cljs.core.rest(s__39190__$1)));
} else {
var G__39365 = cljs.core.rest(s__39190__$1);
s__39190__$1 = G__39365;
continue;
}
} else {
var G__39366 = cljs.core.rest(s__39190__$1);
s__39190__$1 = G__39366;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__39202_39367 = cljs.core.seq(warnings);
var chunk__39203_39368 = null;
var count__39204_39369 = (0);
var i__39205_39370 = (0);
while(true){
if((i__39205_39370 < count__39204_39369)){
var map__39208_39371 = chunk__39203_39368.cljs$core$IIndexed$_nth$arity$2(null,i__39205_39370);
var map__39208_39372__$1 = cljs.core.__destructure_map(map__39208_39371);
var w_39373 = map__39208_39372__$1;
var msg_39374__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39208_39372__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39375 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39208_39372__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39376 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39208_39372__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39377 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39208_39372__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39377)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39375),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39376),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39374__$1)].join(''));


var G__39378 = seq__39202_39367;
var G__39379 = chunk__39203_39368;
var G__39380 = count__39204_39369;
var G__39381 = (i__39205_39370 + (1));
seq__39202_39367 = G__39378;
chunk__39203_39368 = G__39379;
count__39204_39369 = G__39380;
i__39205_39370 = G__39381;
continue;
} else {
var temp__5753__auto___39407 = cljs.core.seq(seq__39202_39367);
if(temp__5753__auto___39407){
var seq__39202_39408__$1 = temp__5753__auto___39407;
if(cljs.core.chunked_seq_QMARK_(seq__39202_39408__$1)){
var c__4638__auto___39409 = cljs.core.chunk_first(seq__39202_39408__$1);
var G__39410 = cljs.core.chunk_rest(seq__39202_39408__$1);
var G__39411 = c__4638__auto___39409;
var G__39412 = cljs.core.count(c__4638__auto___39409);
var G__39413 = (0);
seq__39202_39367 = G__39410;
chunk__39203_39368 = G__39411;
count__39204_39369 = G__39412;
i__39205_39370 = G__39413;
continue;
} else {
var map__39209_39414 = cljs.core.first(seq__39202_39408__$1);
var map__39209_39415__$1 = cljs.core.__destructure_map(map__39209_39414);
var w_39416 = map__39209_39415__$1;
var msg_39417__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39209_39415__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39418 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39209_39415__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39419 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39209_39415__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39420 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39209_39415__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39420)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39418),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39419),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39417__$1)].join(''));


var G__39421 = cljs.core.next(seq__39202_39408__$1);
var G__39422 = null;
var G__39423 = (0);
var G__39424 = (0);
seq__39202_39367 = G__39421;
chunk__39203_39368 = G__39422;
count__39204_39369 = G__39423;
i__39205_39370 = G__39424;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__39186_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__39186_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4210__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4210__auto__){
var and__4210__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4210__auto____$1){
return new$;
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__39210){
var map__39211 = p__39210;
var map__39211__$1 = cljs.core.__destructure_map(map__39211);
var msg = map__39211__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39211__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__39212 = cljs.core.seq(updates);
var chunk__39214 = null;
var count__39215 = (0);
var i__39216 = (0);
while(true){
if((i__39216 < count__39215)){
var path = chunk__39214.cljs$core$IIndexed$_nth$arity$2(null,i__39216);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39258_39425 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39262_39426 = null;
var count__39263_39427 = (0);
var i__39264_39428 = (0);
while(true){
if((i__39264_39428 < count__39263_39427)){
var node_39429 = chunk__39262_39426.cljs$core$IIndexed$_nth$arity$2(null,i__39264_39428);
if(cljs.core.not(node_39429.shadow$old)){
var path_match_39430 = shadow.cljs.devtools.client.browser.match_paths(node_39429.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39430)){
var new_link_39431 = (function (){var G__39272 = node_39429.cloneNode(true);
G__39272.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39430),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39272;
})();
(node_39429.shadow$old = true);

(new_link_39431.onload = ((function (seq__39258_39425,chunk__39262_39426,count__39263_39427,i__39264_39428,seq__39212,chunk__39214,count__39215,i__39216,new_link_39431,path_match_39430,node_39429,path,map__39211,map__39211__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_39429);
});})(seq__39258_39425,chunk__39262_39426,count__39263_39427,i__39264_39428,seq__39212,chunk__39214,count__39215,i__39216,new_link_39431,path_match_39430,node_39429,path,map__39211,map__39211__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39430], 0));

goog.dom.insertSiblingAfter(new_link_39431,node_39429);


var G__39432 = seq__39258_39425;
var G__39433 = chunk__39262_39426;
var G__39434 = count__39263_39427;
var G__39435 = (i__39264_39428 + (1));
seq__39258_39425 = G__39432;
chunk__39262_39426 = G__39433;
count__39263_39427 = G__39434;
i__39264_39428 = G__39435;
continue;
} else {
var G__39436 = seq__39258_39425;
var G__39437 = chunk__39262_39426;
var G__39438 = count__39263_39427;
var G__39439 = (i__39264_39428 + (1));
seq__39258_39425 = G__39436;
chunk__39262_39426 = G__39437;
count__39263_39427 = G__39438;
i__39264_39428 = G__39439;
continue;
}
} else {
var G__39440 = seq__39258_39425;
var G__39441 = chunk__39262_39426;
var G__39442 = count__39263_39427;
var G__39443 = (i__39264_39428 + (1));
seq__39258_39425 = G__39440;
chunk__39262_39426 = G__39441;
count__39263_39427 = G__39442;
i__39264_39428 = G__39443;
continue;
}
} else {
var temp__5753__auto___39444 = cljs.core.seq(seq__39258_39425);
if(temp__5753__auto___39444){
var seq__39258_39445__$1 = temp__5753__auto___39444;
if(cljs.core.chunked_seq_QMARK_(seq__39258_39445__$1)){
var c__4638__auto___39446 = cljs.core.chunk_first(seq__39258_39445__$1);
var G__39447 = cljs.core.chunk_rest(seq__39258_39445__$1);
var G__39448 = c__4638__auto___39446;
var G__39449 = cljs.core.count(c__4638__auto___39446);
var G__39450 = (0);
seq__39258_39425 = G__39447;
chunk__39262_39426 = G__39448;
count__39263_39427 = G__39449;
i__39264_39428 = G__39450;
continue;
} else {
var node_39451 = cljs.core.first(seq__39258_39445__$1);
if(cljs.core.not(node_39451.shadow$old)){
var path_match_39452 = shadow.cljs.devtools.client.browser.match_paths(node_39451.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39452)){
var new_link_39453 = (function (){var G__39274 = node_39451.cloneNode(true);
G__39274.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39452),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39274;
})();
(node_39451.shadow$old = true);

(new_link_39453.onload = ((function (seq__39258_39425,chunk__39262_39426,count__39263_39427,i__39264_39428,seq__39212,chunk__39214,count__39215,i__39216,new_link_39453,path_match_39452,node_39451,seq__39258_39445__$1,temp__5753__auto___39444,path,map__39211,map__39211__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_39451);
});})(seq__39258_39425,chunk__39262_39426,count__39263_39427,i__39264_39428,seq__39212,chunk__39214,count__39215,i__39216,new_link_39453,path_match_39452,node_39451,seq__39258_39445__$1,temp__5753__auto___39444,path,map__39211,map__39211__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39452], 0));

goog.dom.insertSiblingAfter(new_link_39453,node_39451);


var G__39454 = cljs.core.next(seq__39258_39445__$1);
var G__39455 = null;
var G__39456 = (0);
var G__39457 = (0);
seq__39258_39425 = G__39454;
chunk__39262_39426 = G__39455;
count__39263_39427 = G__39456;
i__39264_39428 = G__39457;
continue;
} else {
var G__39458 = cljs.core.next(seq__39258_39445__$1);
var G__39459 = null;
var G__39460 = (0);
var G__39461 = (0);
seq__39258_39425 = G__39458;
chunk__39262_39426 = G__39459;
count__39263_39427 = G__39460;
i__39264_39428 = G__39461;
continue;
}
} else {
var G__39462 = cljs.core.next(seq__39258_39445__$1);
var G__39463 = null;
var G__39464 = (0);
var G__39465 = (0);
seq__39258_39425 = G__39462;
chunk__39262_39426 = G__39463;
count__39263_39427 = G__39464;
i__39264_39428 = G__39465;
continue;
}
}
} else {
}
}
break;
}


var G__39466 = seq__39212;
var G__39467 = chunk__39214;
var G__39468 = count__39215;
var G__39469 = (i__39216 + (1));
seq__39212 = G__39466;
chunk__39214 = G__39467;
count__39215 = G__39468;
i__39216 = G__39469;
continue;
} else {
var G__39470 = seq__39212;
var G__39471 = chunk__39214;
var G__39472 = count__39215;
var G__39473 = (i__39216 + (1));
seq__39212 = G__39470;
chunk__39214 = G__39471;
count__39215 = G__39472;
i__39216 = G__39473;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39212);
if(temp__5753__auto__){
var seq__39212__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39212__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__39212__$1);
var G__39474 = cljs.core.chunk_rest(seq__39212__$1);
var G__39475 = c__4638__auto__;
var G__39476 = cljs.core.count(c__4638__auto__);
var G__39477 = (0);
seq__39212 = G__39474;
chunk__39214 = G__39475;
count__39215 = G__39476;
i__39216 = G__39477;
continue;
} else {
var path = cljs.core.first(seq__39212__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39277_39478 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39281_39479 = null;
var count__39282_39480 = (0);
var i__39283_39481 = (0);
while(true){
if((i__39283_39481 < count__39282_39480)){
var node_39482 = chunk__39281_39479.cljs$core$IIndexed$_nth$arity$2(null,i__39283_39481);
if(cljs.core.not(node_39482.shadow$old)){
var path_match_39483 = shadow.cljs.devtools.client.browser.match_paths(node_39482.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39483)){
var new_link_39484 = (function (){var G__39292 = node_39482.cloneNode(true);
G__39292.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39483),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39292;
})();
(node_39482.shadow$old = true);

(new_link_39484.onload = ((function (seq__39277_39478,chunk__39281_39479,count__39282_39480,i__39283_39481,seq__39212,chunk__39214,count__39215,i__39216,new_link_39484,path_match_39483,node_39482,path,seq__39212__$1,temp__5753__auto__,map__39211,map__39211__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_39482);
});})(seq__39277_39478,chunk__39281_39479,count__39282_39480,i__39283_39481,seq__39212,chunk__39214,count__39215,i__39216,new_link_39484,path_match_39483,node_39482,path,seq__39212__$1,temp__5753__auto__,map__39211,map__39211__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39483], 0));

goog.dom.insertSiblingAfter(new_link_39484,node_39482);


var G__39485 = seq__39277_39478;
var G__39486 = chunk__39281_39479;
var G__39487 = count__39282_39480;
var G__39488 = (i__39283_39481 + (1));
seq__39277_39478 = G__39485;
chunk__39281_39479 = G__39486;
count__39282_39480 = G__39487;
i__39283_39481 = G__39488;
continue;
} else {
var G__39489 = seq__39277_39478;
var G__39490 = chunk__39281_39479;
var G__39491 = count__39282_39480;
var G__39492 = (i__39283_39481 + (1));
seq__39277_39478 = G__39489;
chunk__39281_39479 = G__39490;
count__39282_39480 = G__39491;
i__39283_39481 = G__39492;
continue;
}
} else {
var G__39493 = seq__39277_39478;
var G__39494 = chunk__39281_39479;
var G__39495 = count__39282_39480;
var G__39496 = (i__39283_39481 + (1));
seq__39277_39478 = G__39493;
chunk__39281_39479 = G__39494;
count__39282_39480 = G__39495;
i__39283_39481 = G__39496;
continue;
}
} else {
var temp__5753__auto___39497__$1 = cljs.core.seq(seq__39277_39478);
if(temp__5753__auto___39497__$1){
var seq__39277_39498__$1 = temp__5753__auto___39497__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39277_39498__$1)){
var c__4638__auto___39499 = cljs.core.chunk_first(seq__39277_39498__$1);
var G__39500 = cljs.core.chunk_rest(seq__39277_39498__$1);
var G__39501 = c__4638__auto___39499;
var G__39502 = cljs.core.count(c__4638__auto___39499);
var G__39503 = (0);
seq__39277_39478 = G__39500;
chunk__39281_39479 = G__39501;
count__39282_39480 = G__39502;
i__39283_39481 = G__39503;
continue;
} else {
var node_39504 = cljs.core.first(seq__39277_39498__$1);
if(cljs.core.not(node_39504.shadow$old)){
var path_match_39505 = shadow.cljs.devtools.client.browser.match_paths(node_39504.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39505)){
var new_link_39506 = (function (){var G__39293 = node_39504.cloneNode(true);
G__39293.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39505),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39293;
})();
(node_39504.shadow$old = true);

(new_link_39506.onload = ((function (seq__39277_39478,chunk__39281_39479,count__39282_39480,i__39283_39481,seq__39212,chunk__39214,count__39215,i__39216,new_link_39506,path_match_39505,node_39504,seq__39277_39498__$1,temp__5753__auto___39497__$1,path,seq__39212__$1,temp__5753__auto__,map__39211,map__39211__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_39504);
});})(seq__39277_39478,chunk__39281_39479,count__39282_39480,i__39283_39481,seq__39212,chunk__39214,count__39215,i__39216,new_link_39506,path_match_39505,node_39504,seq__39277_39498__$1,temp__5753__auto___39497__$1,path,seq__39212__$1,temp__5753__auto__,map__39211,map__39211__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39505], 0));

goog.dom.insertSiblingAfter(new_link_39506,node_39504);


var G__39507 = cljs.core.next(seq__39277_39498__$1);
var G__39508 = null;
var G__39509 = (0);
var G__39510 = (0);
seq__39277_39478 = G__39507;
chunk__39281_39479 = G__39508;
count__39282_39480 = G__39509;
i__39283_39481 = G__39510;
continue;
} else {
var G__39511 = cljs.core.next(seq__39277_39498__$1);
var G__39512 = null;
var G__39513 = (0);
var G__39514 = (0);
seq__39277_39478 = G__39511;
chunk__39281_39479 = G__39512;
count__39282_39480 = G__39513;
i__39283_39481 = G__39514;
continue;
}
} else {
var G__39515 = cljs.core.next(seq__39277_39498__$1);
var G__39516 = null;
var G__39517 = (0);
var G__39518 = (0);
seq__39277_39478 = G__39515;
chunk__39281_39479 = G__39516;
count__39282_39480 = G__39517;
i__39283_39481 = G__39518;
continue;
}
}
} else {
}
}
break;
}


var G__39519 = cljs.core.next(seq__39212__$1);
var G__39520 = null;
var G__39521 = (0);
var G__39522 = (0);
seq__39212 = G__39519;
chunk__39214 = G__39520;
count__39215 = G__39521;
i__39216 = G__39522;
continue;
} else {
var G__39523 = cljs.core.next(seq__39212__$1);
var G__39524 = null;
var G__39525 = (0);
var G__39526 = (0);
seq__39212 = G__39523;
chunk__39214 = G__39524;
count__39215 = G__39525;
i__39216 = G__39526;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__39295){
var map__39296 = p__39295;
var map__39296__$1 = cljs.core.__destructure_map(map__39296);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39296__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__39301){
var map__39302 = p__39301;
var map__39302__$1 = cljs.core.__destructure_map(map__39302);
var _ = map__39302__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39302__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__39303,done,error){
var map__39305 = p__39303;
var map__39305__$1 = cljs.core.__destructure_map(map__39305);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39305__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__39310,done,error){
var map__39311 = p__39310;
var map__39311__$1 = cljs.core.__destructure_map(map__39311);
var msg = map__39311__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39311__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39311__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39311__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__39314){
var map__39315 = p__39314;
var map__39315__$1 = cljs.core.__destructure_map(map__39315);
var src = map__39315__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39315__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4210__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4210__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__39320 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__39320) : done.call(null,G__39320));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__39321){
var map__39322 = p__39321;
var map__39322__$1 = cljs.core.__destructure_map(map__39322);
var msg__$1 = map__39322__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39322__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e39323){var ex = e39323;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__39324){
var map__39325 = p__39324;
var map__39325__$1 = cljs.core.__destructure_map(map__39325);
var env = map__39325__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39325__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__39327){
var map__39328 = p__39327;
var map__39328__$1 = cljs.core.__destructure_map(map__39328);
var msg = map__39328__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39328__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__39329){
var map__39330 = p__39329;
var map__39330__$1 = cljs.core.__destructure_map(map__39330);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39330__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39330__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__39331){
var map__39332 = p__39331;
var map__39332__$1 = cljs.core.__destructure_map(map__39332);
var svc = map__39332__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39332__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
