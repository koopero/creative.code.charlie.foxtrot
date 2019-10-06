#include "lib/visualize_uniform.frag"

uniform vec4 Alfa;

void main() {
  OUT = visualize( Alfa );
}