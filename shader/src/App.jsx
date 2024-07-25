import './app.css';
import { OrbitControls, useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import vertex from './shaders/coffeeSmoke/vertex.glsl';
import fragment from './shaders/coffeeSmoke/fragment.glsl';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';


function App() {

   // Load cigar model
   const model = useGLTF('./Cigar.glb');

   // Load perline texture
   const texture = useTexture('./perlin.png');
   texture.wrapS = THREE.RepeatWrapping;
   texture.wrapT = THREE.RepeatWrapping;


   // uniforms
   const uniforms = useRef({
      uPerlin: { value: texture},
      uTime: { value: 0}
   }) 

   let plane = useRef();

   useFrame(() => {
     plane.current.material.uniforms.uTime.value += 0.025;
   })

  
  return (
    <>
      <OrbitControls makeDefault />
      <ambientLight intensity={0.3} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight position={[-5, 5, -5]} intensity={0.5} />
       
       <primitive 
        object={model.scene}
        scale = {40} 
        position-y = {-1}
        position-x = {-3} 
         />

       <mesh scale={[ 1, 6, 1.5 ]} 
             rotation={[0,  Math.PI / 2, 0]}
             position={[0.6, 1.6, 0]}
             ref={plane}> 
        <planeGeometry args={[1, 1, 64, 64]}/>
         <shaderMaterial  
           vertexShader={vertex}
           fragmentShader={fragment}
           side={THREE.DoubleSide}
           wireframe = {false}
           transparent = {true}
           uniforms={uniforms.current}
         />
       </mesh>
    </>
  );
}

export default App;
