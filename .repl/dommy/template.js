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
{var x__6935__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (dommy.template._elem[goog.typeOf(x__6935__auto__)]);
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
{var str_8026 = node_str.substring(base_idx);
while(true){
var next_idx_8027 = dommy.template.next_css_index.call(null,str_8026,1);
var frag_8028 = (((next_idx_8027 >= 0))?str_8026.substring(0,next_idx_8027):str_8026);
var G__8025_8029 = frag_8028.charAt(0);
if(cljs.core._EQ_.call(null,"#",G__8025_8029))
{node.setAttribute("id",frag_8028.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__8025_8029))
{dommy.attrs.add_class_BANG_.call(null,node,frag_8028.substring(1));
} else
{if("\uFDD0:else")
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_8028.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_8027 >= 0))
{{
var G__8030 = str_8026.substring(next_idx_8027);
str_8026 = G__8030;
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
if((function (){var G__8036 = data;
if(G__8036)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__8036.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__8036.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__8036);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__8036);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__8037_8041 = cljs.core.seq.call(null,data);
var chunk__8038_8042 = null;
var count__8039_8043 = 0;
var i__8040_8044 = 0;
while(true){
if((i__8040_8044 < count__8039_8043))
{var child_8045 = cljs.core._nth.call(null,chunk__8038_8042,i__8040_8044);
__GT_document_fragment.call(null,result_frag,child_8045);
{
var G__8046 = seq__8037_8041;
var G__8047 = chunk__8038_8042;
var G__8048 = count__8039_8043;
var G__8049 = (i__8040_8044 + 1);
seq__8037_8041 = G__8046;
chunk__8038_8042 = G__8047;
count__8039_8043 = G__8048;
i__8040_8044 = G__8049;
continue;
}
} else
{var temp__4092__auto___8050 = cljs.core.seq.call(null,seq__8037_8041);
if(temp__4092__auto___8050)
{var seq__8037_8051__$1 = temp__4092__auto___8050;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8037_8051__$1))
{var c__7066__auto___8052 = cljs.core.chunk_first.call(null,seq__8037_8051__$1);
{
var G__8053 = cljs.core.chunk_rest.call(null,seq__8037_8051__$1);
var G__8054 = c__7066__auto___8052;
var G__8055 = cljs.core.count.call(null,c__7066__auto___8052);
var G__8056 = 0;
seq__8037_8041 = G__8053;
chunk__8038_8042 = G__8054;
count__8039_8043 = G__8055;
i__8040_8044 = G__8056;
continue;
}
} else
{var child_8057 = cljs.core.first.call(null,seq__8037_8051__$1);
__GT_document_fragment.call(null,result_frag,child_8057);
{
var G__8058 = cljs.core.next.call(null,seq__8037_8051__$1);
var G__8059 = null;
var G__8060 = 0;
var G__8061 = 0;
seq__8037_8041 = G__8058;
chunk__8038_8042 = G__8059;
count__8039_8043 = G__8060;
i__8040_8044 = G__8061;
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
if((function (){var G__8063 = data;
if(G__8063)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__8063.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__8063.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__8063);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__8063);
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
dommy.template.compound_element = (function compound_element(p__8064){
var vec__8083 = p__8064;
var tag_name = cljs.core.nth.call(null,vec__8083,0,null);
var maybe_attrs = cljs.core.nth.call(null,vec__8083,1,null);
var children = cljs.core.nthnext.call(null,vec__8083,2);
var n = dommy.template.base_element.call(null,tag_name);
var attrs = (((function (){var and__3941__auto__ = cljs.core.map_QMARK_.call(null,maybe_attrs);
if(and__3941__auto__)
{return !((function (){var G__8084 = maybe_attrs;
if(G__8084)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__8084.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__8084.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__8084);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__8084);
}
})());
} else
{return and__3941__auto__;
}
})())?maybe_attrs:null);
var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));
var seq__8085_8101 = cljs.core.seq.call(null,attrs);
var chunk__8086_8102 = null;
var count__8087_8103 = 0;
var i__8088_8104 = 0;
while(true){
if((i__8088_8104 < count__8087_8103))
{var vec__8089_8105 = cljs.core._nth.call(null,chunk__8086_8102,i__8088_8104);
var k_8106 = cljs.core.nth.call(null,vec__8089_8105,0,null);
var v_8107 = cljs.core.nth.call(null,vec__8089_8105,1,null);
var G__8090_8108 = k_8106;
if(cljs.core._EQ_.call(null,"\uFDD0:classes",G__8090_8108))
{var seq__8091_8109 = cljs.core.seq.call(null,v_8107);
var chunk__8092_8110 = null;
var count__8093_8111 = 0;
var i__8094_8112 = 0;
while(true){
if((i__8094_8112 < count__8093_8111))
{var c_8113 = cljs.core._nth.call(null,chunk__8092_8110,i__8094_8112);
dommy.attrs.add_class_BANG_.call(null,n,c_8113);
{
var G__8114 = seq__8091_8109;
var G__8115 = chunk__8092_8110;
var G__8116 = count__8093_8111;
var G__8117 = (i__8094_8112 + 1);
seq__8091_8109 = G__8114;
chunk__8092_8110 = G__8115;
count__8093_8111 = G__8116;
i__8094_8112 = G__8117;
continue;
}
} else
{var temp__4092__auto___8118 = cljs.core.seq.call(null,seq__8091_8109);
if(temp__4092__auto___8118)
{var seq__8091_8119__$1 = temp__4092__auto___8118;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8091_8119__$1))
{var c__7066__auto___8120 = cljs.core.chunk_first.call(null,seq__8091_8119__$1);
{
var G__8121 = cljs.core.chunk_rest.call(null,seq__8091_8119__$1);
var G__8122 = c__7066__auto___8120;
var G__8123 = cljs.core.count.call(null,c__7066__auto___8120);
var G__8124 = 0;
seq__8091_8109 = G__8121;
chunk__8092_8110 = G__8122;
count__8093_8111 = G__8123;
i__8094_8112 = G__8124;
continue;
}
} else
{var c_8125 = cljs.core.first.call(null,seq__8091_8119__$1);
dommy.attrs.add_class_BANG_.call(null,n,c_8125);
{
var G__8126 = cljs.core.next.call(null,seq__8091_8119__$1);
var G__8127 = null;
var G__8128 = 0;
var G__8129 = 0;
seq__8091_8109 = G__8126;
chunk__8092_8110 = G__8127;
count__8093_8111 = G__8128;
i__8094_8112 = G__8129;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,"\uFDD0:class",G__8090_8108))
{dommy.attrs.add_class_BANG_.call(null,n,v_8107);
} else
{if("\uFDD0:else")
{dommy.attrs.set_attr_BANG_.call(null,n,k_8106,v_8107);
} else
{}
}
}
{
var G__8130 = seq__8085_8101;
var G__8131 = chunk__8086_8102;
var G__8132 = count__8087_8103;
var G__8133 = (i__8088_8104 + 1);
seq__8085_8101 = G__8130;
chunk__8086_8102 = G__8131;
count__8087_8103 = G__8132;
i__8088_8104 = G__8133;
continue;
}
} else
{var temp__4092__auto___8134 = cljs.core.seq.call(null,seq__8085_8101);
if(temp__4092__auto___8134)
{var seq__8085_8135__$1 = temp__4092__auto___8134;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8085_8135__$1))
{var c__7066__auto___8136 = cljs.core.chunk_first.call(null,seq__8085_8135__$1);
{
var G__8137 = cljs.core.chunk_rest.call(null,seq__8085_8135__$1);
var G__8138 = c__7066__auto___8136;
var G__8139 = cljs.core.count.call(null,c__7066__auto___8136);
var G__8140 = 0;
seq__8085_8101 = G__8137;
chunk__8086_8102 = G__8138;
count__8087_8103 = G__8139;
i__8088_8104 = G__8140;
continue;
}
} else
{var vec__8095_8141 = cljs.core.first.call(null,seq__8085_8135__$1);
var k_8142 = cljs.core.nth.call(null,vec__8095_8141,0,null);
var v_8143 = cljs.core.nth.call(null,vec__8095_8141,1,null);
var G__8096_8144 = k_8142;
if(cljs.core._EQ_.call(null,"\uFDD0:classes",G__8096_8144))
{var seq__8097_8145 = cljs.core.seq.call(null,v_8143);
var chunk__8098_8146 = null;
var count__8099_8147 = 0;
var i__8100_8148 = 0;
while(true){
if((i__8100_8148 < count__8099_8147))
{var c_8149 = cljs.core._nth.call(null,chunk__8098_8146,i__8100_8148);
dommy.attrs.add_class_BANG_.call(null,n,c_8149);
{
var G__8150 = seq__8097_8145;
var G__8151 = chunk__8098_8146;
var G__8152 = count__8099_8147;
var G__8153 = (i__8100_8148 + 1);
seq__8097_8145 = G__8150;
chunk__8098_8146 = G__8151;
count__8099_8147 = G__8152;
i__8100_8148 = G__8153;
continue;
}
} else
{var temp__4092__auto___8154__$1 = cljs.core.seq.call(null,seq__8097_8145);
if(temp__4092__auto___8154__$1)
{var seq__8097_8155__$1 = temp__4092__auto___8154__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8097_8155__$1))
{var c__7066__auto___8156 = cljs.core.chunk_first.call(null,seq__8097_8155__$1);
{
var G__8157 = cljs.core.chunk_rest.call(null,seq__8097_8155__$1);
var G__8158 = c__7066__auto___8156;
var G__8159 = cljs.core.count.call(null,c__7066__auto___8156);
var G__8160 = 0;
seq__8097_8145 = G__8157;
chunk__8098_8146 = G__8158;
count__8099_8147 = G__8159;
i__8100_8148 = G__8160;
continue;
}
} else
{var c_8161 = cljs.core.first.call(null,seq__8097_8155__$1);
dommy.attrs.add_class_BANG_.call(null,n,c_8161);
{
var G__8162 = cljs.core.next.call(null,seq__8097_8155__$1);
var G__8163 = null;
var G__8164 = 0;
var G__8165 = 0;
seq__8097_8145 = G__8162;
chunk__8098_8146 = G__8163;
count__8099_8147 = G__8164;
i__8100_8148 = G__8165;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,"\uFDD0:class",G__8096_8144))
{dommy.attrs.add_class_BANG_.call(null,n,v_8143);
} else
{if("\uFDD0:else")
{dommy.attrs.set_attr_BANG_.call(null,n,k_8142,v_8143);
} else
{}
}
}
{
var G__8166 = cljs.core.next.call(null,seq__8085_8135__$1);
var G__8167 = null;
var G__8168 = 0;
var G__8169 = 0;
seq__8085_8101 = G__8166;
chunk__8086_8102 = G__8167;
count__8087_8103 = G__8168;
i__8088_8104 = G__8169;
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
}catch (e8170){if((e8170 instanceof ReferenceError))
{var __8171 = e8170;
console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if("\uFDD0:else")
{throw e8170;
} else
{}
}
}dommy.template.node = (function node(data){
if((function (){var G__8173 = data;
if(G__8173)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__8173.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__8173.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__8173);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__8173);
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
