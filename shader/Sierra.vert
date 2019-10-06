#include "lib/common.glsl"
#include "ofxLoopin/vert.glsl"


void main()
{
  srcCoord = texcoord;
  vertColour = vec4(1,1,1,1);

  vec4 pos = position;
  // pos *= 1.6;

  gl_Position = modelViewProjectionMatrix * pos;
}
