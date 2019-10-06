#include "lib/common.glsl"
#include "lib/frag.glsl"

uniform sampler2D feedbackSampler;

void main() {
  vec2 coord = srcCoord;
  coord = coord * 2.0 - 1.0;
  float bias = mix( 0.5,1-1/500.0,pow(Bravo.z * 0.5 + 0.5,0.25) );
  vec2 mov = Bravo.xy;
  mov *= 0.5;
  mov *= 0.004;

  float scale = max( abs(mov.x), abs(mov.y) );
  // coord.x += 0.001;

  coord.xy += mov;
  coord.xy *= 1.0 - scale;

  coord = coord * 0.5 + 0.5;


  vec4 One = Texture( OneSampler, srcCoord );
  vec4 Two = Texture( feedbackSampler,coord );


  // OUT = mix( One, Two, mux );

  float lumBias = Bravo.w * 0.6;
  float alphaBias = 0.1;
  float mux = 0.0;

  mux += bias;

  mux -= length( One.rgb ) * lumBias;
  mux -= One.a * alphaBias;
  mux += length( Two.rgb ) * lumBias;
  mux += One.b * alphaBias;

  mux = clamp( mux * 0.5 + 0.5, 0, 1 );
  // Just output one
  OUT = mix( One, Two, mux );
  OUT.rgb *= 1.0-lumBias*clockDelta;

}
