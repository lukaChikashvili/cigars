varying vec2 vUv;
uniform sampler2D uTexture;
uniform vec3 uColor;

void main() {
       vec3 textureColor = texture2D(uTexture, vUv).rgb;
        vec3 color = textureColor * uColor; 
        
    gl_FragColor = vec4(color, 1.0);
    
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}
