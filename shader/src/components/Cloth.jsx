import React, { useRef } from 'react'
import clothVetex from '../shaders/cloth/clothVertex.glsl';
import clothFragment from '../shaders/cloth/clothFragment.glsl';
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber';
import { useScroll, useTexture } from '@react-three/drei';

const Cloth = () => {

    // cloth texture
    const clothTexture = useTexture('./cloth.avif');

    // uniforms
    const uniforms = useRef({
       uTime: { value: 0},
       uHeight: { value: 0.3},
       uFrequency: { value: new THREE.Vector2(4, 1.5)},
       uTexture: { value: clothTexture},
       uColor: { value: new THREE.Color('#fff')}
     
    });

    let clothRef = useRef();
    const scroll = useScroll();

    useFrame(() => {
       clothRef.current.material.uniforms.uTime.value += 0.004;
       const scrollOffset = scroll.offset;
        

       clothRef.current.position.z = -4 + scrollOffset * 10; 
       clothRef.current.rotation.z = scroll.offset * 3.0;
       clothRef.current.rotation.x = scroll.offset * 3.0;
       clothRef.current.rotation.y = scroll.offset * 3.0;

       if(scrollOffset >= 0.5) {
        uniforms.current.uColor.value.set('#6EACDA');
       }else {
        uniforms.current.uColor.value.set('#fff');
       }
    })

  return (
 <>
    <mesh position={[0, 4, -4]} rotation={[0, 0,  0]} scale={2} ref={clothRef}>
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
