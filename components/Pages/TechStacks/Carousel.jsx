import React, {useState, useEffect} from 'react';
import Image from 'next/image'
import Crslrender from './Crslrender'
import info from './Techinfo.js'

function Techcarousel() {
  return (
    Object.entries(info).map((item) => (
      <div className='border-y-2 border-tan flex justify-center'>
        {console.log(item)}
        {Object.entries(item[1]).map((sub) => (
          <Crslrender
          tech={sub}
          />
        ))}
      </div>
    ))

  )
}

export default Techcarousel;
