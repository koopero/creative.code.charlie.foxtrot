#include "ofxLoopin/compatible.glsl"
#include "ofxLoopin/frag.glsl"
#include "ofxLoopin/src.glsl"

uniform sampler2D OneSampler;

void main()
{
  OUT = Texture(OneSampler, srcCoord);
  OUT *= vertColour;
}
