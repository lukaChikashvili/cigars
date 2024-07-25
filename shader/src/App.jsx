import './app.css';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import vertex from './shaders/coffeeSmoke/vertex.glsl';
import fragment from './shaders/coffeeSmoke/fragment.glsl';


function App() {


  
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

      <mesh rotation={[0, 0, 0]} >
        <planeGeometry args={[2, 2, 128, 128]} />
        <shaderMaterial
          vertexShader={vertex}
          fragmentShader={fragment}
          wireframe={true}
        
        />
      </mesh>
    </>
  );
}

export default App;
