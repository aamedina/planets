goog.provide('crate.util');
goog.require('cljs.core');
goog.require('clojure.string');
crate.util._STAR_base_url_STAR_ = null;
/**
* @param {...*} var_args
*/
crate.util.as_str = (function() {
var as_str = null;
var as_str__0 = (function (){
return "";
});
var as_str__1 = (function (x){
if((function (){var or__3943__auto__ = (x instanceof cljs.core.Symbol);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core.keyword_QMARK_.call(null,x);
}
})())
{return cljs.core.name.call(null,x);
} else
{return [cljs.core.str(x)].join('');
}
});
var as_str__2 = (function() { 
var G__7995__delegate = function (x,xs){
return (function (s,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7996 = [cljs.core.str(s),cljs.core.str(as_str.call(null,cljs.core.first.call(null,more)))].join('');
var G__7997 = cljs.core.next.call(null,more);
s = G__7996;
more = G__7997;
continue;
}
} else
{return s;
}
break;
}
}).call(null,as_str.call(null,x),xs);
};
var G__7995 = function (x,var_args){
var xs = null;
if (arguments.length > 1) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7995__delegate.call(this, x, xs);
};
G__7995.cljs$lang$maxFixedArity = 1;
G__7995.cljs$lang$applyTo = (function (arglist__7998){
var x = cljs.core.first(arglist__7998);
var xs = cljs.core.rest(arglist__7998);
return G__7995__delegate(x, xs);
});
G__7995.cljs$core$IFn$_invoke$arity$variadic = G__7995__delegate;
return G__7995;
})()
;
as_str = function(x,var_args){
var xs = var_args;
switch(arguments.length){
case 0:
return as_str__0.call(this);
case 1:
return as_str__1.call(this,x);
default:
return as_str__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
as_str.cljs$lang$maxFixedArity = 1;
as_str.cljs$lang$applyTo = as_str__2.cljs$lang$applyTo;
as_str.cljs$core$IFn$_invoke$arity$0 = as_str__0;
as_str.cljs$core$IFn$_invoke$arity$1 = as_str__1;
as_str.cljs$core$IFn$_invoke$arity$variadic = as_str__2.cljs$core$IFn$_invoke$arity$variadic;
return as_str;
})()
;
/**
* Change special characters into HTML character entities.
*/
crate.util.escape_html = (function escape_html(text){
return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,crate.util.as_str.call(null,text),"&","&amp;"),"<","&lt;"),">","&gt;"),"\"","&quot;");
});
/**
* Prepends the base-url to the supplied URI.
*/
crate.util.to_uri = (function to_uri(uri){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/^\w+:.*/,uri)))
{return uri;
} else
{return [cljs.core.str(crate.util._STAR_base_url_STAR_),cljs.core.str(uri)].join('');
}
});
crate.util.url_encode_component = (function url_encode_component(s){
return encodeURIComponent(crate.util.as_str.call(null,s));
});
/**
* Turn a map of parameters into a urlencoded string.
*/
crate.util.url_encode = (function url_encode(params){
return clojure.string.join.call(null,"&",(function (){var iter__7035__auto__ = (function iter__8007(s__8008){
return (new cljs.core.LazySeq(null,false,(function (){
var s__8008__$1 = s__8008;
while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8008__$1);
if(temp__4092__auto__)
{var s__8008__$2 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8008__$2))
{var c__7033__auto__ = cljs.core.chunk_first.call(null,s__8008__$2);
var size__7034__auto__ = cljs.core.count.call(null,c__7033__auto__);
var b__8010 = cljs.core.chunk_buffer.call(null,size__7034__auto__);
if((function (){var i__8009 = 0;
while(true){
if((i__8009 < size__7034__auto__))
{var vec__8013 = cljs.core._nth.call(null,c__7033__auto__,i__8009);
var k = cljs.core.nth.call(null,vec__8013,0,null);
var v = cljs.core.nth.call(null,vec__8013,1,null);
cljs.core.chunk_append.call(null,b__8010,[cljs.core.str(crate.util.url_encode_component.call(null,k)),cljs.core.str("="),cljs.core.str(crate.util.url_encode_component.call(null,v))].join(''));
{
var G__8015 = (i__8009 + 1);
i__8009 = G__8015;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8010),iter__8007.call(null,cljs.core.chunk_rest.call(null,s__8008__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8010),null);
}
} else
{var vec__8014 = cljs.core.first.call(null,s__8008__$2);
var k = cljs.core.nth.call(null,vec__8014,0,null);
var v = cljs.core.nth.call(null,vec__8014,1,null);
return cljs.core.cons.call(null,[cljs.core.str(crate.util.url_encode_component.call(null,k)),cljs.core.str("="),cljs.core.str(crate.util.url_encode_component.call(null,v))].join(''),iter__8007.call(null,cljs.core.rest.call(null,s__8008__$2)));
}
} else
{return null;
}
break;
}
}),null));
});
return iter__7035__auto__.call(null,params);
})());
});
/**
* Creates a URL string from a variable list of arguments and an optional
* parameter map as the last argument. For example:
* (url "/group/" 4 "/products" {:page 9})
* => "/group/4/products?page=9"
* @param {...*} var_args
*/
crate.util.url = (function() { 
var url__delegate = function (args){
var params = cljs.core.last.call(null,args);
var args__$1 = cljs.core.butlast.call(null,args);
return [cljs.core.str(crate.util.to_uri.call(null,[cljs.core.str(cljs.core.apply.call(null,cljs.core.str,args__$1)),cljs.core.str(((cljs.core.map_QMARK_.call(null,params))?[cljs.core.str("?"),cljs.core.str(crate.util.url_encode.call(null,params))].join(''):params))].join('')))].join('');
};
var url = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return url__delegate.call(this, args);
};
url.cljs$lang$maxFixedArity = 0;
url.cljs$lang$applyTo = (function (arglist__8016){
var args = cljs.core.seq(arglist__8016);
return url__delegate(args);
});
url.cljs$core$IFn$_invoke$arity$variadic = url__delegate;
return url;
})()
;
