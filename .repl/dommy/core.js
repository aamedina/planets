goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.template');
goog.require('dommy.attrs');
goog.require('dommy.utils');
goog.require('clojure.string');
dommy.core.has_class_QMARK_ = dommy.attrs.has_class_QMARK_;
dommy.core.add_class_BANG_ = dommy.attrs.add_class_BANG_;
dommy.core.remove_class_BANG_ = dommy.attrs.remove_class_BANG_;
dommy.core.toggle_class_BANG_ = dommy.attrs.toggle_class_BANG_;
dommy.core.set_attr_BANG_ = dommy.attrs.set_attr_BANG_;
dommy.core.set_style_BANG_ = dommy.attrs.set_style_BANG_;
dommy.core.set_px_BANG_ = dommy.attrs.set_px_BANG_;
dommy.core.px = dommy.attrs.px;
dommy.core.style_str = dommy.attrs.style_str;
dommy.core.style = dommy.attrs.style;
dommy.core.remove_attr_BANG_ = dommy.attrs.remove_attr_BANG_;
dommy.core.attr = dommy.attrs.attr;
dommy.core.hidden_QMARK_ = dommy.attrs.hidden_QMARK_;
dommy.core.toggle_BANG_ = dommy.attrs.toggle_BANG_;
dommy.core.hide_BANG_ = dommy.attrs.hide_BANG_;
dommy.core.show_BANG_ = dommy.attrs.show_BANG_;
dommy.core.bounding_client_rect = dommy.attrs.bounding_client_rect;
dommy.core.dissoc_in = dommy.utils.dissoc_in;
dommy.core.__GT_Array = dommy.utils.__GT_Array;
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
elem__$1.innerHTML = html;
return elem__$1;
});
dommy.core.html = (function html(elem){
return dommy.template.__GT_node_like.call(null,elem).innerHTML;
});
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var prop = (cljs.core.truth_(elem__$1.textContent)?"textContent":"innerText");
(elem__$1[prop] = text);
return elem__$1;
});
dommy.core.text = (function text(elem){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var or__3943__auto__ = elem__$1.textContent;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return elem__$1.innerText;
}
});
dommy.core.value = (function value(elem){
return dommy.template.__GT_node_like.call(null,elem).value;
});
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
elem__$1.value = value;
return elem__$1;
});
/**
* append `child` to `parent`. 'parent' and 'child' should be node-like
* (work with dommy.template/->node-like). The node-like projection
* of parent is returned after appending child.
* @param {...*} var_args
*/
dommy.core.append_BANG_ = (function() {
var append_BANG_ = null;
var append_BANG___2 = (function (parent,child){
var G__8463 = dommy.template.__GT_node_like.call(null,parent);
G__8463.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__8463;
});
var append_BANG___3 = (function() { 
var G__8468__delegate = function (parent,child,more_children){
var parent__$1 = dommy.template.__GT_node_like.call(null,parent);
var seq__8464_8469 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__8465_8470 = null;
var count__8466_8471 = 0;
var i__8467_8472 = 0;
while(true){
if((i__8467_8472 < count__8466_8471))
{var c_8473 = cljs.core._nth.call(null,chunk__8465_8470,i__8467_8472);
append_BANG_.call(null,parent__$1,c_8473);
{
var G__8474 = seq__8464_8469;
var G__8475 = chunk__8465_8470;
var G__8476 = count__8466_8471;
var G__8477 = (i__8467_8472 + 1);
seq__8464_8469 = G__8474;
chunk__8465_8470 = G__8475;
count__8466_8471 = G__8476;
i__8467_8472 = G__8477;
continue;
}
} else
{var temp__4092__auto___8478 = cljs.core.seq.call(null,seq__8464_8469);
if(temp__4092__auto___8478)
{var seq__8464_8479__$1 = temp__4092__auto___8478;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8464_8479__$1))
{var c__7066__auto___8480 = cljs.core.chunk_first.call(null,seq__8464_8479__$1);
{
var G__8481 = cljs.core.chunk_rest.call(null,seq__8464_8479__$1);
var G__8482 = c__7066__auto___8480;
var G__8483 = cljs.core.count.call(null,c__7066__auto___8480);
var G__8484 = 0;
seq__8464_8469 = G__8481;
chunk__8465_8470 = G__8482;
count__8466_8471 = G__8483;
i__8467_8472 = G__8484;
continue;
}
} else
{var c_8485 = cljs.core.first.call(null,seq__8464_8479__$1);
append_BANG_.call(null,parent__$1,c_8485);
{
var G__8486 = cljs.core.next.call(null,seq__8464_8479__$1);
var G__8487 = null;
var G__8488 = 0;
var G__8489 = 0;
seq__8464_8469 = G__8486;
chunk__8465_8470 = G__8487;
count__8466_8471 = G__8488;
i__8467_8472 = G__8489;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__8468 = function (parent,child,var_args){
var more_children = null;
if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8468__delegate.call(this, parent, child, more_children);
};
G__8468.cljs$lang$maxFixedArity = 2;
G__8468.cljs$lang$applyTo = (function (arglist__8490){
var parent = cljs.core.first(arglist__8490);
arglist__8490 = cljs.core.next(arglist__8490);
var child = cljs.core.first(arglist__8490);
var more_children = cljs.core.rest(arglist__8490);
return G__8468__delegate(parent, child, more_children);
});
G__8468.cljs$core$IFn$_invoke$arity$variadic = G__8468__delegate;
return G__8468;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
return append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
append_BANG_.cljs$lang$maxFixedArity = 2;
append_BANG_.cljs$lang$applyTo = append_BANG___3.cljs$lang$applyTo;
append_BANG_.cljs$core$IFn$_invoke$arity$2 = append_BANG___2;
append_BANG_.cljs$core$IFn$_invoke$arity$variadic = append_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return append_BANG_;
})()
;
/**
* prepend `child` to `parent`, both node-like
* return ->node-like projection of `parent`
* @param {...*} var_args
*/
dommy.core.prepend_BANG_ = (function() {
var prepend_BANG_ = null;
var prepend_BANG___2 = (function (parent,child){
var G__8496 = dommy.template.__GT_node_like.call(null,parent);
G__8496.insertBefore(dommy.template.__GT_node_like.call(null,child),parent.firstChild);
return G__8496;
});
var prepend_BANG___3 = (function() { 
var G__8501__delegate = function (parent,child,more_children){
var parent__$1 = dommy.template.__GT_node_like.call(null,parent);
var seq__8497_8502 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__8498_8503 = null;
var count__8499_8504 = 0;
var i__8500_8505 = 0;
while(true){
if((i__8500_8505 < count__8499_8504))
{var c_8506 = cljs.core._nth.call(null,chunk__8498_8503,i__8500_8505);
prepend_BANG_.call(null,parent__$1,c_8506);
{
var G__8507 = seq__8497_8502;
var G__8508 = chunk__8498_8503;
var G__8509 = count__8499_8504;
var G__8510 = (i__8500_8505 + 1);
seq__8497_8502 = G__8507;
chunk__8498_8503 = G__8508;
count__8499_8504 = G__8509;
i__8500_8505 = G__8510;
continue;
}
} else
{var temp__4092__auto___8511 = cljs.core.seq.call(null,seq__8497_8502);
if(temp__4092__auto___8511)
{var seq__8497_8512__$1 = temp__4092__auto___8511;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8497_8512__$1))
{var c__7066__auto___8513 = cljs.core.chunk_first.call(null,seq__8497_8512__$1);
{
var G__8514 = cljs.core.chunk_rest.call(null,seq__8497_8512__$1);
var G__8515 = c__7066__auto___8513;
var G__8516 = cljs.core.count.call(null,c__7066__auto___8513);
var G__8517 = 0;
seq__8497_8502 = G__8514;
chunk__8498_8503 = G__8515;
count__8499_8504 = G__8516;
i__8500_8505 = G__8517;
continue;
}
} else
{var c_8518 = cljs.core.first.call(null,seq__8497_8512__$1);
prepend_BANG_.call(null,parent__$1,c_8518);
{
var G__8519 = cljs.core.next.call(null,seq__8497_8512__$1);
var G__8520 = null;
var G__8521 = 0;
var G__8522 = 0;
seq__8497_8502 = G__8519;
chunk__8498_8503 = G__8520;
count__8499_8504 = G__8521;
i__8500_8505 = G__8522;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__8501 = function (parent,child,var_args){
var more_children = null;
if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8501__delegate.call(this, parent, child, more_children);
};
G__8501.cljs$lang$maxFixedArity = 2;
G__8501.cljs$lang$applyTo = (function (arglist__8523){
var parent = cljs.core.first(arglist__8523);
arglist__8523 = cljs.core.next(arglist__8523);
var child = cljs.core.first(arglist__8523);
var more_children = cljs.core.rest(arglist__8523);
return G__8501__delegate(parent, child, more_children);
});
G__8501.cljs$core$IFn$_invoke$arity$variadic = G__8501__delegate;
return G__8501;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
return prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prepend_BANG_.cljs$lang$maxFixedArity = 2;
prepend_BANG_.cljs$lang$applyTo = prepend_BANG___3.cljs$lang$applyTo;
prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = prepend_BANG___2;
prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return prepend_BANG_;
})()
;
/**
* insert `node` before `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){
var actual_node = dommy.template.__GT_node_like.call(null,elem);
var other__$1 = dommy.template.__GT_node_like.call(null,other);
if(cljs.core.truth_(other__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"other","other",-1534461751,null)),cljs.core.hash_map("\uFDD0:line",102,"\uFDD0:column",13))))].join('')));
}
other__$1.parentNode.insertBefore(actual_node,other__$1);
return actual_node;
});
/**
* insert `node` after `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){
var actual_node = dommy.template.__GT_node_like.call(null,elem);
var other__$1 = dommy.template.__GT_node_like.call(null,other);
var parent = other__$1.parentNode;
var temp__4090__auto___8524 = other__$1.nextSibling;
if(cljs.core.truth_(temp__4090__auto___8524))
{var next_8525 = temp__4090__auto___8524;
parent.insertBefore(actual_node,next_8525);
} else
{parent.appendChild(actual_node);
}
return actual_node;
});
/**
* replace `elem` with `new`, both node-like, return node-like projection of new.
* node-like projection of elem must have parent.
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){
var new$__$1 = dommy.template.__GT_node_like.call(null,new$);
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
if(cljs.core.truth_(elem__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"elem","elem",-1637415608,null)),cljs.core.hash_map("\uFDD0:line",124,"\uFDD0:column",13))))].join('')));
}
elem__$1.parentNode.replaceChild(new$__$1,elem__$1);
return new$__$1;
});
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){
var G__8527 = dommy.template.__GT_node_like.call(null,parent);
G__8527.innerHTML = "";
dommy.core.append_BANG_.call(null,G__8527,node_like);
return G__8527;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var G__8529 = elem__$1.parentNode;
G__8529.removeChild(elem__$1);
return G__8529;
});
dommy.core.selector = (function selector(data){
if(cljs.core.coll_QMARK_.call(null,data))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,selector,data));
} else
{if((function (){var or__3943__auto__ = cljs.core.string_QMARK_.call(null,data);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core.keyword_QMARK_.call(null,data);
}
})())
{return cljs.core.name.call(null,data);
} else
{return null;
}
}
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__8530_SHARP_){
return p1__8530_SHARP_.parentNode;
}),dommy.template.__GT_node_like.call(null,elem)));
});
/**
* returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){
return matches_pred.call(null,document,selector);
});
var matches_pred__2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,dommy.template.__GT_node_like.call(null,base)).querySelectorAll(dommy.core.selector.call(null,selector)));
return (function (elem){
return (matches.indexOf(elem) >= 0);
});
});
matches_pred = function(base,selector){
switch(arguments.length){
case 1:
return matches_pred__1.call(this,base);
case 2:
return matches_pred__2.call(this,base,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
matches_pred.cljs$core$IFn$_invoke$arity$1 = matches_pred__1;
matches_pred.cljs$core$IFn$_invoke$arity$2 = matches_pred__2;
return matches_pred;
})()
;
/**
* closest ancestor of `node` (up to `base`, if provided)
* that matches `selector`
*/
dommy.core.closest = (function() {
var closest = null;
var closest__2 = (function (elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,selector),dommy.core.ancestor_nodes.call(null,dommy.template.__GT_node_like.call(null,elem))));
});
var closest__3 = (function (base,elem,selector){
var base__$1 = dommy.template.__GT_node_like.call(null,base);
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__8531_SHARP_){
return !((p1__8531_SHARP_ === base__$1));
}),dommy.core.ancestor_nodes.call(null,elem__$1))));
});
closest = function(base,elem,selector){
switch(arguments.length){
case 2:
return closest__2.call(this,base,elem);
case 3:
return closest__3.call(this,base,elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
closest.cljs$core$IFn$_invoke$arity$2 = closest__2;
closest.cljs$core$IFn$_invoke$arity$3 = closest__3;
return closest;
})()
;
/**
* is `descendant` a descendant of `ancestor`?
*/
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){
var descendant__$1 = dommy.template.__GT_node_like.call(null,descendant);
var ancestor__$1 = dommy.template.__GT_node_like.call(null,ancestor);
if(cljs.core.truth_(ancestor__$1.contains))
{return ancestor__$1.contains(descendant__$1);
} else
{if(cljs.core.truth_(ancestor__$1.compareDocumentPosition))
{return ((ancestor__$1.compareDocumentPosition(descendant__$1) & (1 << 4)) != 0);
} else
{return null;
}
}
});
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__8532){
var vec__8533 = p__8532;
var special_mouse_event = cljs.core.nth.call(null,vec__8533,0,null);
var real_mouse_event = cljs.core.nth.call(null,vec__8533,1,null);
return cljs.core.PersistentVector.fromArray([special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__3943__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__3941__auto__ = related_target;
if(cljs.core.truth_(and__3941__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__3941__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
})], true)], true);
}),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:mouseenter","\uFDD0:mouseover","\uFDD0:mouseleave","\uFDD0:mouseout"], true)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){
return (function (event){
var temp__4092__auto__ = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);
if(cljs.core.truth_(temp__4092__auto__))
{var selected_target = temp__4092__auto__;
event.selectedTarget = selected_target;
return f.call(null,event);
} else
{return null;
}
});
});
/**
* Returns a nested map of event listeners on `nodes`
*/
dommy.core.event_listeners = (function event_listeners(elem){
var or__3943__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.ObjMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;
if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return update_event_listeners_BANG___delegate.call(this, elem, f, args);
};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__8535){
var elem = cljs.core.first(arglist__8535);
arglist__8535 = cljs.core.next(arglist__8535);
var f = cljs.core.first(arglist__8535);
var args = cljs.core.rest(arglist__8535);
return update_event_listeners_BANG___delegate(elem, f, args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__8534_SHARP_){
return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__8534_SHARP_));
}),cljs.core.rest).call(null,elem_sel);
} else
{return cljs.core.PersistentVector.fromArray([dommy.template.__GT_node_like.call(null,elem_sel),null], true);
}
});
/**
* Adds `f` as a listener for events of type `event-type` on
* `elem-sel`, which must either be a DOM node, or a sequence
* whose first item is a DOM node.
* 
* In other words, the call to `listen!` can take two forms:
* 
* If `elem-sel` is a DOM node, i.e., you're doing something like:
* 
* (listen! elem :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on the `elem`.
* 
* If `elem-sel` is a sequence:
* 
* (listen! [elem :.selector.for :.some.descendants] :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on descendants of `elem` that match the selector
* 
* Also accepts any number of event-type and handler pairs for setting
* multiple listeners at once:
* 
* (listen! some-elem :click click-handler :hover hover-handler)
* @param {...*} var_args
*/
dommy.core.listen_BANG_ = (function() { 
var listen_BANG___delegate = function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)),cljs.core.hash_map("\uFDD0:line",256,"\uFDD0:column",18))),cljs.core.hash_map("\uFDD0:line",256,"\uFDD0:column",11))))].join('')));
}
var vec__8559_8582 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_8583 = cljs.core.nth.call(null,vec__8559_8582,0,null);
var selector_8584 = cljs.core.nth.call(null,vec__8559_8582,1,null);
var seq__8560_8585 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));
var chunk__8567_8586 = null;
var count__8568_8587 = 0;
var i__8569_8588 = 0;
while(true){
if((i__8569_8588 < count__8568_8587))
{var vec__8576_8589 = cljs.core._nth.call(null,chunk__8567_8586,i__8569_8588);
var orig_type_8590 = cljs.core.nth.call(null,vec__8576_8589,0,null);
var f_8591 = cljs.core.nth.call(null,vec__8576_8589,1,null);
var seq__8570_8592 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_8590,cljs.core.PersistentArrayMap.fromArray([orig_type_8590,cljs.core.identity], true)));
var chunk__8572_8593 = null;
var count__8573_8594 = 0;
var i__8574_8595 = 0;
while(true){
if((i__8574_8595 < count__8573_8594))
{var vec__8577_8596 = cljs.core._nth.call(null,chunk__8572_8593,i__8574_8595);
var actual_type_8597 = cljs.core.nth.call(null,vec__8577_8596,0,null);
var factory_8598 = cljs.core.nth.call(null,vec__8577_8596,1,null);
var canonical_f_8599 = (cljs.core.truth_(selector_8584)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8583,selector_8584):cljs.core.identity).call(null,factory_8598.call(null,f_8591));
dommy.core.update_event_listeners_BANG_.call(null,elem_8583,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_8584,actual_type_8597,f_8591], true),canonical_f_8599);
if(cljs.core.truth_(elem_8583.addEventListener))
{elem_8583.addEventListener(cljs.core.name.call(null,actual_type_8597),canonical_f_8599);
} else
{elem_8583.attachEvent(cljs.core.name.call(null,actual_type_8597),canonical_f_8599);
}
{
var G__8600 = seq__8570_8592;
var G__8601 = chunk__8572_8593;
var G__8602 = count__8573_8594;
var G__8603 = (i__8574_8595 + 1);
seq__8570_8592 = G__8600;
chunk__8572_8593 = G__8601;
count__8573_8594 = G__8602;
i__8574_8595 = G__8603;
continue;
}
} else
{var temp__4092__auto___8604 = cljs.core.seq.call(null,seq__8570_8592);
if(temp__4092__auto___8604)
{var seq__8570_8605__$1 = temp__4092__auto___8604;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8570_8605__$1))
{var c__7066__auto___8606 = cljs.core.chunk_first.call(null,seq__8570_8605__$1);
{
var G__8607 = cljs.core.chunk_rest.call(null,seq__8570_8605__$1);
var G__8608 = c__7066__auto___8606;
var G__8609 = cljs.core.count.call(null,c__7066__auto___8606);
var G__8610 = 0;
seq__8570_8592 = G__8607;
chunk__8572_8593 = G__8608;
count__8573_8594 = G__8609;
i__8574_8595 = G__8610;
continue;
}
} else
{var vec__8578_8611 = cljs.core.first.call(null,seq__8570_8605__$1);
var actual_type_8612 = cljs.core.nth.call(null,vec__8578_8611,0,null);
var factory_8613 = cljs.core.nth.call(null,vec__8578_8611,1,null);
var canonical_f_8614 = (cljs.core.truth_(selector_8584)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8583,selector_8584):cljs.core.identity).call(null,factory_8613.call(null,f_8591));
dommy.core.update_event_listeners_BANG_.call(null,elem_8583,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_8584,actual_type_8612,f_8591], true),canonical_f_8614);
if(cljs.core.truth_(elem_8583.addEventListener))
{elem_8583.addEventListener(cljs.core.name.call(null,actual_type_8612),canonical_f_8614);
} else
{elem_8583.attachEvent(cljs.core.name.call(null,actual_type_8612),canonical_f_8614);
}
{
var G__8615 = cljs.core.next.call(null,seq__8570_8605__$1);
var G__8616 = null;
var G__8617 = 0;
var G__8618 = 0;
seq__8570_8592 = G__8615;
chunk__8572_8593 = G__8616;
count__8573_8594 = G__8617;
i__8574_8595 = G__8618;
continue;
}
}
} else
{}
}
break;
}
{
var G__8619 = seq__8560_8585;
var G__8620 = chunk__8567_8586;
var G__8621 = count__8568_8587;
var G__8622 = (i__8569_8588 + 1);
seq__8560_8585 = G__8619;
chunk__8567_8586 = G__8620;
count__8568_8587 = G__8621;
i__8569_8588 = G__8622;
continue;
}
} else
{var temp__4092__auto___8623 = cljs.core.seq.call(null,seq__8560_8585);
if(temp__4092__auto___8623)
{var seq__8560_8624__$1 = temp__4092__auto___8623;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8560_8624__$1))
{var c__7066__auto___8625 = cljs.core.chunk_first.call(null,seq__8560_8624__$1);
{
var G__8626 = cljs.core.chunk_rest.call(null,seq__8560_8624__$1);
var G__8627 = c__7066__auto___8625;
var G__8628 = cljs.core.count.call(null,c__7066__auto___8625);
var G__8629 = 0;
seq__8560_8585 = G__8626;
chunk__8567_8586 = G__8627;
count__8568_8587 = G__8628;
i__8569_8588 = G__8629;
continue;
}
} else
{var vec__8579_8630 = cljs.core.first.call(null,seq__8560_8624__$1);
var orig_type_8631 = cljs.core.nth.call(null,vec__8579_8630,0,null);
var f_8632 = cljs.core.nth.call(null,vec__8579_8630,1,null);
var seq__8561_8633 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_8631,cljs.core.PersistentArrayMap.fromArray([orig_type_8631,cljs.core.identity], true)));
var chunk__8563_8634 = null;
var count__8564_8635 = 0;
var i__8565_8636 = 0;
while(true){
if((i__8565_8636 < count__8564_8635))
{var vec__8580_8637 = cljs.core._nth.call(null,chunk__8563_8634,i__8565_8636);
var actual_type_8638 = cljs.core.nth.call(null,vec__8580_8637,0,null);
var factory_8639 = cljs.core.nth.call(null,vec__8580_8637,1,null);
var canonical_f_8640 = (cljs.core.truth_(selector_8584)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8583,selector_8584):cljs.core.identity).call(null,factory_8639.call(null,f_8632));
dommy.core.update_event_listeners_BANG_.call(null,elem_8583,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_8584,actual_type_8638,f_8632], true),canonical_f_8640);
if(cljs.core.truth_(elem_8583.addEventListener))
{elem_8583.addEventListener(cljs.core.name.call(null,actual_type_8638),canonical_f_8640);
} else
{elem_8583.attachEvent(cljs.core.name.call(null,actual_type_8638),canonical_f_8640);
}
{
var G__8641 = seq__8561_8633;
var G__8642 = chunk__8563_8634;
var G__8643 = count__8564_8635;
var G__8644 = (i__8565_8636 + 1);
seq__8561_8633 = G__8641;
chunk__8563_8634 = G__8642;
count__8564_8635 = G__8643;
i__8565_8636 = G__8644;
continue;
}
} else
{var temp__4092__auto___8645__$1 = cljs.core.seq.call(null,seq__8561_8633);
if(temp__4092__auto___8645__$1)
{var seq__8561_8646__$1 = temp__4092__auto___8645__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8561_8646__$1))
{var c__7066__auto___8647 = cljs.core.chunk_first.call(null,seq__8561_8646__$1);
{
var G__8648 = cljs.core.chunk_rest.call(null,seq__8561_8646__$1);
var G__8649 = c__7066__auto___8647;
var G__8650 = cljs.core.count.call(null,c__7066__auto___8647);
var G__8651 = 0;
seq__8561_8633 = G__8648;
chunk__8563_8634 = G__8649;
count__8564_8635 = G__8650;
i__8565_8636 = G__8651;
continue;
}
} else
{var vec__8581_8652 = cljs.core.first.call(null,seq__8561_8646__$1);
var actual_type_8653 = cljs.core.nth.call(null,vec__8581_8652,0,null);
var factory_8654 = cljs.core.nth.call(null,vec__8581_8652,1,null);
var canonical_f_8655 = (cljs.core.truth_(selector_8584)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8583,selector_8584):cljs.core.identity).call(null,factory_8654.call(null,f_8632));
dommy.core.update_event_listeners_BANG_.call(null,elem_8583,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_8584,actual_type_8653,f_8632], true),canonical_f_8655);
if(cljs.core.truth_(elem_8583.addEventListener))
{elem_8583.addEventListener(cljs.core.name.call(null,actual_type_8653),canonical_f_8655);
} else
{elem_8583.attachEvent(cljs.core.name.call(null,actual_type_8653),canonical_f_8655);
}
{
var G__8656 = cljs.core.next.call(null,seq__8561_8646__$1);
var G__8657 = null;
var G__8658 = 0;
var G__8659 = 0;
seq__8561_8633 = G__8656;
chunk__8563_8634 = G__8657;
count__8564_8635 = G__8658;
i__8565_8636 = G__8659;
continue;
}
}
} else
{}
}
break;
}
{
var G__8660 = cljs.core.next.call(null,seq__8560_8624__$1);
var G__8661 = null;
var G__8662 = 0;
var G__8663 = 0;
seq__8560_8585 = G__8660;
chunk__8567_8586 = G__8661;
count__8568_8587 = G__8662;
i__8569_8588 = G__8663;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;
if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return listen_BANG___delegate.call(this, elem_sel, type_fs);
};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__8664){
var elem_sel = cljs.core.first(arglist__8664);
var type_fs = cljs.core.rest(arglist__8664);
return listen_BANG___delegate(elem_sel, type_fs);
});
listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_BANG___delegate;
return listen_BANG_;
})()
;
/**
* Removes event listener for the element defined in `elem-sel`,
* which is the same format as listen!.
* 
* The following forms are allowed, and will remove all handlers
* that match the parameters passed in:
* 
* (unlisten! [elem :.selector] :click event-listener)
* 
* (unlisten! [elem :.selector]
* :click event-listener
* :mouseover other-event-listener)
* @param {...*} var_args
*/
dommy.core.unlisten_BANG_ = (function() { 
var unlisten_BANG___delegate = function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)),cljs.core.hash_map("\uFDD0:line",285,"\uFDD0:column",18))),cljs.core.hash_map("\uFDD0:line",285,"\uFDD0:column",11))))].join('')));
}
var vec__8688_8711 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_8712 = cljs.core.nth.call(null,vec__8688_8711,0,null);
var selector_8713 = cljs.core.nth.call(null,vec__8688_8711,1,null);
var seq__8689_8714 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));
var chunk__8696_8715 = null;
var count__8697_8716 = 0;
var i__8698_8717 = 0;
while(true){
if((i__8698_8717 < count__8697_8716))
{var vec__8705_8718 = cljs.core._nth.call(null,chunk__8696_8715,i__8698_8717);
var orig_type_8719 = cljs.core.nth.call(null,vec__8705_8718,0,null);
var f_8720 = cljs.core.nth.call(null,vec__8705_8718,1,null);
var seq__8699_8721 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_8719,cljs.core.PersistentArrayMap.fromArray([orig_type_8719,cljs.core.identity], true)));
var chunk__8701_8722 = null;
var count__8702_8723 = 0;
var i__8703_8724 = 0;
while(true){
if((i__8703_8724 < count__8702_8723))
{var vec__8706_8725 = cljs.core._nth.call(null,chunk__8701_8722,i__8703_8724);
var actual_type_8726 = cljs.core.nth.call(null,vec__8706_8725,0,null);
var __8727 = cljs.core.nth.call(null,vec__8706_8725,1,null);
var keys_8728 = cljs.core.PersistentVector.fromArray([selector_8713,actual_type_8726,f_8720], true);
var canonical_f_8729 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_8712),keys_8728);
dommy.core.update_event_listeners_BANG_.call(null,elem_8712,dommy.utils.dissoc_in,keys_8728);
if(cljs.core.truth_(elem_8712.removeEventListener))
{elem_8712.removeEventListener(cljs.core.name.call(null,actual_type_8726),canonical_f_8729);
} else
{elem_8712.detachEvent(cljs.core.name.call(null,actual_type_8726),canonical_f_8729);
}
{
var G__8730 = seq__8699_8721;
var G__8731 = chunk__8701_8722;
var G__8732 = count__8702_8723;
var G__8733 = (i__8703_8724 + 1);
seq__8699_8721 = G__8730;
chunk__8701_8722 = G__8731;
count__8702_8723 = G__8732;
i__8703_8724 = G__8733;
continue;
}
} else
{var temp__4092__auto___8734 = cljs.core.seq.call(null,seq__8699_8721);
if(temp__4092__auto___8734)
{var seq__8699_8735__$1 = temp__4092__auto___8734;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8699_8735__$1))
{var c__7066__auto___8736 = cljs.core.chunk_first.call(null,seq__8699_8735__$1);
{
var G__8737 = cljs.core.chunk_rest.call(null,seq__8699_8735__$1);
var G__8738 = c__7066__auto___8736;
var G__8739 = cljs.core.count.call(null,c__7066__auto___8736);
var G__8740 = 0;
seq__8699_8721 = G__8737;
chunk__8701_8722 = G__8738;
count__8702_8723 = G__8739;
i__8703_8724 = G__8740;
continue;
}
} else
{var vec__8707_8741 = cljs.core.first.call(null,seq__8699_8735__$1);
var actual_type_8742 = cljs.core.nth.call(null,vec__8707_8741,0,null);
var __8743 = cljs.core.nth.call(null,vec__8707_8741,1,null);
var keys_8744 = cljs.core.PersistentVector.fromArray([selector_8713,actual_type_8742,f_8720], true);
var canonical_f_8745 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_8712),keys_8744);
dommy.core.update_event_listeners_BANG_.call(null,elem_8712,dommy.utils.dissoc_in,keys_8744);
if(cljs.core.truth_(elem_8712.removeEventListener))
{elem_8712.removeEventListener(cljs.core.name.call(null,actual_type_8742),canonical_f_8745);
} else
{elem_8712.detachEvent(cljs.core.name.call(null,actual_type_8742),canonical_f_8745);
}
{
var G__8746 = cljs.core.next.call(null,seq__8699_8735__$1);
var G__8747 = null;
var G__8748 = 0;
var G__8749 = 0;
seq__8699_8721 = G__8746;
chunk__8701_8722 = G__8747;
count__8702_8723 = G__8748;
i__8703_8724 = G__8749;
continue;
}
}
} else
{}
}
break;
}
{
var G__8750 = seq__8689_8714;
var G__8751 = chunk__8696_8715;
var G__8752 = count__8697_8716;
var G__8753 = (i__8698_8717 + 1);
seq__8689_8714 = G__8750;
chunk__8696_8715 = G__8751;
count__8697_8716 = G__8752;
i__8698_8717 = G__8753;
continue;
}
} else
{var temp__4092__auto___8754 = cljs.core.seq.call(null,seq__8689_8714);
if(temp__4092__auto___8754)
{var seq__8689_8755__$1 = temp__4092__auto___8754;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8689_8755__$1))
{var c__7066__auto___8756 = cljs.core.chunk_first.call(null,seq__8689_8755__$1);
{
var G__8757 = cljs.core.chunk_rest.call(null,seq__8689_8755__$1);
var G__8758 = c__7066__auto___8756;
var G__8759 = cljs.core.count.call(null,c__7066__auto___8756);
var G__8760 = 0;
seq__8689_8714 = G__8757;
chunk__8696_8715 = G__8758;
count__8697_8716 = G__8759;
i__8698_8717 = G__8760;
continue;
}
} else
{var vec__8708_8761 = cljs.core.first.call(null,seq__8689_8755__$1);
var orig_type_8762 = cljs.core.nth.call(null,vec__8708_8761,0,null);
var f_8763 = cljs.core.nth.call(null,vec__8708_8761,1,null);
var seq__8690_8764 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_8762,cljs.core.PersistentArrayMap.fromArray([orig_type_8762,cljs.core.identity], true)));
var chunk__8692_8765 = null;
var count__8693_8766 = 0;
var i__8694_8767 = 0;
while(true){
if((i__8694_8767 < count__8693_8766))
{var vec__8709_8768 = cljs.core._nth.call(null,chunk__8692_8765,i__8694_8767);
var actual_type_8769 = cljs.core.nth.call(null,vec__8709_8768,0,null);
var __8770 = cljs.core.nth.call(null,vec__8709_8768,1,null);
var keys_8771 = cljs.core.PersistentVector.fromArray([selector_8713,actual_type_8769,f_8763], true);
var canonical_f_8772 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_8712),keys_8771);
dommy.core.update_event_listeners_BANG_.call(null,elem_8712,dommy.utils.dissoc_in,keys_8771);
if(cljs.core.truth_(elem_8712.removeEventListener))
{elem_8712.removeEventListener(cljs.core.name.call(null,actual_type_8769),canonical_f_8772);
} else
{elem_8712.detachEvent(cljs.core.name.call(null,actual_type_8769),canonical_f_8772);
}
{
var G__8773 = seq__8690_8764;
var G__8774 = chunk__8692_8765;
var G__8775 = count__8693_8766;
var G__8776 = (i__8694_8767 + 1);
seq__8690_8764 = G__8773;
chunk__8692_8765 = G__8774;
count__8693_8766 = G__8775;
i__8694_8767 = G__8776;
continue;
}
} else
{var temp__4092__auto___8777__$1 = cljs.core.seq.call(null,seq__8690_8764);
if(temp__4092__auto___8777__$1)
{var seq__8690_8778__$1 = temp__4092__auto___8777__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8690_8778__$1))
{var c__7066__auto___8779 = cljs.core.chunk_first.call(null,seq__8690_8778__$1);
{
var G__8780 = cljs.core.chunk_rest.call(null,seq__8690_8778__$1);
var G__8781 = c__7066__auto___8779;
var G__8782 = cljs.core.count.call(null,c__7066__auto___8779);
var G__8783 = 0;
seq__8690_8764 = G__8780;
chunk__8692_8765 = G__8781;
count__8693_8766 = G__8782;
i__8694_8767 = G__8783;
continue;
}
} else
{var vec__8710_8784 = cljs.core.first.call(null,seq__8690_8778__$1);
var actual_type_8785 = cljs.core.nth.call(null,vec__8710_8784,0,null);
var __8786 = cljs.core.nth.call(null,vec__8710_8784,1,null);
var keys_8787 = cljs.core.PersistentVector.fromArray([selector_8713,actual_type_8785,f_8763], true);
var canonical_f_8788 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_8712),keys_8787);
dommy.core.update_event_listeners_BANG_.call(null,elem_8712,dommy.utils.dissoc_in,keys_8787);
if(cljs.core.truth_(elem_8712.removeEventListener))
{elem_8712.removeEventListener(cljs.core.name.call(null,actual_type_8785),canonical_f_8788);
} else
{elem_8712.detachEvent(cljs.core.name.call(null,actual_type_8785),canonical_f_8788);
}
{
var G__8789 = cljs.core.next.call(null,seq__8690_8778__$1);
var G__8790 = null;
var G__8791 = 0;
var G__8792 = 0;
seq__8690_8764 = G__8789;
chunk__8692_8765 = G__8790;
count__8693_8766 = G__8791;
i__8694_8767 = G__8792;
continue;
}
}
} else
{}
}
break;
}
{
var G__8793 = cljs.core.next.call(null,seq__8689_8755__$1);
var G__8794 = null;
var G__8795 = 0;
var G__8796 = 0;
seq__8689_8714 = G__8793;
chunk__8696_8715 = G__8794;
count__8697_8716 = G__8795;
i__8698_8717 = G__8796;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;
if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return unlisten_BANG___delegate.call(this, elem_sel, type_fs);
};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__8797){
var elem_sel = cljs.core.first(arglist__8797);
var type_fs = cljs.core.rest(arglist__8797);
return unlisten_BANG___delegate(elem_sel, type_fs);
});
unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = unlisten_BANG___delegate;
return unlisten_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.core.listen_once_BANG_ = (function() { 
var listen_once_BANG___delegate = function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)),cljs.core.hash_map("\uFDD0:line",300,"\uFDD0:column",18))),cljs.core.hash_map("\uFDD0:line",300,"\uFDD0:column",11))))].join('')));
}
var vec__8805_8812 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_8813 = cljs.core.nth.call(null,vec__8805_8812,0,null);
var selector_8814 = cljs.core.nth.call(null,vec__8805_8812,1,null);
var seq__8806_8815 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));
var chunk__8807_8816 = null;
var count__8808_8817 = 0;
var i__8809_8818 = 0;
while(true){
if((i__8809_8818 < count__8808_8817))
{var vec__8810_8819 = cljs.core._nth.call(null,chunk__8807_8816,i__8809_8818);
var type_8820 = cljs.core.nth.call(null,vec__8810_8819,0,null);
var f_8821 = cljs.core.nth.call(null,vec__8810_8819,1,null);
dommy.core.listen_BANG_.call(null,elem_sel,type_8820,((function (seq__8806_8815,chunk__8807_8816,count__8808_8817,i__8809_8818,vec__8810_8819,type_8820,f_8821){
return (function this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_8820,this_fn);
return f_8821.call(null,e);
});})(seq__8806_8815,chunk__8807_8816,count__8808_8817,i__8809_8818,vec__8810_8819,type_8820,f_8821))
);
{
var G__8822 = seq__8806_8815;
var G__8823 = chunk__8807_8816;
var G__8824 = count__8808_8817;
var G__8825 = (i__8809_8818 + 1);
seq__8806_8815 = G__8822;
chunk__8807_8816 = G__8823;
count__8808_8817 = G__8824;
i__8809_8818 = G__8825;
continue;
}
} else
{var temp__4092__auto___8826 = cljs.core.seq.call(null,seq__8806_8815);
if(temp__4092__auto___8826)
{var seq__8806_8827__$1 = temp__4092__auto___8826;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8806_8827__$1))
{var c__7066__auto___8828 = cljs.core.chunk_first.call(null,seq__8806_8827__$1);
{
var G__8829 = cljs.core.chunk_rest.call(null,seq__8806_8827__$1);
var G__8830 = c__7066__auto___8828;
var G__8831 = cljs.core.count.call(null,c__7066__auto___8828);
var G__8832 = 0;
seq__8806_8815 = G__8829;
chunk__8807_8816 = G__8830;
count__8808_8817 = G__8831;
i__8809_8818 = G__8832;
continue;
}
} else
{var vec__8811_8833 = cljs.core.first.call(null,seq__8806_8827__$1);
var type_8834 = cljs.core.nth.call(null,vec__8811_8833,0,null);
var f_8835 = cljs.core.nth.call(null,vec__8811_8833,1,null);
dommy.core.listen_BANG_.call(null,elem_sel,type_8834,((function (seq__8806_8815,chunk__8807_8816,count__8808_8817,i__8809_8818,vec__8811_8833,type_8834,f_8835,seq__8806_8827__$1,temp__4092__auto___8826){
return (function this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_8834,this_fn);
return f_8835.call(null,e);
});})(seq__8806_8815,chunk__8807_8816,count__8808_8817,i__8809_8818,vec__8811_8833,type_8834,f_8835,seq__8806_8827__$1,temp__4092__auto___8826))
);
{
var G__8836 = cljs.core.next.call(null,seq__8806_8827__$1);
var G__8837 = null;
var G__8838 = 0;
var G__8839 = 0;
seq__8806_8815 = G__8836;
chunk__8807_8816 = G__8837;
count__8808_8817 = G__8838;
i__8809_8818 = G__8839;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;
if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return listen_once_BANG___delegate.call(this, elem_sel, type_fs);
};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__8840){
var elem_sel = cljs.core.first(arglist__8840);
var type_fs = cljs.core.rest(arglist__8840);
return listen_once_BANG___delegate(elem_sel, type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;
/**
* NOTE: ONLY TO BE USED FOR TESTS. May not work at mocking many
* event types or their bubbling behaviours
* 
* Creates an event of type `event-type`, optionally having
* `update-event!` mutate and return an updated event object,
* and fires it on `node`.
* Only works when `node` is in the DOM
* @param {...*} var_args
*/
dommy.core.fire_BANG_ = (function() { 
var fire_BANG___delegate = function (node,event_type,p__8841){
var vec__8843 = p__8841;
var update_event_BANG_ = cljs.core.nth.call(null,vec__8843,0,null);
if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null)),cljs.core.hash_map("\uFDD0:line",319,"\uFDD0:column",11))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__3943__auto__ = update_event_BANG_;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.identity;
}
})();
if(cljs.core.truth_(document.createEvent))
{var event = document.createEvent("Event");
event.initEvent(cljs.core.name.call(null,event_type),true,true);
return node.dispatchEvent(update_event_BANG___$1.call(null,event));
} else
{return node.fireEvent([cljs.core.str("on"),cljs.core.str(cljs.core.name.call(null,event_type))].join(''),update_event_BANG___$1.call(null,document.createEventObject()));
}
};
var fire_BANG_ = function (node,event_type,var_args){
var p__8841 = null;
if (arguments.length > 2) {
  p__8841 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return fire_BANG___delegate.call(this, node, event_type, p__8841);
};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__8844){
var node = cljs.core.first(arglist__8844);
arglist__8844 = cljs.core.next(arglist__8844);
var event_type = cljs.core.first(arglist__8844);
var p__8841 = cljs.core.rest(arglist__8844);
return fire_BANG___delegate(node, event_type, p__8841);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
