goog.provide('planets.three');
goog.require('cljs.core');
goog.require('planets.utils');
goog.require('planets.utils');
goog.require('dommy.core');
planets.three.THREE = THREE;
planets.three.Camera = THREE.Camera;
planets.three.PerspectiveCamera = THREE.PerspectiveCamera;
planets.three.Scene = THREE.Scene;
planets.three.Renderer = THREE.WebGLRenderer;
planets.three.Texture = THREE.Texture;
planets.three.ImageUtils = THREE.ImageUtils;
planets.three.AdditiveBlending = THREE.AdditiveBlending;
planets.three.Mesh = THREE.Mesh;
planets.three.Geometry = THREE.Geometry;
planets.three.Vertex = THREE.Vertex;
planets.three.Vector3 = THREE.Vector3;
planets.three.ParticleBasicMaterial = THREE.ParticleBasicMaterial;
planets.three.ParticleSystem = THREE.ParticleSystem;
planets.three.SphereGeometry = THREE.SphereGeometry;
planets.three.CubeGeometry = THREE.CubeGeometry;
planets.three.MeshLambertMaterial = THREE.MeshLambertMaterial;
planets.three.MeshBasicMaterial = THREE.MeshBasicMaterial;
planets.three.PointLight = THREE.PointLight;
planets.three.IRenderable = {};
planets.three.setup = (function setup(this$,options){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.planets$three$IRenderable$setup$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.planets$three$IRenderable$setup$arity$2(this$,options);
} else
{var x__2942__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (planets.three.setup[goog.typeOf(x__2942__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (planets.three.setup["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderable.setup",this$);
}
}
})().call(null,this$,options);
}
});
planets.three.setup = (function setup(this$,objects){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.planets$three$IRenderable$setup$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.planets$three$IRenderable$setup$arity$2(this$,objects);
} else
{var x__2942__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (planets.three.setup[goog.typeOf(x__2942__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (planets.three.setup["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderable.setup",this$);
}
}
})().call(null,this$,objects);
}
});
planets.three.render = (function render(this$,renderables){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.planets$three$IRenderable$render$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.planets$three$IRenderable$render$arity$2(this$,renderables);
} else
{var x__2942__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (planets.three.render[goog.typeOf(x__2942__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (planets.three.render["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderable.render",this$);
}
}
})().call(null,this$,renderables);
}
});
planets.three.IAnimatable = {};
planets.three.animate = (function animate(this$,scene,camera,animatables){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.planets$three$IAnimatable$animate$arity$4;
} else
{return and__3941__auto__;
}
})())
{return this$.planets$three$IAnimatable$animate$arity$4(this$,scene,camera,animatables);
} else
{var x__2942__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (planets.three.animate[goog.typeOf(x__2942__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (planets.three.animate["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAnimatable.animate",this$);
}
}
})().call(null,this$,scene,camera,animatables);
}
});
planets.three.animate_BANG_ = (function animate_BANG_(this$,options){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.planets$three$IAnimatable$animate_BANG_$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.planets$three$IAnimatable$animate_BANG_$arity$2(this$,options);
} else
{var x__2942__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (planets.three.animate_BANG_[goog.typeOf(x__2942__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (planets.three.animate_BANG_["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAnimatable.animate!",this$);
}
}
})().call(null,this$,options);
}
});
planets.three.Mesh.prototype.planets$three$IAnimatable$ = true;
planets.three.Mesh.prototype.planets$three$IAnimatable$animate_BANG_$arity$2 = (function (this$,options){
var G__3919 = this$;
planets.utils.apply_nested_BANG_.call(null,G__3919,options);
return G__3919;
});
planets.three.Mesh.prototype.planets$three$IRenderable$ = true;
planets.three.Renderer.prototype.planets$three$IAnimatable$ = true;
planets.three.Renderer.prototype.planets$three$IAnimatable$animate$arity$4 = (function (this$,scene,camera,animatables){
var _animate = (function _animate(){
window.requestAnimationFrame(_animate);
var seq__3924_3930 = cljs.core.seq.call(null,animatables);
var chunk__3925_3931 = null;
var count__3926_3932 = 0;
var i__3927_3933 = 0;
while(true){
if((i__3927_3933 < count__3926_3932))
{var animatable_3934 = cljs.core._nth.call(null,chunk__3925_3931,i__3927_3933);
planets.three.animate_BANG_.call(null,(new cljs.core.Keyword("\uFDD0:animatable")).call(null,animatable_3934),(new cljs.core.Keyword("\uFDD0:animation")).call(null,animatable_3934));
{
var G__3935 = seq__3924_3930;
var G__3936 = chunk__3925_3931;
var G__3937 = count__3926_3932;
var G__3938 = (i__3927_3933 + 1);
seq__3924_3930 = G__3935;
chunk__3925_3931 = G__3936;
count__3926_3932 = G__3937;
i__3927_3933 = G__3938;
continue;
}
} else
{var temp__4092__auto___3939 = cljs.core.seq.call(null,seq__3924_3930);
if(temp__4092__auto___3939)
{var seq__3924_3940__$1 = temp__4092__auto___3939;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3924_3940__$1))
{var c__3073__auto___3941 = cljs.core.chunk_first.call(null,seq__3924_3940__$1);
{
var G__3942 = cljs.core.chunk_rest.call(null,seq__3924_3940__$1);
var G__3943 = c__3073__auto___3941;
var G__3944 = cljs.core.count.call(null,c__3073__auto___3941);
var G__3945 = 0;
seq__3924_3930 = G__3942;
chunk__3925_3931 = G__3943;
count__3926_3932 = G__3944;
i__3927_3933 = G__3945;
continue;
}
} else
{var animatable_3946 = cljs.core.first.call(null,seq__3924_3940__$1);
planets.three.animate_BANG_.call(null,(new cljs.core.Keyword("\uFDD0:animatable")).call(null,animatable_3946),(new cljs.core.Keyword("\uFDD0:animation")).call(null,animatable_3946));
{
var G__3947 = cljs.core.next.call(null,seq__3924_3940__$1);
var G__3948 = null;
var G__3949 = 0;
var G__3950 = 0;
seq__3924_3930 = G__3947;
chunk__3925_3931 = G__3948;
count__3926_3932 = G__3949;
i__3927_3933 = G__3950;
continue;
}
}
} else
{}
}
break;
}
return this$.render(scene,camera);
});
return _animate.call(null);
});
planets.three.Renderer.prototype.planets$three$IRenderable$ = true;
planets.three.Renderer.prototype.planets$three$IRenderable$setup$arity$2 = (function (this$,options){
var map__3928 = options;
var map__3928__$1 = ((cljs.core.seq_QMARK_.call(null,map__3928))?cljs.core.apply.call(null,cljs.core.hash_map,map__3928):map__3928);
var height = cljs.core.get.call(null,map__3928__$1,"\uFDD0:height");
var width = cljs.core.get.call(null,map__3928__$1,"\uFDD0:width");
var G__3929 = this$;
G__3929.setSize(width,height);
return G__3929;
});
planets.three.Renderer.prototype.planets$three$IRenderable$render$arity$2 = (function (this$,renderables){
return this$.render(cljs.core.first.call(null,renderables),cljs.core.second.call(null,renderables));
});
planets.three.PerspectiveCamera.prototype.planets$three$IAnimatable$ = true;
planets.three.PerspectiveCamera.prototype.planets$three$IAnimatable$animate_BANG_$arity$2 = (function (this$,options){
var G__3951 = this$;
planets.utils.apply_nested_BANG_.call(null,G__3951,options);
return G__3951;
});
planets.three.PerspectiveCamera.prototype.planets$three$IRenderable$ = true;
planets.three.PerspectiveCamera.prototype.planets$three$IRenderable$setup$arity$2 = (function (this$,options){
var G__3952 = this$;
planets.utils.set_nested_BANG_.call(null,G__3952,options);
return G__3952;
});
planets.three.Scene.prototype.planets$three$IRenderable$ = true;
planets.three.Scene.prototype.planets$three$IRenderable$setup$arity$2 = (function (this$,objects){
var seq__3953 = cljs.core.seq.call(null,objects);
var chunk__3954 = null;
var count__3955 = 0;
var i__3956 = 0;
while(true){
if((i__3956 < count__3955))
{var obj = cljs.core._nth.call(null,chunk__3954,i__3956);
var G__3957_3959 = this$;
G__3957_3959.add(obj);
{
var G__3960 = seq__3953;
var G__3961 = chunk__3954;
var G__3962 = count__3955;
var G__3963 = (i__3956 + 1);
seq__3953 = G__3960;
chunk__3954 = G__3961;
count__3955 = G__3962;
i__3956 = G__3963;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__3953);
if(temp__4092__auto__)
{var seq__3953__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3953__$1))
{var c__3073__auto__ = cljs.core.chunk_first.call(null,seq__3953__$1);
{
var G__3964 = cljs.core.chunk_rest.call(null,seq__3953__$1);
var G__3965 = c__3073__auto__;
var G__3966 = cljs.core.count.call(null,c__3073__auto__);
var G__3967 = 0;
seq__3953 = G__3964;
chunk__3954 = G__3965;
count__3955 = G__3966;
i__3956 = G__3967;
continue;
}
} else
{var obj = cljs.core.first.call(null,seq__3953__$1);
var G__3958_3968 = this$;
G__3958_3968.add(obj);
{
var G__3969 = cljs.core.next.call(null,seq__3953__$1);
var G__3970 = null;
var G__3971 = 0;
var G__3972 = 0;
seq__3953 = G__3969;
chunk__3954 = G__3970;
count__3955 = G__3971;
i__3956 = G__3972;
continue;
}
}
} else
{return null;
}
}
break;
}
});
planets.three.PointLight.prototype.planets$three$IRenderable$ = true;
planets.three.PointLight.prototype.planets$three$IRenderable$setup$arity$2 = (function (this$,options){
var G__3973 = this$;
planets.utils.set_nested_BANG_.call(null,G__3973,options);
return G__3973;
});
planets.three.ParticleSystem.prototype.planets$three$IAnimatable$ = true;
planets.three.ParticleSystem.prototype.planets$three$IAnimatable$animate_BANG_$arity$2 = (function (this$,options){
var G__3974 = this$;
planets.utils.apply_nested_BANG_.call(null,G__3974,options);
return G__3974;
});
planets.three.ParticleBasicMaterial.prototype.planets$three$IRenderable$ = true;
planets.three.Geometry.prototype.planets$three$IAnimatable$ = true;
planets.three.Geometry.prototype.planets$three$IRenderable$ = true;
planets.three.Vertex.prototype.planets$three$IAnimatable$ = true;
planets.three.Vertex.prototype.planets$three$IRenderable$ = true;
planets.three.SphereGeometry.prototype.planets$three$IRenderable$ = true;
planets.three.generate_particles = (function generate_particles(particle_count){
var particle_material = (new planets.three.ParticleBasicMaterial(cljs.core.clj__GT_js.call(null,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:color",16777215,"\uFDD0:size",(cljs.core.rand.call(null,1.5) + 1),"\uFDD0:map",planets.three.ImageUtils.loadTexture(cljs.core.rand_nth.call(null,cljs.core.PersistentVector.fromArray(["textures/flare2.jpeg","textures/flare3.jpeg","textures/flare4.jpeg","textures/flare5.jpeg","textures/flare6.jpeg"], true))),"\uFDD0:blending",planets.three.AdditiveBlending,"\uFDD0:transparent",true], true))));
var particles = ((function (particle_material){
return (function (p1__3978_SHARP_){
var G__3982 = (new planets.three.Geometry());
(G__3982["vertices"] = p1__3978_SHARP_);
return G__3982;
});})(particle_material))
.call(null,cljs.core.clj__GT_js.call(null,cljs.core.reduce.call(null,((function (particle_material){
return (function (particles,p){
var particle = cljs.core.apply.call(null,((function (particle_material){
return (function (p1__3975_SHARP_,p2__3976_SHARP_,p3__3977_SHARP_){
return (new planets.three.Vector3(p1__3975_SHARP_,p2__3976_SHARP_,p3__3977_SHARP_));
});})(particle_material))
,cljs.core.repeatedly.call(null,3,((function (particle_material){
return (function (){
return (cljs.core.rand.call(null,500) - 250);
});})(particle_material))
));
return cljs.core.conj.call(null,particles,(function (){var G__3983 = particle;
(G__3983["velocity"] = (new planets.three.Vector3(0,(- cljs.core.rand.call(null)),0)));
(G__3983["position"] = (new planets.three.Vector3(0,0,0)));
return G__3983;
})());
});})(particle_material))
,cljs.core.PersistentVector.EMPTY,cljs.core.range.call(null,particle_count))));
var particle_system = (new planets.three.ParticleSystem(particles,particle_material));
var G__3984 = particle_system;
(G__3984["sortParticles"] = true);
return G__3984;
});
/**
* @param {...*} var_args
*/
planets.three._main = (function() { 
var _main__delegate = function (args){
var camera_options = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:fov",75,"\uFDD0:width",window.innerWidth,"\uFDD0:height",window.innerHeight,"\uFDD0:near",0.1,"\uFDD0:far",1000], true));
var map__3991 = cljs.core.deref.call(null,camera_options);
var map__3991__$1 = ((cljs.core.seq_QMARK_.call(null,map__3991))?cljs.core.apply.call(null,cljs.core.hash_map,map__3991):map__3991);
var far = cljs.core.get.call(null,map__3991__$1,"\uFDD0:far");
var near = cljs.core.get.call(null,map__3991__$1,"\uFDD0:near");
var height = cljs.core.get.call(null,map__3991__$1,"\uFDD0:height");
var width = cljs.core.get.call(null,map__3991__$1,"\uFDD0:width");
var fov = cljs.core.get.call(null,map__3991__$1,"\uFDD0:fov");
var camera = (new planets.three.PerspectiveCamera(fov,(width / height),near,far));
var scene = (new planets.three.Scene());
var renderer = (new planets.three.Renderer());
var container = dommy.core.append_BANG_.call(null,dommy.core.set_style_BANG_.call(null,document.body,"\uFDD0:background-color","#000"),renderer.domElement);
var lambert_material = (new planets.three.MeshLambertMaterial(cljs.core.clj__GT_js.call(null,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:color",16777215,"\uFDD0:map",planets.three.ImageUtils.loadTexture(cljs.core.rand_nth.call(null,cljs.core.reduce.call(null,((function (camera_options,map__3991,map__3991__$1,far,near,height,width,fov,camera,scene,renderer,container){
return (function (planets__$1,planet){
return cljs.core.conj.call(null,planets__$1,[cljs.core.str("planets/"),cljs.core.str(planet),cljs.core.str("_class.png")].join(''));
});})(camera_options,map__3991,map__3991__$1,far,near,height,width,fov,camera,scene,renderer,container))
,cljs.core.PersistentVector.EMPTY,"abcdefghijklmnopqrstxyz"))),"\uFDD0:blending",planets.three.AdditiveBlending], true))));
var planet_options = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:radius",1.5,"\uFDD0:segmentsWidth",56,"\uFDD0:segmentsHeight",56], true));
var map__3992 = cljs.core.deref.call(null,planet_options);
var map__3992__$1 = ((cljs.core.seq_QMARK_.call(null,map__3992))?cljs.core.apply.call(null,cljs.core.hash_map,map__3992):map__3992);
var segmentsHeight = cljs.core.get.call(null,map__3992__$1,"\uFDD0:segmentsHeight");
var segmentsWidth = cljs.core.get.call(null,map__3992__$1,"\uFDD0:segmentsWidth");
var radius = cljs.core.get.call(null,map__3992__$1,"\uFDD0:radius");
var planet_geometry = (new planets.three.SphereGeometry(1.5,56,56));
var planet = (new planets.three.Mesh(planet_geometry,lambert_material));
var light_options = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:position",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:x",10,"\uFDD0:y",50,"\uFDD0:z",130], true)], true));
var light_source = (new planets.three.PointLight(16777215));
var particle_system = planets.three.generate_particles.call(null,1800);
var G__3993_3997 = light_source;
planets.three.setup.call(null,G__3993_3997,cljs.core.deref.call(null,light_options));
var G__3994_3998 = scene;
planets.three.setup.call(null,G__3994_3998,cljs.core.PersistentVector.fromArray([particle_system,planet,light_source,camera], true));
var G__3995_3999 = camera;
planets.three.setup.call(null,G__3995_3999,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:position",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:z",3], true)], true));
var G__3996_4000 = renderer;
planets.three.setup.call(null,G__3996_4000,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:width",width,"\uFDD0:height",height], true));
return planets.three.animate.call(null,renderer,scene,camera,cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray(["\uFDD0:animatable",planet,"\uFDD0:animation",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:rotation",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:y",cljs.core.partial.call(null,cljs.core._PLUS_,0.0010)], true)], true)], true)], true));
};
var _main = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return _main__delegate.call(this, args);
};
_main.cljs$lang$maxFixedArity = 0;
_main.cljs$lang$applyTo = (function (arglist__4001){
var args = cljs.core.seq(arglist__4001);
return _main__delegate(args);
});
_main.cljs$core$IFn$_invoke$arity$variadic = _main__delegate;
return _main;
})()
;
goog.exportSymbol('planets.three._main', planets.three._main);
