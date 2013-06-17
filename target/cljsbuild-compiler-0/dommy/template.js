goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('clojure.string');
dommy.template.PElement = {};
dommy.template._elem = (function _elem(this$){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__3941__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__2957__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (dommy.template._elem[goog.typeOf(x__2957__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (dommy.template._elem["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PElement.-elem",this$);
}
}
})().call(null,this$);
}
});
/**
* index of css character (#,.) in base-element. bottleneck
*/
dommy.template.next_css_index = (function next_css_index(s,start_idx){
var id_idx = s.indexOf("#",start_idx);
var class_idx = s.indexOf(".",start_idx);
var idx = Math.min(id_idx,class_idx);
if((idx < 0))
{return Math.max(id_idx,class_idx);
} else
{return idx;
}
});
/**
* dom element from css-style keyword like :a.class1 or :span#my-span.class
*/
dommy.template.base_element = (function base_element(node_key){
var node_str = cljs.core.name.call(null,node_key);
var base_idx = dommy.template.next_css_index.call(null,node_str,0);
var tag = (((base_idx > 0))?node_str.substring(0,base_idx):(((base_idx === 0))?"div":(("\uFDD0:else")?node_str:null)));
var node = document.createElement(tag);
if((base_idx >= 0))
{var str_5401 = node_str.substring(base_idx);
while(true){
var next_idx_5402 = dommy.template.next_css_index.call(null,str_5401,1);
var frag_5403 = (((next_idx_5402 >= 0))?str_5401.substring(0,next_idx_5402):str_5401);
var G__5400_5404 = frag_5403.charAt(0);
if(cljs.core._EQ_.call(null,"#",G__5400_5404))
{node.setAttribute("id",frag_5403.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__5400_5404))
{dommy.attrs.add_class_BANG_.call(null,node,frag_5403.substring(1));
} else
{if("\uFDD0:else")
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_5403.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_5402 >= 0))
{{
var G__5405 = str_5401.substring(next_idx_5402);
str_5401 = G__5405;
continue;
}
} else
{}
break;
}
} else
{}
return node;
});
dommy.template.throw_unable_to_make_node = (function throw_unable_to_make_node(node_data){
throw [cljs.core.str("Don't know how to make node from: "),cljs.core.str(cljs.core.pr_str.call(null,node_data))].join('');
});
/**
* take data and return a document fragment
*/
dommy.template.__GT_document_fragment = (function() {
var __GT_document_fragment = null;
var __GT_document_fragment__1 = (function (data){
return __GT_document_fragment.call(null,document.createDocumentFragment(),data);
});
var __GT_document_fragment__2 = (function (result_frag,data){
if((function (){var G__5411 = data;
if(G__5411)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__5411.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__5411.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__5411);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__5411);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__5412_5416 = cljs.core.seq.call(null,data);
var chunk__5413_5417 = null;
var count__5414_5418 = 0;
var i__5415_5419 = 0;
while(true){
if((i__5415_5419 < count__5414_5418))
{var child_5420 = cljs.core._nth.call(null,chunk__5413_5417,i__5415_5419);
__GT_document_fragment.call(null,result_frag,child_5420);
{
var G__5421 = seq__5412_5416;
var G__5422 = chunk__5413_5417;
var G__5423 = count__5414_5418;
var G__5424 = (i__5415_5419 + 1);
seq__5412_5416 = G__5421;
chunk__5413_5417 = G__5422;
count__5414_5418 = G__5423;
i__5415_5419 = G__5424;
continue;
}
} else
{var temp__4092__auto___5425 = cljs.core.seq.call(null,seq__5412_5416);
if(temp__4092__auto___5425)
{var seq__5412_5426__$1 = temp__4092__auto___5425;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5412_5426__$1))
{var c__3088__auto___5427 = cljs.core.chunk_first.call(null,seq__5412_5426__$1);
{
var G__5428 = cljs.core.chunk_rest.call(null,seq__5412_5426__$1);
var G__5429 = c__3088__auto___5427;
var G__5430 = cljs.core.count.call(null,c__3088__auto___5427);
var G__5431 = 0;
seq__5412_5416 = G__5428;
chunk__5413_5417 = G__5429;
count__5414_5418 = G__5430;
i__5415_5419 = G__5431;
continue;
}
} else
{var child_5432 = cljs.core.first.call(null,seq__5412_5426__$1);
__GT_document_fragment.call(null,result_frag,child_5432);
{
var G__5433 = cljs.core.next.call(null,seq__5412_5426__$1);
var G__5434 = null;
var G__5435 = 0;
var G__5436 = 0;
seq__5412_5416 = G__5433;
chunk__5413_5417 = G__5434;
count__5414_5418 = G__5435;
i__5415_5419 = G__5436;
continue;
}
}
} else
{}
}
break;
}
return result_frag;
} else
{if((data == null))
{return result_frag;
} else
{if("\uFDD0:else")
{return dommy.template.throw_unable_to_make_node.call(null,data);
} else
{return null;
}
}
}
}
});
__GT_document_fragment = function(result_frag,data){
switch(arguments.length){
case 1:
return __GT_document_fragment__1.call(this,result_frag);
case 2:
return __GT_document_fragment__2.call(this,result_frag,data);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_document_fragment.cljs$core$IFn$_invoke$arity$1 = __GT_document_fragment__1;
__GT_document_fragment.cljs$core$IFn$_invoke$arity$2 = __GT_document_fragment__2;
return __GT_document_fragment;
})()
;
/**
* take data and return DOM node if it satisfies PElement and tries to
* make a document fragment otherwise
*/
dommy.template.__GT_node_like = (function __GT_node_like(data){
if((function (){var G__5438 = data;
if(G__5438)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__5438.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__5438.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__5438);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__5438);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.__GT_document_fragment.call(null,data);
}
});
/**
* element with either attrs or nested children [:div [:span "Hello"]]
*/
dommy.template.compound_element = (function compound_element(p__5439){
var vec__5458 = p__5439;
var tag_name = cljs.core.nth.call(null,vec__5458,0,null);
var maybe_attrs = cljs.core.nth.call(null,vec__5458,1,null);
var children = cljs.core.nthnext.call(null,vec__5458,2);
var n = dommy.template.base_element.call(null,tag_name);
var attrs = (((function (){var and__3941__auto__ = cljs.core.map_QMARK_.call(null,maybe_attrs);
if(and__3941__auto__)
{return !((function (){var G__5459 = maybe_attrs;
if(G__5459)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__5459.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__5459.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__5459);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__5459);
}
})());
} else
{return and__3941__auto__;
}
})())?maybe_attrs:null);
var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));
var seq__5460_5476 = cljs.core.seq.call(null,attrs);
var chunk__5461_5477 = null;
var count__5462_5478 = 0;
var i__5463_5479 = 0;
while(true){
if((i__5463_5479 < count__5462_5478))
{var vec__5464_5480 = cljs.core._nth.call(null,chunk__5461_5477,i__5463_5479);
var k_5481 = cljs.core.nth.call(null,vec__5464_5480,0,null);
var v_5482 = cljs.core.nth.call(null,vec__5464_5480,1,null);
var G__5465_5483 = k_5481;
if(cljs.core._EQ_.call(null,"\uFDD0:classes",G__5465_5483))
{var seq__5466_5484 = cljs.core.seq.call(null,v_5482);
var chunk__5467_5485 = null;
var count__5468_5486 = 0;
var i__5469_5487 = 0;
while(true){
if((i__5469_5487 < count__5468_5486))
{var c_5488 = cljs.core._nth.call(null,chunk__5467_5485,i__5469_5487);
dommy.attrs.add_class_BANG_.call(null,n,c_5488);
{
var G__5489 = seq__5466_5484;
var G__5490 = chunk__5467_5485;
var G__5491 = count__5468_5486;
var G__5492 = (i__5469_5487 + 1);
seq__5466_5484 = G__5489;
chunk__5467_5485 = G__5490;
count__5468_5486 = G__5491;
i__5469_5487 = G__5492;
continue;
}
} else
{var temp__4092__auto___5493 = cljs.core.seq.call(null,seq__5466_5484);
if(temp__4092__auto___5493)
{var seq__5466_5494__$1 = temp__4092__auto___5493;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5466_5494__$1))
{var c__3088__auto___5495 = cljs.core.chunk_first.call(null,seq__5466_5494__$1);
{
var G__5496 = cljs.core.chunk_rest.call(null,seq__5466_5494__$1);
var G__5497 = c__3088__auto___5495;
var G__5498 = cljs.core.count.call(null,c__3088__auto___5495);
var G__5499 = 0;
seq__5466_5484 = G__5496;
chunk__5467_5485 = G__5497;
count__5468_5486 = G__5498;
i__5469_5487 = G__5499;
continue;
}
} else
{var c_5500 = cljs.core.first.call(null,seq__5466_5494__$1);
dommy.attrs.add_class_BANG_.call(null,n,c_5500);
{
var G__5501 = cljs.core.next.call(null,seq__5466_5494__$1);
var G__5502 = null;
var G__5503 = 0;
var G__5504 = 0;
seq__5466_5484 = G__5501;
chunk__5467_5485 = G__5502;
count__5468_5486 = G__5503;
i__5469_5487 = G__5504;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,"\uFDD0:class",G__5465_5483))
{dommy.attrs.add_class_BANG_.call(null,n,v_5482);
} else
{if("\uFDD0:else")
{dommy.attrs.set_attr_BANG_.call(null,n,k_5481,v_5482);
} else
{}
}
}
{
var G__5505 = seq__5460_5476;
var G__5506 = chunk__5461_5477;
var G__5507 = count__5462_5478;
var G__5508 = (i__5463_5479 + 1);
seq__5460_5476 = G__5505;
chunk__5461_5477 = G__5506;
count__5462_5478 = G__5507;
i__5463_5479 = G__5508;
continue;
}
} else
{var temp__4092__auto___5509 = cljs.core.seq.call(null,seq__5460_5476);
if(temp__4092__auto___5509)
{var seq__5460_5510__$1 = temp__4092__auto___5509;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5460_5510__$1))
{var c__3088__auto___5511 = cljs.core.chunk_first.call(null,seq__5460_5510__$1);
{
var G__5512 = cljs.core.chunk_rest.call(null,seq__5460_5510__$1);
var G__5513 = c__3088__auto___5511;
var G__5514 = cljs.core.count.call(null,c__3088__auto___5511);
var G__5515 = 0;
seq__5460_5476 = G__5512;
chunk__5461_5477 = G__5513;
count__5462_5478 = G__5514;
i__5463_5479 = G__5515;
continue;
}
} else
{var vec__5470_5516 = cljs.core.first.call(null,seq__5460_5510__$1);
var k_5517 = cljs.core.nth.call(null,vec__5470_5516,0,null);
var v_5518 = cljs.core.nth.call(null,vec__5470_5516,1,null);
var G__5471_5519 = k_5517;
if(cljs.core._EQ_.call(null,"\uFDD0:classes",G__5471_5519))
{var seq__5472_5520 = cljs.core.seq.call(null,v_5518);
var chunk__5473_5521 = null;
var count__5474_5522 = 0;
var i__5475_5523 = 0;
while(true){
if((i__5475_5523 < count__5474_5522))
{var c_5524 = cljs.core._nth.call(null,chunk__5473_5521,i__5475_5523);
dommy.attrs.add_class_BANG_.call(null,n,c_5524);
{
var G__5525 = seq__5472_5520;
var G__5526 = chunk__5473_5521;
var G__5527 = count__5474_5522;
var G__5528 = (i__5475_5523 + 1);
seq__5472_5520 = G__5525;
chunk__5473_5521 = G__5526;
count__5474_5522 = G__5527;
i__5475_5523 = G__5528;
continue;
}
} else
{var temp__4092__auto___5529__$1 = cljs.core.seq.call(null,seq__5472_5520);
if(temp__4092__auto___5529__$1)
{var seq__5472_5530__$1 = temp__4092__auto___5529__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5472_5530__$1))
{var c__3088__auto___5531 = cljs.core.chunk_first.call(null,seq__5472_5530__$1);
{
var G__5532 = cljs.core.chunk_rest.call(null,seq__5472_5530__$1);
var G__5533 = c__3088__auto___5531;
var G__5534 = cljs.core.count.call(null,c__3088__auto___5531);
var G__5535 = 0;
seq__5472_5520 = G__5532;
chunk__5473_5521 = G__5533;
count__5474_5522 = G__5534;
i__5475_5523 = G__5535;
continue;
}
} else
{var c_5536 = cljs.core.first.call(null,seq__5472_5530__$1);
dommy.attrs.add_class_BANG_.call(null,n,c_5536);
{
var G__5537 = cljs.core.next.call(null,seq__5472_5530__$1);
var G__5538 = null;
var G__5539 = 0;
var G__5540 = 0;
seq__5472_5520 = G__5537;
chunk__5473_5521 = G__5538;
count__5474_5522 = G__5539;
i__5475_5523 = G__5540;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,"\uFDD0:class",G__5471_5519))
{dommy.attrs.add_class_BANG_.call(null,n,v_5518);
} else
{if("\uFDD0:else")
{dommy.attrs.set_attr_BANG_.call(null,n,k_5517,v_5518);
} else
{}
}
}
{
var G__5541 = cljs.core.next.call(null,seq__5460_5510__$1);
var G__5542 = null;
var G__5543 = 0;
var G__5544 = 0;
seq__5460_5476 = G__5541;
chunk__5461_5477 = G__5542;
count__5462_5478 = G__5543;
i__5463_5479 = G__5544;
continue;
}
}
} else
{}
}
break;
}
n.appendChild(dommy.template.__GT_node_like.call(null,children__$1));
return n;
});
(dommy.template.PElement["string"] = true);
(dommy.template._elem["string"] = (function (this$){
if(cljs.core.keyword_QMARK_.call(null,this$))
{return dommy.template.base_element.call(null,this$);
} else
{return document.createTextNode([cljs.core.str(this$)].join(''));
}
}));
(dommy.template.PElement["number"] = true);
(dommy.template._elem["number"] = (function (this$){
return document.createTextNode([cljs.core.str(this$)].join(''));
}));
cljs.core.PersistentVector.prototype.dommy$template$PElement$ = true;
cljs.core.PersistentVector.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
return dommy.template.compound_element.call(null,this$);
});
Document.prototype.dommy$template$PElement$ = true;
Document.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
return this$;
});
Text.prototype.dommy$template$PElement$ = true;
Text.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
return this$;
});
DocumentFragment.prototype.dommy$template$PElement$ = true;
DocumentFragment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
return this$;
});
HTMLElement.prototype.dommy$template$PElement$ = true;
HTMLElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
return this$;
});
try{Window.prototype.dommy$template$PElement$ = true;
Window.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
return this$;
});
}catch (e5545){if((e5545 instanceof ReferenceError))
{var __5546 = e5545;
console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if("\uFDD0:else")
{throw e5545;
} else
{}
}
}dommy.template.node = (function node(data){
if((function (){var G__5548 = data;
if(G__5548)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__5548.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__5548.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__5548);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__5548);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.throw_unable_to_make_node.call(null,data);
}
});
dommy.template.html__GT_nodes = (function html__GT_nodes(html){
var parent = document.createElement("div");
parent.insertAdjacentHTML("beforeend",html);
return cljs.core.seq.call(null,Array.prototype.slice.call(parent.childNodes));
});
