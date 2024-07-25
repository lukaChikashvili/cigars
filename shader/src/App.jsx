import './app.css';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import vertex from './shaders/coffeeSmoke/vertex.glsl';
import fragment from './shaders/coffeeSmoke/fragment.glsl';


function App() {


   const model = useGLTF('./Cigar.glb');
  
  return (
    <>
      
      <ambientLight intensity={0.3} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight position={[-5, 5, -5]} intensity={0.5} />
       
       <primitive object={model.scene} scale = {30} position-x = {-3} rotation-y = {-0.5} />
    </>
  );
}

export default App;
