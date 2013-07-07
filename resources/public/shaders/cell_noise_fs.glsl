#ifdef GL_ES
precision highp float;
#endif
varying vec2 uv;


uniform float scale;
uniform float scaleSmall;
uniform float scaleXSmall;
uniform float border; // 0.02 - 0.2
uniform float borderSmall; // 0.02 - 0.2
uniform float borderXSmall; // 0.02 - 0.2
uniform float heightPower; // 0.1 - 2.0

#extension GL_OES_standard_derivatives : enable

#pragma include "cellular3D.glsl"

float aastep ( float threshold , float value ) {
  float afwidth = 0.7 * length ( vec2 ( dFdx ( value ), dFdy ( value )));
  return smoothstep ( threshold - afwidth , threshold + afwidth , value );
}

float pattern(vec3 pos, float outer, float inner, float b, out vec2 F){

   F = cellular(outer*pos.xyz); // Returns vectors to points
     // Constant width lines, from the book "Advanced RenderMan"
     float thresh = b * (length(F.xy));
     float f = F.y - F.x;
     f += (0.5 - cellular(inner*pos.xyz).y) * thresh;
     return aastep(thresh, f);
}

vec3 unproject(vec2 uv){
    const float PI = 3.14159265359;
    // normalize to -PI to +PI
    float azimuth = (uv.x -1.0)*2.0*PI;
    float y = (uv.y-0.5) * 2.0;
    return vec3(cos(azimuth) * cos(y),
            y,
            sin(azimuth) * cos(y));
}

void main(void)
{
    vec3 pos = unproject(uv);

    vec2 d1d2;
    float edge = 1.0;
    if (scale > 0.5){
        edge *= pattern(pos, 4.0*scale, 32.0*scale,border, d1d2);
    }
    vec2 d1d22;
    if (scaleSmall > 0.5){
        edge *= pattern(pos, 8.0*scaleSmall, 64.0*scaleSmall, borderSmall,d1d22);
    }
    vec2 d1d2New;
    if (scaleXSmall > 0.5){
        edge *= pattern(pos, 64.0*scaleXSmall, 264.0*scaleXSmall, borderXSmall,d1d2New);
    }
  gl_FragColor = vec4(edge*pow(d1d2.x*d1d2.y,heightPower));
}
