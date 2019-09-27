#include "lib/common.glsl"
#include "lib/frag.glsl"
void main() {
  // Input Textures
  vec2 OneCoord = srcCoord;
  vec4 One = Texture( OneSampler, OneCoord );

  vec2 TwoCoord = srcCoord;

  TwoCoord.xy += One.xy;
  vec4 Two = Texture( TwoSampler, TwoCoord );

  vec2 ThreeCoord = srcCoord;
  vec4 Three = Texture( ThreeSampler, ThreeCoord );

  // Just output one
  OUT = mix( One, Two, 0.5 );

}
#endif 