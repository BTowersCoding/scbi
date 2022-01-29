goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33766 = arguments.length;
switch (G__33766) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33767 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33767 = (function (f,blockable,meta33768){
this.f = f;
this.blockable = blockable;
this.meta33768 = meta33768;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33769,meta33768__$1){
var self__ = this;
var _33769__$1 = this;
return (new cljs.core.async.t_cljs$core$async33767(self__.f,self__.blockable,meta33768__$1));
}));

(cljs.core.async.t_cljs$core$async33767.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33769){
var self__ = this;
var _33769__$1 = this;
return self__.meta33768;
}));

(cljs.core.async.t_cljs$core$async33767.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33767.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33767.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async33767.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async33767.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33768","meta33768",42291037,null)], null);
}));

(cljs.core.async.t_cljs$core$async33767.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33767.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33767");

(cljs.core.async.t_cljs$core$async33767.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async33767");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33767.
 */
cljs.core.async.__GT_t_cljs$core$async33767 = (function cljs$core$async$__GT_t_cljs$core$async33767(f__$1,blockable__$1,meta33768){
return (new cljs.core.async.t_cljs$core$async33767(f__$1,blockable__$1,meta33768));
});

}

return (new cljs.core.async.t_cljs$core$async33767(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33774 = arguments.length;
switch (G__33774) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33834 = arguments.length;
switch (G__33834) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33851 = arguments.length;
switch (G__33851) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_35745 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35745) : fn1.call(null,val_35745));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35745) : fn1.call(null,val_35745));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33855 = arguments.length;
switch (G__33855) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4695__auto___35747 = n;
var x_35748 = (0);
while(true){
if((x_35748 < n__4695__auto___35747)){
(a[x_35748] = x_35748);

var G__35749 = (x_35748 + (1));
x_35748 = G__35749;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33880 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33880 = (function (flag,meta33881){
this.flag = flag;
this.meta33881 = meta33881;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33880.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33882,meta33881__$1){
var self__ = this;
var _33882__$1 = this;
return (new cljs.core.async.t_cljs$core$async33880(self__.flag,meta33881__$1));
}));

(cljs.core.async.t_cljs$core$async33880.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33882){
var self__ = this;
var _33882__$1 = this;
return self__.meta33881;
}));

(cljs.core.async.t_cljs$core$async33880.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33880.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33880.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33880.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async33880.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33881","meta33881",-1342411004,null)], null);
}));

(cljs.core.async.t_cljs$core$async33880.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33880.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33880");

(cljs.core.async.t_cljs$core$async33880.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async33880");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33880.
 */
cljs.core.async.__GT_t_cljs$core$async33880 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33880(flag__$1,meta33881){
return (new cljs.core.async.t_cljs$core$async33880(flag__$1,meta33881));
});

}

return (new cljs.core.async.t_cljs$core$async33880(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33889 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33889 = (function (flag,cb,meta33890){
this.flag = flag;
this.cb = cb;
this.meta33890 = meta33890;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33891,meta33890__$1){
var self__ = this;
var _33891__$1 = this;
return (new cljs.core.async.t_cljs$core$async33889(self__.flag,self__.cb,meta33890__$1));
}));

(cljs.core.async.t_cljs$core$async33889.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33891){
var self__ = this;
var _33891__$1 = this;
return self__.meta33890;
}));

(cljs.core.async.t_cljs$core$async33889.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33889.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33889.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33889.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async33889.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33890","meta33890",1862490438,null)], null);
}));

(cljs.core.async.t_cljs$core$async33889.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33889.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33889");

(cljs.core.async.t_cljs$core$async33889.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async33889");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33889.
 */
cljs.core.async.__GT_t_cljs$core$async33889 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33889(flag__$1,cb__$1,meta33890){
return (new cljs.core.async.t_cljs$core$async33889(flag__$1,cb__$1,meta33890));
});

}

return (new cljs.core.async.t_cljs$core$async33889(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33895_SHARP_){
var G__33904 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33895_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33904) : fret.call(null,G__33904));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33896_SHARP_){
var G__33907 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33896_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33907) : fret.call(null,G__33907));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4212__auto__ = wport;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35759 = (i + (1));
i = G__35759;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4212__auto__ = ret;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4210__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4210__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___35760 = arguments.length;
var i__4819__auto___35761 = (0);
while(true){
if((i__4819__auto___35761 < len__4818__auto___35760)){
args__4824__auto__.push((arguments[i__4819__auto___35761]));

var G__35762 = (i__4819__auto___35761 + (1));
i__4819__auto___35761 = G__35762;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33914){
var map__33915 = p__33914;
var map__33915__$1 = cljs.core.__destructure_map(map__33915);
var opts = map__33915__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33912){
var G__33913 = cljs.core.first(seq33912);
var seq33912__$1 = cljs.core.next(seq33912);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33913,seq33912__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33918 = arguments.length;
switch (G__33918) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33683__auto___35766 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33684__auto__ = (function (){var switch__33599__auto__ = (function (state_33942){
var state_val_33943 = (state_33942[(1)]);
if((state_val_33943 === (7))){
var inst_33938 = (state_33942[(2)]);
var state_33942__$1 = state_33942;
var statearr_33944_35767 = state_33942__$1;
(statearr_33944_35767[(2)] = inst_33938);

(statearr_33944_35767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33943 === (1))){
var state_33942__$1 = state_33942;
var statearr_33945_35768 = state_33942__$1;
(statearr_33945_35768[(2)] = null);

(statearr_33945_35768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33943 === (4))){
var inst_33921 = (state_33942[(7)]);
var inst_33921__$1 = (state_33942[(2)]);
var inst_33922 = (inst_33921__$1 == null);
var state_33942__$1 = (function (){var statearr_33946 = state_33942;
(statearr_33946[(7)] = inst_33921__$1);

return statearr_33946;
})();
if(cljs.core.truth_(inst_33922)){
var statearr_33947_35769 = state_33942__$1;
(statearr_33947_35769[(1)] = (5));

} else {
var statearr_33948_35770 = state_33942__$1;
(statearr_33948_35770[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33943 === (13))){
var state_33942__$1 = state_33942;
var statearr_33949_35772 = state_33942__$1;
(statearr_33949_35772[(2)] = null);

(statearr_33949_35772[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33943 === (6))){
var inst_33921 = (state_33942[(7)]);
var state_33942__$1 = state_33942;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33942__$1,(11),to,inst_33921);
} else {
if((state_val_33943 === (3))){
var inst_33940 = (state_33942[(2)]);
var state_33942__$1 = state_33942;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33942__$1,inst_33940);
} else {
if((state_val_33943 === (12))){
var state_33942__$1 = state_33942;
var statearr_33950_35773 = state_33942__$1;
(statearr_33950_35773[(2)] = null);

(statearr_33950_35773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33943 === (2))){
var state_33942__$1 = state_33942;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33942__$1,(4),from);
} else {
if((state_val_33943 === (11))){
var inst_33931 = (state_33942[(2)]);
var state_33942__$1 = state_33942;
if(cljs.core.truth_(inst_33931)){
var statearr_33951_35774 = state_33942__$1;
(statearr_33951_35774[(1)] = (12));

} else {
var statearr_33952_35775 = state_33942__$1;
(statearr_33952_35775[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33943 === (9))){
var state_33942__$1 = state_33942;
var statearr_33953_35776 = state_33942__$1;
(statearr_33953_35776[(2)] = null);

(statearr_33953_35776[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33943 === (5))){
var state_33942__$1 = state_33942;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33954_35777 = state_33942__$1;
(statearr_33954_35777[(1)] = (8));

} else {
var statearr_33955_35778 = state_33942__$1;
(statearr_33955_35778[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33943 === (14))){
var inst_33936 = (state_33942[(2)]);
var state_33942__$1 = state_33942;
var statearr_33956_35779 = state_33942__$1;
(statearr_33956_35779[(2)] = inst_33936);

(statearr_33956_35779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33943 === (10))){
var inst_33928 = (state_33942[(2)]);
var state_33942__$1 = state_33942;
var statearr_33957_35780 = state_33942__$1;
(statearr_33957_35780[(2)] = inst_33928);

(statearr_33957_35780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33943 === (8))){
var inst_33925 = cljs.core.async.close_BANG_(to);
var state_33942__$1 = state_33942;
var statearr_33958_35781 = state_33942__$1;
(statearr_33958_35781[(2)] = inst_33925);

(statearr_33958_35781[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33600__auto__ = null;
var cljs$core$async$state_machine__33600__auto____0 = (function (){
var statearr_33959 = [null,null,null,null,null,null,null,null];
(statearr_33959[(0)] = cljs$core$async$state_machine__33600__auto__);

(statearr_33959[(1)] = (1));

return statearr_33959;
});
var cljs$core$async$state_machine__33600__auto____1 = (function (state_33942){
while(true){
var ret_value__33601__auto__ = (function (){try{while(true){
var result__33602__auto__ = switch__33599__auto__(state_33942);
if(cljs.core.keyword_identical_QMARK_(result__33602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33602__auto__;
}
break;
}
}catch (e33960){var ex__33603__auto__ = e33960;
var statearr_33961_35782 = state_33942;
(statearr_33961_35782[(2)] = ex__33603__auto__);


if(cljs.core.seq((state_33942[(4)]))){
var statearr_33962_35783 = state_33942;
(statearr_33962_35783[(1)] = cljs.core.first((state_33942[(4)])));

} else {
throw ex__33603__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35784 = state_33942;
state_33942 = G__35784;
continue;
} else {
return ret_value__33601__auto__;
}
break;
}
});
cljs$core$async$state_machine__33600__auto__ = function(state_33942){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33600__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33600__auto____1.call(this,state_33942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33600__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33600__auto____0;
cljs$core$async$state_machine__33600__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33600__auto____1;
return cljs$core$async$state_machine__33600__auto__;
})()
})();
var state__33685__auto__ = (function (){var statearr_33963 = f__33684__auto__();
(statearr_33963[(6)] = c__33683__auto___35766);

return statearr_33963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33685__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__33964){
var vec__33965 = p__33964;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33965,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33965,(1),null);
var job = vec__33965;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33683__auto___35785 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33684__auto__ = (function (){var switch__33599__auto__ = (function (state_33972){
var state_val_33973 = (state_33972[(1)]);
if((state_val_33973 === (1))){
var state_33972__$1 = state_33972;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33972__$1,(2),res,v);
} else {
if((state_val_33973 === (2))){
var inst_33969 = (state_33972[(2)]);
var inst_33970 = cljs.core.async.close_BANG_(res);
var state_33972__$1 = (function (){var statearr_33974 = state_33972;
(statearr_33974[(7)] = inst_33969);

return statearr_33974;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33972__$1,inst_33970);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33600__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33600__auto____0 = (function (){
var statearr_33975 = [null,null,null,null,null,null,null,null];
(statearr_33975[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33600__auto__);

(statearr_33975[(1)] = (1));

return statearr_33975;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33600__auto____1 = (function (state_33972){
while(true){
var ret_value__33601__auto__ = (function (){try{while(true){
var result__33602__auto__ = switch__33599__auto__(state_33972);
if(cljs.core.keyword_identical_QMARK_(result__33602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33602__auto__;
}
break;
}
}catch (e33984){var ex__33603__auto__ = e33984;
var statearr_33985_35787 = state_33972;
(statearr_33985_35787[(2)] = ex__33603__auto__);


if(cljs.core.seq((state_33972[(4)]))){
var statearr_33990_35788 = state_33972;
(statearr_33990_35788[(1)] = cljs.core.first((state_33972[(4)])));

} else {
throw ex__33603__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35789 = state_33972;
state_33972 = G__35789;
continue;
} else {
return ret_value__33601__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33600__auto__ = function(state_33972){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33600__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33600__auto____1.call(this,state_33972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33600__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33600__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33600__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33600__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33600__auto__;
})()
})();
var state__33685__auto__ = (function (){var statearr_33995 = f__33684__auto__();
(statearr_33995[(6)] = c__33683__auto___35785);

return statearr_33995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33685__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__33996){
var vec__33997 = p__33996;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33997,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33997,(1),null);
var job = vec__33997;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4695__auto___35790 = n;
var __35791 = (0);
while(true){
if((__35791 < n__4695__auto___35790)){
var G__34005_35792 = type;
var G__34005_35793__$1 = (((G__34005_35792 instanceof cljs.core.Keyword))?G__34005_35792.fqn:null);
switch (G__34005_35793__$1) {
case "compute":
var c__33683__auto___35795 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35791,c__33683__auto___35795,G__34005_35792,G__34005_35793__$1,n__4695__auto___35790,jobs,results,process,async){
return (function (){
var f__33684__auto__ = (function (){var switch__33599__auto__ = ((function (__35791,c__33683__auto___35795,G__34005_35792,G__34005_35793__$1,n__4695__auto___35790,jobs,results,process,async){
return (function (state_34021){
var state_val_34022 = (state_34021[(1)]);
if((state_val_34022 === (1))){
var state_34021__$1 = state_34021;
var statearr_34023_35796 = state_34021__$1;
(statearr_34023_35796[(2)] = null);

(statearr_34023_35796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (2))){
var state_34021__$1 = state_34021;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34021__$1,(4),jobs);
} else {
if((state_val_34022 === (3))){
var inst_34019 = (state_34021[(2)]);
var state_34021__$1 = state_34021;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34021__$1,inst_34019);
} else {
if((state_val_34022 === (4))){
var inst_34011 = (state_34021[(2)]);
var inst_34012 = process(inst_34011);
var state_34021__$1 = state_34021;
if(cljs.core.truth_(inst_34012)){
var statearr_34024_35797 = state_34021__$1;
(statearr_34024_35797[(1)] = (5));

} else {
var statearr_34025_35798 = state_34021__$1;
(statearr_34025_35798[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (5))){
var state_34021__$1 = state_34021;
var statearr_34026_35799 = state_34021__$1;
(statearr_34026_35799[(2)] = null);

(statearr_34026_35799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (6))){
var state_34021__$1 = state_34021;
var statearr_34027_35800 = state_34021__$1;
(statearr_34027_35800[(2)] = null);

(statearr_34027_35800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (7))){
var inst_34017 = (state_34021[(2)]);
var state_34021__$1 = state_34021;
var statearr_34028_35801 = state_34021__$1;
(statearr_34028_35801[(2)] = inst_34017);

(statearr_34028_35801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35791,c__33683__auto___35795,G__34005_35792,G__34005_35793__$1,n__4695__auto___35790,jobs,results,process,async))
;
return ((function (__35791,switch__33599__auto__,c__33683__auto___35795,G__34005_35792,G__34005_35793__$1,n__4695__auto___35790,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33600__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33600__auto____0 = (function (){
var statearr_34029 = [null,null,null,null,null,null,null];
(statearr_34029[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33600__auto__);

(statearr_34029[(1)] = (1));

return statearr_34029;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33600__auto____1 = (function (state_34021){
while(true){
var ret_value__33601__auto__ = (function (){try{while(true){
var result__33602__auto__ = switch__33599__auto__(state_34021);
if(cljs.core.keyword_identical_QMARK_(result__33602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33602__auto__;
}
break;
}
}catch (e34030){var ex__33603__auto__ = e34030;
var statearr_34031_35802 = state_34021;
(statearr_34031_35802[(2)] = ex__33603__auto__);


if(cljs.core.seq((state_34021[(4)]))){
var statearr_34032_35803 = state_34021;
(statearr_34032_35803[(1)] = cljs.core.first((state_34021[(4)])));

} else {
throw ex__33603__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35804 = state_34021;
state_34021 = G__35804;
continue;
} else {
return ret_value__33601__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33600__auto__ = function(state_34021){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33600__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33600__auto____1.call(this,state_34021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33600__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33600__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33600__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33600__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33600__auto__;
})()
;})(__35791,switch__33599__auto__,c__33683__auto___35795,G__34005_35792,G__34005_35793__$1,n__4695__auto___35790,jobs,results,process,async))
})();
var state__33685__auto__ = (function (){var statearr_34033 = f__33684__auto__();
(statearr_34033[(6)] = c__33683__auto___35795);

return statearr_34033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33685__auto__);
});})(__35791,c__33683__auto___35795,G__34005_35792,G__34005_35793__$1,n__4695__auto___35790,jobs,results,process,async))
);


break;
case "async":
var c__33683__auto___35806 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35791,c__33683__auto___35806,G__34005_35792,G__34005_35793__$1,n__4695__auto___35790,jobs,results,process,async){
return (function (){
var f__33684__auto__ = (function (){var switch__33599__auto__ = ((function (__35791,c__33683__auto___35806,G__34005_35792,G__34005_35793__$1,n__4695__auto___35790,jobs,results,process,async){
return (function (state_34046){
var state_val_34047 = (state_34046[(1)]);
if((state_val_34047 === (1))){
var state_34046__$1 = state_34046;
var statearr_34048_35807 = state_34046__$1;
(statearr_34048_35807[(2)] = null);

(statearr_34048_35807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34047 === (2))){
var state_34046__$1 = state_34046;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34046__$1,(4),jobs);
} else {
if((state_val_34047 === (3))){
var inst_34044 = (state_34046[(2)]);
var state_34046__$1 = state_34046;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34046__$1,inst_34044);
} else {
if((state_val_34047 === (4))){
var inst_34036 = (state_34046[(2)]);
var inst_34037 = async(inst_34036);
var state_34046__$1 = state_34046;
if(cljs.core.truth_(inst_34037)){
var statearr_34049_35809 = state_34046__$1;
(statearr_34049_35809[(1)] = (5));

} else {
var statearr_34050_35810 = state_34046__$1;
(statearr_34050_35810[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34047 === (5))){
var state_34046__$1 = state_34046;
var statearr_34051_35811 = state_34046__$1;
(statearr_34051_35811[(2)] = null);

(statearr_34051_35811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34047 === (6))){
var state_34046__$1 = state_34046;
var statearr_34052_35812 = state_34046__$1;
(statearr_34052_35812[(2)] = null);

(statearr_34052_35812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34047 === (7))){
var inst_34042 = (state_34046[(2)]);
var state_34046__$1 = state_34046;
var statearr_34053_35813 = state_34046__$1;
(statearr_34053_35813[(2)] = inst_34042);

(statearr_34053_35813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35791,c__33683__auto___35806,G__34005_35792,G__34005_35793__$1,n__4695__auto___35790,jobs,results,process,async))
;
return ((function (__35791,switch__33599__auto__,c__33683__auto___35806,G__34005_35792,G__34005_35793__$1,n__4695__auto___35790,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33600__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33600__auto____0 = (function (){
var statearr_34062 = [null,null,null,null,null,null,null];
(statearr_34062[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33600__auto__);

(statearr_34062[(1)] = (1));

return statearr_34062;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33600__auto____1 = (function (state_34046){
while(true){
var ret_value__33601__auto__ = (function (){try{while(true){
var result__33602__auto__ = switch__33599__auto__(state_34046);
if(cljs.core.keyword_identical_QMARK_(result__33602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33602__auto__;
}
break;
}
}catch (e34063){var ex__33603__auto__ = e34063;
var statearr_34064_35814 = state_34046;
(statearr_34064_35814[(2)] = ex__33603__auto__);


if(cljs.core.seq((state_34046[(4)]))){
var statearr_34065_35815 = state_34046;
(statearr_34065_35815[(1)] = cljs.core.first((state_34046[(4)])));

} else {
throw ex__33603__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35816 = state_34046;
state_34046 = G__35816;
continue;
} else {
return ret_value__33601__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33600__auto__ = function(state_34046){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33600__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33600__auto____1.call(this,state_34046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33600__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33600__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33600__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33600__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33600__auto__;
})()
;})(__35791,switch__33599__auto__,c__33683__auto___35806,G__34005_35792,G__34005_35793__$1,n__4695__auto___35790,jobs,results,process,async))
})();
var state__33685__auto__ = (function (){var statearr_34066 = f__33684__auto__();
(statearr_34066[(6)] = c__33683__auto___35806);

return statearr_34066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33685__auto__);
});})(__35791,c__33683__auto___35806,G__34005_35792,G__34005_35793__$1,n__4695__auto___35790,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34005_35793__$1)].join('')));

}

var G__35817 = (__35791 + (1));
__35791 = G__35817;
continue;
} else {
}
break;
}

var c__33683__auto___35818 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33684__auto__ = (function (){var switch__33599__auto__ = (function (state_34090){
var state_val_34091 = (state_34090[(1)]);
if((state_val_34091 === (7))){
var inst_34086 = (state_34090[(2)]);
var state_34090__$1 = state_34090;
var statearr_34092_35819 = state_34090__$1;
(statearr_34092_35819[(2)] = inst_34086);

(statearr_34092_35819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34091 === (1))){
var state_34090__$1 = state_34090;
var statearr_34094_35820 = state_34090__$1;
(statearr_34094_35820[(2)] = null);

(statearr_34094_35820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34091 === (4))){
var inst_34069 = (state_34090[(7)]);
var inst_34069__$1 = (state_34090[(2)]);
var inst_34070 = (inst_34069__$1 == null);
var state_34090__$1 = (function (){var statearr_34095 = state_34090;
(statearr_34095[(7)] = inst_34069__$1);

return statearr_34095;
})();
if(cljs.core.truth_(inst_34070)){
var statearr_34096_35821 = state_34090__$1;
(statearr_34096_35821[(1)] = (5));

} else {
var statearr_34097_35822 = state_34090__$1;
(statearr_34097_35822[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34091 === (6))){
var inst_34076 = (state_34090[(8)]);
var inst_34069 = (state_34090[(7)]);
var inst_34076__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34077 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34078 = [inst_34069,inst_34076__$1];
var inst_34079 = (new cljs.core.PersistentVector(null,2,(5),inst_34077,inst_34078,null));
var state_34090__$1 = (function (){var statearr_34098 = state_34090;
(statearr_34098[(8)] = inst_34076__$1);

return statearr_34098;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34090__$1,(8),jobs,inst_34079);
} else {
if((state_val_34091 === (3))){
var inst_34088 = (state_34090[(2)]);
var state_34090__$1 = state_34090;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34090__$1,inst_34088);
} else {
if((state_val_34091 === (2))){
var state_34090__$1 = state_34090;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34090__$1,(4),from);
} else {
if((state_val_34091 === (9))){
var inst_34083 = (state_34090[(2)]);
var state_34090__$1 = (function (){var statearr_34099 = state_34090;
(statearr_34099[(9)] = inst_34083);

return statearr_34099;
})();
var statearr_34100_35823 = state_34090__$1;
(statearr_34100_35823[(2)] = null);

(statearr_34100_35823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34091 === (5))){
var inst_34072 = cljs.core.async.close_BANG_(jobs);
var state_34090__$1 = state_34090;
var statearr_34101_35829 = state_34090__$1;
(statearr_34101_35829[(2)] = inst_34072);

(statearr_34101_35829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34091 === (8))){
var inst_34076 = (state_34090[(8)]);
var inst_34081 = (state_34090[(2)]);
var state_34090__$1 = (function (){var statearr_34102 = state_34090;
(statearr_34102[(10)] = inst_34081);

return statearr_34102;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34090__$1,(9),results,inst_34076);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33600__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33600__auto____0 = (function (){
var statearr_34103 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34103[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33600__auto__);

(statearr_34103[(1)] = (1));

return statearr_34103;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33600__auto____1 = (function (state_34090){
while(true){
var ret_value__33601__auto__ = (function (){try{while(true){
var result__33602__auto__ = switch__33599__auto__(state_34090);
if(cljs.core.keyword_identical_QMARK_(result__33602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33602__auto__;
}
break;
}
}catch (e34104){var ex__33603__auto__ = e34104;
var statearr_34105_35830 = state_34090;
(statearr_34105_35830[(2)] = ex__33603__auto__);


if(cljs.core.seq((state_34090[(4)]))){
var statearr_34106_35831 = state_34090;
(statearr_34106_35831[(1)] = cljs.core.first((state_34090[(4)])));

} else {
throw ex__33603__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35832 = state_34090;
state_34090 = G__35832;
continue;
} else {
return ret_value__33601__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33600__auto__ = function(state_34090){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33600__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33600__auto____1.call(this,state_34090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33600__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33600__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33600__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33600__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33600__auto__;
})()
})();
var state__33685__auto__ = (function (){var statearr_34107 = f__33684__auto__();
(statearr_34107[(6)] = c__33683__auto___35818);

return statearr_34107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33685__auto__);
}));


var c__33683__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33684__auto__ = (function (){var switch__33599__auto__ = (function (state_34184){
var state_val_34185 = (state_34184[(1)]);
if((state_val_34185 === (7))){
var inst_34180 = (state_34184[(2)]);
var state_34184__$1 = state_34184;
var statearr_34189_35834 = state_34184__$1;
(statearr_34189_35834[(2)] = inst_34180);

(statearr_34189_35834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (20))){
var state_34184__$1 = state_34184;
var statearr_34190_35835 = state_34184__$1;
(statearr_34190_35835[(2)] = null);

(statearr_34190_35835[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (1))){
var state_34184__$1 = state_34184;
var statearr_34191_35837 = state_34184__$1;
(statearr_34191_35837[(2)] = null);

(statearr_34191_35837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (4))){
var inst_34115 = (state_34184[(7)]);
var inst_34115__$1 = (state_34184[(2)]);
var inst_34116 = (inst_34115__$1 == null);
var state_34184__$1 = (function (){var statearr_34194 = state_34184;
(statearr_34194[(7)] = inst_34115__$1);

return statearr_34194;
})();
if(cljs.core.truth_(inst_34116)){
var statearr_34198_35838 = state_34184__$1;
(statearr_34198_35838[(1)] = (5));

} else {
var statearr_34199_35839 = state_34184__$1;
(statearr_34199_35839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (15))){
var inst_34162 = (state_34184[(8)]);
var state_34184__$1 = state_34184;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34184__$1,(18),to,inst_34162);
} else {
if((state_val_34185 === (21))){
var inst_34175 = (state_34184[(2)]);
var state_34184__$1 = state_34184;
var statearr_34200_35840 = state_34184__$1;
(statearr_34200_35840[(2)] = inst_34175);

(statearr_34200_35840[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (13))){
var inst_34177 = (state_34184[(2)]);
var state_34184__$1 = (function (){var statearr_34203 = state_34184;
(statearr_34203[(9)] = inst_34177);

return statearr_34203;
})();
var statearr_34204_35841 = state_34184__$1;
(statearr_34204_35841[(2)] = null);

(statearr_34204_35841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (6))){
var inst_34115 = (state_34184[(7)]);
var state_34184__$1 = state_34184;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34184__$1,(11),inst_34115);
} else {
if((state_val_34185 === (17))){
var inst_34170 = (state_34184[(2)]);
var state_34184__$1 = state_34184;
if(cljs.core.truth_(inst_34170)){
var statearr_34205_35842 = state_34184__$1;
(statearr_34205_35842[(1)] = (19));

} else {
var statearr_34209_35843 = state_34184__$1;
(statearr_34209_35843[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (3))){
var inst_34182 = (state_34184[(2)]);
var state_34184__$1 = state_34184;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34184__$1,inst_34182);
} else {
if((state_val_34185 === (12))){
var inst_34159 = (state_34184[(10)]);
var state_34184__$1 = state_34184;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34184__$1,(14),inst_34159);
} else {
if((state_val_34185 === (2))){
var state_34184__$1 = state_34184;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34184__$1,(4),results);
} else {
if((state_val_34185 === (19))){
var state_34184__$1 = state_34184;
var statearr_34210_35844 = state_34184__$1;
(statearr_34210_35844[(2)] = null);

(statearr_34210_35844[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (11))){
var inst_34159 = (state_34184[(2)]);
var state_34184__$1 = (function (){var statearr_34211 = state_34184;
(statearr_34211[(10)] = inst_34159);

return statearr_34211;
})();
var statearr_34212_35845 = state_34184__$1;
(statearr_34212_35845[(2)] = null);

(statearr_34212_35845[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (9))){
var state_34184__$1 = state_34184;
var statearr_34213_35846 = state_34184__$1;
(statearr_34213_35846[(2)] = null);

(statearr_34213_35846[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (5))){
var state_34184__$1 = state_34184;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34214_35847 = state_34184__$1;
(statearr_34214_35847[(1)] = (8));

} else {
var statearr_34215_35848 = state_34184__$1;
(statearr_34215_35848[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (14))){
var inst_34164 = (state_34184[(11)]);
var inst_34162 = (state_34184[(8)]);
var inst_34162__$1 = (state_34184[(2)]);
var inst_34163 = (inst_34162__$1 == null);
var inst_34164__$1 = cljs.core.not(inst_34163);
var state_34184__$1 = (function (){var statearr_34216 = state_34184;
(statearr_34216[(11)] = inst_34164__$1);

(statearr_34216[(8)] = inst_34162__$1);

return statearr_34216;
})();
if(inst_34164__$1){
var statearr_34217_35849 = state_34184__$1;
(statearr_34217_35849[(1)] = (15));

} else {
var statearr_34218_35850 = state_34184__$1;
(statearr_34218_35850[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (16))){
var inst_34164 = (state_34184[(11)]);
var state_34184__$1 = state_34184;
var statearr_34219_35851 = state_34184__$1;
(statearr_34219_35851[(2)] = inst_34164);

(statearr_34219_35851[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (10))){
var inst_34156 = (state_34184[(2)]);
var state_34184__$1 = state_34184;
var statearr_34220_35852 = state_34184__$1;
(statearr_34220_35852[(2)] = inst_34156);

(statearr_34220_35852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (18))){
var inst_34167 = (state_34184[(2)]);
var state_34184__$1 = state_34184;
var statearr_34221_35857 = state_34184__$1;
(statearr_34221_35857[(2)] = inst_34167);

(statearr_34221_35857[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (8))){
var inst_34119 = cljs.core.async.close_BANG_(to);
var state_34184__$1 = state_34184;
var statearr_34222_35858 = state_34184__$1;
(statearr_34222_35858[(2)] = inst_34119);

(statearr_34222_35858[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33600__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33600__auto____0 = (function (){
var statearr_34223 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34223[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33600__auto__);

(statearr_34223[(1)] = (1));

return statearr_34223;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33600__auto____1 = (function (state_34184){
while(true){
var ret_value__33601__auto__ = (function (){try{while(true){
var result__33602__auto__ = switch__33599__auto__(state_34184);
if(cljs.core.keyword_identical_QMARK_(result__33602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33602__auto__;
}
break;
}
}catch (e34224){var ex__33603__auto__ = e34224;
var statearr_34225_35862 = state_34184;
(statearr_34225_35862[(2)] = ex__33603__auto__);


if(cljs.core.seq((state_34184[(4)]))){
var statearr_34226_35863 = state_34184;
(statearr_34226_35863[(1)] = cljs.core.first((state_34184[(4)])));

} else {
throw ex__33603__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35864 = state_34184;
state_34184 = G__35864;
continue;
} else {
return ret_value__33601__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33600__auto__ = function(state_34184){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33600__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33600__auto____1.call(this,state_34184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33600__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33600__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33600__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33600__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33600__auto__;
})()
})();
var state__33685__auto__ = (function (){var statearr_34227 = f__33684__auto__();
(statearr_34227[(6)] = c__33683__auto__);

return statearr_34227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33685__auto__);
}));

return c__33683__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__34229 = arguments.length;
switch (G__34229) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__34231 = arguments.length;
switch (G__34231) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__34233 = arguments.length;
switch (G__34233) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__33683__auto___35868 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33684__auto__ = (function (){var switch__33599__auto__ = (function (state_34259){
var state_val_34260 = (state_34259[(1)]);
if((state_val_34260 === (7))){
var inst_34255 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
var statearr_34261_35869 = state_34259__$1;
(statearr_34261_35869[(2)] = inst_34255);

(statearr_34261_35869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (1))){
var state_34259__$1 = state_34259;
var statearr_34262_35870 = state_34259__$1;
(statearr_34262_35870[(2)] = null);

(statearr_34262_35870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (4))){
var inst_34236 = (state_34259[(7)]);
var inst_34236__$1 = (state_34259[(2)]);
var inst_34237 = (inst_34236__$1 == null);
var state_34259__$1 = (function (){var statearr_34263 = state_34259;
(statearr_34263[(7)] = inst_34236__$1);

return statearr_34263;
})();
if(cljs.core.truth_(inst_34237)){
var statearr_34264_35871 = state_34259__$1;
(statearr_34264_35871[(1)] = (5));

} else {
var statearr_34265_35872 = state_34259__$1;
(statearr_34265_35872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (13))){
var state_34259__$1 = state_34259;
var statearr_34266_35873 = state_34259__$1;
(statearr_34266_35873[(2)] = null);

(statearr_34266_35873[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (6))){
var inst_34236 = (state_34259[(7)]);
var inst_34242 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34236) : p.call(null,inst_34236));
var state_34259__$1 = state_34259;
if(cljs.core.truth_(inst_34242)){
var statearr_34267_35874 = state_34259__$1;
(statearr_34267_35874[(1)] = (9));

} else {
var statearr_34268_35875 = state_34259__$1;
(statearr_34268_35875[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (3))){
var inst_34257 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34259__$1,inst_34257);
} else {
if((state_val_34260 === (12))){
var state_34259__$1 = state_34259;
var statearr_34269_35876 = state_34259__$1;
(statearr_34269_35876[(2)] = null);

(statearr_34269_35876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (2))){
var state_34259__$1 = state_34259;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34259__$1,(4),ch);
} else {
if((state_val_34260 === (11))){
var inst_34236 = (state_34259[(7)]);
var inst_34246 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34259__$1,(8),inst_34246,inst_34236);
} else {
if((state_val_34260 === (9))){
var state_34259__$1 = state_34259;
var statearr_34278_35877 = state_34259__$1;
(statearr_34278_35877[(2)] = tc);

(statearr_34278_35877[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (5))){
var inst_34239 = cljs.core.async.close_BANG_(tc);
var inst_34240 = cljs.core.async.close_BANG_(fc);
var state_34259__$1 = (function (){var statearr_34279 = state_34259;
(statearr_34279[(8)] = inst_34239);

return statearr_34279;
})();
var statearr_34280_35878 = state_34259__$1;
(statearr_34280_35878[(2)] = inst_34240);

(statearr_34280_35878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (14))){
var inst_34253 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
var statearr_34281_35879 = state_34259__$1;
(statearr_34281_35879[(2)] = inst_34253);

(statearr_34281_35879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (10))){
var state_34259__$1 = state_34259;
var statearr_34282_35880 = state_34259__$1;
(statearr_34282_35880[(2)] = fc);

(statearr_34282_35880[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (8))){
var inst_34248 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
if(cljs.core.truth_(inst_34248)){
var statearr_34283_35881 = state_34259__$1;
(statearr_34283_35881[(1)] = (12));

} else {
var statearr_34284_35882 = state_34259__$1;
(statearr_34284_35882[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33600__auto__ = null;
var cljs$core$async$state_machine__33600__auto____0 = (function (){
var statearr_34285 = [null,null,null,null,null,null,null,null,null];
(statearr_34285[(0)] = cljs$core$async$state_machine__33600__auto__);

(statearr_34285[(1)] = (1));

return statearr_34285;
});
var cljs$core$async$state_machine__33600__auto____1 = (function (state_34259){
while(true){
var ret_value__33601__auto__ = (function (){try{while(true){
var result__33602__auto__ = switch__33599__auto__(state_34259);
if(cljs.core.keyword_identical_QMARK_(result__33602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33602__auto__;
}
break;
}
}catch (e34286){var ex__33603__auto__ = e34286;
var statearr_34287_35883 = state_34259;
(statearr_34287_35883[(2)] = ex__33603__auto__);


if(cljs.core.seq((state_34259[(4)]))){
var statearr_34288_35884 = state_34259;
(statearr_34288_35884[(1)] = cljs.core.first((state_34259[(4)])));

} else {
throw ex__33603__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35885 = state_34259;
state_34259 = G__35885;
continue;
} else {
return ret_value__33601__auto__;
}
break;
}
});
cljs$core$async$state_machine__33600__auto__ = function(state_34259){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33600__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33600__auto____1.call(this,state_34259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33600__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33600__auto____0;
cljs$core$async$state_machine__33600__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33600__auto____1;
return cljs$core$async$state_machine__33600__auto__;
})()
})();
var state__33685__auto__ = (function (){var statearr_34293 = f__33684__auto__();
(statearr_34293[(6)] = c__33683__auto___35868);

return statearr_34293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33685__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33683__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33684__auto__ = (function (){var switch__33599__auto__ = (function (state_34324){
var state_val_34325 = (state_34324[(1)]);
if((state_val_34325 === (7))){
var inst_34320 = (state_34324[(2)]);
var state_34324__$1 = state_34324;
var statearr_34326_35889 = state_34324__$1;
(statearr_34326_35889[(2)] = inst_34320);

(statearr_34326_35889[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (1))){
var inst_34303 = init;
var inst_34304 = inst_34303;
var state_34324__$1 = (function (){var statearr_34327 = state_34324;
(statearr_34327[(7)] = inst_34304);

return statearr_34327;
})();
var statearr_34328_35891 = state_34324__$1;
(statearr_34328_35891[(2)] = null);

(statearr_34328_35891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (4))){
var inst_34307 = (state_34324[(8)]);
var inst_34307__$1 = (state_34324[(2)]);
var inst_34308 = (inst_34307__$1 == null);
var state_34324__$1 = (function (){var statearr_34329 = state_34324;
(statearr_34329[(8)] = inst_34307__$1);

return statearr_34329;
})();
if(cljs.core.truth_(inst_34308)){
var statearr_34330_35894 = state_34324__$1;
(statearr_34330_35894[(1)] = (5));

} else {
var statearr_34331_35895 = state_34324__$1;
(statearr_34331_35895[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (6))){
var inst_34307 = (state_34324[(8)]);
var inst_34311 = (state_34324[(9)]);
var inst_34304 = (state_34324[(7)]);
var inst_34311__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34304,inst_34307) : f.call(null,inst_34304,inst_34307));
var inst_34312 = cljs.core.reduced_QMARK_(inst_34311__$1);
var state_34324__$1 = (function (){var statearr_34332 = state_34324;
(statearr_34332[(9)] = inst_34311__$1);

return statearr_34332;
})();
if(inst_34312){
var statearr_34333_35896 = state_34324__$1;
(statearr_34333_35896[(1)] = (8));

} else {
var statearr_34334_35897 = state_34324__$1;
(statearr_34334_35897[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (3))){
var inst_34322 = (state_34324[(2)]);
var state_34324__$1 = state_34324;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34324__$1,inst_34322);
} else {
if((state_val_34325 === (2))){
var state_34324__$1 = state_34324;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34324__$1,(4),ch);
} else {
if((state_val_34325 === (9))){
var inst_34311 = (state_34324[(9)]);
var inst_34304 = inst_34311;
var state_34324__$1 = (function (){var statearr_34335 = state_34324;
(statearr_34335[(7)] = inst_34304);

return statearr_34335;
})();
var statearr_34336_35898 = state_34324__$1;
(statearr_34336_35898[(2)] = null);

(statearr_34336_35898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (5))){
var inst_34304 = (state_34324[(7)]);
var state_34324__$1 = state_34324;
var statearr_34337_35899 = state_34324__$1;
(statearr_34337_35899[(2)] = inst_34304);

(statearr_34337_35899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (10))){
var inst_34318 = (state_34324[(2)]);
var state_34324__$1 = state_34324;
var statearr_34338_35900 = state_34324__$1;
(statearr_34338_35900[(2)] = inst_34318);

(statearr_34338_35900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (8))){
var inst_34311 = (state_34324[(9)]);
var inst_34314 = cljs.core.deref(inst_34311);
var state_34324__$1 = state_34324;
var statearr_34339_35901 = state_34324__$1;
(statearr_34339_35901[(2)] = inst_34314);

(statearr_34339_35901[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__33600__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33600__auto____0 = (function (){
var statearr_34340 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34340[(0)] = cljs$core$async$reduce_$_state_machine__33600__auto__);

(statearr_34340[(1)] = (1));

return statearr_34340;
});
var cljs$core$async$reduce_$_state_machine__33600__auto____1 = (function (state_34324){
while(true){
var ret_value__33601__auto__ = (function (){try{while(true){
var result__33602__auto__ = switch__33599__auto__(state_34324);
if(cljs.core.keyword_identical_QMARK_(result__33602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33602__auto__;
}
break;
}
}catch (e34341){var ex__33603__auto__ = e34341;
var statearr_34342_35902 = state_34324;
(statearr_34342_35902[(2)] = ex__33603__auto__);


if(cljs.core.seq((state_34324[(4)]))){
var statearr_34343_35903 = state_34324;
(statearr_34343_35903[(1)] = cljs.core.first((state_34324[(4)])));

} else {
throw ex__33603__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35904 = state_34324;
state_34324 = G__35904;
continue;
} else {
return ret_value__33601__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33600__auto__ = function(state_34324){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33600__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33600__auto____1.call(this,state_34324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33600__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33600__auto____0;
cljs$core$async$reduce_$_state_machine__33600__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33600__auto____1;
return cljs$core$async$reduce_$_state_machine__33600__auto__;
})()
})();
var state__33685__auto__ = (function (){var statearr_34344 = f__33684__auto__();
(statearr_34344[(6)] = c__33683__auto__);

return statearr_34344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33685__auto__);
}));

return c__33683__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33683__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33684__auto__ = (function (){var switch__33599__auto__ = (function (state_34350){
var state_val_34351 = (state_34350[(1)]);
if((state_val_34351 === (1))){
var inst_34345 = cljs.core.async.reduce(f__$1,init,ch);
var state_34350__$1 = state_34350;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34350__$1,(2),inst_34345);
} else {
if((state_val_34351 === (2))){
var inst_34347 = (state_34350[(2)]);
var inst_34348 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34347) : f__$1.call(null,inst_34347));
var state_34350__$1 = state_34350;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34350__$1,inst_34348);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__33600__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33600__auto____0 = (function (){
var statearr_34352 = [null,null,null,null,null,null,null];
(statearr_34352[(0)] = cljs$core$async$transduce_$_state_machine__33600__auto__);

(statearr_34352[(1)] = (1));

return statearr_34352;
});
var cljs$core$async$transduce_$_state_machine__33600__auto____1 = (function (state_34350){
while(true){
var ret_value__33601__auto__ = (function (){try{while(true){
var result__33602__auto__ = switch__33599__auto__(state_34350);
if(cljs.core.keyword_identical_QMARK_(result__33602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33602__auto__;
}
break;
}
}catch (e34353){var ex__33603__auto__ = e34353;
var statearr_34354_35908 = state_34350;
(statearr_34354_35908[(2)] = ex__33603__auto__);


if(cljs.core.seq((state_34350[(4)]))){
var statearr_34355_35909 = state_34350;
(statearr_34355_35909[(1)] = cljs.core.first((state_34350[(4)])));

} else {
throw ex__33603__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35910 = state_34350;
state_34350 = G__35910;
continue;
} else {
return ret_value__33601__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33600__auto__ = function(state_34350){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33600__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33600__auto____1.call(this,state_34350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33600__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33600__auto____0;
cljs$core$async$transduce_$_state_machine__33600__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33600__auto____1;
return cljs$core$async$transduce_$_state_machine__33600__auto__;
})()
})();
var state__33685__auto__ = (function (){var statearr_34356 = f__33684__auto__();
(statearr_34356[(6)] = c__33683__auto__);

return statearr_34356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33685__auto__);
}));

return c__33683__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__34358 = arguments.length;
switch (G__34358) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33683__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33684__auto__ = (function (){var switch__33599__auto__ = (function (state_34383){
var state_val_34384 = (state_34383[(1)]);
if((state_val_34384 === (7))){
var inst_34365 = (state_34383[(2)]);
var state_34383__$1 = state_34383;
var statearr_34385_35912 = state_34383__$1;
(statearr_34385_35912[(2)] = inst_34365);

(statearr_34385_35912[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34384 === (1))){
var inst_34359 = cljs.core.seq(coll);
var inst_34360 = inst_34359;
var state_34383__$1 = (function (){var statearr_34396 = state_34383;
(statearr_34396[(7)] = inst_34360);

return statearr_34396;
})();
var statearr_34397_35917 = state_34383__$1;
(statearr_34397_35917[(2)] = null);

(statearr_34397_35917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34384 === (4))){
var inst_34360 = (state_34383[(7)]);
var inst_34363 = cljs.core.first(inst_34360);
var state_34383__$1 = state_34383;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34383__$1,(7),ch,inst_34363);
} else {
if((state_val_34384 === (13))){
var inst_34377 = (state_34383[(2)]);
var state_34383__$1 = state_34383;
var statearr_34398_35921 = state_34383__$1;
(statearr_34398_35921[(2)] = inst_34377);

(statearr_34398_35921[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34384 === (6))){
var inst_34368 = (state_34383[(2)]);
var state_34383__$1 = state_34383;
if(cljs.core.truth_(inst_34368)){
var statearr_34399_35922 = state_34383__$1;
(statearr_34399_35922[(1)] = (8));

} else {
var statearr_34400_35923 = state_34383__$1;
(statearr_34400_35923[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34384 === (3))){
var inst_34381 = (state_34383[(2)]);
var state_34383__$1 = state_34383;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34383__$1,inst_34381);
} else {
if((state_val_34384 === (12))){
var state_34383__$1 = state_34383;
var statearr_34401_35924 = state_34383__$1;
(statearr_34401_35924[(2)] = null);

(statearr_34401_35924[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34384 === (2))){
var inst_34360 = (state_34383[(7)]);
var state_34383__$1 = state_34383;
if(cljs.core.truth_(inst_34360)){
var statearr_34402_35925 = state_34383__$1;
(statearr_34402_35925[(1)] = (4));

} else {
var statearr_34403_35926 = state_34383__$1;
(statearr_34403_35926[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34384 === (11))){
var inst_34374 = cljs.core.async.close_BANG_(ch);
var state_34383__$1 = state_34383;
var statearr_34404_35927 = state_34383__$1;
(statearr_34404_35927[(2)] = inst_34374);

(statearr_34404_35927[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34384 === (9))){
var state_34383__$1 = state_34383;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34405_35928 = state_34383__$1;
(statearr_34405_35928[(1)] = (11));

} else {
var statearr_34406_35929 = state_34383__$1;
(statearr_34406_35929[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34384 === (5))){
var inst_34360 = (state_34383[(7)]);
var state_34383__$1 = state_34383;
var statearr_34407_35930 = state_34383__$1;
(statearr_34407_35930[(2)] = inst_34360);

(statearr_34407_35930[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34384 === (10))){
var inst_34379 = (state_34383[(2)]);
var state_34383__$1 = state_34383;
var statearr_34408_35931 = state_34383__$1;
(statearr_34408_35931[(2)] = inst_34379);

(statearr_34408_35931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34384 === (8))){
var inst_34360 = (state_34383[(7)]);
var inst_34370 = cljs.core.next(inst_34360);
var inst_34360__$1 = inst_34370;
var state_34383__$1 = (function (){var statearr_34409 = state_34383;
(statearr_34409[(7)] = inst_34360__$1);

return statearr_34409;
})();
var statearr_34410_35942 = state_34383__$1;
(statearr_34410_35942[(2)] = null);

(statearr_34410_35942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33600__auto__ = null;
var cljs$core$async$state_machine__33600__auto____0 = (function (){
var statearr_34411 = [null,null,null,null,null,null,null,null];
(statearr_34411[(0)] = cljs$core$async$state_machine__33600__auto__);

(statearr_34411[(1)] = (1));

return statearr_34411;
});
var cljs$core$async$state_machine__33600__auto____1 = (function (state_34383){
while(true){
var ret_value__33601__auto__ = (function (){try{while(true){
var result__33602__auto__ = switch__33599__auto__(state_34383);
if(cljs.core.keyword_identical_QMARK_(result__33602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33602__auto__;
}
break;
}
}catch (e34412){var ex__33603__auto__ = e34412;
var statearr_34413_35943 = state_34383;
(statearr_34413_35943[(2)] = ex__33603__auto__);


if(cljs.core.seq((state_34383[(4)]))){
var statearr_34414_35944 = state_34383;
(statearr_34414_35944[(1)] = cljs.core.first((state_34383[(4)])));

} else {
throw ex__33603__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35945 = state_34383;
state_34383 = G__35945;
continue;
} else {
return ret_value__33601__auto__;
}
break;
}
});
cljs$core$async$state_machine__33600__auto__ = function(state_34383){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33600__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33600__auto____1.call(this,state_34383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33600__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33600__auto____0;
cljs$core$async$state_machine__33600__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33600__auto____1;
return cljs$core$async$state_machine__33600__auto__;
})()
})();
var state__33685__auto__ = (function (){var statearr_34415 = f__33684__auto__();
(statearr_34415[(6)] = c__33683__auto__);

return statearr_34415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33685__auto__);
}));

return c__33683__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__34417 = arguments.length;
switch (G__34417) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_35954 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_35954(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_35956 = (function (m,ch,close_QMARK_){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4510__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4508__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_35956(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_35957 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_35957(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_35958 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_35958(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34418 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34418 = (function (ch,cs,meta34419){
this.ch = ch;
this.cs = cs;
this.meta34419 = meta34419;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34420,meta34419__$1){
var self__ = this;
var _34420__$1 = this;
return (new cljs.core.async.t_cljs$core$async34418(self__.ch,self__.cs,meta34419__$1));
}));

(cljs.core.async.t_cljs$core$async34418.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34420){
var self__ = this;
var _34420__$1 = this;
return self__.meta34419;
}));

(cljs.core.async.t_cljs$core$async34418.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34418.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34418.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34418.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34418.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34418.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34418.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34419","meta34419",-1489990260,null)], null);
}));

(cljs.core.async.t_cljs$core$async34418.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34418.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34418");

(cljs.core.async.t_cljs$core$async34418.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async34418");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34418.
 */
cljs.core.async.__GT_t_cljs$core$async34418 = (function cljs$core$async$mult_$___GT_t_cljs$core$async34418(ch__$1,cs__$1,meta34419){
return (new cljs.core.async.t_cljs$core$async34418(ch__$1,cs__$1,meta34419));
});

}

return (new cljs.core.async.t_cljs$core$async34418(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__33683__auto___35970 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33684__auto__ = (function (){var switch__33599__auto__ = (function (state_34562){
var state_val_34563 = (state_34562[(1)]);
if((state_val_34563 === (7))){
var inst_34558 = (state_34562[(2)]);
var state_34562__$1 = state_34562;
var statearr_34564_35975 = state_34562__$1;
(statearr_34564_35975[(2)] = inst_34558);

(statearr_34564_35975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34563 === (20))){
var inst_34463 = (state_34562[(7)]);
var inst_34475 = cljs.core.first(inst_34463);
var inst_34476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34475,(0),null);
var inst_34477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34475,(1),null);
var state_34562__$1 = (function (){var statearr_34565 = state_34562;
(statearr_34565[(8)] = inst_34476);

return statearr_34565;
})();
if(cljs.core.truth_(inst_34477)){
var statearr_34566_35976 = state_34562__$1;
(statearr_34566_35976[(1)] = (22));

} else {
var statearr_34567_35977 = state_34562__$1;
(statearr_34567_35977[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34563 === (27))){
var inst_34507 = (state_34562[(9)]);
var inst_34505 = (state_34562[(10)]);
var inst_34432 = (state_34562[(11)]);
var inst_34512 = (state_34562[(12)]);
var inst_34512__$1 = cljs.core._nth(inst_34505,inst_34507);
var inst_34513 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34512__$1,inst_34432,done);
var state_34562__$1 = (function (){var statearr_34568 = state_34562;
(statearr_34568[(12)] = inst_34512__$1);

return statearr_34568;
})();
if(cljs.core.truth_(inst_34513)){
var statearr_34569_35984 = state_34562__$1;
(statearr_34569_35984[(1)] = (30));

} else {
var statearr_34570_35985 = state_34562__$1;
(statearr_34570_35985[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34563 === (1))){
var state_34562__$1 = state_34562;
var statearr_34571_35986 = state_34562__$1;
(statearr_34571_35986[(2)] = null);

(statearr_34571_35986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34563 === (24))){
var inst_34463 = (state_34562[(7)]);
var inst_34482 = (state_34562[(2)]);
var inst_34483 = cljs.core.next(inst_34463);
var inst_34441 = inst_34483;
var inst_34442 = null;
var inst_34443 = (0);
var inst_34444 = (0);
var state_34562__$1 = (function (){var statearr_34572 = state_34562;
(statearr_34572[(13)] = inst_34443);

(statearr_34572[(14)] = inst_34441);

(statearr_34572[(15)] = inst_34444);

(statearr_34572[(16)] = inst_34442);

(statearr_34572[(17)] = inst_34482);

return statearr_34572;
})();
var statearr_34573_35987 = state_34562__$1;
(statearr_34573_35987[(2)] = null);

(statearr_34573_35987[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34563 === (39))){
var state_34562__$1 = state_34562;
var statearr_34577_35988 = state_34562__$1;
(statearr_34577_35988[(2)] = null);

(statearr_34577_35988[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34563 === (4))){
var inst_34432 = (state_34562[(11)]);
var inst_34432__$1 = (state_34562[(2)]);
var inst_34433 = (inst_34432__$1 == null);
var state_34562__$1 = (function (){var statearr_34578 = state_34562;
(statearr_34578[(11)] = inst_34432__$1);

return statearr_34578;
})();
if(cljs.core.truth_(inst_34433)){
var statearr_34579_35989 = state_34562__$1;
(statearr_34579_35989[(1)] = (5));

} else {
var statearr_34580_35990 = state_34562__$1;
(statearr_34580_35990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34563 === (15))){
var inst_34443 = (state_34562[(13)]);
var inst_34441 = (state_34562[(14)]);
var inst_34444 = (state_34562[(15)]);
var inst_34442 = (state_34562[(16)]);
var inst_34459 = (state_34562[(2)]);
var inst_34460 = (inst_34444 + (1));
var tmp34574 = inst_34443;
var tmp34575 = inst_34441;
var tmp34576 = inst_34442;
var inst_34441__$1 = tmp34575;
var inst_34442__$1 = tmp34576;
var inst_34443__$1 = tmp34574;
var inst_34444__$1 = inst_34460;
var state_34562__$1 = (function (){var statearr_34581 = state_34562;
(statearr_34581[(13)] = inst_34443__$1);

(statearr_34581[(14)] = inst_34441__$1);

(statearr_34581[(18)] = inst_34459);

(statearr_34581[(15)] = inst_34444__$1);

(statearr_34581[(16)] = inst_34442__$1);

return statearr_34581;
})();
var statearr_34582_35991 = state_34562__$1;
(statearr_34582_35991[(2)] = null);

(statearr_34582_35991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34563 === (21))){
var inst_34486 = (state_34562[(2)]);
var state_34562__$1 = state_34562;
var statearr_34586_35992 = state_34562__$1;
(statearr_34586_35992[(2)] = inst_34486);

(statearr_34586_35992[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34563 === (31))){
var inst_34512 = (state_34562[(12)]);
var inst_34516 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34512);
var state_34562__$1 = state_34562;
var statearr_34587_35993 = state_34562__$1;
(statearr_34587_35993[(2)] = inst_34516);

(statearr_34587_35993[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34563 === (32))){
var inst_34507 = (state_34562[(9)]);
var inst_34505 = (state_34562[(10)]);
var inst_34506 = (state_34562[(19)]);
var inst_34504 = (state_34562[(20)]);
var inst_34518 = (state_34562[(2)]);
var inst_34519 = (inst_34507 + (1));
var tmp34583 = inst_34505;
var tmp34584 = inst_34506;
var tmp34585 = inst_34504;
var inst_34504__$1 = tmp34585;
var inst_34505__$1 = tmp34583;
var inst_34506__$1 = tmp34584;
var inst_34507__$1 = inst_34519;
var state_34562__$1 = (function (){var statearr_34588 = state_34562;
(statearr_34588[(9)] = inst_34507__$1);

(statearr_34588[(10)] = inst_34505__$1);

(statearr_34588[(19)] = inst_34506__$1);

(statearr_34588[(21)] = inst_34518);

(statearr_34588[(20)] = inst_34504__$1);

return statearr_34588;
})();
var statearr_34589_35994 = state_34562__$1;
(statearr_34589_35994[(2)] = null);

(statearr_34589_35994[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34563 === (40))){
var inst_34531 = (state_34562[(22)]);
var inst_34535 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34531);
var state_34562__$1 = state_34562;
var statearr_34590_35995 = state_34562__$1;
(statearr_34590_35995[(2)] = inst_34535);

(statearr_34590_35995[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34563 === (33))){
var inst_34522 = (state_34562[(23)]);
var inst_34524 = cljs.core.chunked_seq_QMARK_(inst_34522);
var state_34562__$1 = state_34562;
if(inst_34524){
var statearr_34591_35996 = state_34562__$1;
(statearr_34591_35996[(1)] = (36));

} else {
var statearr_34592_35997 = state_34562__$1;
(statearr_34592_35997[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34563 === (13))){
var inst_34453 = (state_34562[(24)]);
var inst_34456 = cljs.core.async.close_BANG_(inst_34453);
var state_34562__$1 = state_34562;
var statearr_34593_35998 = state_34562__$1;
(statearr_34593_35998[(2)] = inst_34456);

(statearr_34593_35998[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34563 === (22))){
var inst_34476 = (state_34562[(8)]);
var inst_34479 = cljs.core.async.close_BANG_(inst_34476);
var state_34562__$1 = state_34562;
var statearr_34594_35999 = state_34562__$1;
(statearr_34594_35999[(2)] = inst_34479);

(statearr_34594_35999[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34563 === (36))){
var inst_34522 = (state_34562[(23)]);
var inst_34526 = cljs.core.chunk_first(inst_34522);
var inst_34527 = cljs.core.chunk_rest(inst_34522);
var inst_34528 = cljs.core.count(inst_34526);
var inst_34504 = inst_34527;
var inst_34505 = inst_34526;
var inst_34506 = inst_34528;
var inst_34507 = (0);
var state_34562__$1 = (function (){var statearr_34595 = state_34562;
(statearr_34595[(9)] = inst_34507);

(statearr_34595[(10)] = inst_34505);

(statearr_34595[(19)] = inst_34506);

(statearr_34595[(20)] = inst_34504);

return statearr_34595;
})();
var statearr_34596_36000 = state_34562__$1;
(statearr_34596_36000[(2)] = null);

(statearr_34596_36000[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34563 === (41))){
var inst_34522 = (state_34562[(23)]);
var inst_34537 = (state_34562[(2)]);
var inst_34538 = cljs.core.next(inst_34522);
var inst_34504 = inst_34538;
var inst_34505 = null;
var inst_34506 = (0);
var inst_34507 = (0);
var state_34562__$1 = (function (){var statearr_34597 = state_34562;
(statearr_34597[(9)] = inst_34507);

(statearr_34597[(10)] = inst_34505);

(statearr_34597[(19)] = inst_34506);

(statearr_34597[(20)] = inst_34504);

(statearr_34597[(25)] = inst_34537);

return statearr_34597;
})();
var statearr_34598_36007 = state_34562__$1;
(statearr_34598_36007[(2)] = null);

(statearr_34598_36007[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34563 === (43))){
var state_34562__$1 = state_34562;
var statearr_34599_36008 = state_34562__$1;
(statearr_34599_36008[(2)] = null);

(statearr_34599_36008[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34563 === (29))){
var inst_34546 = (state_34562[(2)]);
var state_34562__$1 = state_34562;
var statearr_34723_36009 = state_34562__$1;
(statearr_34723_36009[(2)] = inst_34546);

(statearr_34723_36009[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34563 === (44))){
var inst_34555 = (state_34562[(2)]);
var state_34562__$1 = (function (){var statearr_34724 = state_34562;
(statearr_34724[(26)] = inst_34555);

return statearr_34724;
})();
var statearr_34725_36010 = state_34562__$1;
(statearr_34725_36010[(2)] = null);

(statearr_34725_36010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34563 === (6))){
var inst_34496 = (state_34562[(27)]);
var inst_34495 = cljs.core.deref(cs);
var inst_34496__$1 = cljs.core.keys(inst_34495);
var inst_34497 = cljs.core.count(inst_34496__$1);
var inst_34498 = cljs.core.reset_BANG_(dctr,inst_34497);
var inst_34503 = cljs.core.seq(inst_34496__$1);
var inst_34504 = inst_34503;
var inst_34505 = null;
var inst_34506 = (0);
var inst_34507 = (0);
var state_34562__$1 = (function (){var statearr_34726 = state_34562;
(statearr_34726[(9)] = inst_34507);

(statearr_34726[(10)] = inst_34505);

(statearr_34726[(28)] = inst_34498);

(statearr_34726[(19)] = inst_34506);

(statearr_34726[(20)] = inst_34504);

(statearr_34726[(27)] = inst_34496__$1);

return statearr_34726;
})();
var statearr_34727_36011 = state_34562__$1;
(statearr_34727_36011[(2)] = null);

(statearr_34727_36011[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34563 === (28))){
var inst_34522 = (state_34562[(23)]);
var inst_34504 = (state_34562[(20)]);
var inst_34522__$1 = cljs.core.seq(inst_34504);
var state_34562__$1 = (function (){var statearr_34728 = state_34562;
(statearr_34728[(23)] = inst_34522__$1);

return statearr_34728;
})();
if(inst_34522__$1){
var statearr_34729_36012 = state_34562__$1;
(statearr_34729_36012[(1)] = (33));

} else {
var statearr_34730_36013 = state_34562__$1;
(statearr_34730_36013[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34563 === (25))){
var inst_34507 = (state_34562[(9)]);
var inst_34506 = (state_34562[(19)]);
var inst_34509 = (inst_34507 < inst_34506);
var inst_34510 = inst_34509;
var state_34562__$1 = state_34562;
if(cljs.core.truth_(inst_34510)){
var statearr_34731_36014 = state_34562__$1;
(statearr_34731_36014[(1)] = (27));

} else {
var statearr_34732_36015 = state_34562__$1;
(statearr_34732_36015[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34563 === (34))){
var state_34562__$1 = state_34562;
var statearr_34733_36016 = state_34562__$1;
(statearr_34733_36016[(2)] = null);

(statearr_34733_36016[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34563 === (17))){
var state_34562__$1 = state_34562;
var statearr_34734_36017 = state_34562__$1;
(statearr_34734_36017[(2)] = null);

(statearr_34734_36017[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34563 === (3))){
var inst_34560 = (state_34562[(2)]);
var state_34562__$1 = state_34562;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34562__$1,inst_34560);
} else {
if((state_val_34563 === (12))){
var inst_34491 = (state_34562[(2)]);
var state_34562__$1 = state_34562;
var statearr_34735_36018 = state_34562__$1;
(statearr_34735_36018[(2)] = inst_34491);

(statearr_34735_36018[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34563 === (2))){
var state_34562__$1 = state_34562;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34562__$1,(4),ch);
} else {
if((state_val_34563 === (23))){
var state_34562__$1 = state_34562;
var statearr_34742_36019 = state_34562__$1;
(statearr_34742_36019[(2)] = null);

(statearr_34742_36019[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34563 === (35))){
var inst_34544 = (state_34562[(2)]);
var state_34562__$1 = state_34562;
var statearr_34743_36020 = state_34562__$1;
(statearr_34743_36020[(2)] = inst_34544);

(statearr_34743_36020[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34563 === (19))){
var inst_34463 = (state_34562[(7)]);
var inst_34467 = cljs.core.chunk_first(inst_34463);
var inst_34468 = cljs.core.chunk_rest(inst_34463);
var inst_34469 = cljs.core.count(inst_34467);
var inst_34441 = inst_34468;
var inst_34442 = inst_34467;
var inst_34443 = inst_34469;
var inst_34444 = (0);
var state_34562__$1 = (function (){var statearr_34744 = state_34562;
(statearr_34744[(13)] = inst_34443);

(statearr_34744[(14)] = inst_34441);

(statearr_34744[(15)] = inst_34444);

(statearr_34744[(16)] = inst_34442);

return statearr_34744;
})();
var statearr_34745_36027 = state_34562__$1;
(statearr_34745_36027[(2)] = null);

(statearr_34745_36027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34563 === (11))){
var inst_34463 = (state_34562[(7)]);
var inst_34441 = (state_34562[(14)]);
var inst_34463__$1 = cljs.core.seq(inst_34441);
var state_34562__$1 = (function (){var statearr_34746 = state_34562;
(statearr_34746[(7)] = inst_34463__$1);

return statearr_34746;
})();
if(inst_34463__$1){
var statearr_34747_36028 = state_34562__$1;
(statearr_34747_36028[(1)] = (16));

} else {
var statearr_34748_36029 = state_34562__$1;
(statearr_34748_36029[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34563 === (9))){
var inst_34493 = (state_34562[(2)]);
var state_34562__$1 = state_34562;
var statearr_34749_36030 = state_34562__$1;
(statearr_34749_36030[(2)] = inst_34493);

(statearr_34749_36030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34563 === (5))){
var inst_34439 = cljs.core.deref(cs);
var inst_34440 = cljs.core.seq(inst_34439);
var inst_34441 = inst_34440;
var inst_34442 = null;
var inst_34443 = (0);
var inst_34444 = (0);
var state_34562__$1 = (function (){var statearr_34750 = state_34562;
(statearr_34750[(13)] = inst_34443);

(statearr_34750[(14)] = inst_34441);

(statearr_34750[(15)] = inst_34444);

(statearr_34750[(16)] = inst_34442);

return statearr_34750;
})();
var statearr_34751_36031 = state_34562__$1;
(statearr_34751_36031[(2)] = null);

(statearr_34751_36031[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34563 === (14))){
var state_34562__$1 = state_34562;
var statearr_34752_36032 = state_34562__$1;
(statearr_34752_36032[(2)] = null);

(statearr_34752_36032[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34563 === (45))){
var inst_34552 = (state_34562[(2)]);
var state_34562__$1 = state_34562;
var statearr_34753_36033 = state_34562__$1;
(statearr_34753_36033[(2)] = inst_34552);

(statearr_34753_36033[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34563 === (26))){
var inst_34496 = (state_34562[(27)]);
var inst_34548 = (state_34562[(2)]);
var inst_34549 = cljs.core.seq(inst_34496);
var state_34562__$1 = (function (){var statearr_34754 = state_34562;
(statearr_34754[(29)] = inst_34548);

return statearr_34754;
})();
if(inst_34549){
var statearr_34755_36034 = state_34562__$1;
(statearr_34755_36034[(1)] = (42));

} else {
var statearr_34756_36035 = state_34562__$1;
(statearr_34756_36035[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34563 === (16))){
var inst_34463 = (state_34562[(7)]);
var inst_34465 = cljs.core.chunked_seq_QMARK_(inst_34463);
var state_34562__$1 = state_34562;
if(inst_34465){
var statearr_34757_36036 = state_34562__$1;
(statearr_34757_36036[(1)] = (19));

} else {
var statearr_34758_36037 = state_34562__$1;
(statearr_34758_36037[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34563 === (38))){
var inst_34541 = (state_34562[(2)]);
var state_34562__$1 = state_34562;
var statearr_34759_36038 = state_34562__$1;
(statearr_34759_36038[(2)] = inst_34541);

(statearr_34759_36038[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34563 === (30))){
var state_34562__$1 = state_34562;
var statearr_34760_36039 = state_34562__$1;
(statearr_34760_36039[(2)] = null);

(statearr_34760_36039[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34563 === (10))){
var inst_34444 = (state_34562[(15)]);
var inst_34442 = (state_34562[(16)]);
var inst_34452 = cljs.core._nth(inst_34442,inst_34444);
var inst_34453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34452,(0),null);
var inst_34454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34452,(1),null);
var state_34562__$1 = (function (){var statearr_34761 = state_34562;
(statearr_34761[(24)] = inst_34453);

return statearr_34761;
})();
if(cljs.core.truth_(inst_34454)){
var statearr_34764_36040 = state_34562__$1;
(statearr_34764_36040[(1)] = (13));

} else {
var statearr_34765_36041 = state_34562__$1;
(statearr_34765_36041[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34563 === (18))){
var inst_34489 = (state_34562[(2)]);
var state_34562__$1 = state_34562;
var statearr_34770_36042 = state_34562__$1;
(statearr_34770_36042[(2)] = inst_34489);

(statearr_34770_36042[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34563 === (42))){
var state_34562__$1 = state_34562;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34562__$1,(45),dchan);
} else {
if((state_val_34563 === (37))){
var inst_34432 = (state_34562[(11)]);
var inst_34522 = (state_34562[(23)]);
var inst_34531 = (state_34562[(22)]);
var inst_34531__$1 = cljs.core.first(inst_34522);
var inst_34532 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34531__$1,inst_34432,done);
var state_34562__$1 = (function (){var statearr_34775 = state_34562;
(statearr_34775[(22)] = inst_34531__$1);

return statearr_34775;
})();
if(cljs.core.truth_(inst_34532)){
var statearr_34778_36043 = state_34562__$1;
(statearr_34778_36043[(1)] = (39));

} else {
var statearr_34779_36044 = state_34562__$1;
(statearr_34779_36044[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34563 === (8))){
var inst_34443 = (state_34562[(13)]);
var inst_34444 = (state_34562[(15)]);
var inst_34446 = (inst_34444 < inst_34443);
var inst_34447 = inst_34446;
var state_34562__$1 = state_34562;
if(cljs.core.truth_(inst_34447)){
var statearr_34783_36045 = state_34562__$1;
(statearr_34783_36045[(1)] = (10));

} else {
var statearr_34784_36046 = state_34562__$1;
(statearr_34784_36046[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__33600__auto__ = null;
var cljs$core$async$mult_$_state_machine__33600__auto____0 = (function (){
var statearr_34791 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34791[(0)] = cljs$core$async$mult_$_state_machine__33600__auto__);

(statearr_34791[(1)] = (1));

return statearr_34791;
});
var cljs$core$async$mult_$_state_machine__33600__auto____1 = (function (state_34562){
while(true){
var ret_value__33601__auto__ = (function (){try{while(true){
var result__33602__auto__ = switch__33599__auto__(state_34562);
if(cljs.core.keyword_identical_QMARK_(result__33602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33602__auto__;
}
break;
}
}catch (e34796){var ex__33603__auto__ = e34796;
var statearr_34797_36053 = state_34562;
(statearr_34797_36053[(2)] = ex__33603__auto__);


if(cljs.core.seq((state_34562[(4)]))){
var statearr_34800_36054 = state_34562;
(statearr_34800_36054[(1)] = cljs.core.first((state_34562[(4)])));

} else {
throw ex__33603__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36055 = state_34562;
state_34562 = G__36055;
continue;
} else {
return ret_value__33601__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33600__auto__ = function(state_34562){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33600__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33600__auto____1.call(this,state_34562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33600__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33600__auto____0;
cljs$core$async$mult_$_state_machine__33600__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33600__auto____1;
return cljs$core$async$mult_$_state_machine__33600__auto__;
})()
})();
var state__33685__auto__ = (function (){var statearr_34805 = f__33684__auto__();
(statearr_34805[(6)] = c__33683__auto___35970);

return statearr_34805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33685__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__34816 = arguments.length;
switch (G__34816) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_36057 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_36057(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_36058 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_36058(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_36059 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_36059(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_36060 = (function (m,state_map){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4510__auto__.call(null,m,state_map));
} else {
var m__4508__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4508__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_36060(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_36061 = (function (m,mode){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4510__auto__.call(null,m,mode));
} else {
var m__4508__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4508__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_36061(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___36067 = arguments.length;
var i__4819__auto___36068 = (0);
while(true){
if((i__4819__auto___36068 < len__4818__auto___36067)){
args__4824__auto__.push((arguments[i__4819__auto___36068]));

var G__36069 = (i__4819__auto___36068 + (1));
i__4819__auto___36068 = G__36069;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34849){
var map__34850 = p__34849;
var map__34850__$1 = cljs.core.__destructure_map(map__34850);
var opts = map__34850__$1;
var statearr_34851_36070 = state;
(statearr_34851_36070[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_34852_36071 = state;
(statearr_34852_36071[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_34853_36072 = state;
(statearr_34853_36072[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34845){
var G__34846 = cljs.core.first(seq34845);
var seq34845__$1 = cljs.core.next(seq34845);
var G__34847 = cljs.core.first(seq34845__$1);
var seq34845__$2 = cljs.core.next(seq34845__$1);
var G__34848 = cljs.core.first(seq34845__$2);
var seq34845__$3 = cljs.core.next(seq34845__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34846,G__34847,G__34848,seq34845__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34854 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34854 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34855){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34855 = meta34855;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34856,meta34855__$1){
var self__ = this;
var _34856__$1 = this;
return (new cljs.core.async.t_cljs$core$async34854(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34855__$1));
}));

(cljs.core.async.t_cljs$core$async34854.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34856){
var self__ = this;
var _34856__$1 = this;
return self__.meta34855;
}));

(cljs.core.async.t_cljs$core$async34854.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34854.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async34854.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34854.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34854.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34854.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34854.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34854.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34854.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34855","meta34855",611642071,null)], null);
}));

(cljs.core.async.t_cljs$core$async34854.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34854.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34854");

(cljs.core.async.t_cljs$core$async34854.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async34854");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34854.
 */
cljs.core.async.__GT_t_cljs$core$async34854 = (function cljs$core$async$mix_$___GT_t_cljs$core$async34854(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34855){
return (new cljs.core.async.t_cljs$core$async34854(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34855));
});

}

return (new cljs.core.async.t_cljs$core$async34854(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33683__auto___36077 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33684__auto__ = (function (){var switch__33599__auto__ = (function (state_34924){
var state_val_34925 = (state_34924[(1)]);
if((state_val_34925 === (7))){
var inst_34884 = (state_34924[(2)]);
var state_34924__$1 = state_34924;
if(cljs.core.truth_(inst_34884)){
var statearr_34926_36078 = state_34924__$1;
(statearr_34926_36078[(1)] = (8));

} else {
var statearr_34927_36079 = state_34924__$1;
(statearr_34927_36079[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (20))){
var inst_34877 = (state_34924[(7)]);
var state_34924__$1 = state_34924;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34924__$1,(23),out,inst_34877);
} else {
if((state_val_34925 === (1))){
var inst_34860 = calc_state();
var inst_34861 = cljs.core.__destructure_map(inst_34860);
var inst_34862 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34861,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34863 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34861,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34864 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34861,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34865 = inst_34860;
var state_34924__$1 = (function (){var statearr_34928 = state_34924;
(statearr_34928[(8)] = inst_34863);

(statearr_34928[(9)] = inst_34862);

(statearr_34928[(10)] = inst_34865);

(statearr_34928[(11)] = inst_34864);

return statearr_34928;
})();
var statearr_34929_36080 = state_34924__$1;
(statearr_34929_36080[(2)] = null);

(statearr_34929_36080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (24))){
var inst_34868 = (state_34924[(12)]);
var inst_34865 = inst_34868;
var state_34924__$1 = (function (){var statearr_34930 = state_34924;
(statearr_34930[(10)] = inst_34865);

return statearr_34930;
})();
var statearr_34931_36081 = state_34924__$1;
(statearr_34931_36081[(2)] = null);

(statearr_34931_36081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (4))){
var inst_34879 = (state_34924[(13)]);
var inst_34877 = (state_34924[(7)]);
var inst_34876 = (state_34924[(2)]);
var inst_34877__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34876,(0),null);
var inst_34878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34876,(1),null);
var inst_34879__$1 = (inst_34877__$1 == null);
var state_34924__$1 = (function (){var statearr_34932 = state_34924;
(statearr_34932[(13)] = inst_34879__$1);

(statearr_34932[(7)] = inst_34877__$1);

(statearr_34932[(14)] = inst_34878);

return statearr_34932;
})();
if(cljs.core.truth_(inst_34879__$1)){
var statearr_34933_36082 = state_34924__$1;
(statearr_34933_36082[(1)] = (5));

} else {
var statearr_34934_36083 = state_34924__$1;
(statearr_34934_36083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (15))){
var inst_34869 = (state_34924[(15)]);
var inst_34898 = (state_34924[(16)]);
var inst_34898__$1 = cljs.core.empty_QMARK_(inst_34869);
var state_34924__$1 = (function (){var statearr_34935 = state_34924;
(statearr_34935[(16)] = inst_34898__$1);

return statearr_34935;
})();
if(inst_34898__$1){
var statearr_34936_36084 = state_34924__$1;
(statearr_34936_36084[(1)] = (17));

} else {
var statearr_34937_36085 = state_34924__$1;
(statearr_34937_36085[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (21))){
var inst_34868 = (state_34924[(12)]);
var inst_34865 = inst_34868;
var state_34924__$1 = (function (){var statearr_34938 = state_34924;
(statearr_34938[(10)] = inst_34865);

return statearr_34938;
})();
var statearr_34939_36086 = state_34924__$1;
(statearr_34939_36086[(2)] = null);

(statearr_34939_36086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (13))){
var inst_34891 = (state_34924[(2)]);
var inst_34892 = calc_state();
var inst_34865 = inst_34892;
var state_34924__$1 = (function (){var statearr_34940 = state_34924;
(statearr_34940[(17)] = inst_34891);

(statearr_34940[(10)] = inst_34865);

return statearr_34940;
})();
var statearr_34941_36087 = state_34924__$1;
(statearr_34941_36087[(2)] = null);

(statearr_34941_36087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (22))){
var inst_34918 = (state_34924[(2)]);
var state_34924__$1 = state_34924;
var statearr_34942_36088 = state_34924__$1;
(statearr_34942_36088[(2)] = inst_34918);

(statearr_34942_36088[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (6))){
var inst_34878 = (state_34924[(14)]);
var inst_34882 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34878,change);
var state_34924__$1 = state_34924;
var statearr_34943_36096 = state_34924__$1;
(statearr_34943_36096[(2)] = inst_34882);

(statearr_34943_36096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (25))){
var state_34924__$1 = state_34924;
var statearr_34944_36097 = state_34924__$1;
(statearr_34944_36097[(2)] = null);

(statearr_34944_36097[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (17))){
var inst_34870 = (state_34924[(18)]);
var inst_34878 = (state_34924[(14)]);
var inst_34900 = (inst_34870.cljs$core$IFn$_invoke$arity$1 ? inst_34870.cljs$core$IFn$_invoke$arity$1(inst_34878) : inst_34870.call(null,inst_34878));
var inst_34901 = cljs.core.not(inst_34900);
var state_34924__$1 = state_34924;
var statearr_34945_36098 = state_34924__$1;
(statearr_34945_36098[(2)] = inst_34901);

(statearr_34945_36098[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (3))){
var inst_34922 = (state_34924[(2)]);
var state_34924__$1 = state_34924;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34924__$1,inst_34922);
} else {
if((state_val_34925 === (12))){
var state_34924__$1 = state_34924;
var statearr_34946_36099 = state_34924__$1;
(statearr_34946_36099[(2)] = null);

(statearr_34946_36099[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (2))){
var inst_34865 = (state_34924[(10)]);
var inst_34868 = (state_34924[(12)]);
var inst_34868__$1 = cljs.core.__destructure_map(inst_34865);
var inst_34869 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34868__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34870 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34868__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34871 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34868__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34924__$1 = (function (){var statearr_34947 = state_34924;
(statearr_34947[(15)] = inst_34869);

(statearr_34947[(18)] = inst_34870);

(statearr_34947[(12)] = inst_34868__$1);

return statearr_34947;
})();
return cljs.core.async.ioc_alts_BANG_(state_34924__$1,(4),inst_34871);
} else {
if((state_val_34925 === (23))){
var inst_34909 = (state_34924[(2)]);
var state_34924__$1 = state_34924;
if(cljs.core.truth_(inst_34909)){
var statearr_34948_36100 = state_34924__$1;
(statearr_34948_36100[(1)] = (24));

} else {
var statearr_34949_36101 = state_34924__$1;
(statearr_34949_36101[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (19))){
var inst_34904 = (state_34924[(2)]);
var state_34924__$1 = state_34924;
var statearr_34950_36106 = state_34924__$1;
(statearr_34950_36106[(2)] = inst_34904);

(statearr_34950_36106[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (11))){
var inst_34878 = (state_34924[(14)]);
var inst_34888 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_34878);
var state_34924__$1 = state_34924;
var statearr_34951_36107 = state_34924__$1;
(statearr_34951_36107[(2)] = inst_34888);

(statearr_34951_36107[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (9))){
var inst_34869 = (state_34924[(15)]);
var inst_34895 = (state_34924[(19)]);
var inst_34878 = (state_34924[(14)]);
var inst_34895__$1 = (inst_34869.cljs$core$IFn$_invoke$arity$1 ? inst_34869.cljs$core$IFn$_invoke$arity$1(inst_34878) : inst_34869.call(null,inst_34878));
var state_34924__$1 = (function (){var statearr_34952 = state_34924;
(statearr_34952[(19)] = inst_34895__$1);

return statearr_34952;
})();
if(cljs.core.truth_(inst_34895__$1)){
var statearr_34953_36111 = state_34924__$1;
(statearr_34953_36111[(1)] = (14));

} else {
var statearr_34954_36112 = state_34924__$1;
(statearr_34954_36112[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (5))){
var inst_34879 = (state_34924[(13)]);
var state_34924__$1 = state_34924;
var statearr_34955_36113 = state_34924__$1;
(statearr_34955_36113[(2)] = inst_34879);

(statearr_34955_36113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (14))){
var inst_34895 = (state_34924[(19)]);
var state_34924__$1 = state_34924;
var statearr_34956_36114 = state_34924__$1;
(statearr_34956_36114[(2)] = inst_34895);

(statearr_34956_36114[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (26))){
var inst_34914 = (state_34924[(2)]);
var state_34924__$1 = state_34924;
var statearr_34957_36115 = state_34924__$1;
(statearr_34957_36115[(2)] = inst_34914);

(statearr_34957_36115[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (16))){
var inst_34906 = (state_34924[(2)]);
var state_34924__$1 = state_34924;
if(cljs.core.truth_(inst_34906)){
var statearr_34958_36116 = state_34924__$1;
(statearr_34958_36116[(1)] = (20));

} else {
var statearr_34959_36117 = state_34924__$1;
(statearr_34959_36117[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (10))){
var inst_34920 = (state_34924[(2)]);
var state_34924__$1 = state_34924;
var statearr_34960_36118 = state_34924__$1;
(statearr_34960_36118[(2)] = inst_34920);

(statearr_34960_36118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (18))){
var inst_34898 = (state_34924[(16)]);
var state_34924__$1 = state_34924;
var statearr_34961_36122 = state_34924__$1;
(statearr_34961_36122[(2)] = inst_34898);

(statearr_34961_36122[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (8))){
var inst_34877 = (state_34924[(7)]);
var inst_34886 = (inst_34877 == null);
var state_34924__$1 = state_34924;
if(cljs.core.truth_(inst_34886)){
var statearr_34962_36123 = state_34924__$1;
(statearr_34962_36123[(1)] = (11));

} else {
var statearr_34963_36124 = state_34924__$1;
(statearr_34963_36124[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__33600__auto__ = null;
var cljs$core$async$mix_$_state_machine__33600__auto____0 = (function (){
var statearr_34964 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34964[(0)] = cljs$core$async$mix_$_state_machine__33600__auto__);

(statearr_34964[(1)] = (1));

return statearr_34964;
});
var cljs$core$async$mix_$_state_machine__33600__auto____1 = (function (state_34924){
while(true){
var ret_value__33601__auto__ = (function (){try{while(true){
var result__33602__auto__ = switch__33599__auto__(state_34924);
if(cljs.core.keyword_identical_QMARK_(result__33602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33602__auto__;
}
break;
}
}catch (e34965){var ex__33603__auto__ = e34965;
var statearr_34966_36128 = state_34924;
(statearr_34966_36128[(2)] = ex__33603__auto__);


if(cljs.core.seq((state_34924[(4)]))){
var statearr_34967_36129 = state_34924;
(statearr_34967_36129[(1)] = cljs.core.first((state_34924[(4)])));

} else {
throw ex__33603__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36130 = state_34924;
state_34924 = G__36130;
continue;
} else {
return ret_value__33601__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33600__auto__ = function(state_34924){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33600__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33600__auto____1.call(this,state_34924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33600__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33600__auto____0;
cljs$core$async$mix_$_state_machine__33600__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33600__auto____1;
return cljs$core$async$mix_$_state_machine__33600__auto__;
})()
})();
var state__33685__auto__ = (function (){var statearr_34968 = f__33684__auto__();
(statearr_34968[(6)] = c__33683__auto___36077);

return statearr_34968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33685__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_36134 = (function (p,v,ch,close_QMARK_){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4510__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4508__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_36134(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_36141 = (function (p,v,ch){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4510__auto__.call(null,p,v,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4508__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_36141(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_36142 = (function() {
var G__36143 = null;
var G__36143__1 = (function (p){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4510__auto__.call(null,p));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4508__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__36143__2 = (function (p,v){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4510__auto__.call(null,p,v));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4508__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__36143 = function(p,v){
switch(arguments.length){
case 1:
return G__36143__1.call(this,p);
case 2:
return G__36143__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36143.cljs$core$IFn$_invoke$arity$1 = G__36143__1;
G__36143.cljs$core$IFn$_invoke$arity$2 = G__36143__2;
return G__36143;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34970 = arguments.length;
switch (G__34970) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_36142(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_36142(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__34973 = arguments.length;
switch (G__34973) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__34971_SHARP_){
if(cljs.core.truth_((p1__34971_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34971_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__34971_SHARP_.call(null,topic)))){
return p1__34971_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34971_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34974 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34974 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34975){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34975 = meta34975;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34976,meta34975__$1){
var self__ = this;
var _34976__$1 = this;
return (new cljs.core.async.t_cljs$core$async34974(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34975__$1));
}));

(cljs.core.async.t_cljs$core$async34974.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34976){
var self__ = this;
var _34976__$1 = this;
return self__.meta34975;
}));

(cljs.core.async.t_cljs$core$async34974.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34974.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34974.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34974.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async34974.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async34974.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async34974.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async34974.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34975","meta34975",855236112,null)], null);
}));

(cljs.core.async.t_cljs$core$async34974.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34974.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34974");

(cljs.core.async.t_cljs$core$async34974.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async34974");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34974.
 */
cljs.core.async.__GT_t_cljs$core$async34974 = (function cljs$core$async$__GT_t_cljs$core$async34974(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34975){
return (new cljs.core.async.t_cljs$core$async34974(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34975));
});

}

return (new cljs.core.async.t_cljs$core$async34974(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33683__auto___36146 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33684__auto__ = (function (){var switch__33599__auto__ = (function (state_35048){
var state_val_35049 = (state_35048[(1)]);
if((state_val_35049 === (7))){
var inst_35044 = (state_35048[(2)]);
var state_35048__$1 = state_35048;
var statearr_35050_36151 = state_35048__$1;
(statearr_35050_36151[(2)] = inst_35044);

(statearr_35050_36151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35049 === (20))){
var state_35048__$1 = state_35048;
var statearr_35051_36152 = state_35048__$1;
(statearr_35051_36152[(2)] = null);

(statearr_35051_36152[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35049 === (1))){
var state_35048__$1 = state_35048;
var statearr_35052_36153 = state_35048__$1;
(statearr_35052_36153[(2)] = null);

(statearr_35052_36153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35049 === (24))){
var inst_35027 = (state_35048[(7)]);
var inst_35036 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35027);
var state_35048__$1 = state_35048;
var statearr_35053_36154 = state_35048__$1;
(statearr_35053_36154[(2)] = inst_35036);

(statearr_35053_36154[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35049 === (4))){
var inst_34979 = (state_35048[(8)]);
var inst_34979__$1 = (state_35048[(2)]);
var inst_34980 = (inst_34979__$1 == null);
var state_35048__$1 = (function (){var statearr_35054 = state_35048;
(statearr_35054[(8)] = inst_34979__$1);

return statearr_35054;
})();
if(cljs.core.truth_(inst_34980)){
var statearr_35055_36155 = state_35048__$1;
(statearr_35055_36155[(1)] = (5));

} else {
var statearr_35056_36156 = state_35048__$1;
(statearr_35056_36156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35049 === (15))){
var inst_35021 = (state_35048[(2)]);
var state_35048__$1 = state_35048;
var statearr_35057_36157 = state_35048__$1;
(statearr_35057_36157[(2)] = inst_35021);

(statearr_35057_36157[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35049 === (21))){
var inst_35041 = (state_35048[(2)]);
var state_35048__$1 = (function (){var statearr_35058 = state_35048;
(statearr_35058[(9)] = inst_35041);

return statearr_35058;
})();
var statearr_35059_36158 = state_35048__$1;
(statearr_35059_36158[(2)] = null);

(statearr_35059_36158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35049 === (13))){
var inst_35003 = (state_35048[(10)]);
var inst_35005 = cljs.core.chunked_seq_QMARK_(inst_35003);
var state_35048__$1 = state_35048;
if(inst_35005){
var statearr_35060_36159 = state_35048__$1;
(statearr_35060_36159[(1)] = (16));

} else {
var statearr_35061_36160 = state_35048__$1;
(statearr_35061_36160[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35049 === (22))){
var inst_35033 = (state_35048[(2)]);
var state_35048__$1 = state_35048;
if(cljs.core.truth_(inst_35033)){
var statearr_35062_36161 = state_35048__$1;
(statearr_35062_36161[(1)] = (23));

} else {
var statearr_35063_36162 = state_35048__$1;
(statearr_35063_36162[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35049 === (6))){
var inst_35027 = (state_35048[(7)]);
var inst_34979 = (state_35048[(8)]);
var inst_35029 = (state_35048[(11)]);
var inst_35027__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_34979) : topic_fn.call(null,inst_34979));
var inst_35028 = cljs.core.deref(mults);
var inst_35029__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35028,inst_35027__$1);
var state_35048__$1 = (function (){var statearr_35064 = state_35048;
(statearr_35064[(7)] = inst_35027__$1);

(statearr_35064[(11)] = inst_35029__$1);

return statearr_35064;
})();
if(cljs.core.truth_(inst_35029__$1)){
var statearr_35065_36167 = state_35048__$1;
(statearr_35065_36167[(1)] = (19));

} else {
var statearr_35066_36168 = state_35048__$1;
(statearr_35066_36168[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35049 === (25))){
var inst_35038 = (state_35048[(2)]);
var state_35048__$1 = state_35048;
var statearr_35067_36169 = state_35048__$1;
(statearr_35067_36169[(2)] = inst_35038);

(statearr_35067_36169[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35049 === (17))){
var inst_35003 = (state_35048[(10)]);
var inst_35012 = cljs.core.first(inst_35003);
var inst_35013 = cljs.core.async.muxch_STAR_(inst_35012);
var inst_35014 = cljs.core.async.close_BANG_(inst_35013);
var inst_35015 = cljs.core.next(inst_35003);
var inst_34989 = inst_35015;
var inst_34990 = null;
var inst_34991 = (0);
var inst_34992 = (0);
var state_35048__$1 = (function (){var statearr_35068 = state_35048;
(statearr_35068[(12)] = inst_34990);

(statearr_35068[(13)] = inst_35014);

(statearr_35068[(14)] = inst_34991);

(statearr_35068[(15)] = inst_34989);

(statearr_35068[(16)] = inst_34992);

return statearr_35068;
})();
var statearr_35069_36171 = state_35048__$1;
(statearr_35069_36171[(2)] = null);

(statearr_35069_36171[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35049 === (3))){
var inst_35046 = (state_35048[(2)]);
var state_35048__$1 = state_35048;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35048__$1,inst_35046);
} else {
if((state_val_35049 === (12))){
var inst_35023 = (state_35048[(2)]);
var state_35048__$1 = state_35048;
var statearr_35070_36172 = state_35048__$1;
(statearr_35070_36172[(2)] = inst_35023);

(statearr_35070_36172[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35049 === (2))){
var state_35048__$1 = state_35048;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35048__$1,(4),ch);
} else {
if((state_val_35049 === (23))){
var state_35048__$1 = state_35048;
var statearr_35071_36173 = state_35048__$1;
(statearr_35071_36173[(2)] = null);

(statearr_35071_36173[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35049 === (19))){
var inst_34979 = (state_35048[(8)]);
var inst_35029 = (state_35048[(11)]);
var inst_35031 = cljs.core.async.muxch_STAR_(inst_35029);
var state_35048__$1 = state_35048;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35048__$1,(22),inst_35031,inst_34979);
} else {
if((state_val_35049 === (11))){
var inst_35003 = (state_35048[(10)]);
var inst_34989 = (state_35048[(15)]);
var inst_35003__$1 = cljs.core.seq(inst_34989);
var state_35048__$1 = (function (){var statearr_35072 = state_35048;
(statearr_35072[(10)] = inst_35003__$1);

return statearr_35072;
})();
if(inst_35003__$1){
var statearr_35073_36174 = state_35048__$1;
(statearr_35073_36174[(1)] = (13));

} else {
var statearr_35074_36175 = state_35048__$1;
(statearr_35074_36175[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35049 === (9))){
var inst_35025 = (state_35048[(2)]);
var state_35048__$1 = state_35048;
var statearr_35075_36176 = state_35048__$1;
(statearr_35075_36176[(2)] = inst_35025);

(statearr_35075_36176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35049 === (5))){
var inst_34986 = cljs.core.deref(mults);
var inst_34987 = cljs.core.vals(inst_34986);
var inst_34988 = cljs.core.seq(inst_34987);
var inst_34989 = inst_34988;
var inst_34990 = null;
var inst_34991 = (0);
var inst_34992 = (0);
var state_35048__$1 = (function (){var statearr_35076 = state_35048;
(statearr_35076[(12)] = inst_34990);

(statearr_35076[(14)] = inst_34991);

(statearr_35076[(15)] = inst_34989);

(statearr_35076[(16)] = inst_34992);

return statearr_35076;
})();
var statearr_35077_36178 = state_35048__$1;
(statearr_35077_36178[(2)] = null);

(statearr_35077_36178[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35049 === (14))){
var state_35048__$1 = state_35048;
var statearr_35081_36179 = state_35048__$1;
(statearr_35081_36179[(2)] = null);

(statearr_35081_36179[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35049 === (16))){
var inst_35003 = (state_35048[(10)]);
var inst_35007 = cljs.core.chunk_first(inst_35003);
var inst_35008 = cljs.core.chunk_rest(inst_35003);
var inst_35009 = cljs.core.count(inst_35007);
var inst_34989 = inst_35008;
var inst_34990 = inst_35007;
var inst_34991 = inst_35009;
var inst_34992 = (0);
var state_35048__$1 = (function (){var statearr_35082 = state_35048;
(statearr_35082[(12)] = inst_34990);

(statearr_35082[(14)] = inst_34991);

(statearr_35082[(15)] = inst_34989);

(statearr_35082[(16)] = inst_34992);

return statearr_35082;
})();
var statearr_35083_36180 = state_35048__$1;
(statearr_35083_36180[(2)] = null);

(statearr_35083_36180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35049 === (10))){
var inst_34990 = (state_35048[(12)]);
var inst_34991 = (state_35048[(14)]);
var inst_34989 = (state_35048[(15)]);
var inst_34992 = (state_35048[(16)]);
var inst_34997 = cljs.core._nth(inst_34990,inst_34992);
var inst_34998 = cljs.core.async.muxch_STAR_(inst_34997);
var inst_34999 = cljs.core.async.close_BANG_(inst_34998);
var inst_35000 = (inst_34992 + (1));
var tmp35078 = inst_34990;
var tmp35079 = inst_34991;
var tmp35080 = inst_34989;
var inst_34989__$1 = tmp35080;
var inst_34990__$1 = tmp35078;
var inst_34991__$1 = tmp35079;
var inst_34992__$1 = inst_35000;
var state_35048__$1 = (function (){var statearr_35084 = state_35048;
(statearr_35084[(17)] = inst_34999);

(statearr_35084[(12)] = inst_34990__$1);

(statearr_35084[(14)] = inst_34991__$1);

(statearr_35084[(15)] = inst_34989__$1);

(statearr_35084[(16)] = inst_34992__$1);

return statearr_35084;
})();
var statearr_35085_36185 = state_35048__$1;
(statearr_35085_36185[(2)] = null);

(statearr_35085_36185[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35049 === (18))){
var inst_35018 = (state_35048[(2)]);
var state_35048__$1 = state_35048;
var statearr_35086_36186 = state_35048__$1;
(statearr_35086_36186[(2)] = inst_35018);

(statearr_35086_36186[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35049 === (8))){
var inst_34991 = (state_35048[(14)]);
var inst_34992 = (state_35048[(16)]);
var inst_34994 = (inst_34992 < inst_34991);
var inst_34995 = inst_34994;
var state_35048__$1 = state_35048;
if(cljs.core.truth_(inst_34995)){
var statearr_35087_36187 = state_35048__$1;
(statearr_35087_36187[(1)] = (10));

} else {
var statearr_35088_36188 = state_35048__$1;
(statearr_35088_36188[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33600__auto__ = null;
var cljs$core$async$state_machine__33600__auto____0 = (function (){
var statearr_35089 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35089[(0)] = cljs$core$async$state_machine__33600__auto__);

(statearr_35089[(1)] = (1));

return statearr_35089;
});
var cljs$core$async$state_machine__33600__auto____1 = (function (state_35048){
while(true){
var ret_value__33601__auto__ = (function (){try{while(true){
var result__33602__auto__ = switch__33599__auto__(state_35048);
if(cljs.core.keyword_identical_QMARK_(result__33602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33602__auto__;
}
break;
}
}catch (e35090){var ex__33603__auto__ = e35090;
var statearr_35091_36189 = state_35048;
(statearr_35091_36189[(2)] = ex__33603__auto__);


if(cljs.core.seq((state_35048[(4)]))){
var statearr_35092_36190 = state_35048;
(statearr_35092_36190[(1)] = cljs.core.first((state_35048[(4)])));

} else {
throw ex__33603__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36191 = state_35048;
state_35048 = G__36191;
continue;
} else {
return ret_value__33601__auto__;
}
break;
}
});
cljs$core$async$state_machine__33600__auto__ = function(state_35048){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33600__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33600__auto____1.call(this,state_35048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33600__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33600__auto____0;
cljs$core$async$state_machine__33600__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33600__auto____1;
return cljs$core$async$state_machine__33600__auto__;
})()
})();
var state__33685__auto__ = (function (){var statearr_35093 = f__33684__auto__();
(statearr_35093[(6)] = c__33683__auto___36146);

return statearr_35093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33685__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__35095 = arguments.length;
switch (G__35095) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__35097 = arguments.length;
switch (G__35097) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__35099 = arguments.length;
switch (G__35099) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__33683__auto___36195 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33684__auto__ = (function (){var switch__33599__auto__ = (function (state_35142){
var state_val_35143 = (state_35142[(1)]);
if((state_val_35143 === (7))){
var state_35142__$1 = state_35142;
var statearr_35144_36196 = state_35142__$1;
(statearr_35144_36196[(2)] = null);

(statearr_35144_36196[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35143 === (1))){
var state_35142__$1 = state_35142;
var statearr_35145_36197 = state_35142__$1;
(statearr_35145_36197[(2)] = null);

(statearr_35145_36197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35143 === (4))){
var inst_35103 = (state_35142[(7)]);
var inst_35102 = (state_35142[(8)]);
var inst_35105 = (inst_35103 < inst_35102);
var state_35142__$1 = state_35142;
if(cljs.core.truth_(inst_35105)){
var statearr_35146_36198 = state_35142__$1;
(statearr_35146_36198[(1)] = (6));

} else {
var statearr_35147_36199 = state_35142__$1;
(statearr_35147_36199[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35143 === (15))){
var inst_35128 = (state_35142[(9)]);
var inst_35133 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_35128);
var state_35142__$1 = state_35142;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35142__$1,(17),out,inst_35133);
} else {
if((state_val_35143 === (13))){
var inst_35128 = (state_35142[(9)]);
var inst_35128__$1 = (state_35142[(2)]);
var inst_35129 = cljs.core.some(cljs.core.nil_QMARK_,inst_35128__$1);
var state_35142__$1 = (function (){var statearr_35148 = state_35142;
(statearr_35148[(9)] = inst_35128__$1);

return statearr_35148;
})();
if(cljs.core.truth_(inst_35129)){
var statearr_35149_36200 = state_35142__$1;
(statearr_35149_36200[(1)] = (14));

} else {
var statearr_35150_36201 = state_35142__$1;
(statearr_35150_36201[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35143 === (6))){
var state_35142__$1 = state_35142;
var statearr_35151_36202 = state_35142__$1;
(statearr_35151_36202[(2)] = null);

(statearr_35151_36202[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35143 === (17))){
var inst_35135 = (state_35142[(2)]);
var state_35142__$1 = (function (){var statearr_35153 = state_35142;
(statearr_35153[(10)] = inst_35135);

return statearr_35153;
})();
var statearr_35154_36204 = state_35142__$1;
(statearr_35154_36204[(2)] = null);

(statearr_35154_36204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35143 === (3))){
var inst_35140 = (state_35142[(2)]);
var state_35142__$1 = state_35142;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35142__$1,inst_35140);
} else {
if((state_val_35143 === (12))){
var _ = (function (){var statearr_35155 = state_35142;
(statearr_35155[(4)] = cljs.core.rest((state_35142[(4)])));

return statearr_35155;
})();
var state_35142__$1 = state_35142;
var ex35152 = (state_35142__$1[(2)]);
var statearr_35156_36205 = state_35142__$1;
(statearr_35156_36205[(5)] = ex35152);


if((ex35152 instanceof Object)){
var statearr_35157_36206 = state_35142__$1;
(statearr_35157_36206[(1)] = (11));

(statearr_35157_36206[(5)] = null);

} else {
throw ex35152;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35143 === (2))){
var inst_35101 = cljs.core.reset_BANG_(dctr,cnt);
var inst_35102 = cnt;
var inst_35103 = (0);
var state_35142__$1 = (function (){var statearr_35158 = state_35142;
(statearr_35158[(7)] = inst_35103);

(statearr_35158[(8)] = inst_35102);

(statearr_35158[(11)] = inst_35101);

return statearr_35158;
})();
var statearr_35159_36210 = state_35142__$1;
(statearr_35159_36210[(2)] = null);

(statearr_35159_36210[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35143 === (11))){
var inst_35107 = (state_35142[(2)]);
var inst_35108 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_35142__$1 = (function (){var statearr_35160 = state_35142;
(statearr_35160[(12)] = inst_35107);

return statearr_35160;
})();
var statearr_35161_36211 = state_35142__$1;
(statearr_35161_36211[(2)] = inst_35108);

(statearr_35161_36211[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35143 === (9))){
var inst_35103 = (state_35142[(7)]);
var _ = (function (){var statearr_35162 = state_35142;
(statearr_35162[(4)] = cljs.core.cons((12),(state_35142[(4)])));

return statearr_35162;
})();
var inst_35114 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_35103) : chs__$1.call(null,inst_35103));
var inst_35115 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_35103) : done.call(null,inst_35103));
var inst_35116 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_35114,inst_35115);
var ___$1 = (function (){var statearr_35163 = state_35142;
(statearr_35163[(4)] = cljs.core.rest((state_35142[(4)])));

return statearr_35163;
})();
var state_35142__$1 = state_35142;
var statearr_35164_36212 = state_35142__$1;
(statearr_35164_36212[(2)] = inst_35116);

(statearr_35164_36212[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35143 === (5))){
var inst_35126 = (state_35142[(2)]);
var state_35142__$1 = (function (){var statearr_35165 = state_35142;
(statearr_35165[(13)] = inst_35126);

return statearr_35165;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35142__$1,(13),dchan);
} else {
if((state_val_35143 === (14))){
var inst_35131 = cljs.core.async.close_BANG_(out);
var state_35142__$1 = state_35142;
var statearr_35166_36213 = state_35142__$1;
(statearr_35166_36213[(2)] = inst_35131);

(statearr_35166_36213[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35143 === (16))){
var inst_35138 = (state_35142[(2)]);
var state_35142__$1 = state_35142;
var statearr_35167_36214 = state_35142__$1;
(statearr_35167_36214[(2)] = inst_35138);

(statearr_35167_36214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35143 === (10))){
var inst_35103 = (state_35142[(7)]);
var inst_35119 = (state_35142[(2)]);
var inst_35120 = (inst_35103 + (1));
var inst_35103__$1 = inst_35120;
var state_35142__$1 = (function (){var statearr_35168 = state_35142;
(statearr_35168[(7)] = inst_35103__$1);

(statearr_35168[(14)] = inst_35119);

return statearr_35168;
})();
var statearr_35169_36215 = state_35142__$1;
(statearr_35169_36215[(2)] = null);

(statearr_35169_36215[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35143 === (8))){
var inst_35124 = (state_35142[(2)]);
var state_35142__$1 = state_35142;
var statearr_35170_36217 = state_35142__$1;
(statearr_35170_36217[(2)] = inst_35124);

(statearr_35170_36217[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33600__auto__ = null;
var cljs$core$async$state_machine__33600__auto____0 = (function (){
var statearr_35171 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35171[(0)] = cljs$core$async$state_machine__33600__auto__);

(statearr_35171[(1)] = (1));

return statearr_35171;
});
var cljs$core$async$state_machine__33600__auto____1 = (function (state_35142){
while(true){
var ret_value__33601__auto__ = (function (){try{while(true){
var result__33602__auto__ = switch__33599__auto__(state_35142);
if(cljs.core.keyword_identical_QMARK_(result__33602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33602__auto__;
}
break;
}
}catch (e35172){var ex__33603__auto__ = e35172;
var statearr_35173_36218 = state_35142;
(statearr_35173_36218[(2)] = ex__33603__auto__);


if(cljs.core.seq((state_35142[(4)]))){
var statearr_35174_36219 = state_35142;
(statearr_35174_36219[(1)] = cljs.core.first((state_35142[(4)])));

} else {
throw ex__33603__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36220 = state_35142;
state_35142 = G__36220;
continue;
} else {
return ret_value__33601__auto__;
}
break;
}
});
cljs$core$async$state_machine__33600__auto__ = function(state_35142){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33600__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33600__auto____1.call(this,state_35142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33600__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33600__auto____0;
cljs$core$async$state_machine__33600__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33600__auto____1;
return cljs$core$async$state_machine__33600__auto__;
})()
})();
var state__33685__auto__ = (function (){var statearr_35175 = f__33684__auto__();
(statearr_35175[(6)] = c__33683__auto___36195);

return statearr_35175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33685__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__35178 = arguments.length;
switch (G__35178) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33683__auto___36226 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33684__auto__ = (function (){var switch__33599__auto__ = (function (state_35210){
var state_val_35211 = (state_35210[(1)]);
if((state_val_35211 === (7))){
var inst_35189 = (state_35210[(7)]);
var inst_35190 = (state_35210[(8)]);
var inst_35189__$1 = (state_35210[(2)]);
var inst_35190__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35189__$1,(0),null);
var inst_35191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35189__$1,(1),null);
var inst_35192 = (inst_35190__$1 == null);
var state_35210__$1 = (function (){var statearr_35212 = state_35210;
(statearr_35212[(7)] = inst_35189__$1);

(statearr_35212[(8)] = inst_35190__$1);

(statearr_35212[(9)] = inst_35191);

return statearr_35212;
})();
if(cljs.core.truth_(inst_35192)){
var statearr_35213_36227 = state_35210__$1;
(statearr_35213_36227[(1)] = (8));

} else {
var statearr_35214_36228 = state_35210__$1;
(statearr_35214_36228[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (1))){
var inst_35179 = cljs.core.vec(chs);
var inst_35180 = inst_35179;
var state_35210__$1 = (function (){var statearr_35215 = state_35210;
(statearr_35215[(10)] = inst_35180);

return statearr_35215;
})();
var statearr_35216_36229 = state_35210__$1;
(statearr_35216_36229[(2)] = null);

(statearr_35216_36229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (4))){
var inst_35180 = (state_35210[(10)]);
var state_35210__$1 = state_35210;
return cljs.core.async.ioc_alts_BANG_(state_35210__$1,(7),inst_35180);
} else {
if((state_val_35211 === (6))){
var inst_35206 = (state_35210[(2)]);
var state_35210__$1 = state_35210;
var statearr_35217_36230 = state_35210__$1;
(statearr_35217_36230[(2)] = inst_35206);

(statearr_35217_36230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (3))){
var inst_35208 = (state_35210[(2)]);
var state_35210__$1 = state_35210;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35210__$1,inst_35208);
} else {
if((state_val_35211 === (2))){
var inst_35180 = (state_35210[(10)]);
var inst_35182 = cljs.core.count(inst_35180);
var inst_35183 = (inst_35182 > (0));
var state_35210__$1 = state_35210;
if(cljs.core.truth_(inst_35183)){
var statearr_35219_36231 = state_35210__$1;
(statearr_35219_36231[(1)] = (4));

} else {
var statearr_35220_36232 = state_35210__$1;
(statearr_35220_36232[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (11))){
var inst_35180 = (state_35210[(10)]);
var inst_35199 = (state_35210[(2)]);
var tmp35218 = inst_35180;
var inst_35180__$1 = tmp35218;
var state_35210__$1 = (function (){var statearr_35221 = state_35210;
(statearr_35221[(10)] = inst_35180__$1);

(statearr_35221[(11)] = inst_35199);

return statearr_35221;
})();
var statearr_35222_36233 = state_35210__$1;
(statearr_35222_36233[(2)] = null);

(statearr_35222_36233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (9))){
var inst_35190 = (state_35210[(8)]);
var state_35210__$1 = state_35210;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35210__$1,(11),out,inst_35190);
} else {
if((state_val_35211 === (5))){
var inst_35204 = cljs.core.async.close_BANG_(out);
var state_35210__$1 = state_35210;
var statearr_35223_36234 = state_35210__$1;
(statearr_35223_36234[(2)] = inst_35204);

(statearr_35223_36234[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (10))){
var inst_35202 = (state_35210[(2)]);
var state_35210__$1 = state_35210;
var statearr_35224_36235 = state_35210__$1;
(statearr_35224_36235[(2)] = inst_35202);

(statearr_35224_36235[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (8))){
var inst_35180 = (state_35210[(10)]);
var inst_35189 = (state_35210[(7)]);
var inst_35190 = (state_35210[(8)]);
var inst_35191 = (state_35210[(9)]);
var inst_35194 = (function (){var cs = inst_35180;
var vec__35185 = inst_35189;
var v = inst_35190;
var c = inst_35191;
return (function (p1__35176_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__35176_SHARP_);
});
})();
var inst_35195 = cljs.core.filterv(inst_35194,inst_35180);
var inst_35180__$1 = inst_35195;
var state_35210__$1 = (function (){var statearr_35225 = state_35210;
(statearr_35225[(10)] = inst_35180__$1);

return statearr_35225;
})();
var statearr_35226_36237 = state_35210__$1;
(statearr_35226_36237[(2)] = null);

(statearr_35226_36237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33600__auto__ = null;
var cljs$core$async$state_machine__33600__auto____0 = (function (){
var statearr_35227 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35227[(0)] = cljs$core$async$state_machine__33600__auto__);

(statearr_35227[(1)] = (1));

return statearr_35227;
});
var cljs$core$async$state_machine__33600__auto____1 = (function (state_35210){
while(true){
var ret_value__33601__auto__ = (function (){try{while(true){
var result__33602__auto__ = switch__33599__auto__(state_35210);
if(cljs.core.keyword_identical_QMARK_(result__33602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33602__auto__;
}
break;
}
}catch (e35228){var ex__33603__auto__ = e35228;
var statearr_35229_36238 = state_35210;
(statearr_35229_36238[(2)] = ex__33603__auto__);


if(cljs.core.seq((state_35210[(4)]))){
var statearr_35230_36239 = state_35210;
(statearr_35230_36239[(1)] = cljs.core.first((state_35210[(4)])));

} else {
throw ex__33603__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36240 = state_35210;
state_35210 = G__36240;
continue;
} else {
return ret_value__33601__auto__;
}
break;
}
});
cljs$core$async$state_machine__33600__auto__ = function(state_35210){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33600__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33600__auto____1.call(this,state_35210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33600__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33600__auto____0;
cljs$core$async$state_machine__33600__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33600__auto____1;
return cljs$core$async$state_machine__33600__auto__;
})()
})();
var state__33685__auto__ = (function (){var statearr_35231 = f__33684__auto__();
(statearr_35231[(6)] = c__33683__auto___36226);

return statearr_35231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33685__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__35233 = arguments.length;
switch (G__35233) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33683__auto___36243 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33684__auto__ = (function (){var switch__33599__auto__ = (function (state_35261){
var state_val_35262 = (state_35261[(1)]);
if((state_val_35262 === (7))){
var inst_35243 = (state_35261[(7)]);
var inst_35243__$1 = (state_35261[(2)]);
var inst_35244 = (inst_35243__$1 == null);
var inst_35245 = cljs.core.not(inst_35244);
var state_35261__$1 = (function (){var statearr_35266 = state_35261;
(statearr_35266[(7)] = inst_35243__$1);

return statearr_35266;
})();
if(inst_35245){
var statearr_35267_36244 = state_35261__$1;
(statearr_35267_36244[(1)] = (8));

} else {
var statearr_35268_36245 = state_35261__$1;
(statearr_35268_36245[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35262 === (1))){
var inst_35238 = (0);
var state_35261__$1 = (function (){var statearr_35269 = state_35261;
(statearr_35269[(8)] = inst_35238);

return statearr_35269;
})();
var statearr_35270_36246 = state_35261__$1;
(statearr_35270_36246[(2)] = null);

(statearr_35270_36246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35262 === (4))){
var state_35261__$1 = state_35261;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35261__$1,(7),ch);
} else {
if((state_val_35262 === (6))){
var inst_35256 = (state_35261[(2)]);
var state_35261__$1 = state_35261;
var statearr_35271_36247 = state_35261__$1;
(statearr_35271_36247[(2)] = inst_35256);

(statearr_35271_36247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35262 === (3))){
var inst_35258 = (state_35261[(2)]);
var inst_35259 = cljs.core.async.close_BANG_(out);
var state_35261__$1 = (function (){var statearr_35272 = state_35261;
(statearr_35272[(9)] = inst_35258);

return statearr_35272;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35261__$1,inst_35259);
} else {
if((state_val_35262 === (2))){
var inst_35238 = (state_35261[(8)]);
var inst_35240 = (inst_35238 < n);
var state_35261__$1 = state_35261;
if(cljs.core.truth_(inst_35240)){
var statearr_35273_36249 = state_35261__$1;
(statearr_35273_36249[(1)] = (4));

} else {
var statearr_35274_36253 = state_35261__$1;
(statearr_35274_36253[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35262 === (11))){
var inst_35238 = (state_35261[(8)]);
var inst_35248 = (state_35261[(2)]);
var inst_35249 = (inst_35238 + (1));
var inst_35238__$1 = inst_35249;
var state_35261__$1 = (function (){var statearr_35277 = state_35261;
(statearr_35277[(8)] = inst_35238__$1);

(statearr_35277[(10)] = inst_35248);

return statearr_35277;
})();
var statearr_35278_36254 = state_35261__$1;
(statearr_35278_36254[(2)] = null);

(statearr_35278_36254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35262 === (9))){
var state_35261__$1 = state_35261;
var statearr_35279_36255 = state_35261__$1;
(statearr_35279_36255[(2)] = null);

(statearr_35279_36255[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35262 === (5))){
var state_35261__$1 = state_35261;
var statearr_35280_36256 = state_35261__$1;
(statearr_35280_36256[(2)] = null);

(statearr_35280_36256[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35262 === (10))){
var inst_35253 = (state_35261[(2)]);
var state_35261__$1 = state_35261;
var statearr_35281_36257 = state_35261__$1;
(statearr_35281_36257[(2)] = inst_35253);

(statearr_35281_36257[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35262 === (8))){
var inst_35243 = (state_35261[(7)]);
var state_35261__$1 = state_35261;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35261__$1,(11),out,inst_35243);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33600__auto__ = null;
var cljs$core$async$state_machine__33600__auto____0 = (function (){
var statearr_35282 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35282[(0)] = cljs$core$async$state_machine__33600__auto__);

(statearr_35282[(1)] = (1));

return statearr_35282;
});
var cljs$core$async$state_machine__33600__auto____1 = (function (state_35261){
while(true){
var ret_value__33601__auto__ = (function (){try{while(true){
var result__33602__auto__ = switch__33599__auto__(state_35261);
if(cljs.core.keyword_identical_QMARK_(result__33602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33602__auto__;
}
break;
}
}catch (e35283){var ex__33603__auto__ = e35283;
var statearr_35284_36258 = state_35261;
(statearr_35284_36258[(2)] = ex__33603__auto__);


if(cljs.core.seq((state_35261[(4)]))){
var statearr_35285_36259 = state_35261;
(statearr_35285_36259[(1)] = cljs.core.first((state_35261[(4)])));

} else {
throw ex__33603__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36260 = state_35261;
state_35261 = G__36260;
continue;
} else {
return ret_value__33601__auto__;
}
break;
}
});
cljs$core$async$state_machine__33600__auto__ = function(state_35261){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33600__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33600__auto____1.call(this,state_35261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33600__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33600__auto____0;
cljs$core$async$state_machine__33600__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33600__auto____1;
return cljs$core$async$state_machine__33600__auto__;
})()
})();
var state__33685__auto__ = (function (){var statearr_35286 = f__33684__auto__();
(statearr_35286[(6)] = c__33683__auto___36243);

return statearr_35286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33685__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35288 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35288 = (function (f,ch,meta35289){
this.f = f;
this.ch = ch;
this.meta35289 = meta35289;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35290,meta35289__$1){
var self__ = this;
var _35290__$1 = this;
return (new cljs.core.async.t_cljs$core$async35288(self__.f,self__.ch,meta35289__$1));
}));

(cljs.core.async.t_cljs$core$async35288.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35290){
var self__ = this;
var _35290__$1 = this;
return self__.meta35289;
}));

(cljs.core.async.t_cljs$core$async35288.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35288.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35288.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35288.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35288.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35291 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35291 = (function (f,ch,meta35289,_,fn1,meta35292){
this.f = f;
this.ch = ch;
this.meta35289 = meta35289;
this._ = _;
this.fn1 = fn1;
this.meta35292 = meta35292;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35291.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35293,meta35292__$1){
var self__ = this;
var _35293__$1 = this;
return (new cljs.core.async.t_cljs$core$async35291(self__.f,self__.ch,self__.meta35289,self__._,self__.fn1,meta35292__$1));
}));

(cljs.core.async.t_cljs$core$async35291.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35293){
var self__ = this;
var _35293__$1 = this;
return self__.meta35292;
}));

(cljs.core.async.t_cljs$core$async35291.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35291.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async35291.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35291.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__35287_SHARP_){
var G__35294 = (((p1__35287_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__35287_SHARP_) : self__.f.call(null,p1__35287_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__35294) : f1.call(null,G__35294));
});
}));

(cljs.core.async.t_cljs$core$async35291.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35289","meta35289",-1349085962,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35288","cljs.core.async/t_cljs$core$async35288",242803699,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35292","meta35292",1070282968,null)], null);
}));

(cljs.core.async.t_cljs$core$async35291.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35291.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35291");

(cljs.core.async.t_cljs$core$async35291.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async35291");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35291.
 */
cljs.core.async.__GT_t_cljs$core$async35291 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35291(f__$1,ch__$1,meta35289__$1,___$2,fn1__$1,meta35292){
return (new cljs.core.async.t_cljs$core$async35291(f__$1,ch__$1,meta35289__$1,___$2,fn1__$1,meta35292));
});

}

return (new cljs.core.async.t_cljs$core$async35291(self__.f,self__.ch,self__.meta35289,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4210__auto__ = ret;
if(cljs.core.truth_(and__4210__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4210__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__35297 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__35297) : self__.f.call(null,G__35297));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async35288.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35288.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async35288.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35289","meta35289",-1349085962,null)], null);
}));

(cljs.core.async.t_cljs$core$async35288.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35288.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35288");

(cljs.core.async.t_cljs$core$async35288.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async35288");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35288.
 */
cljs.core.async.__GT_t_cljs$core$async35288 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35288(f__$1,ch__$1,meta35289){
return (new cljs.core.async.t_cljs$core$async35288(f__$1,ch__$1,meta35289));
});

}

return (new cljs.core.async.t_cljs$core$async35288(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35299 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35299 = (function (f,ch,meta35300){
this.f = f;
this.ch = ch;
this.meta35300 = meta35300;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35301,meta35300__$1){
var self__ = this;
var _35301__$1 = this;
return (new cljs.core.async.t_cljs$core$async35299(self__.f,self__.ch,meta35300__$1));
}));

(cljs.core.async.t_cljs$core$async35299.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35301){
var self__ = this;
var _35301__$1 = this;
return self__.meta35300;
}));

(cljs.core.async.t_cljs$core$async35299.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35299.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35299.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35299.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35299.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35299.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async35299.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35300","meta35300",1688392038,null)], null);
}));

(cljs.core.async.t_cljs$core$async35299.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35299.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35299");

(cljs.core.async.t_cljs$core$async35299.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async35299");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35299.
 */
cljs.core.async.__GT_t_cljs$core$async35299 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35299(f__$1,ch__$1,meta35300){
return (new cljs.core.async.t_cljs$core$async35299(f__$1,ch__$1,meta35300));
});

}

return (new cljs.core.async.t_cljs$core$async35299(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35303 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35303 = (function (p,ch,meta35304){
this.p = p;
this.ch = ch;
this.meta35304 = meta35304;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35303.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35305,meta35304__$1){
var self__ = this;
var _35305__$1 = this;
return (new cljs.core.async.t_cljs$core$async35303(self__.p,self__.ch,meta35304__$1));
}));

(cljs.core.async.t_cljs$core$async35303.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35305){
var self__ = this;
var _35305__$1 = this;
return self__.meta35304;
}));

(cljs.core.async.t_cljs$core$async35303.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35303.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35303.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35303.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35303.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35303.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35303.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async35303.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35304","meta35304",-2072950430,null)], null);
}));

(cljs.core.async.t_cljs$core$async35303.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35303.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35303");

(cljs.core.async.t_cljs$core$async35303.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async35303");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35303.
 */
cljs.core.async.__GT_t_cljs$core$async35303 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35303(p__$1,ch__$1,meta35304){
return (new cljs.core.async.t_cljs$core$async35303(p__$1,ch__$1,meta35304));
});

}

return (new cljs.core.async.t_cljs$core$async35303(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__35312 = arguments.length;
switch (G__35312) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33683__auto___36262 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33684__auto__ = (function (){var switch__33599__auto__ = (function (state_35334){
var state_val_35335 = (state_35334[(1)]);
if((state_val_35335 === (7))){
var inst_35330 = (state_35334[(2)]);
var state_35334__$1 = state_35334;
var statearr_35336_36263 = state_35334__$1;
(statearr_35336_36263[(2)] = inst_35330);

(statearr_35336_36263[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35335 === (1))){
var state_35334__$1 = state_35334;
var statearr_35337_36264 = state_35334__$1;
(statearr_35337_36264[(2)] = null);

(statearr_35337_36264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35335 === (4))){
var inst_35316 = (state_35334[(7)]);
var inst_35316__$1 = (state_35334[(2)]);
var inst_35317 = (inst_35316__$1 == null);
var state_35334__$1 = (function (){var statearr_35338 = state_35334;
(statearr_35338[(7)] = inst_35316__$1);

return statearr_35338;
})();
if(cljs.core.truth_(inst_35317)){
var statearr_35339_36269 = state_35334__$1;
(statearr_35339_36269[(1)] = (5));

} else {
var statearr_35340_36270 = state_35334__$1;
(statearr_35340_36270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35335 === (6))){
var inst_35316 = (state_35334[(7)]);
var inst_35321 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35316) : p.call(null,inst_35316));
var state_35334__$1 = state_35334;
if(cljs.core.truth_(inst_35321)){
var statearr_35341_36271 = state_35334__$1;
(statearr_35341_36271[(1)] = (8));

} else {
var statearr_35342_36272 = state_35334__$1;
(statearr_35342_36272[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35335 === (3))){
var inst_35332 = (state_35334[(2)]);
var state_35334__$1 = state_35334;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35334__$1,inst_35332);
} else {
if((state_val_35335 === (2))){
var state_35334__$1 = state_35334;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35334__$1,(4),ch);
} else {
if((state_val_35335 === (11))){
var inst_35324 = (state_35334[(2)]);
var state_35334__$1 = state_35334;
var statearr_35343_36273 = state_35334__$1;
(statearr_35343_36273[(2)] = inst_35324);

(statearr_35343_36273[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35335 === (9))){
var state_35334__$1 = state_35334;
var statearr_35344_36274 = state_35334__$1;
(statearr_35344_36274[(2)] = null);

(statearr_35344_36274[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35335 === (5))){
var inst_35319 = cljs.core.async.close_BANG_(out);
var state_35334__$1 = state_35334;
var statearr_35345_36275 = state_35334__$1;
(statearr_35345_36275[(2)] = inst_35319);

(statearr_35345_36275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35335 === (10))){
var inst_35327 = (state_35334[(2)]);
var state_35334__$1 = (function (){var statearr_35346 = state_35334;
(statearr_35346[(8)] = inst_35327);

return statearr_35346;
})();
var statearr_35347_36276 = state_35334__$1;
(statearr_35347_36276[(2)] = null);

(statearr_35347_36276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35335 === (8))){
var inst_35316 = (state_35334[(7)]);
var state_35334__$1 = state_35334;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35334__$1,(11),out,inst_35316);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33600__auto__ = null;
var cljs$core$async$state_machine__33600__auto____0 = (function (){
var statearr_35348 = [null,null,null,null,null,null,null,null,null];
(statearr_35348[(0)] = cljs$core$async$state_machine__33600__auto__);

(statearr_35348[(1)] = (1));

return statearr_35348;
});
var cljs$core$async$state_machine__33600__auto____1 = (function (state_35334){
while(true){
var ret_value__33601__auto__ = (function (){try{while(true){
var result__33602__auto__ = switch__33599__auto__(state_35334);
if(cljs.core.keyword_identical_QMARK_(result__33602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33602__auto__;
}
break;
}
}catch (e35349){var ex__33603__auto__ = e35349;
var statearr_35350_36277 = state_35334;
(statearr_35350_36277[(2)] = ex__33603__auto__);


if(cljs.core.seq((state_35334[(4)]))){
var statearr_35351_36278 = state_35334;
(statearr_35351_36278[(1)] = cljs.core.first((state_35334[(4)])));

} else {
throw ex__33603__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36279 = state_35334;
state_35334 = G__36279;
continue;
} else {
return ret_value__33601__auto__;
}
break;
}
});
cljs$core$async$state_machine__33600__auto__ = function(state_35334){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33600__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33600__auto____1.call(this,state_35334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33600__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33600__auto____0;
cljs$core$async$state_machine__33600__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33600__auto____1;
return cljs$core$async$state_machine__33600__auto__;
})()
})();
var state__33685__auto__ = (function (){var statearr_35352 = f__33684__auto__();
(statearr_35352[(6)] = c__33683__auto___36262);

return statearr_35352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33685__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35354 = arguments.length;
switch (G__35354) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33683__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33684__auto__ = (function (){var switch__33599__auto__ = (function (state_35454){
var state_val_35455 = (state_35454[(1)]);
if((state_val_35455 === (7))){
var inst_35450 = (state_35454[(2)]);
var state_35454__$1 = state_35454;
var statearr_35456_36281 = state_35454__$1;
(statearr_35456_36281[(2)] = inst_35450);

(statearr_35456_36281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (20))){
var inst_35420 = (state_35454[(7)]);
var inst_35431 = (state_35454[(2)]);
var inst_35432 = cljs.core.next(inst_35420);
var inst_35377 = inst_35432;
var inst_35378 = null;
var inst_35379 = (0);
var inst_35381 = (0);
var state_35454__$1 = (function (){var statearr_35457 = state_35454;
(statearr_35457[(8)] = inst_35431);

(statearr_35457[(9)] = inst_35379);

(statearr_35457[(10)] = inst_35378);

(statearr_35457[(11)] = inst_35381);

(statearr_35457[(12)] = inst_35377);

return statearr_35457;
})();
var statearr_35458_36282 = state_35454__$1;
(statearr_35458_36282[(2)] = null);

(statearr_35458_36282[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (1))){
var state_35454__$1 = state_35454;
var statearr_35459_36283 = state_35454__$1;
(statearr_35459_36283[(2)] = null);

(statearr_35459_36283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (4))){
var inst_35363 = (state_35454[(13)]);
var inst_35363__$1 = (state_35454[(2)]);
var inst_35365 = (inst_35363__$1 == null);
var state_35454__$1 = (function (){var statearr_35461 = state_35454;
(statearr_35461[(13)] = inst_35363__$1);

return statearr_35461;
})();
if(cljs.core.truth_(inst_35365)){
var statearr_35465_36284 = state_35454__$1;
(statearr_35465_36284[(1)] = (5));

} else {
var statearr_35466_36285 = state_35454__$1;
(statearr_35466_36285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (15))){
var state_35454__$1 = state_35454;
var statearr_35471_36286 = state_35454__$1;
(statearr_35471_36286[(2)] = null);

(statearr_35471_36286[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (21))){
var state_35454__$1 = state_35454;
var statearr_35472_36287 = state_35454__$1;
(statearr_35472_36287[(2)] = null);

(statearr_35472_36287[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (13))){
var inst_35379 = (state_35454[(9)]);
var inst_35378 = (state_35454[(10)]);
var inst_35381 = (state_35454[(11)]);
var inst_35377 = (state_35454[(12)]);
var inst_35416 = (state_35454[(2)]);
var inst_35417 = (inst_35381 + (1));
var tmp35468 = inst_35379;
var tmp35469 = inst_35378;
var tmp35470 = inst_35377;
var inst_35377__$1 = tmp35470;
var inst_35378__$1 = tmp35469;
var inst_35379__$1 = tmp35468;
var inst_35381__$1 = inst_35417;
var state_35454__$1 = (function (){var statearr_35477 = state_35454;
(statearr_35477[(14)] = inst_35416);

(statearr_35477[(9)] = inst_35379__$1);

(statearr_35477[(10)] = inst_35378__$1);

(statearr_35477[(11)] = inst_35381__$1);

(statearr_35477[(12)] = inst_35377__$1);

return statearr_35477;
})();
var statearr_35478_36288 = state_35454__$1;
(statearr_35478_36288[(2)] = null);

(statearr_35478_36288[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (22))){
var state_35454__$1 = state_35454;
var statearr_35480_36289 = state_35454__$1;
(statearr_35480_36289[(2)] = null);

(statearr_35480_36289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (6))){
var inst_35363 = (state_35454[(13)]);
var inst_35374 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35363) : f.call(null,inst_35363));
var inst_35375 = cljs.core.seq(inst_35374);
var inst_35377 = inst_35375;
var inst_35378 = null;
var inst_35379 = (0);
var inst_35381 = (0);
var state_35454__$1 = (function (){var statearr_35490 = state_35454;
(statearr_35490[(9)] = inst_35379);

(statearr_35490[(10)] = inst_35378);

(statearr_35490[(11)] = inst_35381);

(statearr_35490[(12)] = inst_35377);

return statearr_35490;
})();
var statearr_35491_36290 = state_35454__$1;
(statearr_35491_36290[(2)] = null);

(statearr_35491_36290[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (17))){
var inst_35420 = (state_35454[(7)]);
var inst_35424 = cljs.core.chunk_first(inst_35420);
var inst_35425 = cljs.core.chunk_rest(inst_35420);
var inst_35426 = cljs.core.count(inst_35424);
var inst_35377 = inst_35425;
var inst_35378 = inst_35424;
var inst_35379 = inst_35426;
var inst_35381 = (0);
var state_35454__$1 = (function (){var statearr_35492 = state_35454;
(statearr_35492[(9)] = inst_35379);

(statearr_35492[(10)] = inst_35378);

(statearr_35492[(11)] = inst_35381);

(statearr_35492[(12)] = inst_35377);

return statearr_35492;
})();
var statearr_35493_36292 = state_35454__$1;
(statearr_35493_36292[(2)] = null);

(statearr_35493_36292[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (3))){
var inst_35452 = (state_35454[(2)]);
var state_35454__$1 = state_35454;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35454__$1,inst_35452);
} else {
if((state_val_35455 === (12))){
var inst_35440 = (state_35454[(2)]);
var state_35454__$1 = state_35454;
var statearr_35494_36293 = state_35454__$1;
(statearr_35494_36293[(2)] = inst_35440);

(statearr_35494_36293[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (2))){
var state_35454__$1 = state_35454;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35454__$1,(4),in$);
} else {
if((state_val_35455 === (23))){
var inst_35448 = (state_35454[(2)]);
var state_35454__$1 = state_35454;
var statearr_35495_36294 = state_35454__$1;
(statearr_35495_36294[(2)] = inst_35448);

(statearr_35495_36294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (19))){
var inst_35435 = (state_35454[(2)]);
var state_35454__$1 = state_35454;
var statearr_35496_36295 = state_35454__$1;
(statearr_35496_36295[(2)] = inst_35435);

(statearr_35496_36295[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (11))){
var inst_35420 = (state_35454[(7)]);
var inst_35377 = (state_35454[(12)]);
var inst_35420__$1 = cljs.core.seq(inst_35377);
var state_35454__$1 = (function (){var statearr_35497 = state_35454;
(statearr_35497[(7)] = inst_35420__$1);

return statearr_35497;
})();
if(inst_35420__$1){
var statearr_35498_36296 = state_35454__$1;
(statearr_35498_36296[(1)] = (14));

} else {
var statearr_35499_36297 = state_35454__$1;
(statearr_35499_36297[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (9))){
var inst_35442 = (state_35454[(2)]);
var inst_35443 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_35454__$1 = (function (){var statearr_35500 = state_35454;
(statearr_35500[(15)] = inst_35442);

return statearr_35500;
})();
if(cljs.core.truth_(inst_35443)){
var statearr_35501_36298 = state_35454__$1;
(statearr_35501_36298[(1)] = (21));

} else {
var statearr_35502_36299 = state_35454__$1;
(statearr_35502_36299[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (5))){
var inst_35367 = cljs.core.async.close_BANG_(out);
var state_35454__$1 = state_35454;
var statearr_35503_36300 = state_35454__$1;
(statearr_35503_36300[(2)] = inst_35367);

(statearr_35503_36300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (14))){
var inst_35420 = (state_35454[(7)]);
var inst_35422 = cljs.core.chunked_seq_QMARK_(inst_35420);
var state_35454__$1 = state_35454;
if(inst_35422){
var statearr_35504_36301 = state_35454__$1;
(statearr_35504_36301[(1)] = (17));

} else {
var statearr_35505_36302 = state_35454__$1;
(statearr_35505_36302[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (16))){
var inst_35438 = (state_35454[(2)]);
var state_35454__$1 = state_35454;
var statearr_35506_36303 = state_35454__$1;
(statearr_35506_36303[(2)] = inst_35438);

(statearr_35506_36303[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35455 === (10))){
var inst_35378 = (state_35454[(10)]);
var inst_35381 = (state_35454[(11)]);
var inst_35413 = cljs.core._nth(inst_35378,inst_35381);
var state_35454__$1 = state_35454;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35454__$1,(13),out,inst_35413);
} else {
if((state_val_35455 === (18))){
var inst_35420 = (state_35454[(7)]);
var inst_35429 = cljs.core.first(inst_35420);
var state_35454__$1 = state_35454;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35454__$1,(20),out,inst_35429);
} else {
if((state_val_35455 === (8))){
var inst_35379 = (state_35454[(9)]);
var inst_35381 = (state_35454[(11)]);
var inst_35383 = (inst_35381 < inst_35379);
var inst_35384 = inst_35383;
var state_35454__$1 = state_35454;
if(cljs.core.truth_(inst_35384)){
var statearr_35507_36304 = state_35454__$1;
(statearr_35507_36304[(1)] = (10));

} else {
var statearr_35509_36305 = state_35454__$1;
(statearr_35509_36305[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33600__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33600__auto____0 = (function (){
var statearr_35513 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35513[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33600__auto__);

(statearr_35513[(1)] = (1));

return statearr_35513;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33600__auto____1 = (function (state_35454){
while(true){
var ret_value__33601__auto__ = (function (){try{while(true){
var result__33602__auto__ = switch__33599__auto__(state_35454);
if(cljs.core.keyword_identical_QMARK_(result__33602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33602__auto__;
}
break;
}
}catch (e35514){var ex__33603__auto__ = e35514;
var statearr_35515_36306 = state_35454;
(statearr_35515_36306[(2)] = ex__33603__auto__);


if(cljs.core.seq((state_35454[(4)]))){
var statearr_35516_36307 = state_35454;
(statearr_35516_36307[(1)] = cljs.core.first((state_35454[(4)])));

} else {
throw ex__33603__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36308 = state_35454;
state_35454 = G__36308;
continue;
} else {
return ret_value__33601__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33600__auto__ = function(state_35454){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33600__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33600__auto____1.call(this,state_35454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33600__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33600__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33600__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33600__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33600__auto__;
})()
})();
var state__33685__auto__ = (function (){var statearr_35518 = f__33684__auto__();
(statearr_35518[(6)] = c__33683__auto__);

return statearr_35518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33685__auto__);
}));

return c__33683__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35521 = arguments.length;
switch (G__35521) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__35525 = arguments.length;
switch (G__35525) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__35530 = arguments.length;
switch (G__35530) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33683__auto___36312 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33684__auto__ = (function (){var switch__33599__auto__ = (function (state_35554){
var state_val_35555 = (state_35554[(1)]);
if((state_val_35555 === (7))){
var inst_35549 = (state_35554[(2)]);
var state_35554__$1 = state_35554;
var statearr_35556_36313 = state_35554__$1;
(statearr_35556_36313[(2)] = inst_35549);

(statearr_35556_36313[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (1))){
var inst_35531 = null;
var state_35554__$1 = (function (){var statearr_35557 = state_35554;
(statearr_35557[(7)] = inst_35531);

return statearr_35557;
})();
var statearr_35558_36314 = state_35554__$1;
(statearr_35558_36314[(2)] = null);

(statearr_35558_36314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (4))){
var inst_35534 = (state_35554[(8)]);
var inst_35534__$1 = (state_35554[(2)]);
var inst_35535 = (inst_35534__$1 == null);
var inst_35536 = cljs.core.not(inst_35535);
var state_35554__$1 = (function (){var statearr_35559 = state_35554;
(statearr_35559[(8)] = inst_35534__$1);

return statearr_35559;
})();
if(inst_35536){
var statearr_35560_36315 = state_35554__$1;
(statearr_35560_36315[(1)] = (5));

} else {
var statearr_35561_36316 = state_35554__$1;
(statearr_35561_36316[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (6))){
var state_35554__$1 = state_35554;
var statearr_35562_36318 = state_35554__$1;
(statearr_35562_36318[(2)] = null);

(statearr_35562_36318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (3))){
var inst_35551 = (state_35554[(2)]);
var inst_35552 = cljs.core.async.close_BANG_(out);
var state_35554__$1 = (function (){var statearr_35563 = state_35554;
(statearr_35563[(9)] = inst_35551);

return statearr_35563;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35554__$1,inst_35552);
} else {
if((state_val_35555 === (2))){
var state_35554__$1 = state_35554;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35554__$1,(4),ch);
} else {
if((state_val_35555 === (11))){
var inst_35534 = (state_35554[(8)]);
var inst_35543 = (state_35554[(2)]);
var inst_35531 = inst_35534;
var state_35554__$1 = (function (){var statearr_35564 = state_35554;
(statearr_35564[(7)] = inst_35531);

(statearr_35564[(10)] = inst_35543);

return statearr_35564;
})();
var statearr_35565_36322 = state_35554__$1;
(statearr_35565_36322[(2)] = null);

(statearr_35565_36322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (9))){
var inst_35534 = (state_35554[(8)]);
var state_35554__$1 = state_35554;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35554__$1,(11),out,inst_35534);
} else {
if((state_val_35555 === (5))){
var inst_35531 = (state_35554[(7)]);
var inst_35534 = (state_35554[(8)]);
var inst_35538 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35534,inst_35531);
var state_35554__$1 = state_35554;
if(inst_35538){
var statearr_35567_36323 = state_35554__$1;
(statearr_35567_36323[(1)] = (8));

} else {
var statearr_35568_36324 = state_35554__$1;
(statearr_35568_36324[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (10))){
var inst_35546 = (state_35554[(2)]);
var state_35554__$1 = state_35554;
var statearr_35569_36325 = state_35554__$1;
(statearr_35569_36325[(2)] = inst_35546);

(statearr_35569_36325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (8))){
var inst_35531 = (state_35554[(7)]);
var tmp35566 = inst_35531;
var inst_35531__$1 = tmp35566;
var state_35554__$1 = (function (){var statearr_35570 = state_35554;
(statearr_35570[(7)] = inst_35531__$1);

return statearr_35570;
})();
var statearr_35571_36326 = state_35554__$1;
(statearr_35571_36326[(2)] = null);

(statearr_35571_36326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33600__auto__ = null;
var cljs$core$async$state_machine__33600__auto____0 = (function (){
var statearr_35572 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35572[(0)] = cljs$core$async$state_machine__33600__auto__);

(statearr_35572[(1)] = (1));

return statearr_35572;
});
var cljs$core$async$state_machine__33600__auto____1 = (function (state_35554){
while(true){
var ret_value__33601__auto__ = (function (){try{while(true){
var result__33602__auto__ = switch__33599__auto__(state_35554);
if(cljs.core.keyword_identical_QMARK_(result__33602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33602__auto__;
}
break;
}
}catch (e35573){var ex__33603__auto__ = e35573;
var statearr_35574_36331 = state_35554;
(statearr_35574_36331[(2)] = ex__33603__auto__);


if(cljs.core.seq((state_35554[(4)]))){
var statearr_35575_36332 = state_35554;
(statearr_35575_36332[(1)] = cljs.core.first((state_35554[(4)])));

} else {
throw ex__33603__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36333 = state_35554;
state_35554 = G__36333;
continue;
} else {
return ret_value__33601__auto__;
}
break;
}
});
cljs$core$async$state_machine__33600__auto__ = function(state_35554){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33600__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33600__auto____1.call(this,state_35554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33600__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33600__auto____0;
cljs$core$async$state_machine__33600__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33600__auto____1;
return cljs$core$async$state_machine__33600__auto__;
})()
})();
var state__33685__auto__ = (function (){var statearr_35576 = f__33684__auto__();
(statearr_35576[(6)] = c__33683__auto___36312);

return statearr_35576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33685__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35578 = arguments.length;
switch (G__35578) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33683__auto___36337 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33684__auto__ = (function (){var switch__33599__auto__ = (function (state_35616){
var state_val_35617 = (state_35616[(1)]);
if((state_val_35617 === (7))){
var inst_35612 = (state_35616[(2)]);
var state_35616__$1 = state_35616;
var statearr_35618_36338 = state_35616__$1;
(statearr_35618_36338[(2)] = inst_35612);

(statearr_35618_36338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35617 === (1))){
var inst_35579 = (new Array(n));
var inst_35580 = inst_35579;
var inst_35581 = (0);
var state_35616__$1 = (function (){var statearr_35619 = state_35616;
(statearr_35619[(7)] = inst_35580);

(statearr_35619[(8)] = inst_35581);

return statearr_35619;
})();
var statearr_35620_36339 = state_35616__$1;
(statearr_35620_36339[(2)] = null);

(statearr_35620_36339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35617 === (4))){
var inst_35584 = (state_35616[(9)]);
var inst_35584__$1 = (state_35616[(2)]);
var inst_35585 = (inst_35584__$1 == null);
var inst_35586 = cljs.core.not(inst_35585);
var state_35616__$1 = (function (){var statearr_35621 = state_35616;
(statearr_35621[(9)] = inst_35584__$1);

return statearr_35621;
})();
if(inst_35586){
var statearr_35622_36340 = state_35616__$1;
(statearr_35622_36340[(1)] = (5));

} else {
var statearr_35623_36341 = state_35616__$1;
(statearr_35623_36341[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35617 === (15))){
var inst_35606 = (state_35616[(2)]);
var state_35616__$1 = state_35616;
var statearr_35624_36342 = state_35616__$1;
(statearr_35624_36342[(2)] = inst_35606);

(statearr_35624_36342[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35617 === (13))){
var state_35616__$1 = state_35616;
var statearr_35625_36343 = state_35616__$1;
(statearr_35625_36343[(2)] = null);

(statearr_35625_36343[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35617 === (6))){
var inst_35581 = (state_35616[(8)]);
var inst_35602 = (inst_35581 > (0));
var state_35616__$1 = state_35616;
if(cljs.core.truth_(inst_35602)){
var statearr_35626_36344 = state_35616__$1;
(statearr_35626_36344[(1)] = (12));

} else {
var statearr_35627_36345 = state_35616__$1;
(statearr_35627_36345[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35617 === (3))){
var inst_35614 = (state_35616[(2)]);
var state_35616__$1 = state_35616;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35616__$1,inst_35614);
} else {
if((state_val_35617 === (12))){
var inst_35580 = (state_35616[(7)]);
var inst_35604 = cljs.core.vec(inst_35580);
var state_35616__$1 = state_35616;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35616__$1,(15),out,inst_35604);
} else {
if((state_val_35617 === (2))){
var state_35616__$1 = state_35616;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35616__$1,(4),ch);
} else {
if((state_val_35617 === (11))){
var inst_35596 = (state_35616[(2)]);
var inst_35597 = (new Array(n));
var inst_35580 = inst_35597;
var inst_35581 = (0);
var state_35616__$1 = (function (){var statearr_35628 = state_35616;
(statearr_35628[(7)] = inst_35580);

(statearr_35628[(8)] = inst_35581);

(statearr_35628[(10)] = inst_35596);

return statearr_35628;
})();
var statearr_35629_36346 = state_35616__$1;
(statearr_35629_36346[(2)] = null);

(statearr_35629_36346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35617 === (9))){
var inst_35580 = (state_35616[(7)]);
var inst_35594 = cljs.core.vec(inst_35580);
var state_35616__$1 = state_35616;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35616__$1,(11),out,inst_35594);
} else {
if((state_val_35617 === (5))){
var inst_35580 = (state_35616[(7)]);
var inst_35581 = (state_35616[(8)]);
var inst_35584 = (state_35616[(9)]);
var inst_35589 = (state_35616[(11)]);
var inst_35588 = (inst_35580[inst_35581] = inst_35584);
var inst_35589__$1 = (inst_35581 + (1));
var inst_35590 = (inst_35589__$1 < n);
var state_35616__$1 = (function (){var statearr_35630 = state_35616;
(statearr_35630[(11)] = inst_35589__$1);

(statearr_35630[(12)] = inst_35588);

return statearr_35630;
})();
if(cljs.core.truth_(inst_35590)){
var statearr_35631_36347 = state_35616__$1;
(statearr_35631_36347[(1)] = (8));

} else {
var statearr_35632_36348 = state_35616__$1;
(statearr_35632_36348[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35617 === (14))){
var inst_35609 = (state_35616[(2)]);
var inst_35610 = cljs.core.async.close_BANG_(out);
var state_35616__$1 = (function (){var statearr_35634 = state_35616;
(statearr_35634[(13)] = inst_35609);

return statearr_35634;
})();
var statearr_35635_36349 = state_35616__$1;
(statearr_35635_36349[(2)] = inst_35610);

(statearr_35635_36349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35617 === (10))){
var inst_35600 = (state_35616[(2)]);
var state_35616__$1 = state_35616;
var statearr_35636_36350 = state_35616__$1;
(statearr_35636_36350[(2)] = inst_35600);

(statearr_35636_36350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35617 === (8))){
var inst_35580 = (state_35616[(7)]);
var inst_35589 = (state_35616[(11)]);
var tmp35633 = inst_35580;
var inst_35580__$1 = tmp35633;
var inst_35581 = inst_35589;
var state_35616__$1 = (function (){var statearr_35637 = state_35616;
(statearr_35637[(7)] = inst_35580__$1);

(statearr_35637[(8)] = inst_35581);

return statearr_35637;
})();
var statearr_35638_36351 = state_35616__$1;
(statearr_35638_36351[(2)] = null);

(statearr_35638_36351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33600__auto__ = null;
var cljs$core$async$state_machine__33600__auto____0 = (function (){
var statearr_35639 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35639[(0)] = cljs$core$async$state_machine__33600__auto__);

(statearr_35639[(1)] = (1));

return statearr_35639;
});
var cljs$core$async$state_machine__33600__auto____1 = (function (state_35616){
while(true){
var ret_value__33601__auto__ = (function (){try{while(true){
var result__33602__auto__ = switch__33599__auto__(state_35616);
if(cljs.core.keyword_identical_QMARK_(result__33602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33602__auto__;
}
break;
}
}catch (e35640){var ex__33603__auto__ = e35640;
var statearr_35641_36352 = state_35616;
(statearr_35641_36352[(2)] = ex__33603__auto__);


if(cljs.core.seq((state_35616[(4)]))){
var statearr_35642_36353 = state_35616;
(statearr_35642_36353[(1)] = cljs.core.first((state_35616[(4)])));

} else {
throw ex__33603__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36354 = state_35616;
state_35616 = G__36354;
continue;
} else {
return ret_value__33601__auto__;
}
break;
}
});
cljs$core$async$state_machine__33600__auto__ = function(state_35616){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33600__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33600__auto____1.call(this,state_35616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33600__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33600__auto____0;
cljs$core$async$state_machine__33600__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33600__auto____1;
return cljs$core$async$state_machine__33600__auto__;
})()
})();
var state__33685__auto__ = (function (){var statearr_35643 = f__33684__auto__();
(statearr_35643[(6)] = c__33683__auto___36337);

return statearr_35643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33685__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35645 = arguments.length;
switch (G__35645) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33683__auto___36356 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33684__auto__ = (function (){var switch__33599__auto__ = (function (state_35690){
var state_val_35691 = (state_35690[(1)]);
if((state_val_35691 === (7))){
var inst_35686 = (state_35690[(2)]);
var state_35690__$1 = state_35690;
var statearr_35692_36357 = state_35690__$1;
(statearr_35692_36357[(2)] = inst_35686);

(statearr_35692_36357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35691 === (1))){
var inst_35646 = [];
var inst_35647 = inst_35646;
var inst_35648 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35690__$1 = (function (){var statearr_35693 = state_35690;
(statearr_35693[(7)] = inst_35647);

(statearr_35693[(8)] = inst_35648);

return statearr_35693;
})();
var statearr_35694_36358 = state_35690__$1;
(statearr_35694_36358[(2)] = null);

(statearr_35694_36358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35691 === (4))){
var inst_35651 = (state_35690[(9)]);
var inst_35651__$1 = (state_35690[(2)]);
var inst_35652 = (inst_35651__$1 == null);
var inst_35653 = cljs.core.not(inst_35652);
var state_35690__$1 = (function (){var statearr_35695 = state_35690;
(statearr_35695[(9)] = inst_35651__$1);

return statearr_35695;
})();
if(inst_35653){
var statearr_35696_36359 = state_35690__$1;
(statearr_35696_36359[(1)] = (5));

} else {
var statearr_35697_36360 = state_35690__$1;
(statearr_35697_36360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35691 === (15))){
var inst_35647 = (state_35690[(7)]);
var inst_35678 = cljs.core.vec(inst_35647);
var state_35690__$1 = state_35690;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35690__$1,(18),out,inst_35678);
} else {
if((state_val_35691 === (13))){
var inst_35673 = (state_35690[(2)]);
var state_35690__$1 = state_35690;
var statearr_35698_36361 = state_35690__$1;
(statearr_35698_36361[(2)] = inst_35673);

(statearr_35698_36361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35691 === (6))){
var inst_35647 = (state_35690[(7)]);
var inst_35675 = inst_35647.length;
var inst_35676 = (inst_35675 > (0));
var state_35690__$1 = state_35690;
if(cljs.core.truth_(inst_35676)){
var statearr_35699_36362 = state_35690__$1;
(statearr_35699_36362[(1)] = (15));

} else {
var statearr_35700_36363 = state_35690__$1;
(statearr_35700_36363[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35691 === (17))){
var inst_35683 = (state_35690[(2)]);
var inst_35684 = cljs.core.async.close_BANG_(out);
var state_35690__$1 = (function (){var statearr_35701 = state_35690;
(statearr_35701[(10)] = inst_35683);

return statearr_35701;
})();
var statearr_35702_36364 = state_35690__$1;
(statearr_35702_36364[(2)] = inst_35684);

(statearr_35702_36364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35691 === (3))){
var inst_35688 = (state_35690[(2)]);
var state_35690__$1 = state_35690;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35690__$1,inst_35688);
} else {
if((state_val_35691 === (12))){
var inst_35647 = (state_35690[(7)]);
var inst_35666 = cljs.core.vec(inst_35647);
var state_35690__$1 = state_35690;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35690__$1,(14),out,inst_35666);
} else {
if((state_val_35691 === (2))){
var state_35690__$1 = state_35690;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35690__$1,(4),ch);
} else {
if((state_val_35691 === (11))){
var inst_35647 = (state_35690[(7)]);
var inst_35655 = (state_35690[(11)]);
var inst_35651 = (state_35690[(9)]);
var inst_35663 = inst_35647.push(inst_35651);
var tmp35703 = inst_35647;
var inst_35647__$1 = tmp35703;
var inst_35648 = inst_35655;
var state_35690__$1 = (function (){var statearr_35704 = state_35690;
(statearr_35704[(7)] = inst_35647__$1);

(statearr_35704[(12)] = inst_35663);

(statearr_35704[(8)] = inst_35648);

return statearr_35704;
})();
var statearr_35705_36365 = state_35690__$1;
(statearr_35705_36365[(2)] = null);

(statearr_35705_36365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35691 === (9))){
var inst_35648 = (state_35690[(8)]);
var inst_35659 = cljs.core.keyword_identical_QMARK_(inst_35648,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_35690__$1 = state_35690;
var statearr_35706_36366 = state_35690__$1;
(statearr_35706_36366[(2)] = inst_35659);

(statearr_35706_36366[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35691 === (5))){
var inst_35655 = (state_35690[(11)]);
var inst_35651 = (state_35690[(9)]);
var inst_35648 = (state_35690[(8)]);
var inst_35656 = (state_35690[(13)]);
var inst_35655__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35651) : f.call(null,inst_35651));
var inst_35656__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35655__$1,inst_35648);
var state_35690__$1 = (function (){var statearr_35707 = state_35690;
(statearr_35707[(11)] = inst_35655__$1);

(statearr_35707[(13)] = inst_35656__$1);

return statearr_35707;
})();
if(inst_35656__$1){
var statearr_35708_36367 = state_35690__$1;
(statearr_35708_36367[(1)] = (8));

} else {
var statearr_35709_36368 = state_35690__$1;
(statearr_35709_36368[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35691 === (14))){
var inst_35655 = (state_35690[(11)]);
var inst_35651 = (state_35690[(9)]);
var inst_35668 = (state_35690[(2)]);
var inst_35669 = [];
var inst_35670 = inst_35669.push(inst_35651);
var inst_35647 = inst_35669;
var inst_35648 = inst_35655;
var state_35690__$1 = (function (){var statearr_35710 = state_35690;
(statearr_35710[(14)] = inst_35668);

(statearr_35710[(7)] = inst_35647);

(statearr_35710[(8)] = inst_35648);

(statearr_35710[(15)] = inst_35670);

return statearr_35710;
})();
var statearr_35711_36369 = state_35690__$1;
(statearr_35711_36369[(2)] = null);

(statearr_35711_36369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35691 === (16))){
var state_35690__$1 = state_35690;
var statearr_35712_36370 = state_35690__$1;
(statearr_35712_36370[(2)] = null);

(statearr_35712_36370[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35691 === (10))){
var inst_35661 = (state_35690[(2)]);
var state_35690__$1 = state_35690;
if(cljs.core.truth_(inst_35661)){
var statearr_35713_36371 = state_35690__$1;
(statearr_35713_36371[(1)] = (11));

} else {
var statearr_35714_36372 = state_35690__$1;
(statearr_35714_36372[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35691 === (18))){
var inst_35680 = (state_35690[(2)]);
var state_35690__$1 = state_35690;
var statearr_35715_36373 = state_35690__$1;
(statearr_35715_36373[(2)] = inst_35680);

(statearr_35715_36373[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35691 === (8))){
var inst_35656 = (state_35690[(13)]);
var state_35690__$1 = state_35690;
var statearr_35716_36374 = state_35690__$1;
(statearr_35716_36374[(2)] = inst_35656);

(statearr_35716_36374[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33600__auto__ = null;
var cljs$core$async$state_machine__33600__auto____0 = (function (){
var statearr_35717 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35717[(0)] = cljs$core$async$state_machine__33600__auto__);

(statearr_35717[(1)] = (1));

return statearr_35717;
});
var cljs$core$async$state_machine__33600__auto____1 = (function (state_35690){
while(true){
var ret_value__33601__auto__ = (function (){try{while(true){
var result__33602__auto__ = switch__33599__auto__(state_35690);
if(cljs.core.keyword_identical_QMARK_(result__33602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33602__auto__;
}
break;
}
}catch (e35718){var ex__33603__auto__ = e35718;
var statearr_35719_36375 = state_35690;
(statearr_35719_36375[(2)] = ex__33603__auto__);


if(cljs.core.seq((state_35690[(4)]))){
var statearr_35720_36376 = state_35690;
(statearr_35720_36376[(1)] = cljs.core.first((state_35690[(4)])));

} else {
throw ex__33603__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36377 = state_35690;
state_35690 = G__36377;
continue;
} else {
return ret_value__33601__auto__;
}
break;
}
});
cljs$core$async$state_machine__33600__auto__ = function(state_35690){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33600__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33600__auto____1.call(this,state_35690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33600__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33600__auto____0;
cljs$core$async$state_machine__33600__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33600__auto____1;
return cljs$core$async$state_machine__33600__auto__;
})()
})();
var state__33685__auto__ = (function (){var statearr_35721 = f__33684__auto__();
(statearr_35721[(6)] = c__33683__auto___36356);

return statearr_35721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33685__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
