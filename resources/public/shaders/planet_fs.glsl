precision mediump float;
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vEcPosition;
varying vec3 vWPos; // world position
varying vec4 vShadowMapCoord;

uniform vec4 mainColor;
uniform float specularExponent;
uniform vec4 specularColor;
uniform sampler2D mainTexture;
uniform float _time;

#pragma include "light.glsl"
#pragma include "shadowmap.glsl"
#pragma include "noise4D.glsl"

void main(void)
{
    vec3 normal = normalize(vNormal);
    vec3 diffuse;
    float specular;
    getDirectionalLight(normal, _dLight, specularExponent, diffuse, specular);
    vec3 diffusePoint;
    float specularPoint;
    getPointLight(normal,vEcPosition, _pLights,specularExponent,diffusePoint,specularPoint);
    float visibility;
    if (SHADOWS){
        visibility = computeLightVisibility(vShadowMapCoord);
    } else {
        visibility = 1.0;
    }
    vec3 color = max((diffuse+diffusePoint)*visibility,_ambient.xyz)*mainColor.xyz;

    gl_FragColor = vec4(texture2D(mainTexture,vUv).xyz*color.xyz, 1.0)+vec4((specular+specularPoint)*specularColor.xyz,0.0);
    // fractional brownian motion (FBM, 1/f, Octaves)

    float noiseSum = 0.0;
    float size = 1.0;
    float amplitude = 0.5;
    float timeScale = 0.0001;
    bool turbulence = true;
    float noise = 0.0;
    if (turbulence ){

        for (int i=0;i<4;i++){
            noiseSum += abs(snoise(vec4(vWPos*size,_time*timeScale )) / size - 0.5)*0.5;
            size *= 2.0;
        }
        amplitude = 0.25;
        noise = amplitude * noiseSum;
    } else {

        for (int i=0;i<4;i++){
            noiseSum += snoise(vec4(vWPos*size,_time*timeScale )) / size;
            size *= 2.0;
        }
        noise = 0.5 + amplitude * noiseSum;
    }

    gl_FragColor = vec4(noise ,noise ,noise ,1.0) * mainColor;
}
