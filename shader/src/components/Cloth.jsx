import React, { useContext, useEffect, useRef } from 'react';
import clothVetex from '../shaders/cloth/clothVertex.glsl';
import clothFragment from '../shaders/cloth/clothFragment.glsl';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useScroll, useTexture } from '@react-three/drei';
import { MeshContext } from '../context/MeshContext';
import gsap from 'gsap';

const mapToRange = (value, minRange, maxRange) => minRange + (maxRange - minRange) * value;

const colors = ['#7AA2E3', '#028391', '#D2649A'];

const Cloth = () => {
  const clothTexture = useTexture('./cloth.avif');
  const { setShowHistory, setShowText, setManu } = useContext(MeshContext);

  const uniforms = useRef({
    uTime: { value: 0 },
    uHeight: { value: 0.3 },
    uFrequency: { value: new THREE.Vector2(4, 1.5) },
    uTexture: { value: clothTexture },
    uColor: { value: new THREE.Color('#fff') },
  });

  const clothRef = useRef();
  const scroll = useScroll();




  

  useEffect(() => {
    setShowText(true); 
  }, [setShowText]);

  useFrame(() => {
    uniforms.current.uTime.value += 0.004;

    let scrollOffset = scroll.offset;
    let mappedScrollOffset = mapToRange(scrollOffset, 0, 5);

    const colorIndex = Math.floor(mappedScrollOffset % colors.length);
    gsap.to(document.body, { backgroundColor: colors[colorIndex], duration: 1 });

    clothRef.current.position.z = -4 + scrollOffset * 5;
    clothRef.current.rotation.z = scrollOffset * 3.0;
    clothRef.current.rotation.x = scrollOffset * 3.0;
    clothRef.current.rotation.y = scrollOffset * 3.0;

    

    if (mappedScrollOffset >= 0.5 && mappedScrollOffset < 2.0) {
      setShowText(true);
      setShowHistory(false);
      setManu(false);
    } else if (mappedScrollOffset >= 2.0 && mappedScrollOffset < 3.5) {
      
      setShowText(false);
      setShowHistory(true);
      setManu(false);
    } else if (mappedScrollOffset >= 3.5 && mappedScrollOffset < 5.0) {
      setShowText(false);
      setShowHistory(false);
      setManu(true);
    } else {
      setShowText(false);
      setShowHistory(false);
      setManu(false);
    }


  });

  return (
    <>
      <mesh position={[0, 4, -4]} rotation={[0, 0, 0]} scale={2} ref={clothRef}>
        <planeGeometry args={[6, 1, 128, 128]} />
        <shaderMaterial
          vertexShader={clothVetex}
          fragmentShader={clothFragment}
          wireframe={false}
          uniforms={uniforms.current}
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  );
};

export default Cloth;
