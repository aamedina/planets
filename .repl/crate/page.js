goog.provide('crate.page');
goog.require('cljs.core');
goog.require('crate.util');
goog.require('crate.util');
/**
* Include a list of external javascript files.
* @param {...*} var_args
*/
crate.page.include_js = (function() { 
var include_js__delegate = function (scripts){
var iter__7035__auto__ = (function iter__7979(s__7980){
return (new cljs.core.LazySeq(null,false,(function (){
var s__7980__$1 = s__7980;
while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7980__$1);
if(temp__4092__auto__)
{var s__7980__$2 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7980__$2))
{var c__7033__auto__ = cljs.core.chunk_first.call(null,s__7980__$2);
var size__7034__auto__ = cljs.core.count.call(null,c__7033__auto__);
var b__7982 = cljs.core.chunk_buffer.call(null,size__7034__auto__);
if((function (){var i__7981 = 0;
while(true){
if((i__7981 < size__7034__auto__))
{var script = cljs.core._nth.call(null,c__7033__auto__,i__7981);
cljs.core.chunk_append.call(null,b__7982,cljs.core.PersistentVector.fromArray(["\uFDD0:script",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:type","text/javascript","\uFDD0:src",crate.util.to_uri.call(null,script)], true)], true));
{
var G__7983 = (i__7981 + 1);
i__7981 = G__7983;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7982),iter__7979.call(null,cljs.core.chunk_rest.call(null,s__7980__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7982),null);
}
} else
{var script = cljs.core.first.call(null,s__7980__$2);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0:script",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:type","text/javascript","\uFDD0:src",crate.util.to_uri.call(null,script)], true)], true),iter__7979.call(null,cljs.core.rest.call(null,s__7980__$2)));
}
} else
{return null;
}
break;
}
}),null));
});
return iter__7035__auto__.call(null,scripts);
};
var include_js = function (var_args){
var scripts = null;
if (arguments.length > 0) {
  scripts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return include_js__delegate.call(this, scripts);
};
include_js.cljs$lang$maxFixedArity = 0;
include_js.cljs$lang$applyTo = (function (arglist__7984){
var scripts = cljs.core.seq(arglist__7984);
return include_js__delegate(scripts);
});
include_js.cljs$core$IFn$_invoke$arity$variadic = include_js__delegate;
return include_js;
})()
;
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
crate.page.include_css = (function() { 
var include_css__delegate = function (styles){
var iter__7035__auto__ = (function iter__7989(s__7990){
return (new cljs.core.LazySeq(null,false,(function (){
var s__7990__$1 = s__7990;
while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7990__$1);
if(temp__4092__auto__)
{var s__7990__$2 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7990__$2))
{var c__7033__auto__ = cljs.core.chunk_first.call(null,s__7990__$2);
var size__7034__auto__ = cljs.core.count.call(null,c__7033__auto__);
var b__7992 = cljs.core.chunk_buffer.call(null,size__7034__auto__);
if((function (){var i__7991 = 0;
while(true){
if((i__7991 < size__7034__auto__))
{var style = cljs.core._nth.call(null,c__7033__auto__,i__7991);
cljs.core.chunk_append.call(null,b__7992,cljs.core.PersistentVector.fromArray(["\uFDD0:link",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:type","text/css","\uFDD0:href",crate.util.to_uri.call(null,style),"\uFDD0:rel","stylesheet"], true)], true));
{
var G__7993 = (i__7991 + 1);
i__7991 = G__7993;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7992),iter__7989.call(null,cljs.core.chunk_rest.call(null,s__7990__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7992),null);
}
} else
{var style = cljs.core.first.call(null,s__7990__$2);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0:link",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:type","text/css","\uFDD0:href",crate.util.to_uri.call(null,style),"\uFDD0:rel","stylesheet"], true)], true),iter__7989.call(null,cljs.core.rest.call(null,s__7990__$2)));
}
} else
{return null;
}
break;
}
}),null));
});
return iter__7035__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;
if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return include_css__delegate.call(this, styles);
};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__7994){
var styles = cljs.core.seq(arglist__7994);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
