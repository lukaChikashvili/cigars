import React, { useRef } from 'react'
import clothVetex from '../shaders/cloth/clothVertex.glsl';
import clothFragment from '../shaders/cloth/clothFragment.glsl';
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber';

const Cloth = () => {

    // uniforms
    const uniforms = useRef({
        uTime: { value: 0},
       uHeight: { value: 0.2},
       uFrequency: { value: new THREE.Vector2(4, 1.5)}
    });

    let clothRef = useRef();

    useFrame(() => {
       clothRef.current.material.uniforms.uTime.value += 0.004;
    })

  return (
 <>
    <mesh position={[0, 4, -6]} rotation={[0, 0,  0]} scale={2} ref={clothRef}>
         <planeGeometry args={[ 6 , 1, 128, 128]}/>
         <shaderMaterial 
           vertexShader={clothVetex}
           fragmentShader={clothFragment}
           wireframe = {false}
           uniforms={uniforms.current}
           side={THREE.DoubleSide}
         />
       </mesh>
 </>
  )
}

export default Cloth
