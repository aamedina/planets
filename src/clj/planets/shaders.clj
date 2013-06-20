(ns planets.shaders
  (:require [hiccup.def :refer [defhtml defelem]]
            [hiccup.page :refer [html5 include-css include-js]]))

(defhtml vertex-shader []
  [:script#vertexShader {:type "x-shader/x-vertex"}
   "uniform sampler2D noiseTexture;
uniform float noiseScale;
uniform sampler2D bumpTexture;
uniform float bumpSpeed;
uniform float bumpScale;
uniform float time;
varying vec2 vUv;
void main () {
 vUv = uv;
 vec2 uvTimeShift = vUv + vec2 ( 1.1, 1.9) * time * bumpSpeed;
 vec4 noiseGeneratorTimeShift = texture2D ( noiseTexture, uvTimeShift);
 vec2 uvNoiseTimeShift = vUv + noiseScale * vec2 ( noiseGeneratorTimeShift.r, noiseGeneratorTimeShift.g);
 vec4 bumpData = texture2D ( bumpTexture, uvTimeShift);
 float displacement = ( vUv.y > 0.999 || vUv.y < 0.001) ?
 bumpScale * (0.3 + 0.02 * sin (time)) : bumpScale * bumpData.r;
 vec3 newPosition = position + normal * displacement;
 gl_Position = projectionMatrix * modelViewMatrix * vec4 ( newPosition, 1.0);}
"])

(defhtml fragment-shader []
  [:script#fragmentShader {:type "x-shader/x-vertex"}
   "uniform sampler2D baseTexture;
uniform float baseSpeed;
uniform float repeatS;
uniform float repeatT;
uniform sampler2D noiseTexture;
uniform float noiseScale;
uniform sampler2D blendTexture;
uniform float blendSpeed;
uniform float blendOffset;
uniform float time;
uniform float alpha;
varying vec2 vUv;
void main() {
 vec2 uvTimeShift = vUv + vec2 ( -0.7, 1.5) * time * baseSpeed;
 vec4 noiseGeneratorTimeShift = texture2D ( noiseTexture, uvTimeShift);
 vec2 uvNoiseTimeShift = vUv + noiseScale * vec2 ( noiseGeneratorTimeShift.r, noiseGeneratorTimeShift.b);
 vec4 baseColor = texture2D ( baseTexture, uvNoiseTimeShift * vec2 (repeatS, repeatT));
 vec2 uvTimeShift2 = vUv + vec2 ( 1.3, -1.7) * time * blendSpeed;
 vec4 noiseGeneratorTimeShift2 = texture2D ( noiseTexture, uvTimeShift2);
 vec2 uvNoiseTimeShift2 = vUv + noiseScale * vec2 ( noiseGeneratorTimeShift2.g, noiseGeneratorTimeShift2.b);
 vec4 blendColor = texture2D ( blendTexture, uvNoiseTimeShift2 * vec2 (repeatS, repeatT)) - blendOffset * vec4 (1.0, 1.0, 1.0, 1.0);
 vec4 theColor = baseColor + blendColor;
 theColor.a = alpha;
 gl_FragColor = theColor}"])
