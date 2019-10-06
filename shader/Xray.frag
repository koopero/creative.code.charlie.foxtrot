#include "lib/common.glsl"
#include "lib/frag.glsl"

float mixChannel( vec4 One, vec4 Two, int channel ) {
  float OneVal = One[channel];
  float TwoVal = Two[channel];
  float flavour = Uniform[channel];
  float mux = 0;

  mux -= OneVal;
  mux += (flavour - 0.5) * 4.0;
  mux += TwoVal;
  mux = clamp( mux * 0.5 + 0.5, 0, 1 );
  return mix( OneVal, TwoVal, mux );
}

void main() {
  vec4 One = Texture( OneSampler, srcCoord );
  vec4 Two = Texture( TwoSampler, srcCoord );

  OUT.r = mixChannel( One, Two, 0 );
  OUT.g = mixChannel( One, Two, 1 );
  OUT.b = mixChannel( One, Two, 2 );
  OUT.a = mixChannel( One, Two, 3 );
}
