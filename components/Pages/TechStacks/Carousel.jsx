import React, {useState, useEffect} from 'react';
import Image from 'next/image'
import Crslrender from './Crslrender'
import info from './Techinfo.js'

function Techcarousel() {
  return (
    <div className='border-y-2 border-tan flex justify-center'>
      {Object.entries(info).map((item) => (
        <Crslrender
        tech={item}
        />
      ))}
    </div>

  )
}

export default Techcarousel;
