#include "ofxLoopin/compatible.glsl"
#include "ofxLoopin/vert.glsl"
#include "ofxLoopin/buffer.glsl"
#include "ofxLoopin/src.glsl"
#include "ofxLoopin/clock.glsl"
#include "lib/snoise.glsl"


uniform float zoom;
uniform float driftAmount = 1.0;
uniform float driftFrequency = 10.1;


void main()
{
  float srcAsp = float( srcWidth ) / float( srcHeight );
  float bufferAsp = float( bufferWidth ) / float( bufferHeight );

  srcCoord = texcoord;
  vertColour = vec4(1,1,1,1);

  vec2 scale = vec2( 1 );
  vec4 pos = position;
  vec2 noiseUV = vec2( 
    clockTime / driftFrequency,
    0
  );

  if ( srcAsp < bufferAsp ) {
    scale.y = bufferAsp / srcAsp;
  }

  scale *= zoom + 1;
  vec2 drift = vec2(
    snoise( noiseUV.yx / scale.x ),
    snoise( noiseUV.xy / scale.y )
  );

  drift *= driftAmount;

  pos.xy *= scale;
  pos.x += max( 0.0, scale.x - 1.0 ) * 0.5 * drift.x;
  pos.y += max( 0.0, scale.y - 1.0 ) * 0.5 * drift.y;


  gl_Position = modelViewProjectionMatrix * pos;
}
