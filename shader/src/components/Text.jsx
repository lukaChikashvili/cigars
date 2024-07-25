import React, { useContext } from 'react';
import { MeshContext } from '../context/MeshContext';
import { MoveRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Text = () => {
  const { showText, showHistory, manu } = useContext(MeshContext);

  const definition = `
    A <span class='underline'>cigar</span> is a tobacco product made to be smoked. Cigars are produced in a variety of shapes and sizes.
  `;

  return (
    <div className='text-container'>
      <span>{showText ? '1 - 5' : manu ? '3 - 5' : showHistory ? '2 - 5' : ''}</span>
      <AnimatePresence>
        {showText && (
          <motion.h1
            key="definition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 0.5 }}
            className='text'
          >
            Definition
          </motion.h1>
        )}
        {showHistory && !showText && (
          <motion.h1
            key="history"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 0.5 }}
            className='text'
          >
            History
          </motion.h1>
        )}
        {manu && !showText && !showHistory && (
          <motion.h1
            key="manufacture"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 0.5 }}
            className='text'
          >
            Manufacture
          </motion.h1>
        )}
        {!showText && !showHistory && !manu && (
          <motion.h1
            key="journey"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0}}
            transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 0.5 }}
            className='text'
          >
            The Timeless Journey of Cigars
          </motion.h1>
        )}
      </AnimatePresence>
      <p className='scroll'>{!showText && 'Scroll to discover'}</p>
      <AnimatePresence>
        {showText && (
          <motion.h2
            key="definitionText"
            initial={{ opacity: 0,  }}
            animate={{ opacity: 1}}
            exit={{ opacity: 0}}
            transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 0.5 }}
            className='definition-text'
            dangerouslySetInnerHTML={{ __html: definition }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showText && (
          <motion.button
            key="moreButton"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 0.5 }}
            className='btn'
          >
            MORE ABOUT <MoveRight />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Text;
