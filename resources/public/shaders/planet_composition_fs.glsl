#ifdef GL_ES
precision highp float;
#endif
varying vec3 n;
varying vec3 u_tangent;
varying vec3 v_tangent;
varying vec3 localPos;
varying vec3 pos;

#pragma include "light.glsl"

uniform vec4 atmosphereColor;
uniform sampler2D heightMap;
uniform sampler2D mainTexture;
uniform float maxHeight;
uniform float bumpmapTextureStep;

const float waterLevel = 0.5;

//#pragma include "noise2D.glsl for snoise(vec2 v)
//#pragma include "noise3D.glsl"] for snoise(vec3 v)
//#pragma include "noise4D.glsl"] for snoise(vec4 v)
//#pragma include "cellular2D.glsl"] for cellular(vec2 P)
//#pragma include "cellular2x2.glsl"] for cellular2x2(vec2 P)
//#pragma include "cellular2x2x2.glsl"] for cellular2x2x2(vec3 P)
//#pragma include "cellular3D.glsl"] cellular(vec3 P)

vec3 bumpedNormal(vec2 tc)
{
    // scale height with angle
    float scaledHeight = maxHeight*(dot(n, -normalize(pos)));

    float udiff = 3.0*scaledHeight*(texture2D(heightMap, tc+vec2(bumpmapTextureStep,0.0)).a-texture2D(heightMap, tc-vec2(bumpmapTextureStep,0.0)).a)/2.0;
    float vdiff = 3.0*scaledHeight*(texture2D(heightMap, tc+vec2(0.0,bumpmapTextureStep)).a-texture2D(heightMap, tc-vec2(0.0,bumpmapTextureStep)).a)/2.0;
    return n - udiff * u_tangent - vdiff * v_tangent;
}

// assumes that normal is normalized
vec3 getAtmosphereLight(vec3 normal, mat3 dLight){
    vec3 ecLightDir = dLight[0]; // light direction in eye coordinates
    vec3 colorIntensity = dLight[1];
    float horizonWrapAround = 0.5;
    float diffuseContribution = max(dot(normal, ecLightDir)+horizonWrapAround, 0.0);
    float weightAgainstEdge = 1.0-max(dot(normal, vec3(0.0,0.0,1.0)), 0.0);
    return (colorIntensity * diffuseContribution)*weightAgainstEdge;
}

vec2 project(vec3 pos){
    const float PI = 3.14159265359;
    return vec2(atan(pos.z, pos.x)/(2.0*PI)+0.5, pos.y*0.5+0.5);
}

vec4 computeSpecularity(float specular, float specularWeight){

    return vec4(vec3(specular*specularWeight),0.0); // weight the specularity color dependent of specularity
}

void main(void)
{
    vec2 uv = project(localPos);
    float height = texture2D(heightMap, uv).a;
    float bumpVisibility = clamp((dot(normalize(n), _dLight[0])+0.1)*10.0,0.0,1.0);
    vec3 nBumped = bumpedNormal(uv);
    if (height < waterLevel ){
        nBumped = n;
    } else {
        nBumped = mix(n, nBumped, bumpVisibility);
    }
    nBumped = normalize(nBumped);
    vec4 diffuseSpecular = texture2D(mainTexture,uv);
    vec3 diffuse;

    float specular;
    float specularExponent = max(1.0, diffuseSpecular.a*50.0);
    getDirectionalLight(nBumped, _dLight, specularExponent, diffuse, specular);

    vec3 atmosphereColor = getAtmosphereLight(n, _dLight) * atmosphereColor.xyz*0.9;
    vec3 light = max(diffuse, _ambient)*0.9;

    gl_FragColor =
        // mod(gl_FragCoord.y,10.0)<5.0?vec4(vec3(bumpVisibility),1.0):(
        vec4(atmosphereColor,0.0) +
	    computeSpecularity(specular, diffuseSpecular.a) +
	    vec4(diffuseSpecular.xyz*light,1.0);
	    //vec4(diffuseSpecular.a,0.0,0.0,1.0);
}
