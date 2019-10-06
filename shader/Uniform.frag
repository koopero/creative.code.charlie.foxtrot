#include "lib/visualize_uniform.frag"

uniform vec4 Uniform;

void main() {
  OUT = Uniform;
}