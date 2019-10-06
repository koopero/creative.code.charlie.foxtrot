#include "lib/common.glsl"
#include "lib/frag.glsl"
void main() {
  vec4 One = Texture( OneSampler, srcCoord );
  vec4 Two = Texture( TwoSampler, srcCoord );
  vec4 Three = Texture( ThreeSampler, srcCoord );

  float lumBias = 0;
  float alphaBias = 0;
  float mux = 0.0;

  mux += length( Three.rgba ) * 2.0 - 1.0 ;
  mux *= 1.5;

  mux -= length( One.rgb ) * lumBias;
  mux -= One.a * alphaBias;
  mux += length( Two.rgb ) * lumBias;
  mux += One.b * alphaBias;

  mux = clamp( mux * 0.5 + 0.5, 0, 1 );
  // Just output one
  OUT = mix( One, Two, mux );
}
