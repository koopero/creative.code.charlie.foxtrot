#include "lib/common.glsl"
#include "lib/frag.glsl"
void main() {
  // Input Textures
  vec2 OneCoord = srcCoord;
  vec4 One = Texture( OneSampler, OneCoord );
  One = Texture( OneSampler, OneCoord );
  OUT = One;
}
