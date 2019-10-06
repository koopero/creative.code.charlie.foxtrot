#include "lib/common.glsl"
#include "lib/frag.glsl"

void main() {
  // Input Textures
  vec2 coord = srcCoord;
  vec2 radial = vec2( 
    1.0 - atan( coord.y - 0.5, coord.x - 0.5 ) / PI,
    length( coord.xy - 0.5 ) * 2.0 * 0.7
  );

  radial.y = pow( radial.y, 0.5 );

  radial = mirrorCoord( radial );

  coord = mix( coord, radial, 0.9 );

  vec4 One = Texture( OneSampler, coord );
  OUT.rgba = One.rgba;
}
