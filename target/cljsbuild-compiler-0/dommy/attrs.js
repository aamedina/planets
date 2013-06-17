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
var G__4267 = (i + class$.length);
start_from = G__4267;
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
{var temp__4090__auto___4292 = elem__$1.classList;
if(cljs.core.truth_(temp__4090__auto___4292))
{var class_list_4293 = temp__4090__auto___4292;
var seq__4280_4294 = cljs.core.seq.call(null,classes__$1.split(/\s+/));
var chunk__4281_4295 = null;
var count__4282_4296 = 0;
var i__4283_4297 = 0;
while(true){
if((i__4283_4297 < count__4282_4296))
{var class_4298 = cljs.core._nth.call(null,chunk__4281_4295,i__4283_4297);
class_list_4293.add(class_4298);
{
var G__4299 = seq__4280_4294;
var G__4300 = chunk__4281_4295;
var G__4301 = count__4282_4296;
var G__4302 = (i__4283_4297 + 1);
seq__4280_4294 = G__4299;
chunk__4281_4295 = G__4300;
count__4282_4296 = G__4301;
i__4283_4297 = G__4302;
continue;
}
} else
{var temp__4092__auto___4303 = cljs.core.seq.call(null,seq__4280_4294);
if(temp__4092__auto___4303)
{var seq__4280_4304__$1 = temp__4092__auto___4303;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4280_4304__$1))
{var c__3088__auto___4305 = cljs.core.chunk_first.call(null,seq__4280_4304__$1);
{
var G__4306 = cljs.core.chunk_rest.call(null,seq__4280_4304__$1);
var G__4307 = c__3088__auto___4305;
var G__4308 = cljs.core.count.call(null,c__3088__auto___4305);
var G__4309 = 0;
seq__4280_4294 = G__4306;
chunk__4281_4295 = G__4307;
count__4282_4296 = G__4308;
i__4283_4297 = G__4309;
continue;
}
} else
{var class_4310 = cljs.core.first.call(null,seq__4280_4304__$1);
class_list_4293.add(class_4310);
{
var G__4311 = cljs.core.next.call(null,seq__4280_4304__$1);
var G__4312 = null;
var G__4313 = 0;
var G__4314 = 0;
seq__4280_4294 = G__4311;
chunk__4281_4295 = G__4312;
count__4282_4296 = G__4313;
i__4283_4297 = G__4314;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_4315 = elem__$1.className;
var seq__4284_4316 = cljs.core.seq.call(null,classes__$1.split(/\s+/));
var chunk__4285_4317 = null;
var count__4286_4318 = 0;
var i__4287_4319 = 0;
while(true){
if((i__4287_4319 < count__4286_4318))
{var class_4320 = cljs.core._nth.call(null,chunk__4285_4317,i__4287_4319);
if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_4315,class_4320)))
{} else
{elem__$1.className = (((class_name_4315 === ""))?class_4320:[cljs.core.str(class_name_4315),cljs.core.str(" "),cljs.core.str(class_4320)].join(''));
}
{
var G__4321 = seq__4284_4316;
var G__4322 = chunk__4285_4317;
var G__4323 = count__4286_4318;
var G__4324 = (i__4287_4319 + 1);
seq__4284_4316 = G__4321;
chunk__4285_4317 = G__4322;
count__4286_4318 = G__4323;
i__4287_4319 = G__4324;
continue;
}
} else
{var temp__4092__auto___4325 = cljs.core.seq.call(null,seq__4284_4316);
if(temp__4092__auto___4325)
{var seq__4284_4326__$1 = temp__4092__auto___4325;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4284_4326__$1))
{var c__3088__auto___4327 = cljs.core.chunk_first.call(null,seq__4284_4326__$1);
{
var G__4328 = cljs.core.chunk_rest.call(null,seq__4284_4326__$1);
var G__4329 = c__3088__auto___4327;
var G__4330 = cljs.core.count.call(null,c__3088__auto___4327);
var G__4331 = 0;
seq__4284_4316 = G__4328;
chunk__4285_4317 = G__4329;
count__4286_4318 = G__4330;
i__4287_4319 = G__4331;
continue;
}
} else
{var class_4332 = cljs.core.first.call(null,seq__4284_4326__$1);
if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_4315,class_4332)))
{} else
{elem__$1.className = (((class_name_4315 === ""))?class_4332:[cljs.core.str(class_name_4315),cljs.core.str(" "),cljs.core.str(class_4332)].join(''));
}
{
var G__4333 = cljs.core.next.call(null,seq__4284_4326__$1);
var G__4334 = null;
var G__4335 = 0;
var G__4336 = 0;
seq__4284_4316 = G__4333;
chunk__4285_4317 = G__4334;
count__4286_4318 = G__4335;
i__4287_4319 = G__4336;
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
var G__4337__delegate = function (elem,classes,more_classes){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var seq__4288_4338 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__4289_4339 = null;
var count__4290_4340 = 0;
var i__4291_4341 = 0;
while(true){
if((i__4291_4341 < count__4290_4340))
{var c_4342 = cljs.core._nth.call(null,chunk__4289_4339,i__4291_4341);
add_class_BANG_.call(null,elem__$1,c_4342);
{
var G__4343 = seq__4288_4338;
var G__4344 = chunk__4289_4339;
var G__4345 = count__4290_4340;
var G__4346 = (i__4291_4341 + 1);
seq__4288_4338 = G__4343;
chunk__4289_4339 = G__4344;
count__4290_4340 = G__4345;
i__4291_4341 = G__4346;
continue;
}
} else
{var temp__4092__auto___4347 = cljs.core.seq.call(null,seq__4288_4338);
if(temp__4092__auto___4347)
{var seq__4288_4348__$1 = temp__4092__auto___4347;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4288_4348__$1))
{var c__3088__auto___4349 = cljs.core.chunk_first.call(null,seq__4288_4348__$1);
{
var G__4350 = cljs.core.chunk_rest.call(null,seq__4288_4348__$1);
var G__4351 = c__3088__auto___4349;
var G__4352 = cljs.core.count.call(null,c__3088__auto___4349);
var G__4353 = 0;
seq__4288_4338 = G__4350;
chunk__4289_4339 = G__4351;
count__4290_4340 = G__4352;
i__4291_4341 = G__4353;
continue;
}
} else
{var c_4354 = cljs.core.first.call(null,seq__4288_4348__$1);
add_class_BANG_.call(null,elem__$1,c_4354);
{
var G__4355 = cljs.core.next.call(null,seq__4288_4348__$1);
var G__4356 = null;
var G__4357 = 0;
var G__4358 = 0;
seq__4288_4338 = G__4355;
chunk__4289_4339 = G__4356;
count__4290_4340 = G__4357;
i__4291_4341 = G__4358;
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
var G__4337 = function (elem,classes,var_args){
var more_classes = null;
if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4337__delegate.call(this, elem, classes, more_classes);
};
G__4337.cljs$lang$maxFixedArity = 2;
G__4337.cljs$lang$applyTo = (function (arglist__4359){
var elem = cljs.core.first(arglist__4359);
arglist__4359 = cljs.core.next(arglist__4359);
var classes = cljs.core.first(arglist__4359);
var more_classes = cljs.core.rest(arglist__4359);
return G__4337__delegate(elem, classes, more_classes);
});
G__4337.cljs$core$IFn$_invoke$arity$variadic = G__4337__delegate;
return G__4337;
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
var G__4360 = (function (){var end = (i + class$.length);
return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__4360;
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
var temp__4090__auto___4369 = elem__$1.classList;
if(cljs.core.truth_(temp__4090__auto___4369))
{var class_list_4370 = temp__4090__auto___4369;
class_list_4370.remove(class$__$1);
} else
{var class_name_4371 = elem__$1.className;
var new_class_name_4372 = dommy.attrs.remove_class_str.call(null,class_name_4371,class$__$1);
if((class_name_4371 === new_class_name_4372))
{} else
{elem__$1.className = new_class_name_4372;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__4373__delegate = function (elem,class$,classes){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var seq__4365 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__4366 = null;
var count__4367 = 0;
var i__4368 = 0;
while(true){
if((i__4368 < count__4367))
{var c = cljs.core._nth.call(null,chunk__4366,i__4368);
remove_class_BANG_.call(null,elem__$1,c);
{
var G__4374 = seq__4365;
var G__4375 = chunk__4366;
var G__4376 = count__4367;
var G__4377 = (i__4368 + 1);
seq__4365 = G__4374;
chunk__4366 = G__4375;
count__4367 = G__4376;
i__4368 = G__4377;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__4365);
if(temp__4092__auto__)
{var seq__4365__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4365__$1))
{var c__3088__auto__ = cljs.core.chunk_first.call(null,seq__4365__$1);
{
var G__4378 = cljs.core.chunk_rest.call(null,seq__4365__$1);
var G__4379 = c__3088__auto__;
var G__4380 = cljs.core.count.call(null,c__3088__auto__);
var G__4381 = 0;
seq__4365 = G__4378;
chunk__4366 = G__4379;
count__4367 = G__4380;
i__4368 = G__4381;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__4365__$1);
remove_class_BANG_.call(null,elem__$1,c);
{
var G__4382 = cljs.core.next.call(null,seq__4365__$1);
var G__4383 = null;
var G__4384 = 0;
var G__4385 = 0;
seq__4365 = G__4382;
chunk__4366 = G__4383;
count__4367 = G__4384;
i__4368 = G__4385;
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
var G__4373 = function (elem,class$,var_args){
var classes = null;
if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4373__delegate.call(this, elem, class$, classes);
};
G__4373.cljs$lang$maxFixedArity = 2;
G__4373.cljs$lang$applyTo = (function (arglist__4386){
var elem = cljs.core.first(arglist__4386);
arglist__4386 = cljs.core.next(arglist__4386);
var class$ = cljs.core.first(arglist__4386);
var classes = cljs.core.rest(arglist__4386);
return G__4373__delegate(elem, class$, classes);
});
G__4373.cljs$core$IFn$_invoke$arity$variadic = G__4373__delegate;
return G__4373;
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
var temp__4090__auto___4387 = elem__$1.classList;
if(cljs.core.truth_(temp__4090__auto___4387))
{var class_list_4388 = temp__4090__auto___4387;
class_list_4388.toggle(class$);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__4391){
var vec__4392 = p__4391;
var k = cljs.core.nth.call(null,vec__4392,0,null);
var v = cljs.core.nth.call(null,vec__4392,1,null);
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
var seq__4399_4405 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));
var chunk__4400_4406 = null;
var count__4401_4407 = 0;
var i__4402_4408 = 0;
while(true){
if((i__4402_4408 < count__4401_4407))
{var vec__4403_4409 = cljs.core._nth.call(null,chunk__4400_4406,i__4402_4408);
var k_4410 = cljs.core.nth.call(null,vec__4403_4409,0,null);
var v_4411 = cljs.core.nth.call(null,vec__4403_4409,1,null);
(style[cljs.core.name.call(null,k_4410)] = v_4411);
{
var G__4412 = seq__4399_4405;
var G__4413 = chunk__4400_4406;
var G__4414 = count__4401_4407;
var G__4415 = (i__4402_4408 + 1);
seq__4399_4405 = G__4412;
chunk__4400_4406 = G__4413;
count__4401_4407 = G__4414;
i__4402_4408 = G__4415;
continue;
}
} else
{var temp__4092__auto___4416 = cljs.core.seq.call(null,seq__4399_4405);
if(temp__4092__auto___4416)
{var seq__4399_4417__$1 = temp__4092__auto___4416;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4399_4417__$1))
{var c__3088__auto___4418 = cljs.core.chunk_first.call(null,seq__4399_4417__$1);
{
var G__4419 = cljs.core.chunk_rest.call(null,seq__4399_4417__$1);
var G__4420 = c__3088__auto___4418;
var G__4421 = cljs.core.count.call(null,c__3088__auto___4418);
var G__4422 = 0;
seq__4399_4405 = G__4419;
chunk__4400_4406 = G__4420;
count__4401_4407 = G__4421;
i__4402_4408 = G__4422;
continue;
}
} else
{var vec__4404_4423 = cljs.core.first.call(null,seq__4399_4417__$1);
var k_4424 = cljs.core.nth.call(null,vec__4404_4423,0,null);
var v_4425 = cljs.core.nth.call(null,vec__4404_4423,1,null);
(style[cljs.core.name.call(null,k_4424)] = v_4425);
{
var G__4426 = cljs.core.next.call(null,seq__4399_4417__$1);
var G__4427 = null;
var G__4428 = 0;
var G__4429 = 0;
seq__4399_4405 = G__4426;
chunk__4400_4406 = G__4427;
count__4401_4407 = G__4428;
i__4402_4408 = G__4429;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__4430){
var elem = cljs.core.first(arglist__4430);
var kvs = cljs.core.rest(arglist__4430);
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
var seq__4437_4443 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));
var chunk__4438_4444 = null;
var count__4439_4445 = 0;
var i__4440_4446 = 0;
while(true){
if((i__4440_4446 < count__4439_4445))
{var vec__4441_4447 = cljs.core._nth.call(null,chunk__4438_4444,i__4440_4446);
var k_4448 = cljs.core.nth.call(null,vec__4441_4447,0,null);
var v_4449 = cljs.core.nth.call(null,vec__4441_4447,1,null);
dommy.attrs.set_style_BANG_.call(null,elem__$1,k_4448,[cljs.core.str(v_4449),cljs.core.str("px")].join(''));
{
var G__4450 = seq__4437_4443;
var G__4451 = chunk__4438_4444;
var G__4452 = count__4439_4445;
var G__4453 = (i__4440_4446 + 1);
seq__4437_4443 = G__4450;
chunk__4438_4444 = G__4451;
count__4439_4445 = G__4452;
i__4440_4446 = G__4453;
continue;
}
} else
{var temp__4092__auto___4454 = cljs.core.seq.call(null,seq__4437_4443);
if(temp__4092__auto___4454)
{var seq__4437_4455__$1 = temp__4092__auto___4454;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4437_4455__$1))
{var c__3088__auto___4456 = cljs.core.chunk_first.call(null,seq__4437_4455__$1);
{
var G__4457 = cljs.core.chunk_rest.call(null,seq__4437_4455__$1);
var G__4458 = c__3088__auto___4456;
var G__4459 = cljs.core.count.call(null,c__3088__auto___4456);
var G__4460 = 0;
seq__4437_4443 = G__4457;
chunk__4438_4444 = G__4458;
count__4439_4445 = G__4459;
i__4440_4446 = G__4460;
continue;
}
} else
{var vec__4442_4461 = cljs.core.first.call(null,seq__4437_4455__$1);
var k_4462 = cljs.core.nth.call(null,vec__4442_4461,0,null);
var v_4463 = cljs.core.nth.call(null,vec__4442_4461,1,null);
dommy.attrs.set_style_BANG_.call(null,elem__$1,k_4462,[cljs.core.str(v_4463),cljs.core.str("px")].join(''));
{
var G__4464 = cljs.core.next.call(null,seq__4437_4455__$1);
var G__4465 = null;
var G__4466 = 0;
var G__4467 = 0;
seq__4437_4443 = G__4464;
chunk__4438_4444 = G__4465;
count__4439_4445 = G__4466;
i__4440_4446 = G__4467;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__4468){
var elem = cljs.core.first(arglist__4468);
var kvs = cljs.core.rest(arglist__4468);
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
{var G__4477 = dommy.template.__GT_node_like.call(null,elem);
(G__4477[cljs.core.name.call(null,k)] = v);
return G__4477;
} else
{var G__4478 = dommy.template.__GT_node_like.call(null,elem);
G__4478.setAttribute(cljs.core.name.call(null,k),(((k === "\uFDD0:style"))?dommy.attrs.style_str.call(null,v):v));
return G__4478;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__4485__delegate = function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)),cljs.core.hash_map("\uFDD0:line",166,"\uFDD0:column",19))),cljs.core.hash_map("\uFDD0:line",166,"\uFDD0:column",12))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var seq__4479_4486 = cljs.core.seq.call(null,cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([k,v], true),cljs.core.partition.call(null,2,kvs)));
var chunk__4480_4487 = null;
var count__4481_4488 = 0;
var i__4482_4489 = 0;
while(true){
if((i__4482_4489 < count__4481_4488))
{var vec__4483_4490 = cljs.core._nth.call(null,chunk__4480_4487,i__4482_4489);
var k_4491__$1 = cljs.core.nth.call(null,vec__4483_4490,0,null);
var v_4492__$1 = cljs.core.nth.call(null,vec__4483_4490,1,null);
set_attr_BANG_.call(null,elem__$1,k_4491__$1,v_4492__$1);
{
var G__4493 = seq__4479_4486;
var G__4494 = chunk__4480_4487;
var G__4495 = count__4481_4488;
var G__4496 = (i__4482_4489 + 1);
seq__4479_4486 = G__4493;
chunk__4480_4487 = G__4494;
count__4481_4488 = G__4495;
i__4482_4489 = G__4496;
continue;
}
} else
{var temp__4092__auto___4497 = cljs.core.seq.call(null,seq__4479_4486);
if(temp__4092__auto___4497)
{var seq__4479_4498__$1 = temp__4092__auto___4497;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4479_4498__$1))
{var c__3088__auto___4499 = cljs.core.chunk_first.call(null,seq__4479_4498__$1);
{
var G__4500 = cljs.core.chunk_rest.call(null,seq__4479_4498__$1);
var G__4501 = c__3088__auto___4499;
var G__4502 = cljs.core.count.call(null,c__3088__auto___4499);
var G__4503 = 0;
seq__4479_4486 = G__4500;
chunk__4480_4487 = G__4501;
count__4481_4488 = G__4502;
i__4482_4489 = G__4503;
continue;
}
} else
{var vec__4484_4504 = cljs.core.first.call(null,seq__4479_4498__$1);
var k_4505__$1 = cljs.core.nth.call(null,vec__4484_4504,0,null);
var v_4506__$1 = cljs.core.nth.call(null,vec__4484_4504,1,null);
set_attr_BANG_.call(null,elem__$1,k_4505__$1,v_4506__$1);
{
var G__4507 = cljs.core.next.call(null,seq__4479_4498__$1);
var G__4508 = null;
var G__4509 = 0;
var G__4510 = 0;
seq__4479_4486 = G__4507;
chunk__4480_4487 = G__4508;
count__4481_4488 = G__4509;
i__4482_4489 = G__4510;
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
var G__4485 = function (elem,k,v,var_args){
var kvs = null;
if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4485__delegate.call(this, elem, k, v, kvs);
};
G__4485.cljs$lang$maxFixedArity = 3;
G__4485.cljs$lang$applyTo = (function (arglist__4511){
var elem = cljs.core.first(arglist__4511);
arglist__4511 = cljs.core.next(arglist__4511);
var k = cljs.core.first(arglist__4511);
arglist__4511 = cljs.core.next(arglist__4511);
var v = cljs.core.first(arglist__4511);
var kvs = cljs.core.rest(arglist__4511);
return G__4485__delegate(elem, k, v, kvs);
});
G__4485.cljs$core$IFn$_invoke$arity$variadic = G__4485__delegate;
return G__4485;
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
var G__4520__delegate = function (elem,k,ks){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var seq__4516_4521 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__4517_4522 = null;
var count__4518_4523 = 0;
var i__4519_4524 = 0;
while(true){
if((i__4519_4524 < count__4518_4523))
{var k_4525__$1 = cljs.core._nth.call(null,chunk__4517_4522,i__4519_4524);
remove_attr_BANG_.call(null,elem__$1,k_4525__$1);
{
var G__4526 = seq__4516_4521;
var G__4527 = chunk__4517_4522;
var G__4528 = count__4518_4523;
var G__4529 = (i__4519_4524 + 1);
seq__4516_4521 = G__4526;
chunk__4517_4522 = G__4527;
count__4518_4523 = G__4528;
i__4519_4524 = G__4529;
continue;
}
} else
{var temp__4092__auto___4530 = cljs.core.seq.call(null,seq__4516_4521);
if(temp__4092__auto___4530)
{var seq__4516_4531__$1 = temp__4092__auto___4530;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4516_4531__$1))
{var c__3088__auto___4532 = cljs.core.chunk_first.call(null,seq__4516_4531__$1);
{
var G__4533 = cljs.core.chunk_rest.call(null,seq__4516_4531__$1);
var G__4534 = c__3088__auto___4532;
var G__4535 = cljs.core.count.call(null,c__3088__auto___4532);
var G__4536 = 0;
seq__4516_4521 = G__4533;
chunk__4517_4522 = G__4534;
count__4518_4523 = G__4535;
i__4519_4524 = G__4536;
continue;
}
} else
{var k_4537__$1 = cljs.core.first.call(null,seq__4516_4531__$1);
remove_attr_BANG_.call(null,elem__$1,k_4537__$1);
{
var G__4538 = cljs.core.next.call(null,seq__4516_4531__$1);
var G__4539 = null;
var G__4540 = 0;
var G__4541 = 0;
seq__4516_4521 = G__4538;
chunk__4517_4522 = G__4539;
count__4518_4523 = G__4540;
i__4519_4524 = G__4541;
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
var G__4520 = function (elem,k,var_args){
var ks = null;
if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4520__delegate.call(this, elem, k, ks);
};
G__4520.cljs$lang$maxFixedArity = 2;
G__4520.cljs$lang$applyTo = (function (arglist__4542){
var elem = cljs.core.first(arglist__4542);
arglist__4542 = cljs.core.next(arglist__4542);
var k = cljs.core.first(arglist__4542);
var ks = cljs.core.rest(arglist__4542);
return G__4520__delegate(elem, k, ks);
});
G__4520.cljs$core$IFn$_invoke$arity$variadic = G__4520__delegate;
return G__4520;
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
var G__4544 = dommy.template.__GT_node_like.call(null,elem);
G__4544.style.display = ((show_QMARK_)?"":"none");
return G__4544;
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
var G__4546 = dommy.template.__GT_node_like.call(null,elem);
dommy.attrs.toggle_BANG_.call(null,G__4546,false);
return G__4546;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){
var G__4548 = dommy.template.__GT_node_like.call(null,elem);
dommy.attrs.toggle_BANG_.call(null,G__4548,true);
return G__4548;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){
return cljs.core.js__GT_clj.call(null,(function (){var G__4550 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();
(G__4550["constructor"] = Object);
return G__4550;
})(),"\uFDD0:keywordize-keys",true);
});
