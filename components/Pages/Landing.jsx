import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

/* IDEAL LANDING:
    Contains an IMG, Job Title, and Name
      Under the Name include a small description
      Under IMG include buttons to socials
      _____________________________________
              Tech Stack Carousel
      _____________________________________
*/

function Landing() {
  return (
  <div className="Landing-Base border-2 inline-flex h-1/3 w-screen border-yellow-400 mt-14 font-serif text-golden">
    <div className="border-2 mx-24 h-2/3 w-1/3">
    <Image
      src="/d1.png"
      width={500}
      height={500}
    />
    <div className="flex justify-center">
    <FontAwesomeIcon icon="fa-brands fa-linkedin" />
    </div>
    </div>
    <div className="Text-Landing border-2 h-full w-2/3">
      <p className='text-3xl text-center pt-8'>Software Engineer</p>
      <p className='text-4xl text-center pt-2'>Dillon Migdol</p>
      <p className='text-lg text-ri pl-5 pt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
    </div>
  </div>
  )
}

// Necessary Styles

const dillStyle = {

}

export default Landing;