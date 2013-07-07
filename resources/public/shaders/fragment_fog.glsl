uniform vec3 fogColor;
uniform float fogDensity;
uniform float fogNear;
uniform float fogFar;

float depth = gl_FragCoord.z / gl_FragCoord.w;
const float LOG2 = 1.442695;
float fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );
fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );
float fogFactor = smoothstep( fogNear, fogFar, depth );
gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );
