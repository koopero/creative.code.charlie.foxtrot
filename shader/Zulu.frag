#include "lib/common.glsl"
#include "lib/frag.glsl"
void main() {
  vec4 One = Texture( OneSampler, srcCoord );

  vec3 hsv = rgb2hsv( One.rgb + vec3( 0.00001, 0,0) );
  vec2 TwoCoord = hsv.gb;
  TwoCoord -= 0.5;
  TwoCoord += Uniform.xy;
  TwoCoord += 0.5;
  TwoCoord.x += hsv.r;

  TwoCoord = mirrorCoord( TwoCoord );

  vec4 Two = Texture( TwoSampler, TwoCoord );

  Two.rgb = rgb2hsv( Two.rgb );
  Two.z = mix( hsv.z * 2.0, Two.z, Uniform.w );
  


  OUT.rgb = hsv2rgb( Two.rgb );
  OUT.a = One.a;
}
