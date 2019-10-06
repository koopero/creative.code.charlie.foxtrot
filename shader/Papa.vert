#include "lib/common.glsl"
#include "lib/vert.glsl"



void main()
{
  srcCoord = texcoord;

  float phase = color.b;
  vec2 meshSize = vec2( meshCols, meshRows );
  vec2 index = floor( srcCoord * meshSize - color.rg / meshSize + 0.0001 );

  vertColour = vec4(1,1,1,1);

  vec3 noiseCoord = vec3( 
    // phase * 5.0,
    index.x + 100.1234234,
    index.y + 12.90123,
    clockTime * 0.1
  );

  vec2 scale = 1.0/meshSize * 1.4;

  vec3 displace = vec3( 
    snoise( noiseCoord.yxz ),
    snoise( noiseCoord.xyz ),
    snoise( noiseCoord.xzy )
  );

  vec4 pos = vec4(0);
  pos.xy = color.rg * 2.0 - 1.0;
  pos.w = 1.0;
  // pos.xy += spin;
  pos.xy *= scale;
  pos.y *= meshAspect;
  pos.xyz += displace;


  vec4 proj = modelViewProjectionMatrix * pos;
  proj.xy /= proj.w;

  vec2 coord = color.rg;
  coord = mix( coord, proj.xy * 0.5 + 0.5, Uniform.x );
  coord = mix( coord, srcCoord, 0.5 );
  srcCoord = coord;
  vec4 Two = Texture(TwoSampler, coord );
  // pos.z += length( Two.rgb ) * 0.0625;
  // pos.z -= phase * 0.1;
  // srcCoord = mix( srcCoord, proj.xy * 0.5 + 0.5, 0.25 );
  gl_Position = modelViewProjectionMatrix * pos;

}
