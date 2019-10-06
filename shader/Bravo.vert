#include "lib/common.glsl"
#include "ofxLoopin/vert.glsl"


void main()
{
  srcCoord = texcoord;
  vertColour = texcoord.gggg;

  vec2 mov = Bravo.xy;
  mov.y /= float( bufferWidth ) / float( bufferHeight );

  vec4 pos = position;
  pos.xyz *= mix( 0.1, 1.5, Bravo.z * 0.5 +0.5 );
  // pos.x += 0.3;
  pos.xy += mov.xy;


  gl_Position = modelViewProjectionMatrix * pos;
}
