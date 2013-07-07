// #ifdef GL_ES
// precision highp float;
// #endif
// varying vec2 uv;

uniform sampler2D heightMap;

uniform float scale;

uniform vec4 color0;
uniform vec4 color1;
uniform vec4 color2;
uniform vec4 color3;
uniform vec4 color4;
uniform vec4 color5;
uniform vec4 color6;

uniform float colorStop0;
uniform float colorStop1;
uniform float colorStop2;
uniform float colorStop3;
uniform float colorStop4;

uniform float waterLevel;

vec4 linearGradient(float height){
    if (height < colorStop0){
        return mix(color0, color1, height/colorStop0);
    } else if (height < colorStop1){
        return mix(color1, color2, (height - colorStop0)/(colorStop1 - colorStop0));
    } else if (height < colorStop2){
        return mix(color2, color3, (height - colorStop1)/(colorStop2 - colorStop1));
    } else if (height < colorStop3){
        return mix(color3, color4, (height - colorStop2)/(colorStop3 - colorStop2));
    } else if (height < colorStop4){
        return mix(color4, color5, (height - colorStop3)/(colorStop4 - colorStop3));
    } else {
        return mix(color5, color6, (height - colorStop4)/(1.0 - colorStop4));
    }
}

// 1.0 small specular highlight
// 0.0 no (very wide) specular highlight
float specularity(float height, vec2 uv){
    if (height < waterLevel){
        return 1.0;
    } else {
        return 0.0;
    }
}

void main(void)
{
    float height = texture2D(heightMap,uv).a;
    gl_FragColor = vec4(linearGradient(height).xyz, specularity(height, uv));
}
