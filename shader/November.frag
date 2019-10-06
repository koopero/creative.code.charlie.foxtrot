#include "lib/common.glsl"
#include "lib/frag.glsl"
void main() {
  // Input Textures
  vec2 coord = srcCoord;
  vec4 One = Texture( OneSampler, coord );
  vec4 Two = Texture( TwoSampler, srcCoord );

  vec2 oneDisplce = Two.xy - 0.5 * 2.0;
  oneDisplce *= 0.5 * Bravo.xy;
  oneDisplce = rotate2D( oneDisplce, clockTime * 12.0 + Bravo.z * 180 );
  oneDisplce *= Bravo.w * 3.0;

  coord.xy += oneDisplce;

  coord = mirrorCoord( coord );

  // vec2 coord = coord;
  // coord /= 2.0;
  // coord = fract( coord );
  // coord *= 2.0;
  // coord -= 1.0;
  // coord = 1.0 - abs( coord );


  // Two = Texture( TwoSampler, TwoCoord );
  One = Texture( OneSampler, coord );

  OUT = One;
}


