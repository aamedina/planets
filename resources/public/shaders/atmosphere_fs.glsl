precision mediump float;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vEcPosition;
varying float vDistToOrigin;

uniform float atmosphereScale;
uniform vec4 mainColor;

#pragma include "light.glsl"

// assumes that normal is normalized
vec3 getAtmosphereLight(vec3 normal, mat3 dLight){
  vec3 ecLightDir = dLight[0]; // light direction in eye coordinates
  vec3 colorIntensity = dLight[1];
  float horizonWrapAround = 0.5;
  float diffuseContribution = max(dot(normal, ecLightDir)+horizonWrapAround, 0.0);
  return (colorIntensity * diffuseContribution);
}

void main(void) {
  vec3 normal = normalize(vNormal);
  vec3 diffuseDirectionalLight = getAtmosphereLight(normal,_dLight);
  float scale = atmosphereScale;
  float scaledDistToOrigin = atmosphereScale * vDistToOrigin;
  float distanceToSurface = scaledDistToOrigin - 1.0;
  float fractionDistanceToSurface = 1.0 - (distanceToSurface / (atmosphereScale - 1.0));
  vec4 color = vec4(diffuseDirectionalLight,fractionDistanceToSurface)*mainColor;
  // add white closer to surface
  color.xyz += vec3(fractionDistanceToSurface,fractionDistanceToSurface,fractionDistanceToSurface)*0.4;
  gl_FragColor = color;
}
