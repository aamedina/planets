attribute vec3 vertex;
attribute vec3 normal;
attribute vec2 uv1;

uniform mat4 _mvProj;
uniform mat4 _m;
uniform mat4 _mv;
uniform mat3 _norm;
uniform float _time;

varying vec2 uv;

void main(void) {
	// compute position
	gl_Position = _mvProj * vec4(vertex, 1.0);
	uv = uv1;
}