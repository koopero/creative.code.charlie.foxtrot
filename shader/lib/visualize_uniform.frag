#include "ofxLoopin/compatible.glsl"
#include "ofxLoopin/frag.glsl"
#include "ofxLoopin/src.glsl"

uniform sampler2D channelsSampler;
uniform sampler2D barSampler;
uniform int barWidth;


vec4 visualize( vec4 value, float rangeMin, vec2 coord ) {
  int channel = int( clamp( coord.x * 4, 0, 3 ) );
  float chval = value[channel];
  float sgn = chval < 0 ? -1 : 1;
  float ref = mix( rangeMin, 1, 1-coord.y );
  float val = ref - chval;
  float pixel = 0.0;
  val /= 2;
  val = fract( val );
  val = mix( pixel, 1.0-pixel, -val );
  return Texture( barSampler, vec2( val, 0 ) ) * Texture( channelsSampler, vec2(coord.x,0) );
}


vec4 visualize( vec4 value ) {
  return visualize( value, 0, srcCoord );
}