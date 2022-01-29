goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__38845,p__38846){
var map__38847 = p__38845;
var map__38847__$1 = cljs.core.__destructure_map(map__38847);
var svc = map__38847__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38847__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38847__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38847__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__38848 = p__38846;
var map__38848__$1 = cljs.core.__destructure_map(map__38848);
var msg = map__38848__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38848__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38848__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38848__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38848__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__38852,p__38853){
var map__38854 = p__38852;
var map__38854__$1 = cljs.core.__destructure_map(map__38854);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38854__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__38855 = p__38853;
var map__38855__$1 = cljs.core.__destructure_map(map__38855);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38855__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__38856,p__38857){
var map__38858 = p__38856;
var map__38858__$1 = cljs.core.__destructure_map(map__38858);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38858__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38858__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__38859 = p__38857;
var map__38859__$1 = cljs.core.__destructure_map(map__38859);
var msg = map__38859__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38859__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__38860,tid){
var map__38861 = p__38860;
var map__38861__$1 = cljs.core.__destructure_map(map__38861);
var svc = map__38861__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38861__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__38866 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__38867 = null;
var count__38868 = (0);
var i__38869 = (0);
while(true){
if((i__38869 < count__38868)){
var vec__38876 = chunk__38867.cljs$core$IIndexed$_nth$arity$2(null,i__38869);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38876,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38876,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__38896 = seq__38866;
var G__38897 = chunk__38867;
var G__38898 = count__38868;
var G__38899 = (i__38869 + (1));
seq__38866 = G__38896;
chunk__38867 = G__38897;
count__38868 = G__38898;
i__38869 = G__38899;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38866);
if(temp__5753__auto__){
var seq__38866__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38866__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__38866__$1);
var G__38900 = cljs.core.chunk_rest(seq__38866__$1);
var G__38901 = c__4638__auto__;
var G__38902 = cljs.core.count(c__4638__auto__);
var G__38903 = (0);
seq__38866 = G__38900;
chunk__38867 = G__38901;
count__38868 = G__38902;
i__38869 = G__38903;
continue;
} else {
var vec__38879 = cljs.core.first(seq__38866__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38879,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38879,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__38904 = cljs.core.next(seq__38866__$1);
var G__38905 = null;
var G__38906 = (0);
var G__38907 = (0);
seq__38866 = G__38904;
chunk__38867 = G__38905;
count__38868 = G__38906;
i__38869 = G__38907;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__38862_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__38862_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__38863_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__38863_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__38864_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__38864_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__38865_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__38865_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__38882){
var map__38883 = p__38882;
var map__38883__$1 = cljs.core.__destructure_map(map__38883);
var svc = map__38883__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38883__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38883__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
