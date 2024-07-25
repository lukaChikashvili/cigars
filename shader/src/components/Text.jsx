import React, { useContext } from 'react'
import { MeshContext } from '../context/MeshContext'
import { MoveRight } from 'lucide-react'

const Text = () => {
  const { showText, showHistory } = useContext(MeshContext);
  
  const definition = `
  A <span class='underline'>cigar</span> is a tobacco product made to be smoked. Cigars are produced in a variety of shapes and sizes.


  `;

  return (
    <div className='text-container'>
      <span>{showText ? '1 - 5' : showHistory ? '2 - 5' : ''}</span>
       <h1 className='text'>{showText ? "Definition" : showHistory ? "History" : "The Timeless Journey of Cigars"}</h1>
       <p className='scroll'>{!showText && 'Scroll to discover'}</p>
        <h2 className='definition-text' dangerouslySetInnerHTML={{__html: showText ? definition : ''}} />
        {showText && <button className='btn'> MORE ABOUT <MoveRight /></button>}
    </div>
  )
}

export default Text
