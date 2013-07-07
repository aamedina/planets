attribute vec3 vertex;
attribute vec3 normal;
attribute vec2 uv1;
attribute vec4 tangent;

uniform mat4 _mv; // model-view matrix
uniform mat4 _mvProj; // model-view-projection matrix
uniform mat3 _norm; // normal matrix
uniform float _time; // time in seconds

varying vec3 localPos;
varying vec3 n;
varying vec3 u_tangent;
varying vec3 v_tangent;
varying vec3 pos;

void main(void) {
	// compute position
	vec4 v = vec4(vertex, 1.0);
	gl_Position = _mvProj * v;
    pos = (_mv * v).xyz;
	localPos = vertex;
	// compute light info
	n = normalize(_norm * normal);
    u_tangent = -normalize(_norm * tangent.xyz)*tangent.w;
    v_tangent = normalize(cross(n, u_tangent));
}