goog.provide('clojure.zip');
goog.require('cljs.core');
/**
* Creates a new zipper structure.
* 
* branch? is a fn that, given a node, returns true if can have
* children, even if it currently doesn't.
* 
* children is a fn that, given a branch node, returns a seq of its
* children.
* 
* make-node is a fn that, given an existing node and a seq of
* children, returns a new branch node with the supplied children.
* root is the root node.
*/
clojure.zip.zipper = (function zipper(branch_QMARK_,children,make_node,root){
return cljs.core.with_meta(cljs.core.PersistentVector.fromArray([root,null], true),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:zip/make-node",make_node,"\uFDD0:zip/children",children,"\uFDD0:zip/branch?",branch_QMARK_], true));
});
/**
* Returns a zipper for nested sequences, given a root sequence
*/
clojure.zip.seq_zip = (function seq_zip(root){
return clojure.zip.zipper.call(null,cljs.core.seq_QMARK_,cljs.core.identity,(function (node,children){
return cljs.core.with_meta.call(null,children,cljs.core.meta.call(null,node));
}),root);
});
/**
* Returns a zipper for nested vectors, given a root vector
*/
clojure.zip.vector_zip = (function vector_zip(root){
return clojure.zip.zipper.call(null,cljs.core.vector_QMARK_,cljs.core.seq,(function (node,children){
return cljs.core.with_meta.call(null,cljs.core.vec.call(null,children),cljs.core.meta.call(null,node));
}),root);
});
/**
* Returns a zipper for xml elements (as from xml/parse),
* given a root element
*/
clojure.zip.xml_zip = (function xml_zip(root){
return clojure.zip.zipper.call(null,cljs.core.complement.call(null,cljs.core.string_QMARK_),cljs.core.comp.call(null,cljs.core.seq,"\uFDD0:content"),(function (node,children){
return cljs.core.assoc.call(null,node,"\uFDD0:content",(function (){var and__3941__auto__ = children;
if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.apply.call(null,cljs.core.vector,children);
} else
{return and__3941__auto__;
}
})());
}),root);
});
/**
* Returns the node at loc
*/
clojure.zip.node = (function node(loc){
return loc.call(null,0);
});
/**
* Returns true if the node at loc is a branch
*/
clojure.zip.branch_QMARK_ = (function branch_QMARK_(loc){
return (new cljs.core.Keyword("\uFDD0:zip/branch?")).call(null,cljs.core.meta.call(null,loc)).call(null,clojure.zip.node.call(null,loc));
});
/**
* Returns a seq of the children of node at loc, which must be a branch
*/
clojure.zip.children = (function children(loc){
if(cljs.core.truth_(clojure.zip.branch_QMARK_.call(null,loc)))
{return (new cljs.core.Keyword("\uFDD0:zip/children")).call(null,cljs.core.meta.call(null,loc)).call(null,clojure.zip.node.call(null,loc));
} else
{throw "called children on a leaf node";
}
});
/**
* Returns a new branch node, given an existing node and new
* children. The loc is only used to supply the constructor.
*/
clojure.zip.make_node = (function make_node(loc,node,children){
return (new cljs.core.Keyword("\uFDD0:zip/make-node")).call(null,cljs.core.meta.call(null,loc)).call(null,node,children);
});
/**
* Returns a seq of nodes leading to this loc
*/
clojure.zip.path = (function path(loc){
return (new cljs.core.Keyword("\uFDD0:pnodes")).call(null,loc.call(null,1));
});
/**
* Returns a seq of the left siblings of this loc
*/
clojure.zip.lefts = (function lefts(loc){
return cljs.core.seq.call(null,(new cljs.core.Keyword("\uFDD0:l")).call(null,loc.call(null,1)));
});
/**
* Returns a seq of the right siblings of this loc
*/
clojure.zip.rights = (function rights(loc){
return (new cljs.core.Keyword("\uFDD0:r")).call(null,loc.call(null,1));
});
/**
* Returns the loc of the leftmost child of the node at this loc, or
* nil if no children
*/
clojure.zip.down = (function down(loc){
if(cljs.core.truth_(clojure.zip.branch_QMARK_.call(null,loc)))
{var vec__11242 = loc;
var node = cljs.core.nth.call(null,vec__11242,0,null);
var path = cljs.core.nth.call(null,vec__11242,1,null);
var vec__11243 = clojure.zip.children.call(null,loc);
var c = cljs.core.nth.call(null,vec__11243,0,null);
var cnext = cljs.core.nthnext.call(null,vec__11243,1);
var cs = vec__11243;
if(cljs.core.truth_(cs))
{return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([c,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:l",cljs.core.PersistentVector.EMPTY,"\uFDD0:pnodes",(cljs.core.truth_(path)?cljs.core.conj.call(null,(new cljs.core.Keyword("\uFDD0:pnodes")).call(null,path),node):cljs.core.PersistentVector.fromArray([node], true)),"\uFDD0:ppath",path,"\uFDD0:r",cnext], true)], true),cljs.core.meta.call(null,loc));
} else
{return null;
}
} else
{return null;
}
});
/**
* Returns the loc of the parent of the node at this loc, or nil if at
* the top
*/
clojure.zip.up = (function up(loc){
var vec__11246 = loc;
var node = cljs.core.nth.call(null,vec__11246,0,null);
var map__11247 = cljs.core.nth.call(null,vec__11246,1,null);
var map__11247__$1 = ((cljs.core.seq_QMARK_.call(null,map__11247))?cljs.core.apply.call(null,cljs.core.hash_map,map__11247):map__11247);
var path = map__11247__$1;
var l = cljs.core.get.call(null,map__11247__$1,"\uFDD0:l");
var ppath = cljs.core.get.call(null,map__11247__$1,"\uFDD0:ppath");
var pnodes = cljs.core.get.call(null,map__11247__$1,"\uFDD0:pnodes");
var r = cljs.core.get.call(null,map__11247__$1,"\uFDD0:r");
var changed_QMARK_ = cljs.core.get.call(null,map__11247__$1,"\uFDD0:changed?");
if(cljs.core.truth_(pnodes))
{var pnode = cljs.core.peek.call(null,pnodes);
return cljs.core.with_meta.call(null,(cljs.core.truth_(changed_QMARK_)?cljs.core.PersistentVector.fromArray([clojure.zip.make_node.call(null,loc,pnode,cljs.core.concat.call(null,l,cljs.core.cons.call(null,node,r))),(function (){var and__3941__auto__ = ppath;
if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.assoc.call(null,ppath,"\uFDD0:changed?",true);
} else
{return and__3941__auto__;
}
})()], true):cljs.core.PersistentVector.fromArray([pnode,ppath], true)),cljs.core.meta.call(null,loc));
} else
{return null;
}
});
/**
* zips all the way up and returns the root node, reflecting any
* changes.
*/
clojure.zip.root = (function root(loc){
while(true){
if(cljs.core._EQ_.call(null,"\uFDD0:end",loc.call(null,1)))
{return clojure.zip.node.call(null,loc);
} else
{var p = clojure.zip.up.call(null,loc);
if(cljs.core.truth_(p))
{{
var G__11248 = p;
loc = G__11248;
continue;
}
} else
{return clojure.zip.node.call(null,loc);
}
}
break;
}
});
/**
* Returns the loc of the right sibling of the node at this loc, or nil
*/
clojure.zip.right = (function right(loc){
var vec__11252 = loc;
var node = cljs.core.nth.call(null,vec__11252,0,null);
var map__11253 = cljs.core.nth.call(null,vec__11252,1,null);
var map__11253__$1 = ((cljs.core.seq_QMARK_.call(null,map__11253))?cljs.core.apply.call(null,cljs.core.hash_map,map__11253):map__11253);
var path = map__11253__$1;
var l = cljs.core.get.call(null,map__11253__$1,"\uFDD0:l");
var vec__11254 = cljs.core.get.call(null,map__11253__$1,"\uFDD0:r");
var r = cljs.core.nth.call(null,vec__11254,0,null);
var rnext = cljs.core.nthnext.call(null,vec__11254,1);
var rs = vec__11254;
if(cljs.core.truth_((function (){var and__3941__auto__ = path;
if(cljs.core.truth_(and__3941__auto__))
{return rs;
} else
{return and__3941__auto__;
}
})()))
{return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([r,cljs.core.assoc.call(null,path,"\uFDD0:l",cljs.core.conj.call(null,l,node),"\uFDD0:r",rnext)], true),cljs.core.meta.call(null,loc));
} else
{return null;
}
});
/**
* Returns the loc of the rightmost sibling of the node at this loc, or self
*/
clojure.zip.rightmost = (function rightmost(loc){
var vec__11257 = loc;
var node = cljs.core.nth.call(null,vec__11257,0,null);
var map__11258 = cljs.core.nth.call(null,vec__11257,1,null);
var map__11258__$1 = ((cljs.core.seq_QMARK_.call(null,map__11258))?cljs.core.apply.call(null,cljs.core.hash_map,map__11258):map__11258);
var path = map__11258__$1;
var l = cljs.core.get.call(null,map__11258__$1,"\uFDD0:l");
var r = cljs.core.get.call(null,map__11258__$1,"\uFDD0:r");
if(cljs.core.truth_((function (){var and__3941__auto__ = path;
if(cljs.core.truth_(and__3941__auto__))
{return r;
} else
{return and__3941__auto__;
}
})()))
{return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([cljs.core.last.call(null,r),cljs.core.assoc.call(null,path,"\uFDD0:l",cljs.core.apply.call(null,cljs.core.conj,l,node,cljs.core.butlast.call(null,r)),"\uFDD0:r",null)], true),cljs.core.meta.call(null,loc));
} else
{return loc;
}
});
/**
* Returns the loc of the left sibling of the node at this loc, or nil
*/
clojure.zip.left = (function left(loc){
var vec__11261 = loc;
var node = cljs.core.nth.call(null,vec__11261,0,null);
var map__11262 = cljs.core.nth.call(null,vec__11261,1,null);
var map__11262__$1 = ((cljs.core.seq_QMARK_.call(null,map__11262))?cljs.core.apply.call(null,cljs.core.hash_map,map__11262):map__11262);
var path = map__11262__$1;
var l = cljs.core.get.call(null,map__11262__$1,"\uFDD0:l");
var r = cljs.core.get.call(null,map__11262__$1,"\uFDD0:r");
if(cljs.core.truth_((function (){var and__3941__auto__ = path;
if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.seq.call(null,l);
} else
{return and__3941__auto__;
}
})()))
{return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([cljs.core.peek.call(null,l),cljs.core.assoc.call(null,path,"\uFDD0:l",cljs.core.pop.call(null,l),"\uFDD0:r",cljs.core.cons.call(null,node,r))], true),cljs.core.meta.call(null,loc));
} else
{return null;
}
});
/**
* Returns the loc of the leftmost sibling of the node at this loc, or self
*/
clojure.zip.leftmost = (function leftmost(loc){
var vec__11265 = loc;
var node = cljs.core.nth.call(null,vec__11265,0,null);
var map__11266 = cljs.core.nth.call(null,vec__11265,1,null);
var map__11266__$1 = ((cljs.core.seq_QMARK_.call(null,map__11266))?cljs.core.apply.call(null,cljs.core.hash_map,map__11266):map__11266);
var path = map__11266__$1;
var l = cljs.core.get.call(null,map__11266__$1,"\uFDD0:l");
var r = cljs.core.get.call(null,map__11266__$1,"\uFDD0:r");
if(cljs.core.truth_((function (){var and__3941__auto__ = path;
if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.seq.call(null,l);
} else
{return and__3941__auto__;
}
})()))
{return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([cljs.core.first.call(null,l),cljs.core.assoc.call(null,path,"\uFDD0:l",cljs.core.PersistentVector.EMPTY,"\uFDD0:r",cljs.core.concat.call(null,cljs.core.rest.call(null,l),cljs.core.PersistentVector.fromArray([node], true),r))], true),cljs.core.meta.call(null,loc));
} else
{return loc;
}
});
/**
* Inserts the item as the left sibling of the node at this loc,
* without moving
*/
clojure.zip.insert_left = (function insert_left(loc,item){
var vec__11269 = loc;
var node = cljs.core.nth.call(null,vec__11269,0,null);
var map__11270 = cljs.core.nth.call(null,vec__11269,1,null);
var map__11270__$1 = ((cljs.core.seq_QMARK_.call(null,map__11270))?cljs.core.apply.call(null,cljs.core.hash_map,map__11270):map__11270);
var path = map__11270__$1;
var l = cljs.core.get.call(null,map__11270__$1,"\uFDD0:l");
if((path == null))
{throw "Insert at top";
} else
{return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([node,cljs.core.assoc.call(null,path,"\uFDD0:l",cljs.core.conj.call(null,l,item),"\uFDD0:changed?",true)], true),cljs.core.meta.call(null,loc));
}
});
/**
* Inserts the item as the right sibling of the node at this loc,
* without moving
*/
clojure.zip.insert_right = (function insert_right(loc,item){
var vec__11273 = loc;
var node = cljs.core.nth.call(null,vec__11273,0,null);
var map__11274 = cljs.core.nth.call(null,vec__11273,1,null);
var map__11274__$1 = ((cljs.core.seq_QMARK_.call(null,map__11274))?cljs.core.apply.call(null,cljs.core.hash_map,map__11274):map__11274);
var path = map__11274__$1;
var r = cljs.core.get.call(null,map__11274__$1,"\uFDD0:r");
if((path == null))
{throw "Insert at top";
} else
{return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([node,cljs.core.assoc.call(null,path,"\uFDD0:r",cljs.core.cons.call(null,item,r),"\uFDD0:changed?",true)], true),cljs.core.meta.call(null,loc));
}
});
/**
* Replaces the node at this loc, without moving
*/
clojure.zip.replace = (function replace(loc,node){
var vec__11276 = loc;
var _ = cljs.core.nth.call(null,vec__11276,0,null);
var path = cljs.core.nth.call(null,vec__11276,1,null);
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([node,cljs.core.assoc.call(null,path,"\uFDD0:changed?",true)], true),cljs.core.meta.call(null,loc));
});
/**
* Replaces the node at this loc with the value of (f node args)
* @param {...*} var_args
*/
clojure.zip.edit = (function() { 
var edit__delegate = function (loc,f,args){
return clojure.zip.replace.call(null,loc,cljs.core.apply.call(null,f,clojure.zip.node.call(null,loc),args));
};
var edit = function (loc,f,var_args){
var args = null;
if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return edit__delegate.call(this, loc, f, args);
};
edit.cljs$lang$maxFixedArity = 2;
edit.cljs$lang$applyTo = (function (arglist__11277){
var loc = cljs.core.first(arglist__11277);
arglist__11277 = cljs.core.next(arglist__11277);
var f = cljs.core.first(arglist__11277);
var args = cljs.core.rest(arglist__11277);
return edit__delegate(loc, f, args);
});
edit.cljs$core$IFn$_invoke$arity$variadic = edit__delegate;
return edit;
})()
;
/**
* Inserts the item as the leftmost child of the node at this loc,
* without moving
*/
clojure.zip.insert_child = (function insert_child(loc,item){
return clojure.zip.replace.call(null,loc,clojure.zip.make_node.call(null,loc,clojure.zip.node.call(null,loc),cljs.core.cons.call(null,item,clojure.zip.children.call(null,loc))));
});
/**
* Inserts the item as the rightmost child of the node at this loc,
* without moving
*/
clojure.zip.append_child = (function append_child(loc,item){
return clojure.zip.replace.call(null,loc,clojure.zip.make_node.call(null,loc,clojure.zip.node.call(null,loc),cljs.core.concat.call(null,clojure.zip.children.call(null,loc),cljs.core.PersistentVector.fromArray([item], true))));
});
/**
* Moves to the next loc in the hierarchy, depth-first. When reaching
* the end, returns a distinguished loc detectable via end?. If already
* at the end, stays there.
*/
clojure.zip.next = (function next(loc){
if(cljs.core._EQ_.call(null,"\uFDD0:end",loc.call(null,1)))
{return loc;
} else
{var or__3943__auto__ = (function (){var and__3941__auto__ = clojure.zip.branch_QMARK_.call(null,loc);
if(cljs.core.truth_(and__3941__auto__))
{return clojure.zip.down.call(null,loc);
} else
{return and__3941__auto__;
}
})();
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = clojure.zip.right.call(null,loc);
if(cljs.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{var p = loc;
while(true){
if(cljs.core.truth_(clojure.zip.up.call(null,p)))
{var or__3943__auto____$2 = clojure.zip.right.call(null,clojure.zip.up.call(null,p));
if(cljs.core.truth_(or__3943__auto____$2))
{return or__3943__auto____$2;
} else
{{
var G__11278 = clojure.zip.up.call(null,p);
p = G__11278;
continue;
}
}
} else
{return cljs.core.PersistentVector.fromArray([clojure.zip.node.call(null,p),"\uFDD0:end"], true);
}
break;
}
}
}
}
});
/**
* Moves to the previous loc in the hierarchy, depth-first. If already
* at the root, returns nil.
*/
clojure.zip.prev = (function prev(loc){
var temp__4090__auto__ = clojure.zip.left.call(null,loc);
if(cljs.core.truth_(temp__4090__auto__))
{var lloc = temp__4090__auto__;
var loc__$1 = lloc;
while(true){
var temp__4090__auto____$1 = (function (){var and__3941__auto__ = clojure.zip.branch_QMARK_.call(null,loc__$1);
if(cljs.core.truth_(and__3941__auto__))
{return clojure.zip.down.call(null,loc__$1);
} else
{return and__3941__auto__;
}
})();
if(cljs.core.truth_(temp__4090__auto____$1))
{var child = temp__4090__auto____$1;
{
var G__11279 = clojure.zip.rightmost.call(null,child);
loc__$1 = G__11279;
continue;
}
} else
{return loc__$1;
}
break;
}
} else
{return clojure.zip.up.call(null,loc);
}
});
/**
* Returns true if loc represents the end of a depth-first walk
*/
clojure.zip.end_QMARK_ = (function end_QMARK_(loc){
return cljs.core._EQ_.call(null,"\uFDD0:end",loc.call(null,1));
});
/**
* Removes the node at loc, returning the loc that would have preceded
* it in a depth-first walk.
*/
clojure.zip.remove = (function remove(loc){
var vec__11282 = loc;
var node = cljs.core.nth.call(null,vec__11282,0,null);
var map__11283 = cljs.core.nth.call(null,vec__11282,1,null);
var map__11283__$1 = ((cljs.core.seq_QMARK_.call(null,map__11283))?cljs.core.apply.call(null,cljs.core.hash_map,map__11283):map__11283);
var path = map__11283__$1;
var l = cljs.core.get.call(null,map__11283__$1,"\uFDD0:l");
var ppath = cljs.core.get.call(null,map__11283__$1,"\uFDD0:ppath");
var pnodes = cljs.core.get.call(null,map__11283__$1,"\uFDD0:pnodes");
var rs = cljs.core.get.call(null,map__11283__$1,"\uFDD0:r");
if((path == null))
{throw "Remove at top";
} else
{if((cljs.core.count.call(null,l) > 0))
{var loc__$1 = cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([cljs.core.peek.call(null,l),cljs.core.assoc.call(null,path,"\uFDD0:l",cljs.core.pop.call(null,l),"\uFDD0:changed?",true)], true),cljs.core.meta.call(null,loc));
while(true){
var temp__4090__auto__ = (function (){var and__3941__auto__ = clojure.zip.branch_QMARK_.call(null,loc__$1);
if(cljs.core.truth_(and__3941__auto__))
{return clojure.zip.down.call(null,loc__$1);
} else
{return and__3941__auto__;
}
})();
if(cljs.core.truth_(temp__4090__auto__))
{var child = temp__4090__auto__;
{
var G__11284 = clojure.zip.rightmost.call(null,child);
loc__$1 = G__11284;
continue;
}
} else
{return loc__$1;
}
break;
}
} else
{return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([clojure.zip.make_node.call(null,loc,cljs.core.peek.call(null,pnodes),rs),(function (){var and__3941__auto__ = ppath;
if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.assoc.call(null,ppath,"\uFDD0:changed?",true);
} else
{return and__3941__auto__;
}
})()], true),cljs.core.meta.call(null,loc));
}
}
});