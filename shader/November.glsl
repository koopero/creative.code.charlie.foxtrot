#include "lib/common.glsl"
#ifdef SHADER_TYPE_VERT
/*==-=- -   - 
 |
 * -= -  Vertex Shader
 | 
  - -- == - */
#include "lib/vert.glsl"
void main() {

};
#else 
/*==---= = - - - 
 |
 * - = = Pixel / Fragment Shader
 |
  - =  - =*/
#include "lib/frag.glsl"
void main() {
  // Input Textures
  vec2 OneCoord = srcCoord;
  vec4 One = texture2D( OneSampler, OneCoord );

  vec2 TwoCoord = srcCoord;
  vec4 Two = texture2D( TwoSampler, TwoCoord );

  vec2 ThreeCoord = srcCoord;
  vec4 Three = texture2D( ThreeSampler, ThreeCoord );

  // Just output one
  OUT = One;
}
#endif 