#include "lib/common.glsl"
#include "lib/frag.glsl"
void main() {
  // Input Textures
  vec2 OneCoord = srcCoord;
  vec2 TwoCoord = srcCoord;

  vec4 One = Texture( OneSampler, OneCoord );
  vec4 Two = Texture( TwoSampler, TwoCoord );

  TwoCoord.xy += One.xy;
  OneCoord.xy += Two.xy;

  Two = Texture( TwoSampler, TwoCoord );
  One = Texture( OneSampler, OneCoord );

  OUT = mix( One, Two, 0.5 );
}
