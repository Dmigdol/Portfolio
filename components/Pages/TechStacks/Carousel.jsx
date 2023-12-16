import React, {useState, useEffect} from 'react';
import Image from 'next/image'
import Crslrender from './Crslrender'
import info from './Techinfo.js'

function Techcarousel() {
  return (
    <div className='container'>
      <span className='float-right pt-20 paragraphs text-right text- text-7xl'> Technological <br/> Skills</span>
      <div className='triangle w-5/6 pb-14'>
      {Object.entries(info).map((item) => (
        <div className='bg-gradient-to-r from-orange-400'>
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
    </div>
  )
}

export default Techcarousel;


// perhaps add a closing div behind tech stacks text