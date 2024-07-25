import './app.css';
import { OrbitControls, ScrollControls, useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import vertex from './shaders/coffeeSmoke/vertex.glsl';
import fragment from './shaders/coffeeSmoke/fragment.glsl';
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import Scene from './components/Scene';
import Header from './components/Header';


function App() {

   
  
  return (
    <>
    <Canvas shadows
        camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 3, 4] }}>
          <ScrollControls damping={0.5} pages={3}>
       
       <Scene />
   
       </ScrollControls>
        </Canvas>

        <div className='container'>
     <Header />
        </div>
    </>
   
  );
}

export default App;
