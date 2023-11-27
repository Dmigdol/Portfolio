import React, {useState, useEffect} from 'react';
import Image from 'next/image'
import Crslrender from './Crslrender'
import info from './Techinfo.js'

function Techcarousel() {
  return (
    <div className='triangle w-1/2 pb-14'>
    {Object.entries(info).map((item) => (
      <div className='bg-blue-200'>
        <carousel className='border-tan items-center flex'>
          {Object.entries(item[1]).map((sub) => (
            <Crslrender
            tech={sub}
            />
          ))}
        </carousel>
      </div>
    ))}
    </div>

  )
}

export default Techcarousel;
