import { useFrame, useThree } from '@react-three/fiber'
import React, { useContext, useEffect, useState } from 'react'
import { MeshContext } from '../context/MeshContext';

const Modal = () => {
  // take viewport size
  const { size } = useThree();
  const { setShowModal} = useContext(MeshContext);

  const [dimension, setDimension] = useState({
     width: size.width,
     height: size.height
  });

  useEffect(() => {
    setDimension({
      width: size.width,
      height: size.height
    });

   
  }, [size]);



  return (
  <>
   <mesh position={[0, 0, 0]} >
        <planeGeometry args={[dimension.width, dimension.height]} />
        <meshStandardMaterial color="#fff" opacity={0.9} transparent />
      </mesh>

  
  </>
  )
}

export default Modal
