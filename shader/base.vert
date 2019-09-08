#include "ofxLoopin/compatible.glsl"
#include "ofxLoopin/vert.glsl"


void main()
{
  srcCoord = texcoord;
  vertColour = vec4(1,1,1,1);

  vec4 pos = position;

  gl_Position = modelViewProjectionMatrix * pos;
}
