import React from 'react'
import cigar from '../assets/cigar.png';

const Definition = () => {
  return (
    <div className='definition'>
         <h1>What is cigar?</h1>

<div className='text-cont'>

    <img src = {cigar} />
    <div>
<p>

         A <span style={{color: '#F4CE14'}}>cigar</span> is a tobacco product made to be smoked. Cigars are produced in a variety of shapes and sizes. Since the 20th century, almost all cigars are made of three distinct components: the filler, the binder leaf which holds the filler together, and a wrapper leaf, for appearance and flavor, which is often the highest quality leaf used.
         
         
         </p>

         <p>
         Often there will be a cigar band printed with the cigar manufacturer's logo. Modern cigars can come with two or more, highlighting special qualities such as age and origin of the tobaccos used.

Cigar smoking carries a variety of serious health risks, including developing cancer, respiratory, cardiovascular, periodontal and other diseases.
         </p>
         </div>
</div>
         
    </div>
  )
}

export default Definition
