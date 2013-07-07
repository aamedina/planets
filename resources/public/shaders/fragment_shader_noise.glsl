//
// Description : Array and textureless GLSL 3D simplex noise function.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : ijm
//     Lastmod : 20110409 (stegu)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//

#ifdef GL_ES
precision mediump float;
#endif

uniform float time;
varying vec2 vUv;
uniform vec3 resolution;
const mat2 rotate2D = mat2(1.4623, 1.67231, -1.67231, 1.4623);
mat3 m = mat3( 0.00,  0.80,  0.60,
               -0.80,  0.36, -0.48,
               -0.60, -0.48,  0.64 );

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec3 permute(vec3 x) {
  return mod289(((x*34.0)+1.0)*x);
}
float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                     -0.577350269189626,  // -1.0 + 2.0 * C.x
                      0.024390243902439); // 1.0 / 41.0
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289(i); // Avoid truncation effects in permutation
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
		+ i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}
vec4 permute( vec4 x ) {
  return mod( ( ( x * 34.0 ) + 1.0 ) * x, 289.0 );
}
vec4 taylorInvSqrt( vec4 r ) {
  return 1.79284291400159 - 0.85373472095314 * r;
}
float snoise( vec3 v ) {
  const vec2 C = vec2( 1.0 / 6.0, 1.0 / 3.0 );
  const vec4 D = vec4( 0.0, 0.5, 1.0, 2.0 );
  vec3 i  = floor( v + dot( v, C.yyy ) );
  vec3 x0 = v - i + dot( i, C.xxx );
  vec3 g = step( x0.yzx, x0.xyz );
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );
  vec3 x1 = x0 - i1 + 1.0 * C.xxx;
  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
  vec3 x3 = x0 - 1. + 3.0 * C.xxx;
  i = mod( i, 289.0 );
  vec4 p = permute( permute( permute(
                                     i.z + vec4( 0.0, i1.z, i2.z, 1.0 ) )
                             + i.y + vec4( 0.0, i1.y, i2.y, 1.0 ) )
                    + i.x + vec4( 0.0, i1.x, i2.x, 1.0 ) );
  float n_ = 1.0 / 7.0; // N=7
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor( p * ns.z *ns.z );  //  mod(p,N*N)
  vec4 x_ = floor( j * ns.z );
  vec4 y_ = floor( j - 7.0 * x_ );    // mod(j,N)
  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs( x ) - abs( y );
  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );
  vec4 s0 = floor( b0 ) * 2.0 + 1.0;
  vec4 s1 = floor( b1 ) * 2.0 + 1.0;
  vec4 sh = -step( h, vec4( 0.0 ) );
  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
  vec3 p0 = vec3( a0.xy, h.x );
  vec3 p1 = vec3( a0.zw, h.y );
  vec3 p2 = vec3( a1.xy, h.z );
  vec3 p3 = vec3( a1.zw, h.w );
  vec4 norm = taylorInvSqrt( vec4( dot( p0, p0 ), dot( p1, p1 ), dot( p2, p2 ), dot( p3, p3 ) ) );
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;
  vec4 m = max( 0.6 - vec4( dot( x0, x0 ), dot( x1, x1 ), dot( x2, x2 ), dot( x3, x3 ) ), 0.0 );
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot( p0, x0 ), dot( p1, x1 ),
                                dot( p2, x2 ), dot( p3, x3 ) ) );

}

const float dMax = 28.0;

float terrain( vec2 p, int octaves ) {
  float h = 0.0; // height
  float w = 0.5; // octave weight
  float m = 0.4; // octave multiplier
  for (int i=0; i<16; i++) {
    if (i<octaves) {
      h += w * snoise((p * m));
    }
    else break;
    w *= 0.5;
    m *= 2.0;
  }
  return h;
}

vec2 map( vec3 p, int octaves ) {
  
  float dMin = dMax; // nearest intersection
  float d; // depth
  float mID = -1.0; // material ID
  
  // terrain
  float h = terrain(p.xz, octaves);
  h += smoothstep(-0.3, 1.5, h); // exaggerate the higher terrain
  h *= smoothstep(-1.5, -0.3, h); // smooth out the lower terrain
  d = p.y - h;
  if (d<dMin) { 
    dMin = d;
    mID = 0.0;
  }
  
  // trees
  if (h<-0.3) {
    float f = terrain(p.xz*15.0, octaves);
    f = 0.1 * clamp(0.5+f, 0.0, 1.0);
    d -= f;
    if (d<dMin) { 
      dMin = d;
      mID = 1.0;
    }
  }

  return vec2(dMin, mID);
}

vec2 castRay( vec3 ro, vec3 rd, int octaves) {
  const float p = 0.0001; // precision
  float t = 0.0; // distance
  float h = p * 2.0; // step
  float m = -1.0;
  for (int i=0; i<32; i++) {
    if (abs(h)>p || t<dMax ) {
      t += h; // next step
      vec2 res = map(ro + rd*t, octaves); // get intersection
      h = res.x; // get distance
      m = res.y; // get material
    } 
    else break;
  }
  if (t>dMax) m = -1.0; // if no intersection, material ID is -1.0;
  return vec2(t, m);
}

vec3 calcNormal( vec3 p, int octaves) {
  const vec3 eps = vec3(0.0005, 0.0, 0.0);
  return normalize( vec3(map(p+eps.xyy, octaves).x - map(p-eps.xyy, octaves).x,
                         map(p+eps.yxy, octaves).x - map(p-eps.yxy, octaves).x,
                         map(p+eps.yyx, octaves).x - map(p-eps.yyx, octaves).x) );
}

float shadows( vec3 ro, vec3 rd, float tMax, float k, int octaves ) {
  float res = 1.0;
  float t = 0.001;
  for(int i=0; i<5; i++) {
    if (t<tMax) {
      float h = map(ro + rd*t, octaves).x;
      res = min( res, k*h/t );
      t += h;
    }
    else break;
  }
  return clamp(res, 0.0, 1.0);
}

vec3 render( vec3 ro, vec3 rd ) {
  const int geoLOD = 16;
  
  vec3 color = vec3(0.5,0.5,0.5); // base color is fog color
  vec2 res = castRay(ro, rd, geoLOD);
  
  vec3 lPos = normalize( vec3(0.5, 0.5, 0.5) ); // light position
  vec3 lCol = vec3(1.0, 0.9, 0.8); // yellowish light
  
  // mat -1 = background/sky
  if (res.y < -0.5) {
    float sun = clamp(dot(rd,lPos),0.0,1.0);
    color += 0.2 * lCol * sun*sun;
    return color;
  }
  
  int norLOD = int(max(2.0, 12.0-12.0*res.x/dMax));
  
  vec3 pos = ro + rd*res.x; // terrain pos
  vec3 nor = calcNormal(pos, norLOD); // terrain normals
  
  // mat 0 = terrain
  if (res.y>-0.5&&res.y<0.5) {
    
    // base rock colors
    color = mix( vec3(0.2, 0.2, 0.2), vec3(0.25, 0.2, 0.15), smoothstep(0.7, 1.0, nor.y) );
    
    // layer noise (to produdce lighter color bands of rock)
    float n = 0.5*(snoise(pos.xy*vec2(2.0, 40.0))+1.0);
    // rock layers should show most where nomals are NOT straight up
    color = mix( n*vec3(0.5, 0.4, 0.4), color, nor.y ); 
    
    // grass & moss grows thickest where normals are straight up
    color = mix( color, vec3(0.0, 0.05, -0.05), smoothstep(0.7, 0.9, nor.y) );
    
    // add in lighting and shadows
    float lAmb = clamp( 0.5 + 0.5 * nor.y, 0.0, 1.0); // ambient
    float lDif = clamp( dot( nor, lPos ), 0.0, 2.0); // diffuse
    
    // shadow octaves should match geometry octaves used in initial
    // ray cast
    if (lDif>0.05) lDif *= shadows(pos, lPos, 1.0, 1.0, geoLOD);
    
    color += (0.2*lAmb) * lCol;
    color *= (1.2*lDif) * lCol;
  }
  //.mat 1 = trees
  if (res.y>0.5) {
    color = mix( vec3(0.15, 0.05, 0.0), vec3(0.05, 0.1, 0.0), smoothstep(0.0, 0.7, nor.y) );
    
    // add in lighting and shadows
    float lAmb = clamp( 0.5 + 0.5 * nor.y, 0.0, 1.0); // ambient
    float lDif = clamp( dot( nor, lPos ), 0.0, 2.0); // diffuse
    
    // shadow octaves should match geometry octaves used in initial
    // ray cast
    if (lDif>0.05) lDif *= shadows(pos, lPos, 1.0, 1.0, geoLOD);
    
    color += (0.2*lAmb) * lCol;
    color *= (1.2*lDif) * lCol;
  }
  
  // fog
  float n = smoothstep(-0.8, -0.2, terrain(pos.xz, 2)); // valley fog
  float fog = exp(-0.01 * res.x*res.x); // exponentioal fog equation
  color = mix(vec3(0.5,0.5,0.5), color, n*fog); // add fog in valleys
                                                // and distance
  
  return color;
}

float surface3( vec3 coord ) {

  float n = 0.0;

  n += 1.0 * abs( snoise( coord ) );
  n += 0.5 * abs( snoise( coord * 2.0 ) );
  n += 0.25 * abs( snoise( coord * 4.0 ) );
  n += 0.125 * abs( snoise( coord * 8.0 ) );
  n += 0.0625 * abs( snoise( coord * 16.0 ) );
  n += 0.03125 * abs( snoise( coord * 32.0 ) );
  n += 0.015625 * abs( snoise( coord * 64.0 ) );
  n += 0.0078125 * abs( snoise( coord * 128.0 ) );
  n += 0.00390625 * abs( snoise( coord * 256.0 ) );
  n += 0.001953125 * abs( snoise( coord * 512.0 ) );
  n += 0.0009765625 * abs( snoise( coord * 1024.0 ) );

  return n;

}

float elevation( float n, vec2 vUv ) {

  float h = n;

  vec2 uv = gl_FragCoord.xy;

  for(int i=0; i<12; i++){
    float factor = pow(2.0, float(i));
    h += snoise(vec3(vUv*factor, h*float(i+1)))/(pow(factor * n, 0.88)*4.0);
  }

  return h;
}

//--------------------------------------------------------------------------
// Noise functions...
float Hash( float n )
{
  return fract(sin(n)*43758.5453123);
}

//--------------------------------------------------------------------------
float Hash(vec2 p)
{
  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

//--------------------------------------------------------------------------
float Noise( in vec2 x )
{
  vec2 p = floor(x);
  vec2 f = fract(x);
  f = f*f*(3.0-2.0*f);
  float n = p.x + p.y*57.0;
  float res = mix(mix( Hash(n+  0.0), Hash(n+  1.0),f.x),
                  mix( Hash(n+ 57.0), Hash(n+ 58.0),f.x),f.y);
  return res;
}

//--------------------------------------------------------------------------
vec2 Noise2( in vec2 x )
{
  vec2 res = vec2(Noise(x), Noise(x+vec2(4101.03, 2310.0)));
  return res-vec2(.5, .5);
}

vec3 NoiseDerivative( in vec2 x )
{
  vec2 p = floor(x);
  vec2 f = fract(x);
  vec2 u = f*f*(3.0-2.0*f);
  float n = p.x + p.y*57.0;
  float a = Hash(n+  0.0);
  float b = Hash(n+  1.0);
  float c = Hash(n+ 57.0);
  float d = Hash(n+ 58.0);
  return vec3(a+(b-a)*u.x+(c-a)*u.y+(a-b-c+d)*u.x*u.y,
              30.0*f*f*(f*(f-2.0)+1.0)*(vec2(b-a,c-a)+(a-b-c+d)*u.yx));
}

// Low def version for ray-marching through the height field...
float Terrain( in vec2 p)
{
  vec2 pos = p*0.08;
  float w = (Noise(pos*.25)*0.75+.15);
  w = 36.0 * w * w;
  vec2 dxy = vec2(0.0, 0.0);
  float f = .0;
  for (int i = 0; i < 5; i++)
    {
      vec3 v = NoiseDerivative(pos);
      dxy += v.yz;
      f += (w * (v.x) / (1.0 + dot(dxy, dxy))) ;
      w = -w * 0.37;//...Flip negative and positive for variation
      pos = rotate2D * pos;
    }
  float ff = snoise(pos*.003);
  
  f += pow(ff, 6.0)*85.-1.0;
  return f;
}

//--------------------------------------------------------------------------
// Map to lower resolution for height field mapping for Scene
// function...
float Map(in vec3 p)
{
  float h = Terrain(p.xz);
  
  #ifdef TREES
  float ff = Noise(p.xz*1.3)*.8;
  treeLine = smoothstep(ff, .1+ff, h) * smoothstep(.5+ff, .4+ff, h);
  treeCol = Trees(p.xz);
  h += treeCol;
  #endif
  
  return p.y - h;
}

//--------------------------------------------------------------------------
float FractalNoise(in vec2 xy)
{
  float w = .65;
  float f = 0.0;

  for (int i = 0; i < 4; i++)
    {
      f += Noise(xy) * w;
      w *= 0.5;
      xy *= 2.3;
    }
  return f;
}

float fBm(vec3 coord, int octaves) {
  float f = 0.0;
  float w = 0.5;
  float dx = 0.0;
  float dz = 0.0;
  for (int i = 0; i < octaves; ++i) {    
    float n = surface3(coord);
    vec3 noiseDerivative = NoiseDerivative(vec2(coord.x, coord.y));
    dx += noiseDerivative.y;
    dz += noiseDerivative.z;
    f += w * n / (1.0 + dx * dx + dz * dz);
    w *= 0.5;
    coord *= 2.03;
  }
  return f;
}

float terrain(vec3 coord)
{
  vec3 pos = coord * 0.08;
  float w = (snoise(pos*.25)*0.75+-.15);
  w = 36.0 * w * w;
  vec2 dxy = vec2(0.0, 0.0);
  float f = 0.0;
  for (int i = 0; i < 8; i++) {
    vec3 v = NoiseDerivative(pos.xy);
    dxy += v.yz;
    f += (w * (v.x)  / (1.0 + dot(dxy, dxy)));
    w =  - w * 0.37;//...Flip negative and positive for varition   
    pos *= 2.03;
  }
  float ff = snoise(pos*.003);
  f += pow(ff, 6.0)*85.-1.0; 

  // for (int i = 0; i < 12; i++) {
  //   vec3 v = NoiseDerivative(pos.xy);
  //   dxy += v.yz;
  //   f += (w * (v.x) / (1.0 + dot(dxy, dxy)));
  //   w =  - w * 0.37;
  //   pos *= 2.03;
  // }
  return f;
}

void main( void ) {

  vec3 coord = vec3(vUv, 1.0);

  // vec2 pos = vUv;

  // vec3 cPos = cameraPosition;
  // const vec3 cUp = vec3(0., 1., 0.);
  // vec3 cLook = vec3(cPos.x + 1.0, cPos.y*0.7, 0.0);

  // vec3 ww = normalize(cLook - cPos);
  // vec3 uu = normalize(cross(ww, cUp));
  // vec3 vv = normalize(cross(uu, ww));

  // vec3 rd = normalize(pos.x*uu + pos.y*vv + 2.0*ww);

  // vec3 color = render(cPos, rd);

  // float n = surface3(coord);

  float n = surface3(coord);

  gl_FragColor = vec4(vec3(n, n, n), 1.0 );

}

