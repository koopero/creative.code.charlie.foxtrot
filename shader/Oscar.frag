#include "lib/common.glsl"
#include "lib/frag.glsl"

vec2 mirror( vec2 coord, float angle, float offset ) {
  coord = rotate2D( coord, angle );
  coord.y -= offset;
  // coord.y *= 2.0;
  // coord.y -= 1.0;
  coord.y = abs( coord.y );
  coord.y += offset;
  coord = fract( coord );
  coord *= 2.0;

  coord = 1.0 - abs( 1.0-coord );
  coord = rotate2D( coord, -angle );
  // coord *= 0.5;
  // coord += 0.5;

  return coord;
}

void main() {
  // Input Textures
  vec2 OneCoord = srcCoord;

  vec4 One = Texture( OneSampler, OneCoord );
  vec2 coord = OneCoord;
  coord -= 0.5;
  coord *= 2.0;

  coord = mirror( coord, 12 + clockTime, 0 ) * 1.2;
  coord = mirror( coord, -22+ clockTime * -2, -0.6 ) * 1.2;

  // coord = mirror( coord, 80, -0.5 );
  // coord = mirror( coord, -80, 0.75 );

  // coord = mirror( coord, -23, 0.2 );
  // coord = mirror( coord, 45, 0.2 );
  // coord = mirror( coord, -12, 0.4 );
  // coord = mirror( coord, 14, 1.4 );

  coord = coord * 0.5 + 0.5;
  // coord = fract( coord );
  coord = fract( coord );
  coord *= 2.0;
  // coord += 1.0;

  coord = 1.0 - abs( 1.0-coord );

  One = Texture( OneSampler, coord );

  OUT = One;
}
