uniform vec2 viewport;
uniform sampler2D heights;
    
vec3 get(float x, float y){
  vec2 uv = (gl_FragCoord.xy+vec2(x,y))/viewport; 
  float h = texture2D(heights, uv).x;
  return vec3(uv.x, h, uv.y);
}

vec3 getn(vec3 pos, float x, float y){
  vec3 v = get(x, y) - pos;
  vec3 perp = cross(vec3(0.0, 1.0, 0.0), v);
  return normalize(cross(v, perp));
}

void main(){
  vec3 pos = get(0.0, 0.0);
  vec3 normal =  
    normalize
    ((
      getn(pos, -1.0,  1.0) +
      getn(pos,  0.0,  1.0) +
      getn(pos,  1.0,  1.0) +
      getn(pos, -1.0,  0.0) +
      getn(pos,  1.0,  0.0) +
      getn(pos, -1.0, -1.0) +
      getn(pos,  0.0, -1.0) +
      getn(pos,  1.0, -1.0)
      )
     /8.0);
  gl_FragColor = vec4(normal, 1.0);
}
