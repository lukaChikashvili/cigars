import React, { useContext, useEffect, useRef } from 'react';
import { MeshContext } from '../context/MeshContext';
import { MoveRight } from 'lucide-react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';

const Text = () => {
  const { showText, showHistory, manu, contact, Gallery } = useContext(MeshContext);
  const textRef = useRef();
  const definitionRef = useRef();
  const btnRef = useRef();

  let navigate = useNavigate();

  const definition = `
    A <span class='underline'>cigar</span> is a tobacco product made to be smoked. Cigars are produced in a variety of shapes and sizes.
  `;

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(textRef.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 });
    }

    if (definitionRef.current) {
      gsap.fromTo(definitionRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
    }

    if (btnRef.current) {
      gsap.fromTo(btnRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 });
    }
  }, [showText, showHistory, manu]);

  return (
    <div className='text-container'>
      <span>{showText ? '1 - 5' : manu ? '3 - 5' : showHistory ? '2 - 5' : contact ? '4 - 5' : Gallery ? '5 - 5' : ''}</span>
      <motion.h1
        ref={textRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 0.5}}
        className='text'
      >
        {showHistory ? 'History' : 
             showText ? 'Definition' :
              manu ? 'Our brand' : 
              contact ? 'Contact Us' : 
              Gallery ? 'Gallery' :
               'The Timeless Journey of Cigars'}
      </motion.h1>
      <p className='scroll'>{!showText && !showHistory && !manu && !contact && !Gallery && 'Scroll to discover'}</p>
      {showText ? (
        <>
          <motion.h2
            ref={definitionRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 0.5 }}
            className='definition-text'
            dangerouslySetInnerHTML={{ __html: definition }}
          />
          <motion.button
            ref={btnRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 0.5 }}
            className='btn'
            onClick={() => navigate('/definition')}
          >
            MORE ABOUT <MoveRight />
          </motion.button>
        </>
      ) : showHistory ?  <motion.button
      ref={btnRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 0.5 }}
      className='btn'
      onClick={() => navigate('/history')}
    >
      Explore history of cigars <MoveRight />
    </motion.button> : manu ?  <motion.button
      ref={btnRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 0.5 }}
      className='btn'
      onClick={() => navigate('/our-brand')}
    >
      Buy our product<MoveRight />
    </motion.button> : contact ? <motion.button
      ref={btnRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 0.5 }}
      className='btn'
      onClick={() => navigate('/contact')}
    >
      Connect with us<MoveRight />
    </motion.button> : Gallery ? <motion.button
      ref={btnRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 0.5 }}
      className='btn'
      onClick={() => navigate('/gallery')}
    >
      Discover photos<MoveRight />
    </motion.button> : ""}
    </div>
  );
};

export default Text;
