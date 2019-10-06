#include "lib/common.glsl"
#include "lib/frag.glsl"

uniform float rotation;
uniform float split;
uniform float zoom;
uniform float frequency;



float channel( vec3 phase, float offset ) {
  // phase *= 1.0 + offset * 0.01;
  vec4 coord = vec4( phase, offset * split );

  coord.z += coord.w * 1.6; 
  // phase += offset / 3 * split * 3.0;
  // phase *= PI * 2.0;

  return snoise( coord ) * 0.5 + 0.5;
}

void main() {
  vec2 coord = srcCoord;
  coord *= 2.0;
  coord -= 1.0;
  
  coord = rotate2D( coord, rotation );

  float scale = pow( 2.4, -zoom );
  vec3 phase = vec3( coord, clockTime * frequency );
  phase *= scale;


  OUT.r = channel( phase, 0 );
  OUT.g = channel( phase, 1 );
  OUT.b = channel( phase, 2 );
}
