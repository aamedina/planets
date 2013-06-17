goog.provide('planets.utils');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.walk');
planets.utils.destruct_map = (function destruct_map(m){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.flatten,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__3920_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (v){
if(cljs.core.map_QMARK_(v))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentVector.EMPTY,v);
} else
{return v;
}
}),p1__3920_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.flatten,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (kv){
return cljs.core.into(cljs.core.PersistentVector.EMPTY,kv);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (nm){
if(cljs.core.map_QMARK_(cljs.core.val(nm)))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__3919_SHARP_){
return cljs.core.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.key(nm),p1__3919_SHARP_], 0));
}),cljs.core.val(nm))));
} else
{return nm;
}
}),clojure.walk.stringify_keys(m)))))))));
});
planets.utils.set_nested_BANG_ = (function set_nested_BANG_(obj,options){
var params = planets.utils.destruct_map(options);
var seq__3925 = cljs.core.seq(params);
var chunk__3926 = null;
var count__3927 = 0;
var i__3928 = 0;
while(true){
if((i__3928 < count__3927))
{var param = chunk__3926.cljs$core$IIndexed$_nth$arity$2(chunk__3926,i__3928);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(param),2))
{(obj[cljs.core.first(param)] = cljs.core.second(param));
} else
{(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.aget,cljs.core.into(cljs.core.PersistentVector.fromArray([obj], true),cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2(2,param)))[cljs.core.first(cljs.core.take_last(2,param))] = cljs.core.last(param));
}
{
var G__3929 = seq__3925;
var G__3930 = chunk__3926;
var G__3931 = count__3927;
var G__3932 = (i__3928 + 1);
seq__3925 = G__3929;
chunk__3926 = G__3930;
count__3927 = G__3931;
i__3928 = G__3932;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__3925);
if(temp__4092__auto__)
{var seq__3925__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__3925__$1))
{var c__3073__auto__ = cljs.core.chunk_first(seq__3925__$1);
{
var G__3933 = cljs.core.chunk_rest(seq__3925__$1);
var G__3934 = c__3073__auto__;
var G__3935 = cljs.core.count(c__3073__auto__);
var G__3936 = 0;
seq__3925 = G__3933;
chunk__3926 = G__3934;
count__3927 = G__3935;
i__3928 = G__3936;
continue;
}
} else
{var param = cljs.core.first(seq__3925__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(param),2))
{(obj[cljs.core.first(param)] = cljs.core.second(param));
} else
{(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.aget,cljs.core.into(cljs.core.PersistentVector.fromArray([obj], true),cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2(2,param)))[cljs.core.first(cljs.core.take_last(2,param))] = cljs.core.last(param));
}
{
var G__3937 = cljs.core.next(seq__3925__$1);
var G__3938 = null;
var G__3939 = 0;
var G__3940 = 0;
seq__3925 = G__3937;
chunk__3926 = G__3938;
count__3927 = G__3939;
i__3928 = G__3940;
continue;
}
}
} else
{return null;
}
}
break;
}
});
planets.utils.apply_nested_BANG_ = (function apply_nested_BANG_(obj,options){
var params = planets.utils.destruct_map(options);
var seq__3945 = cljs.core.seq(params);
var chunk__3946 = null;
var count__3947 = 0;
var i__3948 = 0;
while(true){
if((i__3948 < count__3947))
{var param = chunk__3946.cljs$core$IIndexed$_nth$arity$2(chunk__3946,i__3948);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(param),2))
{(obj[cljs.core.first(param)] = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.second(param),(obj[cljs.core.first(param)])));
} else
{(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.aget,cljs.core.into(cljs.core.PersistentVector.fromArray([obj], true),cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2(2,param)))[cljs.core.first(cljs.core.take_last(2,param))] = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.last(param),cljs.core.PersistentVector.fromArray([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.aget,cljs.core.into(cljs.core.PersistentVector.fromArray([obj], true),cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(param)))], true)));
}
{
var G__3949 = seq__3945;
var G__3950 = chunk__3946;
var G__3951 = count__3947;
var G__3952 = (i__3948 + 1);
seq__3945 = G__3949;
chunk__3946 = G__3950;
count__3947 = G__3951;
i__3948 = G__3952;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__3945);
if(temp__4092__auto__)
{var seq__3945__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__3945__$1))
{var c__3073__auto__ = cljs.core.chunk_first(seq__3945__$1);
{
var G__3953 = cljs.core.chunk_rest(seq__3945__$1);
var G__3954 = c__3073__auto__;
var G__3955 = cljs.core.count(c__3073__auto__);
var G__3956 = 0;
seq__3945 = G__3953;
chunk__3946 = G__3954;
count__3947 = G__3955;
i__3948 = G__3956;
continue;
}
} else
{var param = cljs.core.first(seq__3945__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(param),2))
{(obj[cljs.core.first(param)] = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.second(param),(obj[cljs.core.first(param)])));
} else
{(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.aget,cljs.core.into(cljs.core.PersistentVector.fromArray([obj], true),cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2(2,param)))[cljs.core.first(cljs.core.take_last(2,param))] = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.last(param),cljs.core.PersistentVector.fromArray([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.aget,cljs.core.into(cljs.core.PersistentVector.fromArray([obj], true),cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(param)))], true)));
}
{
var G__3957 = cljs.core.next(seq__3945__$1);
var G__3958 = null;
var G__3959 = 0;
var G__3960 = 0;
seq__3945 = G__3957;
chunk__3946 = G__3958;
count__3947 = G__3959;
i__3948 = G__3960;
continue;
}
}
} else
{return null;
}
}
break;
}
});
