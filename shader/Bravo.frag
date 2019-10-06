#include "lib/common.glsl"
#include "lib/frag.glsl"

void main() {
  float val = 1.0-srcCoord.g;
  vec3 hsv = vec3( srcCoord.r - srcCoord.g * Bravo.w , Bravo.w, val );
  OUT.rgb = hsv2rgb( hsv ); 
  OUT.a = val;
}