#ifdef GL_ES
precision highp float;
#endif
varying vec2 uv;

uniform float scale;

#pragma include "cellular3D.glsl"

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
    vec2 F = cellular(pos.xyz*scale);
    float n = F.y-F.x;
	gl_FragColor = vec4(F.x);
}
