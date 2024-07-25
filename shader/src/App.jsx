import './app.css';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import vertex from './shaders/coffeeSmoke/vertex.glsl';
import fragment from './shaders/coffeeSmoke/fragment.glsl';


function App() {


   const model = useGLTF('./Cigar.glb');
  
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
             position={[0.6, 1.5, 0]}> 
        <planeGeometry args={[1, 1, 64, 64]}/>
         <shaderMaterial  
           side={THREE.DoubleSide}
           wireframe = {true}
         />
       </mesh>
    </>
  );
}

export default App;
