import React, { useContext, useEffect, useRef } from 'react';
import clothVetex from '../shaders/cloth/clothVertex.glsl';
import clothFragment from '../shaders/cloth/clothFragment.glsl';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useScroll, useTexture } from '@react-three/drei';
import { MeshContext } from '../context/MeshContext';
import gsap from 'gsap';

const mapToRange = (value, minRange, maxRange) => minRange + (maxRange - minRange) * value;

const colors = ['#17153B', '#028391', '#D2649A', '#AF47D2', '#301E67'];

const Cloth = () => {
  const clothTexture = useTexture('./cloth.avif');
  const { setShowHistory, setShowText, setManu, setContact, setGallery } = useContext(MeshContext);

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
    let mappedScrollOffset = mapToRange(scrollOffset, 0, 10);

    const colorIndex = Math.min(Math.floor(mappedScrollOffset), colors.length - 1);
    gsap.to(document.body, { backgroundColor: colors[colorIndex], duration: 0.5 });

    clothRef.current.position.z = -4 + scrollOffset * 5;
    clothRef.current.rotation.z = scrollOffset * 3.0;
    clothRef.current.rotation.x = scrollOffset * 3.0;
    clothRef.current.rotation.y = scrollOffset * 3.0;

    

    if (mappedScrollOffset >= 0.5 && mappedScrollOffset < 2.0) {
      console.log("definition")
      setShowText(true);
      setShowHistory(false);
      setManu(false);
      setContact(false);
    } else if (mappedScrollOffset >= 2.0 && mappedScrollOffset < 4.5) {
      console.log('history');
      setShowText(false);
      setShowHistory(true);
      setManu(false);
       setContact(false);
    } else if (mappedScrollOffset >= 4.5 && mappedScrollOffset < 6.5) {
      console.log('our brand');
      setShowText(false);
      setShowHistory(false);
      setManu(true);
      setContact(false);
    } else if (mappedScrollOffset >= 6.5 && mappedScrollOffset < 8.0) {
      console.log('contact us');
      setContact(true);
      setShowText(false);
      setShowHistory(false);
      setManu(false);
    }else if (mappedScrollOffset >= 8.0 && mappedScrollOffset < 10.0) {
      console.log('Gallery');
      setGallery(true);
      setContact(false);
      setShowText(false);
      setShowHistory(false);
      setManu(false);
    }else if(mappedScrollOffset < 8.0) {
      setContact(false);
      setShowText(false);
      setShowHistory(false);
      setManu(false);
      setGallery(false);
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
