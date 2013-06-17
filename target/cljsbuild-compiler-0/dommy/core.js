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
var G__5598 = dommy.template.__GT_node_like.call(null,parent);
G__5598.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__5598;
});
var append_BANG___3 = (function() { 
var G__5603__delegate = function (parent,child,more_children){
var parent__$1 = dommy.template.__GT_node_like.call(null,parent);
var seq__5599_5604 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__5600_5605 = null;
var count__5601_5606 = 0;
var i__5602_5607 = 0;
while(true){
if((i__5602_5607 < count__5601_5606))
{var c_5608 = cljs.core._nth.call(null,chunk__5600_5605,i__5602_5607);
append_BANG_.call(null,parent__$1,c_5608);
{
var G__5609 = seq__5599_5604;
var G__5610 = chunk__5600_5605;
var G__5611 = count__5601_5606;
var G__5612 = (i__5602_5607 + 1);
seq__5599_5604 = G__5609;
chunk__5600_5605 = G__5610;
count__5601_5606 = G__5611;
i__5602_5607 = G__5612;
continue;
}
} else
{var temp__4092__auto___5613 = cljs.core.seq.call(null,seq__5599_5604);
if(temp__4092__auto___5613)
{var seq__5599_5614__$1 = temp__4092__auto___5613;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5599_5614__$1))
{var c__3088__auto___5615 = cljs.core.chunk_first.call(null,seq__5599_5614__$1);
{
var G__5616 = cljs.core.chunk_rest.call(null,seq__5599_5614__$1);
var G__5617 = c__3088__auto___5615;
var G__5618 = cljs.core.count.call(null,c__3088__auto___5615);
var G__5619 = 0;
seq__5599_5604 = G__5616;
chunk__5600_5605 = G__5617;
count__5601_5606 = G__5618;
i__5602_5607 = G__5619;
continue;
}
} else
{var c_5620 = cljs.core.first.call(null,seq__5599_5614__$1);
append_BANG_.call(null,parent__$1,c_5620);
{
var G__5621 = cljs.core.next.call(null,seq__5599_5614__$1);
var G__5622 = null;
var G__5623 = 0;
var G__5624 = 0;
seq__5599_5604 = G__5621;
chunk__5600_5605 = G__5622;
count__5601_5606 = G__5623;
i__5602_5607 = G__5624;
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
var G__5603 = function (parent,child,var_args){
var more_children = null;
if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5603__delegate.call(this, parent, child, more_children);
};
G__5603.cljs$lang$maxFixedArity = 2;
G__5603.cljs$lang$applyTo = (function (arglist__5625){
var parent = cljs.core.first(arglist__5625);
arglist__5625 = cljs.core.next(arglist__5625);
var child = cljs.core.first(arglist__5625);
var more_children = cljs.core.rest(arglist__5625);
return G__5603__delegate(parent, child, more_children);
});
G__5603.cljs$core$IFn$_invoke$arity$variadic = G__5603__delegate;
return G__5603;
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
var G__5631 = dommy.template.__GT_node_like.call(null,parent);
G__5631.insertBefore(dommy.template.__GT_node_like.call(null,child),parent.firstChild);
return G__5631;
});
var prepend_BANG___3 = (function() { 
var G__5636__delegate = function (parent,child,more_children){
var parent__$1 = dommy.template.__GT_node_like.call(null,parent);
var seq__5632_5637 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__5633_5638 = null;
var count__5634_5639 = 0;
var i__5635_5640 = 0;
while(true){
if((i__5635_5640 < count__5634_5639))
{var c_5641 = cljs.core._nth.call(null,chunk__5633_5638,i__5635_5640);
prepend_BANG_.call(null,parent__$1,c_5641);
{
var G__5642 = seq__5632_5637;
var G__5643 = chunk__5633_5638;
var G__5644 = count__5634_5639;
var G__5645 = (i__5635_5640 + 1);
seq__5632_5637 = G__5642;
chunk__5633_5638 = G__5643;
count__5634_5639 = G__5644;
i__5635_5640 = G__5645;
continue;
}
} else
{var temp__4092__auto___5646 = cljs.core.seq.call(null,seq__5632_5637);
if(temp__4092__auto___5646)
{var seq__5632_5647__$1 = temp__4092__auto___5646;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5632_5647__$1))
{var c__3088__auto___5648 = cljs.core.chunk_first.call(null,seq__5632_5647__$1);
{
var G__5649 = cljs.core.chunk_rest.call(null,seq__5632_5647__$1);
var G__5650 = c__3088__auto___5648;
var G__5651 = cljs.core.count.call(null,c__3088__auto___5648);
var G__5652 = 0;
seq__5632_5637 = G__5649;
chunk__5633_5638 = G__5650;
count__5634_5639 = G__5651;
i__5635_5640 = G__5652;
continue;
}
} else
{var c_5653 = cljs.core.first.call(null,seq__5632_5647__$1);
prepend_BANG_.call(null,parent__$1,c_5653);
{
var G__5654 = cljs.core.next.call(null,seq__5632_5647__$1);
var G__5655 = null;
var G__5656 = 0;
var G__5657 = 0;
seq__5632_5637 = G__5654;
chunk__5633_5638 = G__5655;
count__5634_5639 = G__5656;
i__5635_5640 = G__5657;
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
var G__5636 = function (parent,child,var_args){
var more_children = null;
if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5636__delegate.call(this, parent, child, more_children);
};
G__5636.cljs$lang$maxFixedArity = 2;
G__5636.cljs$lang$applyTo = (function (arglist__5658){
var parent = cljs.core.first(arglist__5658);
arglist__5658 = cljs.core.next(arglist__5658);
var child = cljs.core.first(arglist__5658);
var more_children = cljs.core.rest(arglist__5658);
return G__5636__delegate(parent, child, more_children);
});
G__5636.cljs$core$IFn$_invoke$arity$variadic = G__5636__delegate;
return G__5636;
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
var temp__4090__auto___5659 = other__$1.nextSibling;
if(cljs.core.truth_(temp__4090__auto___5659))
{var next_5660 = temp__4090__auto___5659;
parent.insertBefore(actual_node,next_5660);
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
var G__5662 = dommy.template.__GT_node_like.call(null,parent);
G__5662.innerHTML = "";
dommy.core.append_BANG_.call(null,G__5662,node_like);
return G__5662;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var G__5664 = elem__$1.parentNode;
G__5664.removeChild(elem__$1);
return G__5664;
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
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__5665_SHARP_){
return p1__5665_SHARP_.parentNode;
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
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__5666_SHARP_){
return !((p1__5666_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__5667){
var vec__5668 = p__5667;
var special_mouse_event = cljs.core.nth.call(null,vec__5668,0,null);
var real_mouse_event = cljs.core.nth.call(null,vec__5668,1,null);
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__5670){
var elem = cljs.core.first(arglist__5670);
arglist__5670 = cljs.core.next(arglist__5670);
var f = cljs.core.first(arglist__5670);
var args = cljs.core.rest(arglist__5670);
return update_event_listeners_BANG___delegate(elem, f, args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__5669_SHARP_){
return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__5669_SHARP_));
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
var vec__5694_5717 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_5718 = cljs.core.nth.call(null,vec__5694_5717,0,null);
var selector_5719 = cljs.core.nth.call(null,vec__5694_5717,1,null);
var seq__5695_5720 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));
var chunk__5702_5721 = null;
var count__5703_5722 = 0;
var i__5704_5723 = 0;
while(true){
if((i__5704_5723 < count__5703_5722))
{var vec__5711_5724 = cljs.core._nth.call(null,chunk__5702_5721,i__5704_5723);
var orig_type_5725 = cljs.core.nth.call(null,vec__5711_5724,0,null);
var f_5726 = cljs.core.nth.call(null,vec__5711_5724,1,null);
var seq__5705_5727 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_5725,cljs.core.PersistentArrayMap.fromArray([orig_type_5725,cljs.core.identity], true)));
var chunk__5707_5728 = null;
var count__5708_5729 = 0;
var i__5709_5730 = 0;
while(true){
if((i__5709_5730 < count__5708_5729))
{var vec__5712_5731 = cljs.core._nth.call(null,chunk__5707_5728,i__5709_5730);
var actual_type_5732 = cljs.core.nth.call(null,vec__5712_5731,0,null);
var factory_5733 = cljs.core.nth.call(null,vec__5712_5731,1,null);
var canonical_f_5734 = (cljs.core.truth_(selector_5719)?cljs.core.partial.call(null,dommy.core.live_listener,elem_5718,selector_5719):cljs.core.identity).call(null,factory_5733.call(null,f_5726));
dommy.core.update_event_listeners_BANG_.call(null,elem_5718,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_5719,actual_type_5732,f_5726], true),canonical_f_5734);
if(cljs.core.truth_(elem_5718.addEventListener))
{elem_5718.addEventListener(cljs.core.name.call(null,actual_type_5732),canonical_f_5734);
} else
{elem_5718.attachEvent(cljs.core.name.call(null,actual_type_5732),canonical_f_5734);
}
{
var G__5735 = seq__5705_5727;
var G__5736 = chunk__5707_5728;
var G__5737 = count__5708_5729;
var G__5738 = (i__5709_5730 + 1);
seq__5705_5727 = G__5735;
chunk__5707_5728 = G__5736;
count__5708_5729 = G__5737;
i__5709_5730 = G__5738;
continue;
}
} else
{var temp__4092__auto___5739 = cljs.core.seq.call(null,seq__5705_5727);
if(temp__4092__auto___5739)
{var seq__5705_5740__$1 = temp__4092__auto___5739;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5705_5740__$1))
{var c__3088__auto___5741 = cljs.core.chunk_first.call(null,seq__5705_5740__$1);
{
var G__5742 = cljs.core.chunk_rest.call(null,seq__5705_5740__$1);
var G__5743 = c__3088__auto___5741;
var G__5744 = cljs.core.count.call(null,c__3088__auto___5741);
var G__5745 = 0;
seq__5705_5727 = G__5742;
chunk__5707_5728 = G__5743;
count__5708_5729 = G__5744;
i__5709_5730 = G__5745;
continue;
}
} else
{var vec__5713_5746 = cljs.core.first.call(null,seq__5705_5740__$1);
var actual_type_5747 = cljs.core.nth.call(null,vec__5713_5746,0,null);
var factory_5748 = cljs.core.nth.call(null,vec__5713_5746,1,null);
var canonical_f_5749 = (cljs.core.truth_(selector_5719)?cljs.core.partial.call(null,dommy.core.live_listener,elem_5718,selector_5719):cljs.core.identity).call(null,factory_5748.call(null,f_5726));
dommy.core.update_event_listeners_BANG_.call(null,elem_5718,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_5719,actual_type_5747,f_5726], true),canonical_f_5749);
if(cljs.core.truth_(elem_5718.addEventListener))
{elem_5718.addEventListener(cljs.core.name.call(null,actual_type_5747),canonical_f_5749);
} else
{elem_5718.attachEvent(cljs.core.name.call(null,actual_type_5747),canonical_f_5749);
}
{
var G__5750 = cljs.core.next.call(null,seq__5705_5740__$1);
var G__5751 = null;
var G__5752 = 0;
var G__5753 = 0;
seq__5705_5727 = G__5750;
chunk__5707_5728 = G__5751;
count__5708_5729 = G__5752;
i__5709_5730 = G__5753;
continue;
}
}
} else
{}
}
break;
}
{
var G__5754 = seq__5695_5720;
var G__5755 = chunk__5702_5721;
var G__5756 = count__5703_5722;
var G__5757 = (i__5704_5723 + 1);
seq__5695_5720 = G__5754;
chunk__5702_5721 = G__5755;
count__5703_5722 = G__5756;
i__5704_5723 = G__5757;
continue;
}
} else
{var temp__4092__auto___5758 = cljs.core.seq.call(null,seq__5695_5720);
if(temp__4092__auto___5758)
{var seq__5695_5759__$1 = temp__4092__auto___5758;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5695_5759__$1))
{var c__3088__auto___5760 = cljs.core.chunk_first.call(null,seq__5695_5759__$1);
{
var G__5761 = cljs.core.chunk_rest.call(null,seq__5695_5759__$1);
var G__5762 = c__3088__auto___5760;
var G__5763 = cljs.core.count.call(null,c__3088__auto___5760);
var G__5764 = 0;
seq__5695_5720 = G__5761;
chunk__5702_5721 = G__5762;
count__5703_5722 = G__5763;
i__5704_5723 = G__5764;
continue;
}
} else
{var vec__5714_5765 = cljs.core.first.call(null,seq__5695_5759__$1);
var orig_type_5766 = cljs.core.nth.call(null,vec__5714_5765,0,null);
var f_5767 = cljs.core.nth.call(null,vec__5714_5765,1,null);
var seq__5696_5768 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_5766,cljs.core.PersistentArrayMap.fromArray([orig_type_5766,cljs.core.identity], true)));
var chunk__5698_5769 = null;
var count__5699_5770 = 0;
var i__5700_5771 = 0;
while(true){
if((i__5700_5771 < count__5699_5770))
{var vec__5715_5772 = cljs.core._nth.call(null,chunk__5698_5769,i__5700_5771);
var actual_type_5773 = cljs.core.nth.call(null,vec__5715_5772,0,null);
var factory_5774 = cljs.core.nth.call(null,vec__5715_5772,1,null);
var canonical_f_5775 = (cljs.core.truth_(selector_5719)?cljs.core.partial.call(null,dommy.core.live_listener,elem_5718,selector_5719):cljs.core.identity).call(null,factory_5774.call(null,f_5767));
dommy.core.update_event_listeners_BANG_.call(null,elem_5718,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_5719,actual_type_5773,f_5767], true),canonical_f_5775);
if(cljs.core.truth_(elem_5718.addEventListener))
{elem_5718.addEventListener(cljs.core.name.call(null,actual_type_5773),canonical_f_5775);
} else
{elem_5718.attachEvent(cljs.core.name.call(null,actual_type_5773),canonical_f_5775);
}
{
var G__5776 = seq__5696_5768;
var G__5777 = chunk__5698_5769;
var G__5778 = count__5699_5770;
var G__5779 = (i__5700_5771 + 1);
seq__5696_5768 = G__5776;
chunk__5698_5769 = G__5777;
count__5699_5770 = G__5778;
i__5700_5771 = G__5779;
continue;
}
} else
{var temp__4092__auto___5780__$1 = cljs.core.seq.call(null,seq__5696_5768);
if(temp__4092__auto___5780__$1)
{var seq__5696_5781__$1 = temp__4092__auto___5780__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5696_5781__$1))
{var c__3088__auto___5782 = cljs.core.chunk_first.call(null,seq__5696_5781__$1);
{
var G__5783 = cljs.core.chunk_rest.call(null,seq__5696_5781__$1);
var G__5784 = c__3088__auto___5782;
var G__5785 = cljs.core.count.call(null,c__3088__auto___5782);
var G__5786 = 0;
seq__5696_5768 = G__5783;
chunk__5698_5769 = G__5784;
count__5699_5770 = G__5785;
i__5700_5771 = G__5786;
continue;
}
} else
{var vec__5716_5787 = cljs.core.first.call(null,seq__5696_5781__$1);
var actual_type_5788 = cljs.core.nth.call(null,vec__5716_5787,0,null);
var factory_5789 = cljs.core.nth.call(null,vec__5716_5787,1,null);
var canonical_f_5790 = (cljs.core.truth_(selector_5719)?cljs.core.partial.call(null,dommy.core.live_listener,elem_5718,selector_5719):cljs.core.identity).call(null,factory_5789.call(null,f_5767));
dommy.core.update_event_listeners_BANG_.call(null,elem_5718,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_5719,actual_type_5788,f_5767], true),canonical_f_5790);
if(cljs.core.truth_(elem_5718.addEventListener))
{elem_5718.addEventListener(cljs.core.name.call(null,actual_type_5788),canonical_f_5790);
} else
{elem_5718.attachEvent(cljs.core.name.call(null,actual_type_5788),canonical_f_5790);
}
{
var G__5791 = cljs.core.next.call(null,seq__5696_5781__$1);
var G__5792 = null;
var G__5793 = 0;
var G__5794 = 0;
seq__5696_5768 = G__5791;
chunk__5698_5769 = G__5792;
count__5699_5770 = G__5793;
i__5700_5771 = G__5794;
continue;
}
}
} else
{}
}
break;
}
{
var G__5795 = cljs.core.next.call(null,seq__5695_5759__$1);
var G__5796 = null;
var G__5797 = 0;
var G__5798 = 0;
seq__5695_5720 = G__5795;
chunk__5702_5721 = G__5796;
count__5703_5722 = G__5797;
i__5704_5723 = G__5798;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__5799){
var elem_sel = cljs.core.first(arglist__5799);
var type_fs = cljs.core.rest(arglist__5799);
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
var vec__5823_5846 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_5847 = cljs.core.nth.call(null,vec__5823_5846,0,null);
var selector_5848 = cljs.core.nth.call(null,vec__5823_5846,1,null);
var seq__5824_5849 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));
var chunk__5831_5850 = null;
var count__5832_5851 = 0;
var i__5833_5852 = 0;
while(true){
if((i__5833_5852 < count__5832_5851))
{var vec__5840_5853 = cljs.core._nth.call(null,chunk__5831_5850,i__5833_5852);
var orig_type_5854 = cljs.core.nth.call(null,vec__5840_5853,0,null);
var f_5855 = cljs.core.nth.call(null,vec__5840_5853,1,null);
var seq__5834_5856 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_5854,cljs.core.PersistentArrayMap.fromArray([orig_type_5854,cljs.core.identity], true)));
var chunk__5836_5857 = null;
var count__5837_5858 = 0;
var i__5838_5859 = 0;
while(true){
if((i__5838_5859 < count__5837_5858))
{var vec__5841_5860 = cljs.core._nth.call(null,chunk__5836_5857,i__5838_5859);
var actual_type_5861 = cljs.core.nth.call(null,vec__5841_5860,0,null);
var __5862 = cljs.core.nth.call(null,vec__5841_5860,1,null);
var keys_5863 = cljs.core.PersistentVector.fromArray([selector_5848,actual_type_5861,f_5855], true);
var canonical_f_5864 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_5847),keys_5863);
dommy.core.update_event_listeners_BANG_.call(null,elem_5847,dommy.utils.dissoc_in,keys_5863);
if(cljs.core.truth_(elem_5847.removeEventListener))
{elem_5847.removeEventListener(cljs.core.name.call(null,actual_type_5861),canonical_f_5864);
} else
{elem_5847.detachEvent(cljs.core.name.call(null,actual_type_5861),canonical_f_5864);
}
{
var G__5865 = seq__5834_5856;
var G__5866 = chunk__5836_5857;
var G__5867 = count__5837_5858;
var G__5868 = (i__5838_5859 + 1);
seq__5834_5856 = G__5865;
chunk__5836_5857 = G__5866;
count__5837_5858 = G__5867;
i__5838_5859 = G__5868;
continue;
}
} else
{var temp__4092__auto___5869 = cljs.core.seq.call(null,seq__5834_5856);
if(temp__4092__auto___5869)
{var seq__5834_5870__$1 = temp__4092__auto___5869;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5834_5870__$1))
{var c__3088__auto___5871 = cljs.core.chunk_first.call(null,seq__5834_5870__$1);
{
var G__5872 = cljs.core.chunk_rest.call(null,seq__5834_5870__$1);
var G__5873 = c__3088__auto___5871;
var G__5874 = cljs.core.count.call(null,c__3088__auto___5871);
var G__5875 = 0;
seq__5834_5856 = G__5872;
chunk__5836_5857 = G__5873;
count__5837_5858 = G__5874;
i__5838_5859 = G__5875;
continue;
}
} else
{var vec__5842_5876 = cljs.core.first.call(null,seq__5834_5870__$1);
var actual_type_5877 = cljs.core.nth.call(null,vec__5842_5876,0,null);
var __5878 = cljs.core.nth.call(null,vec__5842_5876,1,null);
var keys_5879 = cljs.core.PersistentVector.fromArray([selector_5848,actual_type_5877,f_5855], true);
var canonical_f_5880 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_5847),keys_5879);
dommy.core.update_event_listeners_BANG_.call(null,elem_5847,dommy.utils.dissoc_in,keys_5879);
if(cljs.core.truth_(elem_5847.removeEventListener))
{elem_5847.removeEventListener(cljs.core.name.call(null,actual_type_5877),canonical_f_5880);
} else
{elem_5847.detachEvent(cljs.core.name.call(null,actual_type_5877),canonical_f_5880);
}
{
var G__5881 = cljs.core.next.call(null,seq__5834_5870__$1);
var G__5882 = null;
var G__5883 = 0;
var G__5884 = 0;
seq__5834_5856 = G__5881;
chunk__5836_5857 = G__5882;
count__5837_5858 = G__5883;
i__5838_5859 = G__5884;
continue;
}
}
} else
{}
}
break;
}
{
var G__5885 = seq__5824_5849;
var G__5886 = chunk__5831_5850;
var G__5887 = count__5832_5851;
var G__5888 = (i__5833_5852 + 1);
seq__5824_5849 = G__5885;
chunk__5831_5850 = G__5886;
count__5832_5851 = G__5887;
i__5833_5852 = G__5888;
continue;
}
} else
{var temp__4092__auto___5889 = cljs.core.seq.call(null,seq__5824_5849);
if(temp__4092__auto___5889)
{var seq__5824_5890__$1 = temp__4092__auto___5889;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5824_5890__$1))
{var c__3088__auto___5891 = cljs.core.chunk_first.call(null,seq__5824_5890__$1);
{
var G__5892 = cljs.core.chunk_rest.call(null,seq__5824_5890__$1);
var G__5893 = c__3088__auto___5891;
var G__5894 = cljs.core.count.call(null,c__3088__auto___5891);
var G__5895 = 0;
seq__5824_5849 = G__5892;
chunk__5831_5850 = G__5893;
count__5832_5851 = G__5894;
i__5833_5852 = G__5895;
continue;
}
} else
{var vec__5843_5896 = cljs.core.first.call(null,seq__5824_5890__$1);
var orig_type_5897 = cljs.core.nth.call(null,vec__5843_5896,0,null);
var f_5898 = cljs.core.nth.call(null,vec__5843_5896,1,null);
var seq__5825_5899 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_5897,cljs.core.PersistentArrayMap.fromArray([orig_type_5897,cljs.core.identity], true)));
var chunk__5827_5900 = null;
var count__5828_5901 = 0;
var i__5829_5902 = 0;
while(true){
if((i__5829_5902 < count__5828_5901))
{var vec__5844_5903 = cljs.core._nth.call(null,chunk__5827_5900,i__5829_5902);
var actual_type_5904 = cljs.core.nth.call(null,vec__5844_5903,0,null);
var __5905 = cljs.core.nth.call(null,vec__5844_5903,1,null);
var keys_5906 = cljs.core.PersistentVector.fromArray([selector_5848,actual_type_5904,f_5898], true);
var canonical_f_5907 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_5847),keys_5906);
dommy.core.update_event_listeners_BANG_.call(null,elem_5847,dommy.utils.dissoc_in,keys_5906);
if(cljs.core.truth_(elem_5847.removeEventListener))
{elem_5847.removeEventListener(cljs.core.name.call(null,actual_type_5904),canonical_f_5907);
} else
{elem_5847.detachEvent(cljs.core.name.call(null,actual_type_5904),canonical_f_5907);
}
{
var G__5908 = seq__5825_5899;
var G__5909 = chunk__5827_5900;
var G__5910 = count__5828_5901;
var G__5911 = (i__5829_5902 + 1);
seq__5825_5899 = G__5908;
chunk__5827_5900 = G__5909;
count__5828_5901 = G__5910;
i__5829_5902 = G__5911;
continue;
}
} else
{var temp__4092__auto___5912__$1 = cljs.core.seq.call(null,seq__5825_5899);
if(temp__4092__auto___5912__$1)
{var seq__5825_5913__$1 = temp__4092__auto___5912__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5825_5913__$1))
{var c__3088__auto___5914 = cljs.core.chunk_first.call(null,seq__5825_5913__$1);
{
var G__5915 = cljs.core.chunk_rest.call(null,seq__5825_5913__$1);
var G__5916 = c__3088__auto___5914;
var G__5917 = cljs.core.count.call(null,c__3088__auto___5914);
var G__5918 = 0;
seq__5825_5899 = G__5915;
chunk__5827_5900 = G__5916;
count__5828_5901 = G__5917;
i__5829_5902 = G__5918;
continue;
}
} else
{var vec__5845_5919 = cljs.core.first.call(null,seq__5825_5913__$1);
var actual_type_5920 = cljs.core.nth.call(null,vec__5845_5919,0,null);
var __5921 = cljs.core.nth.call(null,vec__5845_5919,1,null);
var keys_5922 = cljs.core.PersistentVector.fromArray([selector_5848,actual_type_5920,f_5898], true);
var canonical_f_5923 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_5847),keys_5922);
dommy.core.update_event_listeners_BANG_.call(null,elem_5847,dommy.utils.dissoc_in,keys_5922);
if(cljs.core.truth_(elem_5847.removeEventListener))
{elem_5847.removeEventListener(cljs.core.name.call(null,actual_type_5920),canonical_f_5923);
} else
{elem_5847.detachEvent(cljs.core.name.call(null,actual_type_5920),canonical_f_5923);
}
{
var G__5924 = cljs.core.next.call(null,seq__5825_5913__$1);
var G__5925 = null;
var G__5926 = 0;
var G__5927 = 0;
seq__5825_5899 = G__5924;
chunk__5827_5900 = G__5925;
count__5828_5901 = G__5926;
i__5829_5902 = G__5927;
continue;
}
}
} else
{}
}
break;
}
{
var G__5928 = cljs.core.next.call(null,seq__5824_5890__$1);
var G__5929 = null;
var G__5930 = 0;
var G__5931 = 0;
seq__5824_5849 = G__5928;
chunk__5831_5850 = G__5929;
count__5832_5851 = G__5930;
i__5833_5852 = G__5931;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__5932){
var elem_sel = cljs.core.first(arglist__5932);
var type_fs = cljs.core.rest(arglist__5932);
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
var vec__5940_5947 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_5948 = cljs.core.nth.call(null,vec__5940_5947,0,null);
var selector_5949 = cljs.core.nth.call(null,vec__5940_5947,1,null);
var seq__5941_5950 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));
var chunk__5942_5951 = null;
var count__5943_5952 = 0;
var i__5944_5953 = 0;
while(true){
if((i__5944_5953 < count__5943_5952))
{var vec__5945_5954 = cljs.core._nth.call(null,chunk__5942_5951,i__5944_5953);
var type_5955 = cljs.core.nth.call(null,vec__5945_5954,0,null);
var f_5956 = cljs.core.nth.call(null,vec__5945_5954,1,null);
dommy.core.listen_BANG_.call(null,elem_sel,type_5955,((function (seq__5941_5950,chunk__5942_5951,count__5943_5952,i__5944_5953,vec__5945_5954,type_5955,f_5956){
return (function this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_5955,this_fn);
return f_5956.call(null,e);
});})(seq__5941_5950,chunk__5942_5951,count__5943_5952,i__5944_5953,vec__5945_5954,type_5955,f_5956))
);
{
var G__5957 = seq__5941_5950;
var G__5958 = chunk__5942_5951;
var G__5959 = count__5943_5952;
var G__5960 = (i__5944_5953 + 1);
seq__5941_5950 = G__5957;
chunk__5942_5951 = G__5958;
count__5943_5952 = G__5959;
i__5944_5953 = G__5960;
continue;
}
} else
{var temp__4092__auto___5961 = cljs.core.seq.call(null,seq__5941_5950);
if(temp__4092__auto___5961)
{var seq__5941_5962__$1 = temp__4092__auto___5961;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5941_5962__$1))
{var c__3088__auto___5963 = cljs.core.chunk_first.call(null,seq__5941_5962__$1);
{
var G__5964 = cljs.core.chunk_rest.call(null,seq__5941_5962__$1);
var G__5965 = c__3088__auto___5963;
var G__5966 = cljs.core.count.call(null,c__3088__auto___5963);
var G__5967 = 0;
seq__5941_5950 = G__5964;
chunk__5942_5951 = G__5965;
count__5943_5952 = G__5966;
i__5944_5953 = G__5967;
continue;
}
} else
{var vec__5946_5968 = cljs.core.first.call(null,seq__5941_5962__$1);
var type_5969 = cljs.core.nth.call(null,vec__5946_5968,0,null);
var f_5970 = cljs.core.nth.call(null,vec__5946_5968,1,null);
dommy.core.listen_BANG_.call(null,elem_sel,type_5969,((function (seq__5941_5950,chunk__5942_5951,count__5943_5952,i__5944_5953,vec__5946_5968,type_5969,f_5970,seq__5941_5962__$1,temp__4092__auto___5961){
return (function this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_5969,this_fn);
return f_5970.call(null,e);
});})(seq__5941_5950,chunk__5942_5951,count__5943_5952,i__5944_5953,vec__5946_5968,type_5969,f_5970,seq__5941_5962__$1,temp__4092__auto___5961))
);
{
var G__5971 = cljs.core.next.call(null,seq__5941_5962__$1);
var G__5972 = null;
var G__5973 = 0;
var G__5974 = 0;
seq__5941_5950 = G__5971;
chunk__5942_5951 = G__5972;
count__5943_5952 = G__5973;
i__5944_5953 = G__5974;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__5975){
var elem_sel = cljs.core.first(arglist__5975);
var type_fs = cljs.core.rest(arglist__5975);
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
var fire_BANG___delegate = function (node,event_type,p__5976){
var vec__5978 = p__5976;
var update_event_BANG_ = cljs.core.nth.call(null,vec__5978,0,null);
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
var p__5976 = null;
if (arguments.length > 2) {
  p__5976 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return fire_BANG___delegate.call(this, node, event_type, p__5976);
};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__5979){
var node = cljs.core.first(arglist__5979);
arglist__5979 = cljs.core.next(arglist__5979);
var event_type = cljs.core.first(arglist__5979);
var p__5976 = cljs.core.rest(arglist__5979);
return fire_BANG___delegate(node, event_type, p__5976);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
