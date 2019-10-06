#include "lib/common.glsl"
#include "lib/frag.glsl"
void main() {
  // Input Textures
  vec2 coord = srcCoord;
  coord.x += clockTime * 0.125;
  
  // coord.y += 0.5;
  // coord.y /= 2.0;

  // coord = coord * 0.5 + 0.5;
  // coord = fract( coord );
  coord = fract( coord );
  coord *= 2.0;
  // coord += 1.0;

  coord = 1.0-abs( 1.0-coord );

  vec4 One = Texture( OneSampler, coord );
  One = Texture( OneSampler, coord );
  OUT = One;
}
