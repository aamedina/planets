goog.provide('reactive.utils');
goog.require('cljs.core');
goog.require('clojure.zip');
goog.require('clojure.walk');
goog.require('clojure.zip');
goog.require('clojure.zip');
goog.require('clojure.walk');
goog.require('clojure.walk');
reactive.utils.shallow_QMARK_ = (function shallow_QMARK_(m){
return !(cljs.core.coll_QMARK_.call(null,cljs.core.val.call(null,m)));
});
reactive.utils.destruct_map = (function destruct_map(m){
return cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.vec,cljs.core.map.call(null,cljs.core.flatten,cljs.core.map.call(null,(function (p1__4226_SHARP_){
return cljs.core.map.call(null,(function (v){
if(cljs.core.map_QMARK_.call(null,v))
{return cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY,v);
} else
{return v;
}
}),p1__4226_SHARP_);
}),cljs.core.map.call(null,cljs.core.flatten,cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (kv){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,kv);
}),cljs.core.map.call(null,(function (nm){
if(cljs.core.map_QMARK_.call(null,cljs.core.val.call(null,nm)))
{return cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vec,cljs.core.map.call(null,(function (p1__4225_SHARP_){
return cljs.core.hash_map.call(null,cljs.core.key.call(null,nm),p1__4225_SHARP_);
}),cljs.core.val.call(null,nm))));
} else
{return nm;
}
}),clojure.walk.stringify_keys.call(null,m)))))))));
});
reactive.utils.set_nested_BANG_ = (function set_nested_BANG_(obj,options){
var params = reactive.utils.destruct_map.call(null,options);
var seq__4231 = cljs.core.seq.call(null,params);
var chunk__4232 = null;
var count__4233 = 0;
var i__4234 = 0;
while(true){
if((i__4234 < count__4233))
{var param = cljs.core._nth.call(null,chunk__4232,i__4234);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,param),2))
{(obj[cljs.core.first.call(null,param)] = cljs.core.second.call(null,param));
} else
{(cljs.core.apply.call(null,cljs.core.aget,cljs.core.into.call(null,cljs.core.PersistentVector.fromArray([obj], true),cljs.core.drop_last.call(null,2,param)))[cljs.core.first.call(null,cljs.core.take_last.call(null,2,param))] = cljs.core.last.call(null,param));
}
{
var G__4235 = seq__4231;
var G__4236 = chunk__4232;
var G__4237 = count__4233;
var G__4238 = (i__4234 + 1);
seq__4231 = G__4235;
chunk__4232 = G__4236;
count__4233 = G__4237;
i__4234 = G__4238;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__4231);
if(temp__4092__auto__)
{var seq__4231__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4231__$1))
{var c__3088__auto__ = cljs.core.chunk_first.call(null,seq__4231__$1);
{
var G__4239 = cljs.core.chunk_rest.call(null,seq__4231__$1);
var G__4240 = c__3088__auto__;
var G__4241 = cljs.core.count.call(null,c__3088__auto__);
var G__4242 = 0;
seq__4231 = G__4239;
chunk__4232 = G__4240;
count__4233 = G__4241;
i__4234 = G__4242;
continue;
}
} else
{var param = cljs.core.first.call(null,seq__4231__$1);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,param),2))
{(obj[cljs.core.first.call(null,param)] = cljs.core.second.call(null,param));
} else
{(cljs.core.apply.call(null,cljs.core.aget,cljs.core.into.call(null,cljs.core.PersistentVector.fromArray([obj], true),cljs.core.drop_last.call(null,2,param)))[cljs.core.first.call(null,cljs.core.take_last.call(null,2,param))] = cljs.core.last.call(null,param));
}
{
var G__4243 = cljs.core.next.call(null,seq__4231__$1);
var G__4244 = null;
var G__4245 = 0;
var G__4246 = 0;
seq__4231 = G__4243;
chunk__4232 = G__4244;
count__4233 = G__4245;
i__4234 = G__4246;
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
reactive.utils.apply_nested_BANG_ = (function apply_nested_BANG_(obj,options){
var params = reactive.utils.destruct_map.call(null,options);
var seq__4251 = cljs.core.seq.call(null,params);
var chunk__4252 = null;
var count__4253 = 0;
var i__4254 = 0;
while(true){
if((i__4254 < count__4253))
{var param = cljs.core._nth.call(null,chunk__4252,i__4254);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,param),2))
{(obj[cljs.core.first.call(null,param)] = cljs.core.apply.call(null,cljs.core.second.call(null,param),(obj[cljs.core.first.call(null,param)])));
} else
{(cljs.core.apply.call(null,cljs.core.aget,cljs.core.into.call(null,cljs.core.PersistentVector.fromArray([obj], true),cljs.core.drop_last.call(null,2,param)))[cljs.core.first.call(null,cljs.core.take_last.call(null,2,param))] = cljs.core.apply.call(null,cljs.core.last.call(null,param),cljs.core.PersistentVector.fromArray([cljs.core.apply.call(null,cljs.core.aget,cljs.core.into.call(null,cljs.core.PersistentVector.fromArray([obj], true),cljs.core.drop_last.call(null,param)))], true)));
}
{
var G__4255 = seq__4251;
var G__4256 = chunk__4252;
var G__4257 = count__4253;
var G__4258 = (i__4254 + 1);
seq__4251 = G__4255;
chunk__4252 = G__4256;
count__4253 = G__4257;
i__4254 = G__4258;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__4251);
if(temp__4092__auto__)
{var seq__4251__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4251__$1))
{var c__3088__auto__ = cljs.core.chunk_first.call(null,seq__4251__$1);
{
var G__4259 = cljs.core.chunk_rest.call(null,seq__4251__$1);
var G__4260 = c__3088__auto__;
var G__4261 = cljs.core.count.call(null,c__3088__auto__);
var G__4262 = 0;
seq__4251 = G__4259;
chunk__4252 = G__4260;
count__4253 = G__4261;
i__4254 = G__4262;
continue;
}
} else
{var param = cljs.core.first.call(null,seq__4251__$1);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,param),2))
{(obj[cljs.core.first.call(null,param)] = cljs.core.apply.call(null,cljs.core.second.call(null,param),(obj[cljs.core.first.call(null,param)])));
} else
{(cljs.core.apply.call(null,cljs.core.aget,cljs.core.into.call(null,cljs.core.PersistentVector.fromArray([obj], true),cljs.core.drop_last.call(null,2,param)))[cljs.core.first.call(null,cljs.core.take_last.call(null,2,param))] = cljs.core.apply.call(null,cljs.core.last.call(null,param),cljs.core.PersistentVector.fromArray([cljs.core.apply.call(null,cljs.core.aget,cljs.core.into.call(null,cljs.core.PersistentVector.fromArray([obj], true),cljs.core.drop_last.call(null,param)))], true)));
}
{
var G__4263 = cljs.core.next.call(null,seq__4251__$1);
var G__4264 = null;
var G__4265 = 0;
var G__4266 = 0;
seq__4251 = G__4263;
chunk__4252 = G__4264;
count__4253 = G__4265;
i__4254 = G__4266;
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
