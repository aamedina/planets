goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
* Internal helper for diff.
*/
clojure.data.atom_diff = (function atom_diff(a,b){
if(cljs.core._EQ_.call(null,a,b))
{return cljs.core.PersistentVector.fromArray([null,null,a], true);
} else
{return cljs.core.PersistentVector.fromArray([a,b,null], true);
}
});
/**
* Convert an associative-by-numeric-index collection into
* an equivalent vector, with nil for any missing keys
*/
clojure.data.vectorize = (function vectorize(m){
if(cljs.core.seq.call(null,m))
{return cljs.core.reduce.call(null,(function (result,p__8914){
var vec__8915 = p__8914;
var k = cljs.core.nth.call(null,vec__8915,0,null);
var v = cljs.core.nth.call(null,vec__8915,1,null);
return cljs.core.assoc.call(null,result,k,v);
}),cljs.core.vec.call(null,cljs.core.repeat.call(null,cljs.core.apply.call(null,cljs.core.max,cljs.core.keys.call(null,m)),null)),m);
} else
{return null;
}
});
/**
* Diff associative things a and b, comparing only the key k.
*/
clojure.data.diff_associative_key = (function diff_associative_key(a,b,k){
var va = cljs.core.get.call(null,a,k);
var vb = cljs.core.get.call(null,b,k);
var vec__8917 = clojure.data.diff.call(null,va,vb);
var a_STAR_ = cljs.core.nth.call(null,vec__8917,0,null);
var b_STAR_ = cljs.core.nth.call(null,vec__8917,1,null);
var ab = cljs.core.nth.call(null,vec__8917,2,null);
var in_a = cljs.core.contains_QMARK_.call(null,a,k);
var in_b = cljs.core.contains_QMARK_.call(null,b,k);
var same = (function (){var and__3941__auto__ = in_a;
if(and__3941__auto__)
{var and__3941__auto____$1 = in_b;
if(and__3941__auto____$1)
{var or__3943__auto__ = !((ab == null));
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var and__3941__auto____$2 = (va == null);
if(and__3941__auto____$2)
{return (vb == null);
} else
{return and__3941__auto____$2;
}
}
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})();
return cljs.core.PersistentVector.fromArray([(((function (){var and__3941__auto__ = in_a;
if(and__3941__auto__)
{var or__3943__auto__ = !((a_STAR_ == null));
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core.not.call(null,same);
}
} else
{return and__3941__auto__;
}
})())?cljs.core.PersistentArrayMap.fromArray([k,a_STAR_], true):null),(((function (){var and__3941__auto__ = in_b;
if(and__3941__auto__)
{var or__3943__auto__ = !((b_STAR_ == null));
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core.not.call(null,same);
}
} else
{return and__3941__auto__;
}
})())?cljs.core.PersistentArrayMap.fromArray([k,b_STAR_], true):null),(cljs.core.truth_(same)?cljs.core.PersistentArrayMap.fromArray([k,ab], true):null)], true);
});
/**
* Diff associative things a and b, comparing only keys in ks (if supplied).
*/
clojure.data.diff_associative = (function() {
var diff_associative = null;
var diff_associative__2 = (function (a,b){
return diff_associative.call(null,a,b,clojure.set.union.call(null,cljs.core.keys.call(null,a),cljs.core.keys.call(null,b)));
});
var diff_associative__3 = (function (a,b,ks){
return cljs.core.reduce.call(null,(function (diff1,diff2){
return cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.merge,diff1,diff2));
}),cljs.core.PersistentVector.fromArray([null,null,null], true),cljs.core.map.call(null,cljs.core.partial.call(null,clojure.data.diff_associative_key,a,b),ks));
});
diff_associative = function(a,b,ks){
switch(arguments.length){
case 2:
return diff_associative__2.call(this,a,b);
case 3:
return diff_associative__3.call(this,a,b,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
diff_associative.cljs$core$IFn$_invoke$arity$2 = diff_associative__2;
diff_associative.cljs$core$IFn$_invoke$arity$3 = diff_associative__3;
return diff_associative;
})()
;
clojure.data.diff_sequential = (function diff_sequential(a,b){
return cljs.core.vec.call(null,cljs.core.map.call(null,clojure.data.vectorize,clojure.data.diff_associative.call(null,((cljs.core.vector_QMARK_.call(null,a))?a:cljs.core.vec.call(null,a)),((cljs.core.vector_QMARK_.call(null,b))?b:cljs.core.vec.call(null,b)),cljs.core.range.call(null,((cljs.core.count.call(null,a) > cljs.core.count.call(null,b)) ? cljs.core.count.call(null,a) : cljs.core.count.call(null,b))))));
});
clojure.data.diff_set = (function diff_set(a,b){
return cljs.core.PersistentVector.fromArray([cljs.core.not_empty.call(null,clojure.set.difference.call(null,a,b)),cljs.core.not_empty.call(null,clojure.set.difference.call(null,b,a)),cljs.core.not_empty.call(null,clojure.set.intersection.call(null,a,b))], true);
});
clojure.data.EqualityPartition = {};
clojure.data.equality_partition = (function equality_partition(x){
if((function (){var and__3941__auto__ = x;
if(and__3941__auto__)
{return x.clojure$data$EqualityPartition$equality_partition$arity$1;
} else
{return and__3941__auto__;
}
})())
{return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else
{var x__6765__auto__ = (((x == null))?null:x);
return (function (){var or__3943__auto__ = (clojure.data.equality_partition[goog.typeOf(x__6765__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (clojure.data.equality_partition["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"EqualityPartition.equality-partition",x);
}
}
})().call(null,x);
}
});
clojure.data.Diff = {};
clojure.data.diff_similar = (function diff_similar(a,b){
if((function (){var and__3941__auto__ = a;
if(and__3941__auto__)
{return a.clojure$data$Diff$diff_similar$arity$2;
} else
{return and__3941__auto__;
}
})())
{return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else
{var x__6765__auto__ = (((a == null))?null:a);
return (function (){var or__3943__auto__ = (clojure.data.diff_similar[goog.typeOf(x__6765__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (clojure.data.diff_similar["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Diff.diff-similar",a);
}
}
})().call(null,a,b);
}
});
(clojure.data.EqualityPartition["_"] = true);
(clojure.data.equality_partition["_"] = (function (x){
if((function (){var G__8918 = x;
if(G__8918)
{if((function (){var or__3943__auto__ = (G__8918.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__8918.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__8918.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__8918);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__8918);
}
})())
{return "\uFDD0:map";
} else
{if((function (){var G__8919 = x;
if(G__8919)
{if((function (){var or__3943__auto__ = (G__8919.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__8919.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__8919.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__8919);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__8919);
}
})())
{return "\uFDD0:set";
} else
{if((function (){var G__8920 = x;
if(G__8920)
{if((function (){var or__3943__auto__ = (G__8920.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__8920.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__8920.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__8920);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__8920);
}
})())
{return "\uFDD0:sequential";
} else
{if("\uFDD0:default")
{return "\uFDD0:atom";
} else
{return null;
}
}
}
}
}));
(clojure.data.EqualityPartition["boolean"] = true);
(clojure.data.equality_partition["boolean"] = (function (x){
return "\uFDD0:atom";
}));
(clojure.data.EqualityPartition["function"] = true);
(clojure.data.equality_partition["function"] = (function (x){
return "\uFDD0:atom";
}));
(clojure.data.EqualityPartition["array"] = true);
(clojure.data.equality_partition["array"] = (function (x){
return "\uFDD0:sequential";
}));
(clojure.data.EqualityPartition["number"] = true);
(clojure.data.equality_partition["number"] = (function (x){
return "\uFDD0:atom";
}));
(clojure.data.EqualityPartition["string"] = true);
(clojure.data.equality_partition["string"] = (function (x){
return "\uFDD0:atom";
}));
(clojure.data.EqualityPartition["null"] = true);
(clojure.data.equality_partition["null"] = (function (x){
return "\uFDD0:atom";
}));
(clojure.data.Diff["_"] = true);
(clojure.data.diff_similar["_"] = (function (a,b){
return (function (){var G__8921 = clojure.data.equality_partition.call(null,a);
if(cljs.core._EQ_.call(null,"\uFDD0:map",G__8921))
{return clojure.data.diff_associative;
} else
{if(cljs.core._EQ_.call(null,"\uFDD0:sequential",G__8921))
{return clojure.data.diff_sequential;
} else
{if(cljs.core._EQ_.call(null,"\uFDD0:set",G__8921))
{return clojure.data.diff_set;
} else
{if(cljs.core._EQ_.call(null,"\uFDD0:atom",G__8921))
{return clojure.data.atom_diff;
} else
{if("\uFDD0:else")
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(clojure.data.equality_partition.call(null,a))].join('')));
} else
{return null;
}
}
}
}
}
})().call(null,a,b);
}));
(clojure.data.Diff["boolean"] = true);
(clojure.data.diff_similar["boolean"] = (function (a,b){
return clojure.data.atom_diff.call(null,a,b);
}));
(clojure.data.Diff["function"] = true);
(clojure.data.diff_similar["function"] = (function (a,b){
return clojure.data.atom_diff.call(null,a,b);
}));
(clojure.data.Diff["array"] = true);
(clojure.data.diff_similar["array"] = (function (a,b){
return clojure.data.diff_sequential.call(null,a,b);
}));
(clojure.data.Diff["number"] = true);
(clojure.data.diff_similar["number"] = (function (a,b){
return clojure.data.atom_diff.call(null,a,b);
}));
(clojure.data.Diff["string"] = true);
(clojure.data.diff_similar["string"] = (function (a,b){
return clojure.data.atom_diff.call(null,a,b);
}));
(clojure.data.Diff["null"] = true);
(clojure.data.diff_similar["null"] = (function (a,b){
return clojure.data.atom_diff.call(null,a,b);
}));
/**
* Recursively compares a and b, returning a tuple of
* [things-only-in-a things-only-in-b things-in-both].
* Comparison rules:
* 
* * For equal a and b, return [nil nil a].
* * Maps are subdiffed where keys match and values differ.
* * Sets are never subdiffed.
* * All sequential things are treated as associative collections
* by their indexes, with results returned as vectors.
* * Everything else (including strings!) is treated as
* an atom and compared for equality.
*/
clojure.data.diff = (function diff(a,b){
if(cljs.core._EQ_.call(null,a,b))
{return cljs.core.PersistentVector.fromArray([null,null,a], true);
} else
{if(cljs.core._EQ_.call(null,clojure.data.equality_partition.call(null,a),clojure.data.equality_partition.call(null,b)))
{return clojure.data.diff_similar.call(null,a,b);
} else
{return clojure.data.atom_diff.call(null,a,b);
}
}
});
