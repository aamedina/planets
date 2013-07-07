uniform vec3 uAmbientColor;
uniform vec3 uDiffuseColor;
uniform vec3 uSpecularColor;
uniform float uShininess;
uniform float uOpacity;
uniform bool enableDiffuse1;
uniform bool enableDiffuse2;
uniform bool enableSpecular;
uniform sampler2D tDiffuse1;
uniform sampler2D tDiffuse2;
uniform sampler2D tDetail;
uniform sampler2D tNormal;
uniform sampler2D tSpecular;
uniform sampler2D tDisplacement;
uniform float uNormalScale;
uniform vec2 uRepeatOverlay;
uniform vec2 uRepeatBase;
uniform vec2 uOffset;
varying vec3 vTangent;
varying vec3 vBinormal;
varying vec3 vNormal;
varying vec2 vUv;
uniform vec3 ambientLightColor;
#if MAX_DIR_LIGHTS > 0
uniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];
uniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];
#endif
#if MAX_HEMI_LIGHTS > 0
uniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];
uniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];
uniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];
#endif
#if MAX_POINT_LIGHTS > 0
uniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];
uniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];
uniform float pointLightDistance[ MAX_POINT_LIGHTS ];
#endif
varying vec3 vViewPosition;

#ifdef USE_SHADOWMAP
uniform sampler2D shadowMap[ MAX_SHADOWS ];
uniform vec2 shadowMapSize[ MAX_SHADOWS ];
uniform float shadowDarkness[ MAX_SHADOWS ];
uniform float shadowBias[ MAX_SHADOWS ];
varying vec4 vShadowCoord[ MAX_SHADOWS ];

float unpackDepth( const in vec4 rgba_depth ) {

  const vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );
  float depth = dot( rgba_depth, bit_shift );
  return depth;

}
#endif

#ifdef USE_FOG
uniform vec3 fogColor;
#ifdef FOG_EXP2
uniform float fogDensity;
#else
uniform float fogNear;  
uniform float fogFar;
#endif
#endif

// This peturbs the fractal positions for each iteration down...
// Helps make nice twisted landscapes...
const mat2 rotate2D = mat2(1.4623, 1.67231, -1.67231, 1.4623);

// Alternative rotation:-
// const mat2 rotate2D = mat2(1.2323, 1.999231, -1.999231, 1.22);

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
float Noise( in vec3 x )
{
  vec3 p = floor(x);
  vec3 f = fract(x);
  f = f*f*(3.0-2.0*f);
  float n = p.x + p.y*57.0 + 113.0*p.z;
  float res = mix(mix(mix( Hash(n+  0.0), Hash(n+  1.0),f.x),
                      mix( Hash(n+ 57.0), Hash(n+ 58.0),f.x),f.y),
                  mix(mix( Hash(n+113.0), Hash(n+114.0),f.x),
                      mix( Hash(n+170.0), Hash(n+171.0),f.x),f.y),f.z);
  return res;
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

//--------------------------------------------------------------------------
// iq's derivative noise function...
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

//--------------------------------------------------------------------------
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
  float ff = Noise(pos*.003);
  
  f += pow(ff, 6.0)*85.-1.0;
  return f;
}

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

float Terrain2( in vec2 p)
{
  // There's some real magic numbers in here! 
  // The Noise calls add large mountain ranges for more variation over
  // distances...
  vec2 pos = p*0.08;
  float w = (Noise(pos*.25)*0.75+.15);
  w = 36.0 * w * w;
  vec2 dxy = vec2(0.0, 0.0);
  float f = .0;
  for (int i = 0; i < 5; i++)
    {
      vec3 v = NoiseDerivative(pos);
      dxy += v.yz;
      f += (w * (v.x)  / (1.0 + dot(dxy, dxy)));
      w =  - w * 0.37;//...Flip negative and positive for varition   
      pos = rotate2D * pos;
    }
  float ff = Noise(pos*.003);
  f += pow(ff, 6.0)*85.-1.0;
  
  #ifdef TREES
  treeCol = Trees(p);
  f += treeCol;
  if (treeCol > 0.0) return f;
  #endif
  
  // That's the last of the low resolution, now go down further for
  // the Normal data...
  for (int i = 0; i < 6; i++)
    {
      vec3 v = NoiseDerivative(pos);
      dxy += v.yz;
      f += (w * (v.x) / (1.0 + dot(dxy, dxy)));
      w =  - w * 0.37;
      pos = rotate2D * pos;
    }
  
  return f;
}

//--------------------------------------------------------------------------
// Hack the height, position, and normal data to create the coloured
// landscape
vec3 TerrainColour(vec3 pos, vec3 normal, float dis)
{
  vec3 mat;
  float specular = .0;
  vec3 dir = normalize(pos);
  
  vec3 matPos = pos * 2.0;// ... I had change scale halfway though,
                          // this lazy multiply allow me to keep the
                          // graphic scales I had

  float disSqrd = dis * dis;// Squaring it gives better distance
                            // scales.

  float f = clamp(Noise(matPos.xz*.05), 0.0,1.0);//*10.8;
  f += Noise(matPos.xz*.1+normal.yz*1.08)*.85;
  f *= .55;
  vec3 m = mix(vec3(.63*f+.2, .7*f+.1, .7*f+.1), vec3(f*.43+.1, f*.3+.2, f*.35+.1), f*.65);
  mat = m*vec3(f*m.x+.36, f*m.y+.30, f*m.z+.28);
  // Should have used smoothstep to add colours, but left it using
  // 'if' for sanity...
  if (normal.y < .5)
    {
      float v = normal.y;
      float c = (.5-normal.y) * 4.0;
      c = clamp(c*c, 0.1, 1.0);
      f = Noise(vec2(matPos.x*.09, matPos.z*.095+matPos.yy*0.15));
      f += Noise(vec2(matPos.x*2.233, matPos.z*2.23))*0.5;
      mat = mix(mat, vec3(.4*f), c);
      specular+=.1;
    }

  // Grass. Use the normal to decide when to plonk grass down...
  if (matPos.y < 45.35 && normal.y > .65)
    {

      m = vec3(Noise(matPos.xz*.073)*.5+.15, Noise(matPos.xz*.12)*.6+.25, 0.0);
      m *= (normal.y- 0.75)*.85;
      mat = mix(mat, m, clamp((normal.y-.65)*1.3 * (45.35-matPos.y)*0.1, 0.0, 1.0));
    }
  #ifdef TREES
  if (treeCol > 0.0)
    {
      mat = vec3(.02+Noise(matPos.xz*5.0)*.03, .05, .0);
      normal = normalize(normal+vec3(Noise(matPos.xz*33.0)*1.0-.5, .0, Noise(matPos.xz*33.0)*1.0-.5));
      specular = .0;
    }
  #endif
  
  // Snow topped mountains...
  if (matPos.y > 50.0 && normal.y > .28)
    {
      float snow = clamp((matPos.y - 50.0 - Noise(matPos.xz * .1)*28.0) * 0.035, 0.0, 1.0);
      mat = mix(mat, vec3(.7,.7,.8), snow);
      specular += snow;
    }
  // Beach effect...
  if (matPos.y < 1.45)
    {
      if (normal.y > .4)
        {
          f = Noise(matPos.xz * .084)*1.5;
          f = clamp((1.45-f-matPos.y) * 1.34, 0.0, .67);
          float t = (normal.y-.4);
          t = (t*t);
          mat = mix(mat, vec3(.09+t, .07+t, .03+t), f);
        }
      // Cheap under water darkening...it's wet after all...
      if (matPos.y < 0.0)
        {
          mat *= .5;
        }
    }
  
  // Do the water...
  if (pos.y < 0.0)
    {
      // Can go under water, but current camera doesn't find a
      // place...
      mat = mix(mat, vec3(0.0, .1, .2), .75); 
    }else
    if (matPos.y < 0.0)
      {
        // Pull back along the ray direction to get water surface
        // point at y = 0.0 ...
        float time = 1.0*.03;
        vec3 watPos = matPos;
        watPos += -dir * (watPos.y/dir.y);
        // Make some dodgy waves...
        float tx = cos(watPos.x*.052) *4.5;
        float tz = sin(watPos.z*.072) *4.5;
        vec2 co = Noise2(vec2(watPos.x*4.7+1.3+tz, watPos.z*4.69+time*35.0-tx));
        co += Noise2(vec2(watPos.z*8.6+time*13.0-tx, watPos.x*8.712+tz))*.4;
        vec3 nor = normalize(vec3(co.x, 20.0, co.y));
        nor = normalize(reflect(dir, nor));//normalize((-2.0*(dot(dir,
                                           //nor))*nor)+dir);
      }
  return mat;
}


void main() {

  gl_FragColor = vec4( vec3( 1.0 ), uOpacity );

  vec3 specularTex = vec3( 1.0 );

  vec2 uvOverlay = uRepeatOverlay * vUv + uOffset;
  vec2 uvBase = uRepeatBase * vUv;

  vec3 normalTex = texture2D( tDetail, uvOverlay ).xyz * 2.0 - 1.0;
  normalTex.xy *= uNormalScale;
  normalTex = normalize( normalTex );

  if( enableDiffuse1 && enableDiffuse2 ) {

    vec4 colDiffuse1 = texture2D( tDiffuse1, uvOverlay );
    vec4 colDiffuse2 = texture2D( tDiffuse2, uvOverlay );

#ifdef GAMMA_INPUT

    colDiffuse1.xyz *= colDiffuse1.xyz;
    colDiffuse2.xyz *= colDiffuse2.xyz;

#endif

    gl_FragColor = gl_FragColor * mix ( colDiffuse1, colDiffuse2, 1.0 - texture2D( tDisplacement, uvBase ) );

  } else if( enableDiffuse1 ) {

    gl_FragColor = gl_FragColor * texture2D( tDiffuse1, uvOverlay );

  } else if( enableDiffuse2 ) {

    gl_FragColor = gl_FragColor * texture2D( tDiffuse2, uvOverlay );

  }

  if( enableSpecular )
    specularTex = texture2D( tSpecular, uvOverlay ).xyz;

  mat3 tsb = mat3( vTangent, vBinormal, vNormal );
  vec3 finalNormal = tsb * normalTex;

  vec3 normal = normalize( finalNormal );
  vec3 viewPosition = normalize( vViewPosition );

  // point lights

#if MAX_POINT_LIGHTS > 0

  vec3 pointDiffuse = vec3( 0.0 );
  vec3 pointSpecular = vec3( 0.0 );

  for ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {

    vec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );
    vec3 lVector = lPosition.xyz + vViewPosition.xyz;

    float lDistance = 1.0;
    if ( pointLightDistance[ i ] > 0.0 )
      lDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );

    lVector = normalize( lVector );

    vec3 pointHalfVector = normalize( lVector + viewPosition );
    float pointDistance = lDistance;

    float pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );
    float pointDiffuseWeight = max( dot( normal, lVector ), 0.0 );

    float pointSpecularWeight = specularTex.r * max( pow( pointDotNormalHalf, uShininess ), 0.0 );

    pointDiffuse += pointDistance * pointLightColor[ i ] * uDiffuseColor * pointDiffuseWeight;
    pointSpecular += pointDistance * pointLightColor[ i ] * uSpecularColor * pointSpecularWeight * pointDiffuseWeight;

  }

#endif

  // directional lights

#if MAX_DIR_LIGHTS > 0

  vec3 dirDiffuse = vec3( 0.0 );
  vec3 dirSpecular = vec3( 0.0 );

  for( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {

    vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );

    vec3 dirVector = normalize( lDirection.xyz );
    vec3 dirHalfVector = normalize( dirVector + viewPosition );

    float dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );
    float dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );

    float dirSpecularWeight = specularTex.r * max( pow( dirDotNormalHalf, uShininess ), 0.0 );

    dirDiffuse += directionalLightColor[ i ] * uDiffuseColor * dirDiffuseWeight;
    dirSpecular += directionalLightColor[ i ] * uSpecularColor * dirSpecularWeight * dirDiffuseWeight;

  }

#endif

  // hemisphere lights

#if MAX_HEMI_LIGHTS > 0

  vec3 hemiDiffuse  = vec3( 0.0 );
  vec3 hemiSpecular = vec3( 0.0 ); 

  for( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {

    vec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );
    vec3 lVector = normalize( lDirection.xyz );

    // diffuse

    float dotProduct = dot( normal, lVector );
    float hemiDiffuseWeight = 0.5 * dotProduct + 0.5;

    hemiDiffuse += uDiffuseColor * mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );

    // specular (sky light)

    float hemiSpecularWeight = 0.0;

    vec3 hemiHalfVectorSky = normalize( lVector + viewPosition );
    float hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;
    hemiSpecularWeight += specularTex.r * max( pow( hemiDotNormalHalfSky, uShininess ), 0.0 );

    // specular (ground light)

    vec3 lVectorGround = -lVector;

    vec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );
    float hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;
    hemiSpecularWeight += specularTex.r * max( pow( hemiDotNormalHalfGround, uShininess ), 0.0 );

    hemiSpecular += uSpecularColor * mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight ) * hemiSpecularWeight * hemiDiffuseWeight;

  }

#endif

  // all lights contribution summation

  vec3 totalDiffuse = vec3( 0.0 );
  vec3 totalSpecular = vec3( 0.0 );

#if MAX_DIR_LIGHTS > 0

  totalDiffuse += dirDiffuse;
  totalSpecular += dirSpecular;

#endif

#if MAX_HEMI_LIGHTS > 0

  totalDiffuse += hemiDiffuse;
  totalSpecular += hemiSpecular;

#endif

#if MAX_POINT_LIGHTS > 0

  totalDiffuse += pointDiffuse;
  totalSpecular += pointSpecular;

#endif

  //gl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * uAmbientColor) + totalSpecular;
  gl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * uAmbientColor + totalSpecular );

#ifdef USE_SHADOWMAP
#ifdef SHADOWMAP_DEBUG
  vec3 frustumColors[3];    frustumColors[0] = vec3( 1.0, 0.5, 0.0 );    frustumColors[1] = vec3( 0.0, 1.0, 0.8 );    frustumColors[2] = vec3( 0.0, 0.5, 1.0 );
#endif
#ifdef SHADOWMAP_CASCADE
  int inFrustumCount = 0;
#endif
  float fDepth;    vec3 shadowColor = vec3( 1.0 );
  for( int i = 0; i < MAX_SHADOWS; i ++ ) {
    vec3 shadowCoord = vShadowCoord[ i ].xyz / vShadowCoord[ i ].w;
    // if ( something && something ) 		 breaks ATI OpenGL shader compiler
    // if ( all( something, something ) )  using this instead

    bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );    bool inFrustum = all( inFrustumVec );
    // don't shadow pixels outside of light frustum
    // use just first frustum (for cascades)
    // don't shadow pixels behind far plane of light frustum

#ifdef SHADOWMAP_CASCADE
    inFrustumCount += int( inFrustum );    bvec3 frustumTestVec = bvec3( inFrustum, inFrustumCount == 1, shadowCoord.z <= 1.0 );
#else
    bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
#endif
    bool frustumTest = all( frustumTestVec );
    if ( frustumTest ) {
      shadowCoord.z += shadowBias[ i ];
#if defined( SHADOWMAP_TYPE_PCF )
      // Percentage-close filtering
      // (9 pixel kernel)
      // http://fabiensanglard.net/shadowmappingPCF/

      float shadow = 0.0;
      /*
      // nested loops breaks shader compiler / validator on some ATI cards when using OpenGL
      // must enroll loop manually

      for ( float y = -1.25; y <= 1.25; y += 1.25 )    for ( float x = -1.25; x <= 1.25; x += 1.25 ) {
      vec4 rgbaDepth = texture2D( shadowMap[ i ], vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy );
      // doesn't seem to produce any noticeable visual difference compared to simple texture2D lookup
      //vec4 rgbaDepth = texture2DProj( shadowMap[ i ], vec4( vShadowCoord[ i ].w * ( vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy ), 0.05, vShadowCoord[ i ].w ) );
      float fDepth = unpackDepth( rgbaDepth );
      if ( fDepth < shadowCoord.z )    shadow += 1.0;
      }
      shadow /= 9.0;
      */

      const float shadowDelta = 1.0 / 9.0;
      float xPixelOffset = 1.0 / shadowMapSize[ i ].x;    float yPixelOffset = 1.0 / shadowMapSize[ i ].y;
      float dx0 = -1.25 * xPixelOffset;    float dy0 = -1.25 * yPixelOffset;    float dx1 = 1.25 * xPixelOffset;    float dy1 = 1.25 * yPixelOffset;
      fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );    if ( fDepth < shadowCoord.z ) shadow += shadowDelta;
      fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );    if ( fDepth < shadowCoord.z ) shadow += shadowDelta;
      fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );    if ( fDepth < shadowCoord.z ) shadow += shadowDelta;
      fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );    if ( fDepth < shadowCoord.z ) shadow += shadowDelta;
      fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );    if ( fDepth < shadowCoord.z ) shadow += shadowDelta;
      fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );    if ( fDepth < shadowCoord.z ) shadow += shadowDelta;
      fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );    if ( fDepth < shadowCoord.z ) shadow += shadowDelta;
      fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );    if ( fDepth < shadowCoord.z ) shadow += shadowDelta;
      fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );    if ( fDepth < shadowCoord.z ) shadow += shadowDelta;
      shadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );
#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
      // Percentage-close filtering
      // (9 pixel kernel)
      // http://fabiensanglard.net/shadowmappingPCF/

      float shadow = 0.0;
      float xPixelOffset = 1.0 / shadowMapSize[ i ].x;    float yPixelOffset = 1.0 / shadowMapSize[ i ].y;
      float dx0 = -1.0 * xPixelOffset;    float dy0 = -1.0 * yPixelOffset;    float dx1 = 1.0 * xPixelOffset;    float dy1 = 1.0 * yPixelOffset;
      mat3 shadowKernel;    mat3 depthKernel;
      depthKernel[0][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );    depthKernel[0][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );    depthKernel[0][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );    depthKernel[1][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );    depthKernel[1][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );    depthKernel[1][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );    depthKernel[2][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );    depthKernel[2][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );    depthKernel[2][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );
      vec3 shadowZ = vec3( shadowCoord.z );    shadowKernel[0] = vec3(lessThan(depthKernel[0], shadowZ ));    shadowKernel[0] *= vec3(0.25);    
      shadowKernel[1] = vec3(lessThan(depthKernel[1], shadowZ ));    shadowKernel[1] *= vec3(0.25);
      shadowKernel[2] = vec3(lessThan(depthKernel[2], shadowZ ));    shadowKernel[2] *= vec3(0.25);
      vec2 fractionalCoord = 1.0 - fract( shadowCoord.xy * shadowMapSize[i].xy );
      shadowKernel[0] = mix( shadowKernel[1], shadowKernel[0], fractionalCoord.x );    shadowKernel[1] = mix( shadowKernel[2], shadowKernel[1], fractionalCoord.x );
      vec4 shadowValues;    shadowValues.x = mix( shadowKernel[0][1], shadowKernel[0][0], fractionalCoord.y );    shadowValues.y = mix( shadowKernel[0][2], shadowKernel[0][1], fractionalCoord.y );    shadowValues.z = mix( shadowKernel[1][1], shadowKernel[1][0], fractionalCoord.y );    shadowValues.w = mix( shadowKernel[1][2], shadowKernel[1][1], fractionalCoord.y );
      shadow = dot( shadowValues, vec4( 1.0 ) );
      shadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );
#else
      vec4 rgbaDepth = texture2D( shadowMap[ i ], shadowCoord.xy );    float fDepth = unpackDepth( rgbaDepth );
      if ( fDepth < shadowCoord.z )
        // spot with multiple shadows is darker

        shadowColor = shadowColor * vec3( 1.0 - shadowDarkness[ i ] );
      // spot with multiple shadows has the same color as single shadow spot

      //shadowColor = min( shadowColor, vec3( shadowDarkness[ i ] ) );
#endif
    }

#ifdef SHADOWMAP_DEBUG
#ifdef SHADOWMAP_CASCADE
    if ( inFrustum && inFrustumCount == 1 ) gl_FragColor.xyz *= frustumColors[ i ];
#else
    if ( inFrustum ) gl_FragColor.xyz *= frustumColors[ i ];
#endif
#endif
  }
#ifdef GAMMA_OUTPUT
  shadowColor *= shadowColor;
#endif
  gl_FragColor.xyz = gl_FragColor.xyz * shadowColor;
#endif

#ifdef GAMMA_OUTPUT
  gl_FragColor.xyz = sqrt( gl_FragColor.xyz );
#endif

#ifdef USE_FOG
  float depth = gl_FragCoord.z / gl_FragCoord.w;
#ifdef FOG_EXP2
  const float LOG2 = 1.442695;    float fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );    fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );
#else
  float fogFactor = smoothstep( fogNear, fogFar, depth );
#endif
  gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );
#endif


}
