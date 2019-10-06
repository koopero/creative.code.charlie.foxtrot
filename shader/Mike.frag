#include "lib/common.glsl"
#include "lib/frag.glsl"

float perChannel( float offset ) {
  vec2 coord = srcCoord;
  coord -= 0.5;
  coord = abs( coord );
  coord *= 2.0;
  coord *= 1.0 + offset * 0.5;

  vec4 One = Texture( OneSampler, coord );
  return One.r;
}
void main() {
  OUT.r = perChannel( 0.75 );
  OUT.g = perChannel( 0.5 );
  OUT.b = perChannel( 0.25 );
  OUT.a = perChannel( 0.0 );

}
