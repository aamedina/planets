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
var iter__3057__auto__ = (function iter__5553(s__5554){
return (new cljs.core.LazySeq(null,false,(function (){
var s__5554__$1 = s__5554;
while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5554__$1);
if(temp__4092__auto__)
{var s__5554__$2 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5554__$2))
{var c__3055__auto__ = cljs.core.chunk_first.call(null,s__5554__$2);
var size__3056__auto__ = cljs.core.count.call(null,c__3055__auto__);
var b__5556 = cljs.core.chunk_buffer.call(null,size__3056__auto__);
if((function (){var i__5555 = 0;
while(true){
if((i__5555 < size__3056__auto__))
{var script = cljs.core._nth.call(null,c__3055__auto__,i__5555);
cljs.core.chunk_append.call(null,b__5556,cljs.core.PersistentVector.fromArray(["\uFDD0:script",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:type","text/javascript","\uFDD0:src",crate.util.to_uri.call(null,script)], true)], true));
{
var G__5557 = (i__5555 + 1);
i__5555 = G__5557;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5556),iter__5553.call(null,cljs.core.chunk_rest.call(null,s__5554__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5556),null);
}
} else
{var script = cljs.core.first.call(null,s__5554__$2);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0:script",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:type","text/javascript","\uFDD0:src",crate.util.to_uri.call(null,script)], true)], true),iter__5553.call(null,cljs.core.rest.call(null,s__5554__$2)));
}
} else
{return null;
}
break;
}
}),null));
});
return iter__3057__auto__.call(null,scripts);
};
var include_js = function (var_args){
var scripts = null;
if (arguments.length > 0) {
  scripts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return include_js__delegate.call(this, scripts);
};
include_js.cljs$lang$maxFixedArity = 0;
include_js.cljs$lang$applyTo = (function (arglist__5558){
var scripts = cljs.core.seq(arglist__5558);
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
var iter__3057__auto__ = (function iter__5563(s__5564){
return (new cljs.core.LazySeq(null,false,(function (){
var s__5564__$1 = s__5564;
while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5564__$1);
if(temp__4092__auto__)
{var s__5564__$2 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5564__$2))
{var c__3055__auto__ = cljs.core.chunk_first.call(null,s__5564__$2);
var size__3056__auto__ = cljs.core.count.call(null,c__3055__auto__);
var b__5566 = cljs.core.chunk_buffer.call(null,size__3056__auto__);
if((function (){var i__5565 = 0;
while(true){
if((i__5565 < size__3056__auto__))
{var style = cljs.core._nth.call(null,c__3055__auto__,i__5565);
cljs.core.chunk_append.call(null,b__5566,cljs.core.PersistentVector.fromArray(["\uFDD0:link",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:type","text/css","\uFDD0:href",crate.util.to_uri.call(null,style),"\uFDD0:rel","stylesheet"], true)], true));
{
var G__5567 = (i__5565 + 1);
i__5565 = G__5567;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5566),iter__5563.call(null,cljs.core.chunk_rest.call(null,s__5564__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5566),null);
}
} else
{var style = cljs.core.first.call(null,s__5564__$2);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0:link",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:type","text/css","\uFDD0:href",crate.util.to_uri.call(null,style),"\uFDD0:rel","stylesheet"], true)], true),iter__5563.call(null,cljs.core.rest.call(null,s__5564__$2)));
}
} else
{return null;
}
break;
}
}),null));
});
return iter__3057__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;
if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return include_css__delegate.call(this, styles);
};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__5568){
var styles = cljs.core.seq(arglist__5568);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
