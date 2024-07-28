import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import SplitType from 'split-type'
import gsap from 'gsap'
import { MeshContext } from '../context/MeshContext'

const Modal = () => {
  const linksRef = useRef([]);

  const { setShowModalText}  = useContext(MeshContext);

  const handleMouseEnter = (event) => {
    const linkElement = event.target
    const typeSplit = new SplitType(linkElement, {
      types: 'chars',
      tagName: 'span'
    });

      
   
    gsap.fromTo(
      linkElement.querySelectorAll('.char'),
      { y: '80%', opacity: 0 },
      { y: '0%', opacity: 1, duration: 0.85, ease: 'power1.out', stagger: 0.09 }
    )
  }

  const handleMouseLeave = (event) => {
    const linkElement = event.target

    linkElement.innerHTML = linkElement.textContent
  }

const hideText = () => {
  setShowModalText(false);
}


  return (
    <div className='modal'>
      <div className='links'>
        {["/definition", "/history", "/our-brand", "/fghfhg", "/gallery"].map((path, index) => (
          <Link
            key={path}
            className="modal-link"
            to={path}
            ref={el => linksRef.current[index] = el}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={hideText}
          >
            {path.replace('/', '').replace('-', ' ')}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Modal
