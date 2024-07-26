import './app.css';
import {   ScrollControls} from '@react-three/drei';

import { Canvas} from '@react-three/fiber';
import Scene from './components/Scene';
import Header from './components/Header';
import Text from './components/Text';
import Cloth from './components/Cloth';
import Modal from './components/Modal';
import { useContext } from 'react';
import { MeshContext } from './context/MeshContext';
import Light from './components/Light';
import { Route, Routes } from 'react-router-dom';

export const CanvasComp = () => {

  const { showModal} = useContext(MeshContext);
  return (
    <>
   
    <Canvas shadows
        camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 2, 50] }}>
          <Light />
          <ScrollControls  damping={0.5} pages={10}>
        
       {showModal ? '' : <Scene /> }
       <Cloth />
  
       </ScrollControls>
      
        </Canvas>

        </>

  )
}



function App() {
  const { showModal} = useContext(MeshContext);
   
  
  return (
    <>
   <Routes>
      <Route path='/' element = {<CanvasComp />}/>
   </Routes>
   
   

        <div className='container' >
     <Header />
     {!showModal &&  <Text />}
     {showModal &&  <Modal />}
 
        </div>
 

    </>
   
  );
}

export default App;
