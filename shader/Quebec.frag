#include "lib/common.glsl"
#include "lib/frag.glsl"
void main() {
  // Input Textures
  vec2 OneCoord = srcCoord;
  vec2 TwoCoord = srcCoord;

  vec4 One = Texture( OneSampler, OneCoord );
  vec4 Two = Texture( TwoSampler, TwoCoord );

  vec3 hsv = rgb2hsv( One.rgb );
  float OneMax = max( One.r, max( One.g, One.b ) );
  float OneMin = min( One.r, min( One.g, One.b ) );

  hsv.x += Two.x;
  hsv.y += Two.y;
  One.rgb = hsv2rgb( hsv );

  // TwoCoord.xy += One.xy;
  // OneCoord.xy += Two.xy;

  OUT = mix( One, Two, 0. );
}
