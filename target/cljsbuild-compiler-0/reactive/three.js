goog.provide('reactive.three');
goog.require('cljs.core');
goog.require('reactive.utils');
goog.require('reactive.utils');
goog.require('goog.async.AnimationDelay');
goog.require('dommy.core');
cljs.core.PersistentVector.fromArray([clojure.data,"\uFDD0:refer",cljs.core.PersistentVector.fromArray([reactive.three.diff], true)], true);
cljs.core.PersistentVector.fromArray([clojure.zip,"\uFDD0:refer",cljs.core.PersistentVector.fromArray([reactive.three.vector_zip,reactive.three.seq_zip,reactive.three.zipper,reactive.three.path], true)], true);
cljs.core.PersistentVector.fromArray([clojure.zip,"\uFDD0:as",reactive.three.zip], true);
cljs.core.PersistentVector.fromArray([clojure.browser.net,"\uFDD0:as",reactive.three.net], true);
cljs.core.PersistentVector.fromArray([reactive.websocket,"\uFDD0:as",reactive.three.ws], true);
cljs.core.PersistentVector.fromArray([clojure.walk,"\uFDD0:refer",cljs.core.PersistentVector.fromArray([reactive.three.postwalk,reactive.three.prewalk,reactive.three.walk], true)], true);
reactive.three.THREE = THREE;
reactive.three.Camera = THREE.Camera;
reactive.three.PerspectiveCamera = THREE.PerspectiveCamera;
reactive.three.Scene = THREE.Scene;
reactive.three.Renderer = THREE.WebGLRenderer;
reactive.three.Texture = THREE.Texture;
reactive.three.ImageUtils = THREE.ImageUtils;
reactive.three.AdditiveBlending = THREE.AdditiveBlending;
reactive.three.Mesh = THREE.Mesh;
reactive.three.Geometry = THREE.Geometry;
reactive.three.Vertex = THREE.Vertex;
reactive.three.Vector3 = THREE.Vector3;
reactive.three.ParticleBasicMaterial = THREE.ParticleBasicMaterial;
reactive.three.ParticleSystem = THREE.ParticleSystem;
reactive.three.SphereGeometry = THREE.SphereGeometry;
reactive.three.CubeGeometry = THREE.CubeGeometry;
reactive.three.MeshLambertMaterial = THREE.MeshLambertMaterial;
reactive.three.MeshBasicMaterial = THREE.MeshBasicMaterial;
reactive.three.PointLight = THREE.PointLight;
reactive.three.IRenderable = {};
reactive.three.setup = (function setup(this$,options){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.reactive$three$IRenderable$setup$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.reactive$three$IRenderable$setup$arity$2(this$,options);
} else
{var x__2957__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (reactive.three.setup[goog.typeOf(x__2957__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (reactive.three.setup["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderable.setup",this$);
}
}
})().call(null,this$,options);
}
});
reactive.three.setup = (function setup(this$,options,objects){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.reactive$three$IRenderable$setup$arity$3;
} else
{return and__3941__auto__;
}
})())
{return this$.reactive$three$IRenderable$setup$arity$3(this$,options,objects);
} else
{var x__2957__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (reactive.three.setup[goog.typeOf(x__2957__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (reactive.three.setup["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderable.setup",this$);
}
}
})().call(null,this$,options,objects);
}
});
reactive.three.setup_renderer = (function setup_renderer(this$,options){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.reactive$three$IRenderable$setup_renderer$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.reactive$three$IRenderable$setup_renderer$arity$2(this$,options);
} else
{var x__2957__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (reactive.three.setup_renderer[goog.typeOf(x__2957__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (reactive.three.setup_renderer["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderable.setup-renderer",this$);
}
}
})().call(null,this$,options);
}
});
reactive.three.setup_camera = (function setup_camera(this$,options){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.reactive$three$IRenderable$setup_camera$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.reactive$three$IRenderable$setup_camera$arity$2(this$,options);
} else
{var x__2957__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (reactive.three.setup_camera[goog.typeOf(x__2957__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (reactive.three.setup_camera["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderable.setup-camera",this$);
}
}
})().call(null,this$,options);
}
});
reactive.three.setup_scene = (function setup_scene(this$,objects){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.reactive$three$IRenderable$setup_scene$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.reactive$three$IRenderable$setup_scene$arity$2(this$,objects);
} else
{var x__2957__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (reactive.three.setup_scene[goog.typeOf(x__2957__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (reactive.three.setup_scene["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderable.setup-scene",this$);
}
}
})().call(null,this$,objects);
}
});
reactive.three.setup_lighting = (function setup_lighting(this$,options){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.reactive$three$IRenderable$setup_lighting$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.reactive$three$IRenderable$setup_lighting$arity$2(this$,options);
} else
{var x__2957__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (reactive.three.setup_lighting[goog.typeOf(x__2957__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (reactive.three.setup_lighting["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderable.setup-lighting",this$);
}
}
})().call(null,this$,options);
}
});
reactive.three.render = (function render(this$,renderables){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.reactive$three$IRenderable$render$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.reactive$three$IRenderable$render$arity$2(this$,renderables);
} else
{var x__2957__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (reactive.three.render[goog.typeOf(x__2957__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (reactive.three.render["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderable.render",this$);
}
}
})().call(null,this$,renderables);
}
});
reactive.three.IAnimatable = {};
reactive.three.animate = (function animate(this$,scene,camera,animatables){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.reactive$three$IAnimatable$animate$arity$4;
} else
{return and__3941__auto__;
}
})())
{return this$.reactive$three$IAnimatable$animate$arity$4(this$,scene,camera,animatables);
} else
{var x__2957__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (reactive.three.animate[goog.typeOf(x__2957__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (reactive.three.animate["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAnimatable.animate",this$);
}
}
})().call(null,this$,scene,camera,animatables);
}
});
reactive.three.animate_BANG_ = (function animate_BANG_(this$,options){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.reactive$three$IAnimatable$animate_BANG_$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.reactive$three$IAnimatable$animate_BANG_$arity$2(this$,options);
} else
{var x__2957__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (reactive.three.animate_BANG_[goog.typeOf(x__2957__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (reactive.three.animate_BANG_["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAnimatable.animate!",this$);
}
}
})().call(null,this$,options);
}
});
reactive.three.Mesh.prototype.reactive$three$IAnimatable$ = true;
reactive.three.Mesh.prototype.reactive$three$IAnimatable$animate_BANG_$arity$2 = (function (this$,options){
var G__4142 = this$;
reactive.utils.apply_nested_BANG_.call(null,G__4142,options);
return G__4142;
});
reactive.three.Mesh.prototype.reactive$three$IRenderable$ = true;
reactive.three.Renderer.prototype.reactive$three$IAnimatable$ = true;
reactive.three.Renderer.prototype.reactive$three$IAnimatable$animate$arity$4 = (function (this$,scene,camera,animatables){
var _animate = (function _animate(){
window.requestAnimationFrame(_animate);
var seq__4147_4153 = cljs.core.seq.call(null,animatables);
var chunk__4148_4154 = null;
var count__4149_4155 = 0;
var i__4150_4156 = 0;
while(true){
if((i__4150_4156 < count__4149_4155))
{var animatable_4157 = cljs.core._nth.call(null,chunk__4148_4154,i__4150_4156);
reactive.three.animate_BANG_.call(null,(new cljs.core.Keyword("\uFDD0:animatable")).call(null,animatable_4157),(new cljs.core.Keyword("\uFDD0:animation")).call(null,animatable_4157));
{
var G__4158 = seq__4147_4153;
var G__4159 = chunk__4148_4154;
var G__4160 = count__4149_4155;
var G__4161 = (i__4150_4156 + 1);
seq__4147_4153 = G__4158;
chunk__4148_4154 = G__4159;
count__4149_4155 = G__4160;
i__4150_4156 = G__4161;
continue;
}
} else
{var temp__4092__auto___4162 = cljs.core.seq.call(null,seq__4147_4153);
if(temp__4092__auto___4162)
{var seq__4147_4163__$1 = temp__4092__auto___4162;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4147_4163__$1))
{var c__3088__auto___4164 = cljs.core.chunk_first.call(null,seq__4147_4163__$1);
{
var G__4165 = cljs.core.chunk_rest.call(null,seq__4147_4163__$1);
var G__4166 = c__3088__auto___4164;
var G__4167 = cljs.core.count.call(null,c__3088__auto___4164);
var G__4168 = 0;
seq__4147_4153 = G__4165;
chunk__4148_4154 = G__4166;
count__4149_4155 = G__4167;
i__4150_4156 = G__4168;
continue;
}
} else
{var animatable_4169 = cljs.core.first.call(null,seq__4147_4163__$1);
reactive.three.animate_BANG_.call(null,(new cljs.core.Keyword("\uFDD0:animatable")).call(null,animatable_4169),(new cljs.core.Keyword("\uFDD0:animation")).call(null,animatable_4169));
{
var G__4170 = cljs.core.next.call(null,seq__4147_4163__$1);
var G__4171 = null;
var G__4172 = 0;
var G__4173 = 0;
seq__4147_4153 = G__4170;
chunk__4148_4154 = G__4171;
count__4149_4155 = G__4172;
i__4150_4156 = G__4173;
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
reactive.three.Renderer.prototype.reactive$three$IRenderable$ = true;
reactive.three.Renderer.prototype.reactive$three$IRenderable$setup_renderer$arity$2 = (function (this$,options){
var map__4151 = options;
var map__4151__$1 = ((cljs.core.seq_QMARK_.call(null,map__4151))?cljs.core.apply.call(null,cljs.core.hash_map,map__4151):map__4151);
var height = cljs.core.get.call(null,map__4151__$1,"\uFDD0:height");
var width = cljs.core.get.call(null,map__4151__$1,"\uFDD0:width");
var G__4152 = this$;
G__4152.setSize(width,height);
return G__4152;
});
reactive.three.Renderer.prototype.reactive$three$IRenderable$render$arity$2 = (function (this$,renderables){
return this$.render(cljs.core.first.call(null,renderables),cljs.core.second.call(null,renderables));
});
reactive.three.PerspectiveCamera.prototype.reactive$three$IAnimatable$ = true;
reactive.three.PerspectiveCamera.prototype.reactive$three$IAnimatable$animate_BANG_$arity$2 = (function (this$,options){
var G__4174 = this$;
reactive.utils.apply_nested_BANG_.call(null,G__4174,options);
return G__4174;
});
reactive.three.PerspectiveCamera.prototype.reactive$three$IRenderable$ = true;
reactive.three.PerspectiveCamera.prototype.reactive$three$IRenderable$setup_camera$arity$2 = (function (this$,options){
var G__4175 = this$;
reactive.utils.set_nested_BANG_.call(null,G__4175,options);
return G__4175;
});
reactive.three.Scene.prototype.reactive$three$IRenderable$ = true;
reactive.three.Scene.prototype.reactive$three$IRenderable$setup_scene$arity$2 = (function (this$,objects){
var seq__4176 = cljs.core.seq.call(null,objects);
var chunk__4177 = null;
var count__4178 = 0;
var i__4179 = 0;
while(true){
if((i__4179 < count__4178))
{var obj = cljs.core._nth.call(null,chunk__4177,i__4179);
var G__4180_4182 = this$;
G__4180_4182.add(obj);
{
var G__4183 = seq__4176;
var G__4184 = chunk__4177;
var G__4185 = count__4178;
var G__4186 = (i__4179 + 1);
seq__4176 = G__4183;
chunk__4177 = G__4184;
count__4178 = G__4185;
i__4179 = G__4186;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__4176);
if(temp__4092__auto__)
{var seq__4176__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4176__$1))
{var c__3088__auto__ = cljs.core.chunk_first.call(null,seq__4176__$1);
{
var G__4187 = cljs.core.chunk_rest.call(null,seq__4176__$1);
var G__4188 = c__3088__auto__;
var G__4189 = cljs.core.count.call(null,c__3088__auto__);
var G__4190 = 0;
seq__4176 = G__4187;
chunk__4177 = G__4188;
count__4178 = G__4189;
i__4179 = G__4190;
continue;
}
} else
{var obj = cljs.core.first.call(null,seq__4176__$1);
var G__4181_4191 = this$;
G__4181_4191.add(obj);
{
var G__4192 = cljs.core.next.call(null,seq__4176__$1);
var G__4193 = null;
var G__4194 = 0;
var G__4195 = 0;
seq__4176 = G__4192;
chunk__4177 = G__4193;
count__4178 = G__4194;
i__4179 = G__4195;
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
reactive.three.PointLight.prototype.reactive$three$IRenderable$ = true;
reactive.three.PointLight.prototype.reactive$three$IRenderable$setup_lighting$arity$2 = (function (this$,options){
var G__4196 = this$;
reactive.utils.set_nested_BANG_.call(null,G__4196,options);
return G__4196;
});
reactive.three.ParticleSystem.prototype.reactive$three$IAnimatable$ = true;
reactive.three.ParticleSystem.prototype.reactive$three$IAnimatable$animate_BANG_$arity$2 = (function (this$,options){
var G__4197 = this$;
reactive.utils.apply_nested_BANG_.call(null,G__4197,options);
return G__4197;
});
reactive.three.ParticleBasicMaterial.prototype.reactive$three$IRenderable$ = true;
reactive.three.Geometry.prototype.reactive$three$IAnimatable$ = true;
reactive.three.Geometry.prototype.reactive$three$IRenderable$ = true;
reactive.three.Vertex.prototype.reactive$three$IAnimatable$ = true;
reactive.three.Vertex.prototype.reactive$three$IRenderable$ = true;
reactive.three.SphereGeometry.prototype.reactive$three$IRenderable$ = true;
reactive.three.generate_particles = (function generate_particles(particle_count){
var particle_material = (new reactive.three.ParticleBasicMaterial(cljs.core.clj__GT_js.call(null,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:color",16777215,"\uFDD0:size",(cljs.core.rand.call(null,1.5) + 1),"\uFDD0:map",reactive.three.ImageUtils.loadTexture(cljs.core.rand_nth.call(null,cljs.core.PersistentVector.fromArray(["flare2.jpeg","flare3.jpeg","flare4.jpeg","flare5.jpeg","flare6.jpeg"], true))),"\uFDD0:blending",reactive.three.AdditiveBlending,"\uFDD0:transparent",true], true))));
var particles = ((function (particle_material){
return (function (p1__4201_SHARP_){
var G__4205 = (new reactive.three.Geometry());
(G__4205["vertices"] = p1__4201_SHARP_);
return G__4205;
});})(particle_material))
.call(null,cljs.core.clj__GT_js.call(null,cljs.core.reduce.call(null,((function (particle_material){
return (function (particles,p){
var particle = cljs.core.apply.call(null,((function (particle_material){
return (function (p1__4198_SHARP_,p2__4199_SHARP_,p3__4200_SHARP_){
return (new reactive.three.Vector3(p1__4198_SHARP_,p2__4199_SHARP_,p3__4200_SHARP_));
});})(particle_material))
,cljs.core.repeatedly.call(null,3,((function (particle_material){
return (function (){
return (cljs.core.rand.call(null,500) - 250);
});})(particle_material))
));
return cljs.core.conj.call(null,particles,(function (){var G__4206 = particle;
(G__4206["velocity"] = (new reactive.three.Vector3(0,(- cljs.core.rand.call(null)),0)));
(G__4206["position"] = (new reactive.three.Vector3(0,0,0)));
return G__4206;
})());
});})(particle_material))
,cljs.core.PersistentVector.EMPTY,cljs.core.range.call(null,particle_count))));
var particle_system = (new reactive.three.ParticleSystem(particles,particle_material));
var G__4207 = particle_system;
(G__4207["sortParticles"] = true);
return G__4207;
});
/**
* @param {...*} var_args
*/
reactive.three._main = (function() { 
var _main__delegate = function (args){
var camera_options = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:fov",75,"\uFDD0:width",window.innerWidth,"\uFDD0:height",window.innerHeight,"\uFDD0:near",0.1,"\uFDD0:far",1000], true));
var map__4214 = cljs.core.deref.call(null,camera_options);
var map__4214__$1 = ((cljs.core.seq_QMARK_.call(null,map__4214))?cljs.core.apply.call(null,cljs.core.hash_map,map__4214):map__4214);
var far = cljs.core.get.call(null,map__4214__$1,"\uFDD0:far");
var near = cljs.core.get.call(null,map__4214__$1,"\uFDD0:near");
var height = cljs.core.get.call(null,map__4214__$1,"\uFDD0:height");
var width = cljs.core.get.call(null,map__4214__$1,"\uFDD0:width");
var fov = cljs.core.get.call(null,map__4214__$1,"\uFDD0:fov");
var camera = (new reactive.three.PerspectiveCamera(fov,(width / height),near,far));
var scene = (new reactive.three.Scene());
var renderer = (new reactive.three.Renderer());
var container = dommy.core.append_BANG_.call(null,dommy.core.set_style_BANG_.call(null,document.body,"\uFDD0:background-color","#000"),renderer.domElement);
var geometry = (new reactive.three.CubeGeometry(1,1,1));
var material = (new reactive.three.MeshBasicMaterial(cljs.core.clj__GT_js.call(null,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:color",65280], true))));
var lambert_material = (new reactive.three.MeshLambertMaterial(cljs.core.clj__GT_js.call(null,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:color",16777215,"\uFDD0:map",reactive.three.ImageUtils.loadTexture(cljs.core.rand_nth.call(null,cljs.core.reduce.call(null,((function (camera_options,map__4214,map__4214__$1,far,near,height,width,fov,camera,scene,renderer,container,geometry,material){
return (function (planets,planet){
return cljs.core.conj.call(null,planets,[cljs.core.str("planets/"),cljs.core.str(planet),cljs.core.str("_class.png")].join(''));
});})(camera_options,map__4214,map__4214__$1,far,near,height,width,fov,camera,scene,renderer,container,geometry,material))
,cljs.core.PersistentVector.EMPTY,"abcdefghijklmnopqrstxyz"))),"\uFDD0:blending",reactive.three.AdditiveBlending], true))));
var cube = (new reactive.three.Mesh(geometry,lambert_material));
var sphere_options = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:radius",75,"\uFDD0:segmentsWidth",28,"\uFDD0:segmentsHeight",28], true));
var map__4215 = cljs.core.deref.call(null,sphere_options);
var map__4215__$1 = ((cljs.core.seq_QMARK_.call(null,map__4215))?cljs.core.apply.call(null,cljs.core.hash_map,map__4215):map__4215);
var segmentsHeight = cljs.core.get.call(null,map__4215__$1,"\uFDD0:segmentsHeight");
var segmentsWidth = cljs.core.get.call(null,map__4215__$1,"\uFDD0:segmentsWidth");
var radius = cljs.core.get.call(null,map__4215__$1,"\uFDD0:radius");
var sphere_geometry = (new reactive.three.SphereGeometry(1.5,56,56));
var sphere = (new reactive.three.Mesh(sphere_geometry,lambert_material));
var light_options = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:position",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:x",10,"\uFDD0:y",50,"\uFDD0:z",130], true)], true));
var light_source = (new reactive.three.PointLight(16777215));
var particle_system = reactive.three.generate_particles.call(null,1800);
var G__4216_4220 = light_source;
reactive.three.setup_lighting.call(null,G__4216_4220,cljs.core.deref.call(null,light_options));
var G__4217_4221 = scene;
reactive.three.setup_scene.call(null,G__4217_4221,cljs.core.PersistentVector.fromArray([particle_system,sphere,light_source,camera], true));
var G__4218_4222 = camera;
reactive.three.setup_camera.call(null,G__4218_4222,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:position",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:z",3], true)], true));
var G__4219_4223 = renderer;
reactive.three.setup_renderer.call(null,G__4219_4223,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:width",width,"\uFDD0:height",height], true));
return reactive.three.animate.call(null,renderer,scene,camera,cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray(["\uFDD0:animatable",sphere,"\uFDD0:animation",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:rotation",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:y",cljs.core.partial.call(null,cljs.core._PLUS_,0.0010)], true)], true)], true)], true));
};
var _main = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return _main__delegate.call(this, args);
};
_main.cljs$lang$maxFixedArity = 0;
_main.cljs$lang$applyTo = (function (arglist__4224){
var args = cljs.core.seq(arglist__4224);
return _main__delegate(args);
});
_main.cljs$core$IFn$_invoke$arity$variadic = _main__delegate;
return _main;
})()
;
goog.exportSymbol('reactive.three._main', reactive.three._main);
cljs.core.PersistentArrayMap.fromArray(["\uFDD0:animatable",reactive.three.camera,"\uFDD0:animation",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:rotation",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:x",cljs.core.partial.call(null,cljs.core._PLUS_,0.0),"\uFDD0:y",cljs.core.partial.call(null,cljs.core._PLUS_,0.0)], true)], true)], true);
cljs.core.PersistentArrayMap.fromArray(["\uFDD0:animatable",reactive.three.cube,"\uFDD0:animation",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:rotation",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:x",cljs.core.partial.call(null,cljs.core._PLUS_,0.075),"\uFDD0:y",cljs.core.partial.call(null,cljs.core._PLUS_,0.025)], true),"\uFDD0:scale",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:x",cljs.core.partial.call(null,cljs.core._PLUS_,0.0)], true)], true)], true);
