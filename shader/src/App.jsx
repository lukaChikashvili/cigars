import './app.css';
import {   ScrollControls} from '@react-three/drei';

import { Canvas} from '@react-three/fiber';
import Scene from './components/Scene';
import Header from './components/Header';
import Text from './components/Text';
import Cloth from './components/Cloth';
import Modal from './components/Modal';
import { useContext, useEffect } from 'react';
import { MeshContext } from './context/MeshContext';
import Light from './components/Light';
import { Route, Routes, useLocation } from 'react-router-dom';
import Definition from './components/Definition';

export const CanvasComp = () => {

  const { showModal} = useContext(MeshContext);
  return (
    <>
   
    <Canvas shadows
        camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 2, 50] }}>
          <Light />
          <ScrollControls  damping={0.5} pages={15}>
        
       {showModal ? '' : <Scene /> }
       <Cloth />
  
       </ScrollControls>
      
        </Canvas>

        </>

  )
}



function App() {
  const { showModal, setShowModal,  showModalText, setShowModalText} = useContext(MeshContext);
   
  const location =  useLocation();

  useEffect(() => {
    if(location.pathname === '/') {
      setShowModalText(true);
       if(showModal)  {
        setShowModalText(false);
       }
    }else {
      setShowModalText(false);
      setShowModal(false);
    }
  
  }, [location.pathname, showModalText ])
  
  return (
    <>
   <Routes>
      <Route path='/' element = {<CanvasComp />}/>
      <Route path='/definition' element = {<Definition />}/>
   </Routes>
   
   

        <div className='container' >
     <Header />
     {showModalText &&  <Text />}
     {showModal &&  <Modal />}
 
        </div>
 

    </>
   
  );
}

export default App;
