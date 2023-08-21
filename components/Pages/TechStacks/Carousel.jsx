import React, {useState, useEffect} from 'react';
import Image from 'next/image'
import Crslrender from './Crslrender'
import info from './Techinfo.js'

function Techcarousel() {
  return (
    Object.entries(info).map((item) => (
      <div>
        <header className='text-center paragraphs text-2xl'>
          {item[0]}
        </header>
        <carousel className='border-tan items-center flex justify-center'>
          {Object.entries(item[1]).map((sub) => (
            <Crslrender
            tech={sub}
            />
          ))}
        </carousel>
      </div>
    ))

  )
}

export default Techcarousel;
