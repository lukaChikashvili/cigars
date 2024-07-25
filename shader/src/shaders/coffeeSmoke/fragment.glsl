uniform sampler2D uPerlin;
varying vec2 vUv;
uniform float uTime;

void main() {

      // scale
      vec2 smokeUv = vUv;
      smokeUv.x *= 0.5;
      smokeUv.y *= 0.3;
      smokeUv.y -= uTime * 0.03;

      // add perling texture
      float smoke = texture(uPerlin, smokeUv).r;

      // remap
      smoke = smoothstep(0.4, 1.0, smoke);

      // remove edges
       smoke *= smoothstep(0.0, 0.1, vUv.x);
       smoke *= smoothstep(1.0, 0.9, vUv.x);
       smoke *= smoothstep(0.0, 0.1, vUv.y);
       smoke *= smoothstep(1.0, 0.4, vUv.y);

      


     // Final color
      gl_FragColor = vec4(1.0, 1.0, 1.0, smoke);
     
   
     #include <tonemapping_fragment>
     #include <colorspace_fragment>
   

 
   
}