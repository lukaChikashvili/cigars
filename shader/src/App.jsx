import './app.css';
import { OrbitControls, ScrollControls, useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import vertex from './shaders/coffeeSmoke/vertex.glsl';
import fragment from './shaders/coffeeSmoke/fragment.glsl';
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import Scene from './components/Scene';
import Header from './components/Header';
import Text from './components/Text';
import Cloth from './components/Cloth';


function App() {

   
  
  return (
    <>
    <Canvas shadows
        camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 2, 50] }}>
          <ScrollControls damping={0.5} pages={3}>
       
       <Scene />
       <Cloth />
   
       </ScrollControls>

        </Canvas>

        <div className='container'>
     <Header />
     <Text />
        </div>
    </>
   
  );
}

export default App;
