import React, { useEffect, useState } from 'react'
import { CameraControls, OrbitControls, useGLTF, useScroll, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import vertex from '../shaders/coffeeSmoke/vertex.glsl';
import fragment from '../shaders/coffeeSmoke/fragment.glsl';
import { useRef } from 'react';
import {  useFrame } from '@react-three/fiber';

const Scene = () => {

    // Load cigar model
   const model = useGLTF('./Cigar.glb');

   // Load table model
   const table = useGLTF('./table.glb');

 
   // Load perline texture
   const texture = useTexture('./perlin.png');
   texture.wrapS = THREE.RepeatWrapping;
   texture.wrapT = THREE.RepeatWrapping;

   

   // uniforms
   const uniforms = useRef({
      uPerlin: { value: texture},
      uTime: { value: 0}
   }) 

   let plane = useRef();

   useFrame(() => {
     plane.current.material.uniforms.uTime.value += 0.025;
   })

   const scroll = useScroll();
  

   useFrame((camera) => {
    camera.camera.position.z = scroll.scroll.current * 10;

    
  });

  return (
 <>
   
      <ambientLight intensity={1} />
      <directionalLight
        position={[5, 8, 5]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight position={[-5, 10, -5]} intensity={1.5} />
       
       <primitive 
        object={model.scene}
        scale = {20} 
        rotation = {[ 0, -0.5, 0 ]}
        position-y = {0}
        position-x = {-2} 
        
         />

         <primitive 
        object={table.scene}
        scale = {4} 
        position={[0, -5, 0]}
         />

  

      

       <mesh scale={[ 1, 6, 1.5 ]} 
             rotation={[0,  0, 0]}
             position={[-0.5, 3.5, 1]}
             ref={plane}> 
        <planeGeometry args={[0.3, 1, 64, 64]}/>
         <shaderMaterial  
           vertexShader={vertex}
           fragmentShader={fragment}
           side={THREE.DoubleSide}
           wireframe = {false}
           transparent = {true}
           uniforms={uniforms.current}
         />
       </mesh>
 </>
  )
}

export default Scene
