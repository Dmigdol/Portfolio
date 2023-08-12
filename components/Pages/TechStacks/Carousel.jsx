import React, {useState, useEffect} from 'react';
import Image from 'next/image'
import Crslrender from './Crslrender'
import info from './Techinfo.js'
let Stack = ['linkin.png','linkin.png','linkin.png','linkin.png']




function Techcarousel() {
  return (
    <div className='border-2 flex justify-center'>
      {Stack.map((item) => (
        <Crslrender
        stack={item}
        />
      ))}
    </div>

  )
}

export default Techcarousel;
