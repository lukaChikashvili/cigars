uniform sampler2D uPerlin;
varying vec2 vUv;

void main() {

      // add perling texture
      float smoke = texture(uPerlin, vUv).r;
      


     // Final color
      gl_FragColor = vec4(1.0, 1.0, 1.0, smoke);

   
     #include <tonemapping_fragment>
     #include <colorspace_fragment>
   

 
   
}