#include "ofxLoopin/compatible.glsl"
#include "ofxLoopin/frag.glsl"
#include "ofxLoopin/src.glsl"

uniform sampler2D OneSampler;

void main()
{
  OUT = Texture(OneSampler, srcCoord);
  OUT.xyz += vec3( 0.4, 0.1, 0.6 ) * srcCoord.x;
  OUT.xyz += vec3( 0.1, 0.4, 0.6 ) * srcCoord.y;
  OUT.a = srcCoord.x;
  // OUT *= vertColour;
}
