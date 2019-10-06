#include "ofxLoopin/compatible.glsl"
#include "ofxLoopin/pass.glsl"
#include "ofxLoopin/clock.glsl"
#include "ofxLoopin/mesh.glsl"
#include "ofxLoopin/buffer.glsl"


#include "./snoise.glsl"
#include "./uniforms.glsl"
#include "./hsv.glsl"


const float PI = 3.141592654;

vec2 rotate2D(vec2 v, float a) {
	a = a / 180.0 * 3.141592654;
	float s = sin(a);
	float c = cos(a);
	mat2 m = mat2(c, -s, s, c);
	return m * v;
}

vec2 mirrorCoord( vec2 coord ) {
  coord /= 2.0;
  coord = fract( coord );
  coord *= 2.0;
  coord -= 1.0;
  coord = 1.0 - abs( coord );
  return coord;
}
