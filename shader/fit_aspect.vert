#include "ofxLoopin/compatible.glsl"
#include "ofxLoopin/vert.glsl"
#include "ofxLoopin/buffer.glsl"
#include "ofxLoopin/src.glsl"
#include "ofxLoopin/clock.glsl"


void main()
{
  float srcAsp = float( srcWidth ) / float( srcHeight );
  float bufferAsp = float( bufferWidth ) / float( bufferHeight );

  srcCoord = texcoord;
  vertColour = vec4(1,1,1,1);

  vec2 scale = vec2( 1 );
  vec4 pos = position;
  vec2 drift = vec2(
    0,
    cos(clockTime)
  );

  if ( srcAsp < bufferAsp ) {
    scale.y = bufferAsp / srcAsp;
  }

  float zoom = 1.1;
  scale *= zoom;

  pos.xy *= scale;
  pos.x += max( 0.0, scale.x - 1.0 ) * 0.5 * drift.x;
  pos.y += max( 0.0, scale.y - 1.0 ) * 0.5 * drift.y;


  gl_Position = modelViewProjectionMatrix * pos;
}
