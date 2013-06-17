goog.provide('reactive.client');
goog.require('cljs.core');
goog.require('crate.page');
goog.require('dommy.template');
goog.require('dommy.attrs');
goog.require('dommy.core');
goog.require('reactive.three');
goog.require('dommy.template');
goog.require('dommy.core');
goog.require('dommy.attrs');
goog.require('crate.page');
goog.require('clojure.browser.repl');
/**
* @param {...*} var_args
*/
reactive.client.node_seq = (function() { 
var node_seq__delegate = function (selector,p__4097){
var map__4099 = p__4097;
var map__4099__$1 = ((cljs.core.seq_QMARK_.call(null,map__4099))?cljs.core.apply.call(null,cljs.core.hash_map,map__4099):map__4099);
var remove_nil_QMARK_ = cljs.core.get.call(null,map__4099__$1,"\uFDD0:remove-nil?");
var visible_QMARK_ = cljs.core.get.call(null,map__4099__$1,"\uFDD0:visible?");
var nodes = cljs.core.filter.call(null,(function (p1__3466_SHARP_){
return dommy.core.descendant_QMARK_.call(null,p1__3466_SHARP_,document.body);
}),dommy.utils.__GT_Array.call(null,document.querySelectorAll(dommy.core.selector.call(null,selector))));
if(cljs.core.truth_(remove_nil_QMARK_))
{return cljs.core.remove.call(null,cljs.core.nil_QMARK_,nodes);
} else
{return nodes;
}
};
var node_seq = function (selector,var_args){
var p__4097 = null;
if (arguments.length > 1) {
  p__4097 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return node_seq__delegate.call(this, selector, p__4097);
};
node_seq.cljs$lang$maxFixedArity = 1;
node_seq.cljs$lang$applyTo = (function (arglist__4100){
var selector = cljs.core.first(arglist__4100);
var p__4097 = cljs.core.rest(arglist__4100);
return node_seq__delegate(selector, p__4097);
});
node_seq.cljs$core$IFn$_invoke$arity$variadic = node_seq__delegate;
return node_seq;
})()
;
reactive.client.sync = (function sync(model){
return 1;
});
reactive.client.validate_click = (function validate_click(new_val){
return (new_val < 100);
});
reactive.client.watch_model = (function watch_model(model,context){
var watch_fn = (function (_context,_key,_ref,old_value,new_value){
return cljs.core.println.call(null,_context,_key,_ref,old_value,new_value);
});
return cljs.core.add_watch.call(null,model,null,cljs.core.partial.call(null,watch_fn,context));
});
/**
* @param {...*} var_args
*/
reactive.client.init_model = (function() { 
var init_model__delegate = function (initial_state,state_fn,validator,watchers){
var init = cljs.core.atom.call(null,initial_state,"\uFDD0:validator",validator);
cljs.core.add_watch.call(null,init,null,(function (_key,_ref,old_value,new_value){
return console.log(_key,_ref,old_value,new_value);
}));
return init;
};
var init_model = function (initial_state,state_fn,validator,var_args){
var watchers = null;
if (arguments.length > 3) {
  watchers = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return init_model__delegate.call(this, initial_state, state_fn, validator, watchers);
};
init_model.cljs$lang$maxFixedArity = 3;
init_model.cljs$lang$applyTo = (function (arglist__4101){
var initial_state = cljs.core.first(arglist__4101);
arglist__4101 = cljs.core.next(arglist__4101);
var state_fn = cljs.core.first(arglist__4101);
arglist__4101 = cljs.core.next(arglist__4101);
var validator = cljs.core.first(arglist__4101);
var watchers = cljs.core.rest(arglist__4101);
return init_model__delegate(initial_state, state_fn, validator, watchers);
});
init_model.cljs$core$IFn$_invoke$arity$variadic = init_model__delegate;
return init_model;
})()
;
reactive.client.navbar = (function navbar(reactive__$1){
var dom4107 = document.createElement("div");
dom4107.className = "navbar";
dom4107.appendChild((function (){var dom4108 = document.createElement("a");
dom4108.className = "navbar-brand";
if("#")
{dom4108.setAttribute("href","#");
} else
{}
dom4108.appendChild(document.createTextNode("Reactive"));
return dom4108;
})());
dom4107.appendChild((function (){var dom4109 = document.createElement("ul");
dom4109.className = "nav navbar-nav";
dom4109.appendChild((function (){var dom4110 = document.createElement("li");
dom4110.className = "active";
dom4110.appendChild((function (){var dom4111 = document.createElement("a");
if("#")
{dom4111.setAttribute("href","#");
} else
{}
dom4111.appendChild(document.createTextNode("Home"));
return dom4111;
})());
return dom4110;
})());
return dom4109;
})());
return dom4107;
});
reactive.client.index = (function index(reactive__$1){
var dom4114 = document.createElement("div");
dom4114.className = "container";
dom4114.appendChild((function (){var dom4115 = document.createElement("h1");
dom4115.appendChild(document.createTextNode("I'm the index view!"));
return dom4115;
})());
dom4114.appendChild(dommy.template.__GT_node_like.call(null,reactive__$1));
return dom4114;
});
reactive.client.clickable = (function clickable(reactive__$1){
var dom4117 = document.createElement("h1");
if("clickable")
{dom4117.setAttribute("id","clickable");
} else
{}
dom4117.appendChild(document.createTextNode("Click me: "));
dom4117.appendChild(dommy.template.__GT_node_like.call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0:state")).call(null,reactive__$1))));
return dom4117;
});
reactive.client.nav = (function nav(reactive__$1){
var dom4119 = document.createElement("a");
if("#")
{dom4119.setAttribute("href","#");
} else
{}
if("navable")
{dom4119.setAttribute("id","navable");
} else
{}
dom4119.appendChild(dommy.template.__GT_node_like.call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0:state")).call(null,reactive__$1))));
return dom4119;
});
reactive.client.IObservable = {};
reactive.client.IReactiveView = {};
reactive.client.render = (function render(this$,compiled_reactive){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.reactive$client$IReactiveView$render$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.reactive$client$IReactiveView$render$arity$2(this$,compiled_reactive);
} else
{var x__2957__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (reactive.client.render[goog.typeOf(x__2957__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (reactive.client.render["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IReactiveView.render",this$);
}
}
})().call(null,this$,compiled_reactive);
}
});
reactive.client.IObserver = {};
reactive.client.attach = (function attach(this$,reactive__$1,selector,view){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.reactive$client$IObserver$attach$arity$4;
} else
{return and__3941__auto__;
}
})())
{return this$.reactive$client$IObserver$attach$arity$4(this$,reactive__$1,selector,view);
} else
{var x__2957__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (reactiveclient.attach[goog.typeOf(x__2957__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (reactiveclient.attach["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IObserver.attach",this$);
}
}
})().call(null,this$,reactive__$1,selector,view);
}
});
reactive.client.dispatch = (function dispatch(this$,reactive__$1){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.reactive$client$IObserver$dispatch$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.reactive$client$IObserver$dispatch$arity$2(this$,reactive__$1);
} else
{var x__2957__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (reactiveclient.dispatch[goog.typeOf(x__2957__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (reactiveclient.dispatch["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IObserver.dispatch",this$);
}
}
})().call(null,this$,reactive__$1);
}
});
goog.provide('reactive.client.Observer');

/**
* @constructor
* @param {*} event
* @param {*} event_fn
* @param {*} attached
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
reactive.client.Observer = (function (event,event_fn,attached,__meta,__extmap){
this.event = event;
this.event_fn = event_fn;
this.attached = attached;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>3){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
reactive.client.Observer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__2910__auto__){
var self__ = this;
var h__2783__auto__ = self__.__hash;
if(!((h__2783__auto__ == null)))
{return h__2783__auto__;
} else
{var h__2783__auto____$1 = cljs.core.hash_imap.call(null,this__2910__auto__);
self__.__hash = h__2783__auto____$1;
return h__2783__auto____$1;
}
});
reactive.client.Observer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__2915__auto__,k__2916__auto__){
var self__ = this;
return this__2915__auto__.cljs$core$ILookup$_lookup$arity$3(this__2915__auto__,k__2916__auto__,null);
});
reactive.client.Observer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__2917__auto__,k4122,else__2918__auto__){
var self__ = this;
if((k4122 === "\uFDD0:event"))
{return self__.event;
} else
{if((k4122 === "\uFDD0:event-fn"))
{return self__.event_fn;
} else
{if((k4122 === "\uFDD0:attached"))
{return self__.attached;
} else
{if("\uFDD0:else")
{return cljs.core.get.call(null,self__.__extmap,k4122,else__2918__auto__);
} else
{return null;
}
}
}
}
});
reactive.client.Observer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__2922__auto__,k__2923__auto__,G__4121){
var self__ = this;
var pred__4124 = cljs.core.identical_QMARK_;
var expr__4125 = k__2923__auto__;
if(pred__4124.call(null,"\uFDD0:event",expr__4125))
{return (new reactive.client.Observer(G__4121,self__.event_fn,self__.attached,self__.__meta,self__.__extmap,null));
} else
{if(pred__4124.call(null,"\uFDD0:event-fn",expr__4125))
{return (new reactive.client.Observer(self__.event,G__4121,self__.attached,self__.__meta,self__.__extmap,null));
} else
{if(pred__4124.call(null,"\uFDD0:attached",expr__4125))
{return (new reactive.client.Observer(self__.event,self__.event_fn,G__4121,self__.__meta,self__.__extmap,null));
} else
{return (new reactive.client.Observer(self__.event,self__.event_fn,self__.attached,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__2923__auto__,G__4121),null));
}
}
}
});
reactive.client.Observer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__2929__auto__,writer__2930__auto__,opts__2931__auto__){
var self__ = this;
var pr_pair__2932__auto__ = (function (keyval__2933__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__2930__auto__,cljs.core.pr_writer,""," ","",opts__2931__auto__,keyval__2933__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__2930__auto__,pr_pair__2932__auto__,"#reactive.client.Observer{",", ","}",opts__2931__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0:event",self__.event),cljs.core.vector.call(null,"\uFDD0:event-fn",self__.event_fn),cljs.core.vector.call(null,"\uFDD0:attached",self__.attached)], true),self__.__extmap));
});
reactive.client.Observer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__2920__auto__,entry__2921__auto__){
var self__ = this;
if(cljs.core.vector_QMARK_.call(null,entry__2921__auto__))
{return this__2920__auto__.cljs$core$IAssociative$_assoc$arity$3(this__2920__auto__,cljs.core._nth.call(null,entry__2921__auto__,0),cljs.core._nth.call(null,entry__2921__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__2920__auto__,entry__2921__auto__);
}
});
reactive.client.Observer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__2927__auto__){
var self__ = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0:event",self__.event),cljs.core.vector.call(null,"\uFDD0:event-fn",self__.event_fn),cljs.core.vector.call(null,"\uFDD0:attached",self__.attached)], true),self__.__extmap));
});
reactive.client.Observer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__2919__auto__){
var self__ = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});
reactive.client.Observer.prototype.reactive$client$IObserver$ = true;
reactive.client.Observer.prototype.reactive$client$IObserver$attach$arity$4 = (function (this$,reactive__$1,selector,view){
var self__ = this;
return cljs.core.swap_BANG_.call(null,self__.attached,cljs.core.conj,cljs.core.hash_map.call(null,"\uFDD0:reactive",reactive__$1,"\uFDD0:observation",(function (){
return dommy.core.listen_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,selector)),self__.event,(function (e){
cljs.core.swap_BANG_.call(null,(new cljs.core.Keyword("\uFDD0:state")).call(null,reactive__$1),cljs.core.inc);
return dommy.core.replace_contents_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,selector)),view.call(null,reactive__$1));
}));
})));
});
reactive.client.Observer.prototype.reactive$client$IObserver$dispatch$arity$2 = (function (this$,reactive__$1){
var self__ = this;
return cljs.core.apply.call(null,(new cljs.core.Keyword("\uFDD0:observation")).call(null,cljs.core.first.call(null,cljs.core.get.call(null,cljs.core.group_by.call(null,"\uFDD0:reactive",cljs.core.deref.call(null,self__.attached)),reactive__$1))),cljs.core.PersistentVector.EMPTY);
});
reactive.client.Observer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__2911__auto__,other__2912__auto__){
var self__ = this;
if(cljs.core.truth_((function (){var and__3941__auto__ = other__2912__auto__;
if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = (this__2911__auto__.constructor === other__2912__auto__.constructor);
if(and__3941__auto____$1)
{return cljs.core.equiv_map.call(null,this__2911__auto__,other__2912__auto__);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})()))
{return true;
} else
{return false;
}
});
reactive.client.Observer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__2914__auto__,G__4121){
var self__ = this;
return (new reactive.client.Observer(self__.event,self__.event_fn,self__.attached,G__4121,self__.__extmap,self__.__hash));
});
reactive.client.Observer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__2913__auto__){
var self__ = this;
return self__.__meta;
});
reactive.client.Observer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__2924__auto__,k__2925__auto__){
var self__ = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0:event-fn",null,"\uFDD0:event",null,"\uFDD0:attached",null], true),k__2925__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__2924__auto__),self__.__meta),k__2925__auto__);
} else
{return (new reactive.client.Observer(self__.event,self__.event_fn,self__.attached,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__2925__auto__)),null));
}
});
reactive.client.Observer.cljs$lang$type = true;
reactive.client.Observer.cljs$lang$ctorPrSeq = (function (this__2950__auto__){
return cljs.core.list.call(null,"reactive.client/Observer");
});
reactive.client.Observer.cljs$lang$ctorPrWriter = (function (this__2950__auto__,writer__2951__auto__){
return cljs.core._write.call(null,writer__2951__auto__,"reactive.client/Observer");
});
reactive.client.__GT_Observer = (function __GT_Observer(event,event_fn,attached){
return (new reactive.client.Observer(event,event_fn,attached));
});
reactive.client.map__GT_Observer = (function map__GT_Observer(G__4123){
return (new reactive.client.Observer((new cljs.core.Keyword("\uFDD0:event")).call(null,G__4123),(new cljs.core.Keyword("\uFDD0:event-fn")).call(null,G__4123),(new cljs.core.Keyword("\uFDD0:attached")).call(null,G__4123),null,cljs.core.dissoc.call(null,G__4123,"\uFDD0:event","\uFDD0:event-fn","\uFDD0:attached")));
});
goog.provide('reactive.client.ReactiveView');

/**
* @constructor
* @param {*} view
* @param {*} reactive
* @param {*} selector
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
reactive.client.ReactiveView = (function (view,reactive,selector,__meta,__extmap){
this.view = view;
this.reactive = reactive;
this.selector = selector;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>3){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
reactive.client.ReactiveView.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__2910__auto__){
var self__ = this;
var h__2783__auto__ = self__.__hash;
if(!((h__2783__auto__ == null)))
{return h__2783__auto__;
} else
{var h__2783__auto____$1 = cljs.core.hash_imap.call(null,this__2910__auto__);
self__.__hash = h__2783__auto____$1;
return h__2783__auto____$1;
}
});
reactive.client.ReactiveView.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__2915__auto__,k__2916__auto__){
var self__ = this;
return this__2915__auto__.cljs$core$ILookup$_lookup$arity$3(this__2915__auto__,k__2916__auto__,null);
});
reactive.client.ReactiveView.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__2917__auto__,k4128,else__2918__auto__){
var self__ = this;
if((k4128 === "\uFDD0:view"))
{return self__.view;
} else
{if((k4128 === "\uFDD0:reactive"))
{return self__.reactive;
} else
{if((k4128 === "\uFDD0:selector"))
{return self__.selector;
} else
{if("\uFDD0:else")
{return cljs.core.get.call(null,self__.__extmap,k4128,else__2918__auto__);
} else
{return null;
}
}
}
}
});
reactive.client.ReactiveView.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__2922__auto__,k__2923__auto__,G__4127){
var self__ = this;
var pred__4130 = cljs.core.identical_QMARK_;
var expr__4131 = k__2923__auto__;
if(pred__4130.call(null,"\uFDD0:view",expr__4131))
{return (new reactive.client.ReactiveView(G__4127,self__.reactive,self__.selector,self__.__meta,self__.__extmap,null));
} else
{if(pred__4130.call(null,"\uFDD0:reactive",expr__4131))
{return (new reactive.client.ReactiveView(self__.view,G__4127,self__.selector,self__.__meta,self__.__extmap,null));
} else
{if(pred__4130.call(null,"\uFDD0:selector",expr__4131))
{return (new reactive.client.ReactiveView(self__.view,self__.reactive,G__4127,self__.__meta,self__.__extmap,null));
} else
{return (new reactive.client.ReactiveView(self__.view,self__.reactive,self__.selector,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__2923__auto__,G__4127),null));
}
}
}
});
reactive.client.ReactiveView.prototype.reactive$client$IReactiveView$ = true;
reactive.client.ReactiveView.prototype.reactive$client$IReactiveView$render$arity$2 = (function (this$,compiled_reactive){
var self__ = this;
dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,self__.selector)),self__.view.call(null,compiled_reactive));
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__4120_SHARP_){
return reactive.client.dispatch.call(null,p1__4120_SHARP_,self__.reactive);
}),cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0:observers")).call(null,self__.reactive))));
});
reactive.client.ReactiveView.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__2929__auto__,writer__2930__auto__,opts__2931__auto__){
var self__ = this;
var pr_pair__2932__auto__ = (function (keyval__2933__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__2930__auto__,cljs.core.pr_writer,""," ","",opts__2931__auto__,keyval__2933__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__2930__auto__,pr_pair__2932__auto__,"#reactive.client.ReactiveView{",", ","}",opts__2931__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0:view",self__.view),cljs.core.vector.call(null,"\uFDD0:reactive",self__.reactive),cljs.core.vector.call(null,"\uFDD0:selector",self__.selector)], true),self__.__extmap));
});
reactive.client.ReactiveView.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__2920__auto__,entry__2921__auto__){
var self__ = this;
if(cljs.core.vector_QMARK_.call(null,entry__2921__auto__))
{return this__2920__auto__.cljs$core$IAssociative$_assoc$arity$3(this__2920__auto__,cljs.core._nth.call(null,entry__2921__auto__,0),cljs.core._nth.call(null,entry__2921__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__2920__auto__,entry__2921__auto__);
}
});
reactive.client.ReactiveView.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__2927__auto__){
var self__ = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0:view",self__.view),cljs.core.vector.call(null,"\uFDD0:reactive",self__.reactive),cljs.core.vector.call(null,"\uFDD0:selector",self__.selector)], true),self__.__extmap));
});
reactive.client.ReactiveView.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__2919__auto__){
var self__ = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});
reactive.client.ReactiveView.prototype.reactive$client$IObservable$ = true;
reactive.client.ReactiveView.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__2911__auto__,other__2912__auto__){
var self__ = this;
if(cljs.core.truth_((function (){var and__3941__auto__ = other__2912__auto__;
if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = (this__2911__auto__.constructor === other__2912__auto__.constructor);
if(and__3941__auto____$1)
{return cljs.core.equiv_map.call(null,this__2911__auto__,other__2912__auto__);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})()))
{return true;
} else
{return false;
}
});
reactive.client.ReactiveView.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__2914__auto__,G__4127){
var self__ = this;
return (new reactive.client.ReactiveView(self__.view,self__.reactive,self__.selector,G__4127,self__.__extmap,self__.__hash));
});
reactive.client.ReactiveView.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__2913__auto__){
var self__ = this;
return self__.__meta;
});
reactive.client.ReactiveView.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__2924__auto__,k__2925__auto__){
var self__ = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0:view",null,"\uFDD0:reactive",null,"\uFDD0:selector",null], true),k__2925__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__2924__auto__),self__.__meta),k__2925__auto__);
} else
{return (new reactive.client.ReactiveView(self__.view,self__.reactive,self__.selector,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__2925__auto__)),null));
}
});
reactive.client.ReactiveView.cljs$lang$type = true;
reactive.client.ReactiveView.cljs$lang$ctorPrSeq = (function (this__2950__auto__){
return cljs.core.list.call(null,"reactive.client/ReactiveView");
});
reactive.client.ReactiveView.cljs$lang$ctorPrWriter = (function (this__2950__auto__,writer__2951__auto__){
return cljs.core._write.call(null,writer__2951__auto__,"reactive.client/ReactiveView");
});
reactive.client.__GT_ReactiveView = (function __GT_ReactiveView(view,reactive__$1,selector){
return (new reactive.client.ReactiveView(view,reactive__$1,selector));
});
reactive.client.map__GT_ReactiveView = (function map__GT_ReactiveView(G__4129){
return (new reactive.client.ReactiveView((new cljs.core.Keyword("\uFDD0:view")).call(null,G__4129),(new cljs.core.Keyword("\uFDD0:reactive")).call(null,G__4129),(new cljs.core.Keyword("\uFDD0:selector")).call(null,G__4129),null,cljs.core.dissoc.call(null,G__4129,"\uFDD0:view","\uFDD0:reactive","\uFDD0:selector")));
});
reactive.client.IReactive = {};
reactive.client.compile = (function compile(this$,view,selector,observers){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.reactive$client$IReactive$compile$arity$4;
} else
{return and__3941__auto__;
}
})())
{return this$.reactive$client$IReactive$compile$arity$4(this$,view,selector,observers);
} else
{var x__2957__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (reactive.client.compile[goog.typeOf(x__2957__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (reactive.client.compile["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IReactive.compile",this$);
}
}
})().call(null,this$,view,selector,observers);
}
});
goog.provide('reactive.client.Reactive');

/**
* @constructor
* @param {*} state
* @param {*} validation_fn
* @param {*} observers
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
reactive.client.Reactive = (function (state,validation_fn,observers,__meta,__extmap){
this.state = state;
this.validation_fn = validation_fn;
this.observers = observers;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>3){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
reactive.client.Reactive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__2910__auto__){
var self__ = this;
var h__2783__auto__ = self__.__hash;
if(!((h__2783__auto__ == null)))
{return h__2783__auto__;
} else
{var h__2783__auto____$1 = cljs.core.hash_imap.call(null,this__2910__auto__);
self__.__hash = h__2783__auto____$1;
return h__2783__auto____$1;
}
});
reactive.client.Reactive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__2915__auto__,k__2916__auto__){
var self__ = this;
return this__2915__auto__.cljs$core$ILookup$_lookup$arity$3(this__2915__auto__,k__2916__auto__,null);
});
reactive.client.Reactive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__2917__auto__,k4136,else__2918__auto__){
var self__ = this;
if((k4136 === "\uFDD0:state"))
{return self__.state;
} else
{if((k4136 === "\uFDD0:validation-fn"))
{return self__.validation_fn;
} else
{if((k4136 === "\uFDD0:observers"))
{return self__.observers;
} else
{if("\uFDD0:else")
{return cljs.core.get.call(null,self__.__extmap,k4136,else__2918__auto__);
} else
{return null;
}
}
}
}
});
reactive.client.Reactive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__2922__auto__,k__2923__auto__,G__4135){
var self__ = this;
var pred__4138 = cljs.core.identical_QMARK_;
var expr__4139 = k__2923__auto__;
if(pred__4138.call(null,"\uFDD0:state",expr__4139))
{return (new reactive.client.Reactive(G__4135,self__.validation_fn,self__.observers,self__.__meta,self__.__extmap,null));
} else
{if(pred__4138.call(null,"\uFDD0:validation-fn",expr__4139))
{return (new reactive.client.Reactive(self__.state,G__4135,self__.observers,self__.__meta,self__.__extmap,null));
} else
{if(pred__4138.call(null,"\uFDD0:observers",expr__4139))
{return (new reactive.client.Reactive(self__.state,self__.validation_fn,G__4135,self__.__meta,self__.__extmap,null));
} else
{return (new reactive.client.Reactive(self__.state,self__.validation_fn,self__.observers,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__2923__auto__,G__4135),null));
}
}
}
});
reactive.client.Reactive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__2929__auto__,writer__2930__auto__,opts__2931__auto__){
var self__ = this;
var pr_pair__2932__auto__ = (function (keyval__2933__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__2930__auto__,cljs.core.pr_writer,""," ","",opts__2931__auto__,keyval__2933__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__2930__auto__,pr_pair__2932__auto__,"#reactive.client.Reactive{",", ","}",opts__2931__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0:state",self__.state),cljs.core.vector.call(null,"\uFDD0:validation-fn",self__.validation_fn),cljs.core.vector.call(null,"\uFDD0:observers",self__.observers)], true),self__.__extmap));
});
reactive.client.Reactive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__2920__auto__,entry__2921__auto__){
var self__ = this;
if(cljs.core.vector_QMARK_.call(null,entry__2921__auto__))
{return this__2920__auto__.cljs$core$IAssociative$_assoc$arity$3(this__2920__auto__,cljs.core._nth.call(null,entry__2921__auto__,0),cljs.core._nth.call(null,entry__2921__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__2920__auto__,entry__2921__auto__);
}
});
reactive.client.Reactive.prototype.reactive$client$IReactive$ = true;
reactive.client.Reactive.prototype.reactive$client$IReactive$compile$arity$4 = (function (this$,view,selector,new_observers){
var self__ = this;
var initial_state = cljs.core.set_validator_BANG_.call(null,self__.state,self__.validation_fn);
var attached = cljs.core.doall.call(null,cljs.core.map.call(null,((function (initial_state){
return (function (p1__4133_SHARP_){
return reactive.client.attach.call(null,p1__4133_SHARP_,this$,selector,view);
});})(initial_state))
,new_observers));
var attached__$1 = cljs.core.doall.call(null,cljs.core.map.call(null,((function (initial_state,attached){
return (function (p1__4134_SHARP_){
return cljs.core.swap_BANG_.call(null,self__.observers,cljs.core.conj,p1__4134_SHARP_);
});})(initial_state,attached))
,new_observers));
return view.call(null,this$);
});
reactive.client.Reactive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__2927__auto__){
var self__ = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0:state",self__.state),cljs.core.vector.call(null,"\uFDD0:validation-fn",self__.validation_fn),cljs.core.vector.call(null,"\uFDD0:observers",self__.observers)], true),self__.__extmap));
});
reactive.client.Reactive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__2919__auto__){
var self__ = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});
reactive.client.Reactive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__2911__auto__,other__2912__auto__){
var self__ = this;
if(cljs.core.truth_((function (){var and__3941__auto__ = other__2912__auto__;
if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = (this__2911__auto__.constructor === other__2912__auto__.constructor);
if(and__3941__auto____$1)
{return cljs.core.equiv_map.call(null,this__2911__auto__,other__2912__auto__);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})()))
{return true;
} else
{return false;
}
});
reactive.client.Reactive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__2914__auto__,G__4135){
var self__ = this;
return (new reactive.client.Reactive(self__.state,self__.validation_fn,self__.observers,G__4135,self__.__extmap,self__.__hash));
});
reactive.client.Reactive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__2913__auto__){
var self__ = this;
return self__.__meta;
});
reactive.client.Reactive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__2924__auto__,k__2925__auto__){
var self__ = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0:state",null,"\uFDD0:observers",null,"\uFDD0:validation-fn",null], true),k__2925__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__2924__auto__),self__.__meta),k__2925__auto__);
} else
{return (new reactive.client.Reactive(self__.state,self__.validation_fn,self__.observers,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__2925__auto__)),null));
}
});
reactive.client.Reactive.cljs$lang$type = true;
reactive.client.Reactive.cljs$lang$ctorPrSeq = (function (this__2950__auto__){
return cljs.core.list.call(null,"reactive.client/Reactive");
});
reactive.client.Reactive.cljs$lang$ctorPrWriter = (function (this__2950__auto__,writer__2951__auto__){
return cljs.core._write.call(null,writer__2951__auto__,"reactive.client/Reactive");
});
reactive.client.__GT_Reactive = (function __GT_Reactive(state,validation_fn,observers){
return (new reactive.client.Reactive(state,validation_fn,observers));
});
reactive.client.map__GT_Reactive = (function map__GT_Reactive(G__4137){
return (new reactive.client.Reactive((new cljs.core.Keyword("\uFDD0:state")).call(null,G__4137),(new cljs.core.Keyword("\uFDD0:validation-fn")).call(null,G__4137),(new cljs.core.Keyword("\uFDD0:observers")).call(null,G__4137),null,cljs.core.dissoc.call(null,G__4137,"\uFDD0:state","\uFDD0:validation-fn","\uFDD0:observers")));
});
/**
* @param {...*} var_args
*/
reactive.client._main = (function() { 
var _main__delegate = function (args){
clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
return reactive.three._main.call(null);
};
var _main = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return _main__delegate.call(this, args);
};
_main.cljs$lang$maxFixedArity = 0;
_main.cljs$lang$applyTo = (function (arglist__4141){
var args = cljs.core.seq(arglist__4141);
return _main__delegate(args);
});
_main.cljs$core$IFn$_invoke$arity$variadic = _main__delegate;
return _main;
})()
;
