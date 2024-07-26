import './app.css';
import {  Scroll, ScrollControls} from '@react-three/drei';

import { Canvas} from '@react-three/fiber';
import Scene from './components/Scene';
import Header from './components/Header';
import Text from './components/Text';
import Cloth from './components/Cloth';
import SmoothScroll from './components/SmoothScroll';



function App() {

   
  
  return (
    <>
   
    <Canvas shadows
        camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 2, 50] }}>
          <ScrollControls  damping={0.5} pages={10}>



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
