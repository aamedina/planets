attribute vec2 position;

void main(void) {
  vUv = uv * scale + offset + delta;
  gl_Position = vec4(position, 0.0, 1.0);
}
