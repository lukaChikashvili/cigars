varying vec2 vUv;
uniform float uTime;
uniform sampler2D uPerlin;

vec2 rotate2D(vec2 value, float angle)
{
    float s = sin(angle);
    float c = cos(angle);
    mat2 m = mat2(c, s, -s, c);
    return m * value;
}

void main() {
    vec3 newPosition = position;

    // twisting plane
    float twistPerlin = texture(uPerlin, vec2(0.5, uv.y * 0.2 - uTime * 0.005)).r;

   // wind
   vec2 windOffset = vec2(
    texture(uPerlin, vec2(0.25, uTime * 0.01)).r - 0.5, 
   texture(uPerlin, vec2(0.75, uTime * 0.01)).r - 0.5);


   windOffset *= pow(uv.y,  2.0) * 5.0;
   newPosition.xz += windOffset;

    float angle = twistPerlin * 10.0;
    newPosition.xz  = rotate2D(newPosition.xz, angle);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);

    vUv = uv;
}
