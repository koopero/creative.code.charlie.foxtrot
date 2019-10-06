#include "lib/common.glsl"
#include "lib/frag.glsl"

uniform float rotation;
uniform float split;
uniform float zoom;
uniform float frequency;



float channel( float phase, float offset ) {
  // phase *= 1.0 + offset * 0.01;
  phase += offset / 3 * split * 3.0;
  phase *= PI * 2.0;
  return cos( phase ) * 0.5 + 0.5;
}

void main() {
  vec2 coord = srcCoord;
  coord *= 2.0;
  coord -= 1.0;
  
  coord = rotate2D( coord, rotation );

  float scale = pow( 2.4, -zoom );
  float phase = -coord.y;
  phase *= scale;
  phase += clockTime * frequency; 

  OUT.r = channel( phase, 0 );
  OUT.g = channel( phase, 1 );
  OUT.b = channel( phase, 2 );
}
