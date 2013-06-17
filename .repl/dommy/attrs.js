goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){
var and__3941__auto__ = (function (){var or__3943__auto__ = (idx === 0);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return (" " === class_name.charAt((idx - 1)));
}
})();
if(cljs.core.truth_(and__3941__auto__))
{var total_len = class_name.length;
var stop = (idx + class$.length);
if((stop <= total_len))
{var or__3943__auto__ = (stop === total_len);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return (" " === class_name.charAt(stop));
}
} else
{return null;
}
} else
{return and__3941__auto__;
}
});
/**
* Finds the index of class in a space-delimited class-name
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_index = (function class_index(class_name,class$){
var start_from = 0;
while(true){
var i = class_name.indexOf(class$,start_from);
if((i >= 0))
{if(dommy.attrs.class_match_QMARK_.call(null,class_name,class$,i))
{return i;
} else
{{
var G__8174 = (i + class$.length);
start_from = G__8174;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Does an HTML element have a class. Uses Element::classList if
* available and otherwise does fast parse of className string
*/
dommy.attrs.has_class_QMARK_ = (function has_class_QMARK_(elem,class$){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var class$__$1 = cljs.core.name.call(null,class$);
var temp__4090__auto__ = elem__$1.classList;
if(cljs.core.truth_(temp__4090__auto__))
{var class_list = temp__4090__auto__;
return class_list.contains(class$__$1);
} else
{var temp__4092__auto__ = elem__$1.className;
if(cljs.core.truth_(temp__4092__auto__))
{var class_name = temp__4092__auto__;
var temp__4092__auto____$1 = dommy.attrs.class_index.call(null,class_name,class$__$1);
if(cljs.core.truth_(temp__4092__auto____$1))
{var i = temp__4092__auto____$1;
return (i >= 0);
} else
{return null;
}
} else
{return null;
}
}
});
/**
* add class to element
* @param {...*} var_args
*/
dommy.attrs.add_class_BANG_ = (function() {
var add_class_BANG_ = null;
var add_class_BANG___2 = (function (elem,classes){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var classes__$1 = clojure.string.trim.call(null,cljs.core.name.call(null,classes));
if(cljs.core.seq.call(null,classes__$1))
{var temp__4090__auto___8199 = elem__$1.classList;
if(cljs.core.truth_(temp__4090__auto___8199))
{var class_list_8200 = temp__4090__auto___8199;
var seq__8187_8201 = cljs.core.seq.call(null,classes__$1.split(/\s+/));
var chunk__8188_8202 = null;
var count__8189_8203 = 0;
var i__8190_8204 = 0;
while(true){
if((i__8190_8204 < count__8189_8203))
{var class_8205 = cljs.core._nth.call(null,chunk__8188_8202,i__8190_8204);
class_list_8200.add(class_8205);
{
var G__8206 = seq__8187_8201;
var G__8207 = chunk__8188_8202;
var G__8208 = count__8189_8203;
var G__8209 = (i__8190_8204 + 1);
seq__8187_8201 = G__8206;
chunk__8188_8202 = G__8207;
count__8189_8203 = G__8208;
i__8190_8204 = G__8209;
continue;
}
} else
{var temp__4092__auto___8210 = cljs.core.seq.call(null,seq__8187_8201);
if(temp__4092__auto___8210)
{var seq__8187_8211__$1 = temp__4092__auto___8210;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8187_8211__$1))
{var c__7066__auto___8212 = cljs.core.chunk_first.call(null,seq__8187_8211__$1);
{
var G__8213 = cljs.core.chunk_rest.call(null,seq__8187_8211__$1);
var G__8214 = c__7066__auto___8212;
var G__8215 = cljs.core.count.call(null,c__7066__auto___8212);
var G__8216 = 0;
seq__8187_8201 = G__8213;
chunk__8188_8202 = G__8214;
count__8189_8203 = G__8215;
i__8190_8204 = G__8216;
continue;
}
} else
{var class_8217 = cljs.core.first.call(null,seq__8187_8211__$1);
class_list_8200.add(class_8217);
{
var G__8218 = cljs.core.next.call(null,seq__8187_8211__$1);
var G__8219 = null;
var G__8220 = 0;
var G__8221 = 0;
seq__8187_8201 = G__8218;
chunk__8188_8202 = G__8219;
count__8189_8203 = G__8220;
i__8190_8204 = G__8221;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_8222 = elem__$1.className;
var seq__8191_8223 = cljs.core.seq.call(null,classes__$1.split(/\s+/));
var chunk__8192_8224 = null;
var count__8193_8225 = 0;
var i__8194_8226 = 0;
while(true){
if((i__8194_8226 < count__8193_8225))
{var class_8227 = cljs.core._nth.call(null,chunk__8192_8224,i__8194_8226);
if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_8222,class_8227)))
{} else
{elem__$1.className = (((class_name_8222 === ""))?class_8227:[cljs.core.str(class_name_8222),cljs.core.str(" "),cljs.core.str(class_8227)].join(''));
}
{
var G__8228 = seq__8191_8223;
var G__8229 = chunk__8192_8224;
var G__8230 = count__8193_8225;
var G__8231 = (i__8194_8226 + 1);
seq__8191_8223 = G__8228;
chunk__8192_8224 = G__8229;
count__8193_8225 = G__8230;
i__8194_8226 = G__8231;
continue;
}
} else
{var temp__4092__auto___8232 = cljs.core.seq.call(null,seq__8191_8223);
if(temp__4092__auto___8232)
{var seq__8191_8233__$1 = temp__4092__auto___8232;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8191_8233__$1))
{var c__7066__auto___8234 = cljs.core.chunk_first.call(null,seq__8191_8233__$1);
{
var G__8235 = cljs.core.chunk_rest.call(null,seq__8191_8233__$1);
var G__8236 = c__7066__auto___8234;
var G__8237 = cljs.core.count.call(null,c__7066__auto___8234);
var G__8238 = 0;
seq__8191_8223 = G__8235;
chunk__8192_8224 = G__8236;
count__8193_8225 = G__8237;
i__8194_8226 = G__8238;
continue;
}
} else
{var class_8239 = cljs.core.first.call(null,seq__8191_8233__$1);
if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_8222,class_8239)))
{} else
{elem__$1.className = (((class_name_8222 === ""))?class_8239:[cljs.core.str(class_name_8222),cljs.core.str(" "),cljs.core.str(class_8239)].join(''));
}
{
var G__8240 = cljs.core.next.call(null,seq__8191_8233__$1);
var G__8241 = null;
var G__8242 = 0;
var G__8243 = 0;
seq__8191_8223 = G__8240;
chunk__8192_8224 = G__8241;
count__8193_8225 = G__8242;
i__8194_8226 = G__8243;
continue;
}
}
} else
{}
}
break;
}
}
} else
{}
return elem__$1;
});
var add_class_BANG___3 = (function() { 
var G__8244__delegate = function (elem,classes,more_classes){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var seq__8195_8245 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__8196_8246 = null;
var count__8197_8247 = 0;
var i__8198_8248 = 0;
while(true){
if((i__8198_8248 < count__8197_8247))
{var c_8249 = cljs.core._nth.call(null,chunk__8196_8246,i__8198_8248);
add_class_BANG_.call(null,elem__$1,c_8249);
{
var G__8250 = seq__8195_8245;
var G__8251 = chunk__8196_8246;
var G__8252 = count__8197_8247;
var G__8253 = (i__8198_8248 + 1);
seq__8195_8245 = G__8250;
chunk__8196_8246 = G__8251;
count__8197_8247 = G__8252;
i__8198_8248 = G__8253;
continue;
}
} else
{var temp__4092__auto___8254 = cljs.core.seq.call(null,seq__8195_8245);
if(temp__4092__auto___8254)
{var seq__8195_8255__$1 = temp__4092__auto___8254;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8195_8255__$1))
{var c__7066__auto___8256 = cljs.core.chunk_first.call(null,seq__8195_8255__$1);
{
var G__8257 = cljs.core.chunk_rest.call(null,seq__8195_8255__$1);
var G__8258 = c__7066__auto___8256;
var G__8259 = cljs.core.count.call(null,c__7066__auto___8256);
var G__8260 = 0;
seq__8195_8245 = G__8257;
chunk__8196_8246 = G__8258;
count__8197_8247 = G__8259;
i__8198_8248 = G__8260;
continue;
}
} else
{var c_8261 = cljs.core.first.call(null,seq__8195_8255__$1);
add_class_BANG_.call(null,elem__$1,c_8261);
{
var G__8262 = cljs.core.next.call(null,seq__8195_8255__$1);
var G__8263 = null;
var G__8264 = 0;
var G__8265 = 0;
seq__8195_8245 = G__8262;
chunk__8196_8246 = G__8263;
count__8197_8247 = G__8264;
i__8198_8248 = G__8265;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__8244 = function (elem,classes,var_args){
var more_classes = null;
if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8244__delegate.call(this, elem, classes, more_classes);
};
G__8244.cljs$lang$maxFixedArity = 2;
G__8244.cljs$lang$applyTo = (function (arglist__8266){
var elem = cljs.core.first(arglist__8266);
arglist__8266 = cljs.core.next(arglist__8266);
var classes = cljs.core.first(arglist__8266);
var more_classes = cljs.core.rest(arglist__8266);
return G__8244__delegate(elem, classes, more_classes);
});
G__8244.cljs$core$IFn$_invoke$arity$variadic = G__8244__delegate;
return G__8244;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_class_BANG_.cljs$lang$maxFixedArity = 2;
add_class_BANG_.cljs$lang$applyTo = add_class_BANG___3.cljs$lang$applyTo;
add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = add_class_BANG___2;
add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return add_class_BANG_;
})()
;
dommy.attrs.remove_class_str = (function remove_class_str(init_class_name,class$){
var class_name = init_class_name;
while(true){
var class_len = class_name.length;
var temp__4090__auto__ = dommy.attrs.class_index.call(null,class_name,class$);
if(cljs.core.truth_(temp__4090__auto__))
{var i = temp__4090__auto__;
{
var G__8267 = (function (){var end = (i + class$.length);
return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__8267;
continue;
}
} else
{return class_name;
}
break;
}
});
/**
* remove class from and returns `elem`
* @param {...*} var_args
*/
dommy.attrs.remove_class_BANG_ = (function() {
var remove_class_BANG_ = null;
var remove_class_BANG___2 = (function (elem,class$){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var class$__$1 = cljs.core.name.call(null,class$);
var temp__4090__auto___8276 = elem__$1.classList;
if(cljs.core.truth_(temp__4090__auto___8276))
{var class_list_8277 = temp__4090__auto___8276;
class_list_8277.remove(class$__$1);
} else
{var class_name_8278 = elem__$1.className;
var new_class_name_8279 = dommy.attrs.remove_class_str.call(null,class_name_8278,class$__$1);
if((class_name_8278 === new_class_name_8279))
{} else
{elem__$1.className = new_class_name_8279;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__8280__delegate = function (elem,class$,classes){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var seq__8272 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__8273 = null;
var count__8274 = 0;
var i__8275 = 0;
while(true){
if((i__8275 < count__8274))
{var c = cljs.core._nth.call(null,chunk__8273,i__8275);
remove_class_BANG_.call(null,elem__$1,c);
{
var G__8281 = seq__8272;
var G__8282 = chunk__8273;
var G__8283 = count__8274;
var G__8284 = (i__8275 + 1);
seq__8272 = G__8281;
chunk__8273 = G__8282;
count__8274 = G__8283;
i__8275 = G__8284;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8272);
if(temp__4092__auto__)
{var seq__8272__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8272__$1))
{var c__7066__auto__ = cljs.core.chunk_first.call(null,seq__8272__$1);
{
var G__8285 = cljs.core.chunk_rest.call(null,seq__8272__$1);
var G__8286 = c__7066__auto__;
var G__8287 = cljs.core.count.call(null,c__7066__auto__);
var G__8288 = 0;
seq__8272 = G__8285;
chunk__8273 = G__8286;
count__8274 = G__8287;
i__8275 = G__8288;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__8272__$1);
remove_class_BANG_.call(null,elem__$1,c);
{
var G__8289 = cljs.core.next.call(null,seq__8272__$1);
var G__8290 = null;
var G__8291 = 0;
var G__8292 = 0;
seq__8272 = G__8289;
chunk__8273 = G__8290;
count__8274 = G__8291;
i__8275 = G__8292;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var G__8280 = function (elem,class$,var_args){
var classes = null;
if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8280__delegate.call(this, elem, class$, classes);
};
G__8280.cljs$lang$maxFixedArity = 2;
G__8280.cljs$lang$applyTo = (function (arglist__8293){
var elem = cljs.core.first(arglist__8293);
arglist__8293 = cljs.core.next(arglist__8293);
var class$ = cljs.core.first(arglist__8293);
var classes = cljs.core.rest(arglist__8293);
return G__8280__delegate(elem, class$, classes);
});
G__8280.cljs$core$IFn$_invoke$arity$variadic = G__8280__delegate;
return G__8280;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_class_BANG_.cljs$lang$maxFixedArity = 2;
remove_class_BANG_.cljs$lang$applyTo = remove_class_BANG___3.cljs$lang$applyTo;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_class_BANG___2;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_class_BANG_;
})()
;
/**
* (toggle-class! elem class) will add-class! if elem does not have class
* and remove-class! otherwise.
* (toggle-class! elem class add?) will add-class! if add? is truthy,
* otherwise it will remove-class!
*/
dommy.attrs.toggle_class_BANG_ = (function() {
var toggle_class_BANG_ = null;
var toggle_class_BANG___2 = (function (elem,class$){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var temp__4090__auto___8294 = elem__$1.classList;
if(cljs.core.truth_(temp__4090__auto___8294))
{var class_list_8295 = temp__4090__auto___8294;
class_list_8295.toggle(class$);
} else
{toggle_class_BANG_.call(null,elem__$1,class$,!(dommy.attrs.has_class_QMARK_.call(null,elem__$1,class$)));
}
return elem__$1;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
if(add_QMARK_)
{dommy.attrs.add_class_BANG_.call(null,elem__$1,class$);
} else
{dommy.attrs.remove_class_BANG_.call(null,elem__$1,class$);
}
return elem__$1;
});
toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_class_BANG___2.call(this,elem,class$);
case 3:
return toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_class_BANG___2;
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_class_BANG___3;
return toggle_class_BANG_;
})()
;
dommy.attrs.style_str = (function style_str(x){
if(cljs.core.string_QMARK_.call(null,x))
{return x;
} else
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__8298){
var vec__8299 = p__8298;
var k = cljs.core.nth.call(null,vec__8299,0,null);
var v = cljs.core.nth.call(null,vec__8299,1,null);
return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
}),x));
}
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)),cljs.core.hash_map("\uFDD0:line",120,"\uFDD0:column",18))),cljs.core.hash_map("\uFDD0:line",120,"\uFDD0:column",11))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var style = elem__$1.style;
var seq__8306_8312 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));
var chunk__8307_8313 = null;
var count__8308_8314 = 0;
var i__8309_8315 = 0;
while(true){
if((i__8309_8315 < count__8308_8314))
{var vec__8310_8316 = cljs.core._nth.call(null,chunk__8307_8313,i__8309_8315);
var k_8317 = cljs.core.nth.call(null,vec__8310_8316,0,null);
var v_8318 = cljs.core.nth.call(null,vec__8310_8316,1,null);
(style[cljs.core.name.call(null,k_8317)] = v_8318);
{
var G__8319 = seq__8306_8312;
var G__8320 = chunk__8307_8313;
var G__8321 = count__8308_8314;
var G__8322 = (i__8309_8315 + 1);
seq__8306_8312 = G__8319;
chunk__8307_8313 = G__8320;
count__8308_8314 = G__8321;
i__8309_8315 = G__8322;
continue;
}
} else
{var temp__4092__auto___8323 = cljs.core.seq.call(null,seq__8306_8312);
if(temp__4092__auto___8323)
{var seq__8306_8324__$1 = temp__4092__auto___8323;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8306_8324__$1))
{var c__7066__auto___8325 = cljs.core.chunk_first.call(null,seq__8306_8324__$1);
{
var G__8326 = cljs.core.chunk_rest.call(null,seq__8306_8324__$1);
var G__8327 = c__7066__auto___8325;
var G__8328 = cljs.core.count.call(null,c__7066__auto___8325);
var G__8329 = 0;
seq__8306_8312 = G__8326;
chunk__8307_8313 = G__8327;
count__8308_8314 = G__8328;
i__8309_8315 = G__8329;
continue;
}
} else
{var vec__8311_8330 = cljs.core.first.call(null,seq__8306_8324__$1);
var k_8331 = cljs.core.nth.call(null,vec__8311_8330,0,null);
var v_8332 = cljs.core.nth.call(null,vec__8311_8330,1,null);
(style[cljs.core.name.call(null,k_8331)] = v_8332);
{
var G__8333 = cljs.core.next.call(null,seq__8306_8324__$1);
var G__8334 = null;
var G__8335 = 0;
var G__8336 = 0;
seq__8306_8312 = G__8333;
chunk__8307_8313 = G__8334;
count__8308_8314 = G__8335;
i__8309_8315 = G__8336;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;
if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return set_style_BANG___delegate.call(this, elem, kvs);
};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__8337){
var elem = cljs.core.first(arglist__8337);
var kvs = cljs.core.rest(arglist__8337);
return set_style_BANG___delegate(elem, kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
dommy.attrs.style = (function style(elem,k){
if(cljs.core.truth_(k))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"k","k",-1640531420,null)))].join('')));
}
return (window.getComputedStyle(dommy.template.__GT_node_like.call(null,elem))[cljs.core.name.call(null,k)]);
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)),cljs.core.hash_map("\uFDD0:line",132,"\uFDD0:column",18))),cljs.core.hash_map("\uFDD0:line",132,"\uFDD0:column",11))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var seq__8344_8350 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));
var chunk__8345_8351 = null;
var count__8346_8352 = 0;
var i__8347_8353 = 0;
while(true){
if((i__8347_8353 < count__8346_8352))
{var vec__8348_8354 = cljs.core._nth.call(null,chunk__8345_8351,i__8347_8353);
var k_8355 = cljs.core.nth.call(null,vec__8348_8354,0,null);
var v_8356 = cljs.core.nth.call(null,vec__8348_8354,1,null);
dommy.attrs.set_style_BANG_.call(null,elem__$1,k_8355,[cljs.core.str(v_8356),cljs.core.str("px")].join(''));
{
var G__8357 = seq__8344_8350;
var G__8358 = chunk__8345_8351;
var G__8359 = count__8346_8352;
var G__8360 = (i__8347_8353 + 1);
seq__8344_8350 = G__8357;
chunk__8345_8351 = G__8358;
count__8346_8352 = G__8359;
i__8347_8353 = G__8360;
continue;
}
} else
{var temp__4092__auto___8361 = cljs.core.seq.call(null,seq__8344_8350);
if(temp__4092__auto___8361)
{var seq__8344_8362__$1 = temp__4092__auto___8361;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8344_8362__$1))
{var c__7066__auto___8363 = cljs.core.chunk_first.call(null,seq__8344_8362__$1);
{
var G__8364 = cljs.core.chunk_rest.call(null,seq__8344_8362__$1);
var G__8365 = c__7066__auto___8363;
var G__8366 = cljs.core.count.call(null,c__7066__auto___8363);
var G__8367 = 0;
seq__8344_8350 = G__8364;
chunk__8345_8351 = G__8365;
count__8346_8352 = G__8366;
i__8347_8353 = G__8367;
continue;
}
} else
{var vec__8349_8368 = cljs.core.first.call(null,seq__8344_8362__$1);
var k_8369 = cljs.core.nth.call(null,vec__8349_8368,0,null);
var v_8370 = cljs.core.nth.call(null,vec__8349_8368,1,null);
dommy.attrs.set_style_BANG_.call(null,elem__$1,k_8369,[cljs.core.str(v_8370),cljs.core.str("px")].join(''));
{
var G__8371 = cljs.core.next.call(null,seq__8344_8362__$1);
var G__8372 = null;
var G__8373 = 0;
var G__8374 = 0;
seq__8344_8350 = G__8371;
chunk__8345_8351 = G__8372;
count__8346_8352 = G__8373;
i__8347_8353 = G__8374;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;
if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return set_px_BANG___delegate.call(this, elem, kvs);
};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__8375){
var elem = cljs.core.first(arglist__8375);
var kvs = cljs.core.rest(arglist__8375);
return set_px_BANG___delegate(elem, kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
dommy.attrs.px = (function px(elem,k){
var pixels = dommy.attrs.style.call(null,dommy.template.__GT_node_like.call(null,elem),k);
if(cljs.core.seq.call(null,pixels))
{return parseInt(pixels);
} else
{return null;
}
});
/**
* Sets dom attributes on and returns `elem`.
* Attributes without values will be set to "true":
* 
* (set-attr! elem :disabled)
* 
* With values, the function takes variadic kv pairs:
* 
* (set-attr! elem :id "some-id"
* :name "some-name")
* @param {...*} var_args
*/
dommy.attrs.set_attr_BANG_ = (function() {
var set_attr_BANG_ = null;
var set_attr_BANG___2 = (function (elem,k){
return set_attr_BANG_.call(null,dommy.template.__GT_node_like.call(null,elem),k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){
if(cljs.core.truth_(v))
{if(cljs.core.fn_QMARK_.call(null,v))
{var G__8384 = dommy.template.__GT_node_like.call(null,elem);
(G__8384[cljs.core.name.call(null,k)] = v);
return G__8384;
} else
{var G__8385 = dommy.template.__GT_node_like.call(null,elem);
G__8385.setAttribute(cljs.core.name.call(null,k),(((k === "\uFDD0:style"))?dommy.attrs.style_str.call(null,v):v));
return G__8385;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__8392__delegate = function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)),cljs.core.hash_map("\uFDD0:line",166,"\uFDD0:column",19))),cljs.core.hash_map("\uFDD0:line",166,"\uFDD0:column",12))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var seq__8386_8393 = cljs.core.seq.call(null,cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([k,v], true),cljs.core.partition.call(null,2,kvs)));
var chunk__8387_8394 = null;
var count__8388_8395 = 0;
var i__8389_8396 = 0;
while(true){
if((i__8389_8396 < count__8388_8395))
{var vec__8390_8397 = cljs.core._nth.call(null,chunk__8387_8394,i__8389_8396);
var k_8398__$1 = cljs.core.nth.call(null,vec__8390_8397,0,null);
var v_8399__$1 = cljs.core.nth.call(null,vec__8390_8397,1,null);
set_attr_BANG_.call(null,elem__$1,k_8398__$1,v_8399__$1);
{
var G__8400 = seq__8386_8393;
var G__8401 = chunk__8387_8394;
var G__8402 = count__8388_8395;
var G__8403 = (i__8389_8396 + 1);
seq__8386_8393 = G__8400;
chunk__8387_8394 = G__8401;
count__8388_8395 = G__8402;
i__8389_8396 = G__8403;
continue;
}
} else
{var temp__4092__auto___8404 = cljs.core.seq.call(null,seq__8386_8393);
if(temp__4092__auto___8404)
{var seq__8386_8405__$1 = temp__4092__auto___8404;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8386_8405__$1))
{var c__7066__auto___8406 = cljs.core.chunk_first.call(null,seq__8386_8405__$1);
{
var G__8407 = cljs.core.chunk_rest.call(null,seq__8386_8405__$1);
var G__8408 = c__7066__auto___8406;
var G__8409 = cljs.core.count.call(null,c__7066__auto___8406);
var G__8410 = 0;
seq__8386_8393 = G__8407;
chunk__8387_8394 = G__8408;
count__8388_8395 = G__8409;
i__8389_8396 = G__8410;
continue;
}
} else
{var vec__8391_8411 = cljs.core.first.call(null,seq__8386_8405__$1);
var k_8412__$1 = cljs.core.nth.call(null,vec__8391_8411,0,null);
var v_8413__$1 = cljs.core.nth.call(null,vec__8391_8411,1,null);
set_attr_BANG_.call(null,elem__$1,k_8412__$1,v_8413__$1);
{
var G__8414 = cljs.core.next.call(null,seq__8386_8405__$1);
var G__8415 = null;
var G__8416 = 0;
var G__8417 = 0;
seq__8386_8393 = G__8414;
chunk__8387_8394 = G__8415;
count__8388_8395 = G__8416;
i__8389_8396 = G__8417;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__8392 = function (elem,k,v,var_args){
var kvs = null;
if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8392__delegate.call(this, elem, k, v, kvs);
};
G__8392.cljs$lang$maxFixedArity = 3;
G__8392.cljs$lang$applyTo = (function (arglist__8418){
var elem = cljs.core.first(arglist__8418);
arglist__8418 = cljs.core.next(arglist__8418);
var k = cljs.core.first(arglist__8418);
arglist__8418 = cljs.core.next(arglist__8418);
var v = cljs.core.first(arglist__8418);
var kvs = cljs.core.rest(arglist__8418);
return G__8392__delegate(elem, k, v, kvs);
});
G__8392.cljs$core$IFn$_invoke$arity$variadic = G__8392__delegate;
return G__8392;
})()
;
set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return set_attr_BANG___2.call(this,elem,k);
case 3:
return set_attr_BANG___3.call(this,elem,k,v);
default:
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_attr_BANG_.cljs$lang$maxFixedArity = 3;
set_attr_BANG_.cljs$lang$applyTo = set_attr_BANG___4.cljs$lang$applyTo;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_attr_BANG___2;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_attr_BANG___3;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return set_attr_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.attrs.remove_attr_BANG_ = (function() {
var remove_attr_BANG_ = null;
var remove_attr_BANG___2 = (function (elem,k){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray(["\uFDD0:class",null,"\uFDD0:classes",null], true).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(cljs.core.name.call(null,k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__8427__delegate = function (elem,k,ks){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var seq__8423_8428 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__8424_8429 = null;
var count__8425_8430 = 0;
var i__8426_8431 = 0;
while(true){
if((i__8426_8431 < count__8425_8430))
{var k_8432__$1 = cljs.core._nth.call(null,chunk__8424_8429,i__8426_8431);
remove_attr_BANG_.call(null,elem__$1,k_8432__$1);
{
var G__8433 = seq__8423_8428;
var G__8434 = chunk__8424_8429;
var G__8435 = count__8425_8430;
var G__8436 = (i__8426_8431 + 1);
seq__8423_8428 = G__8433;
chunk__8424_8429 = G__8434;
count__8425_8430 = G__8435;
i__8426_8431 = G__8436;
continue;
}
} else
{var temp__4092__auto___8437 = cljs.core.seq.call(null,seq__8423_8428);
if(temp__4092__auto___8437)
{var seq__8423_8438__$1 = temp__4092__auto___8437;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8423_8438__$1))
{var c__7066__auto___8439 = cljs.core.chunk_first.call(null,seq__8423_8438__$1);
{
var G__8440 = cljs.core.chunk_rest.call(null,seq__8423_8438__$1);
var G__8441 = c__7066__auto___8439;
var G__8442 = cljs.core.count.call(null,c__7066__auto___8439);
var G__8443 = 0;
seq__8423_8428 = G__8440;
chunk__8424_8429 = G__8441;
count__8425_8430 = G__8442;
i__8426_8431 = G__8443;
continue;
}
} else
{var k_8444__$1 = cljs.core.first.call(null,seq__8423_8438__$1);
remove_attr_BANG_.call(null,elem__$1,k_8444__$1);
{
var G__8445 = cljs.core.next.call(null,seq__8423_8438__$1);
var G__8446 = null;
var G__8447 = 0;
var G__8448 = 0;
seq__8423_8428 = G__8445;
chunk__8424_8429 = G__8446;
count__8425_8430 = G__8447;
i__8426_8431 = G__8448;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__8427 = function (elem,k,var_args){
var ks = null;
if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8427__delegate.call(this, elem, k, ks);
};
G__8427.cljs$lang$maxFixedArity = 2;
G__8427.cljs$lang$applyTo = (function (arglist__8449){
var elem = cljs.core.first(arglist__8449);
arglist__8449 = cljs.core.next(arglist__8449);
var k = cljs.core.first(arglist__8449);
var ks = cljs.core.rest(arglist__8449);
return G__8427__delegate(elem, k, ks);
});
G__8427.cljs$core$IFn$_invoke$arity$variadic = G__8427__delegate;
return G__8427;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
remove_attr_BANG_.cljs$lang$applyTo = remove_attr_BANG___3.cljs$lang$applyTo;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_attr_BANG___2;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_attr_BANG_;
})()
;
dommy.attrs.attr = (function attr(elem,k){
if(cljs.core.truth_(k))
{return dommy.template.__GT_node_like.call(null,elem).getAttribute(cljs.core.name.call(null,k));
} else
{return null;
}
});
dommy.attrs.hidden_QMARK_ = (function hidden_QMARK_(elem){
return ("none" === dommy.template.__GT_node_like.call(null,elem).style.display);
});
/**
* Display or hide the given `elem`. Takes an optional boolean `show?`
* indicating whether to show or hide `elem`.
*/
dommy.attrs.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
toggle_BANG_.call(null,elem__$1,dommy.attrs.hidden_QMARK_.call(null,elem__$1));
return elem__$1;
});
var toggle_BANG___2 = (function (elem,show_QMARK_){
var G__8451 = dommy.template.__GT_node_like.call(null,elem);
G__8451.style.display = ((show_QMARK_)?"":"none");
return G__8451;
});
toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return toggle_BANG___1.call(this,elem);
case 2:
return toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = toggle_BANG___1;
toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_BANG___2;
return toggle_BANG_;
})()
;
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){
var G__8453 = dommy.template.__GT_node_like.call(null,elem);
dommy.attrs.toggle_BANG_.call(null,G__8453,false);
return G__8453;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){
var G__8455 = dommy.template.__GT_node_like.call(null,elem);
dommy.attrs.toggle_BANG_.call(null,G__8455,true);
return G__8455;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){
return cljs.core.js__GT_clj.call(null,(function (){var G__8457 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();
(G__8457["constructor"] = Object);
return G__8457;
})(),"\uFDD0:keywordize-keys",true);
});
