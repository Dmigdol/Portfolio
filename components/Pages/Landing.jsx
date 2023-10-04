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
  <div className="Landing-Base border-b-2 inline-flex h-1/3 w-screen border-tan mt-14 font-serif text-golden">
    <div className="mx-24 relative h-full w-1/3">
    <Image
      src="/d1.png"
      width='2000'
      height='2000'
    />
    <div className="flex justify-center">
    <FontAwesomeIcon icon="fa-brands fa-linkedin" />
    </div>
    </div>
    <div className="Text-Landing h-full w-2/3">
      <p className='text-3xl text-center pt-8'>Software Engineer</p>
      <p className='text-4xl text-center pt-2'>Dillon Migdol</p>
      <p className='text-lg text-ri pl-5 pt-1'>Hello and welcome to my portfolio website! I am a fullstack software engineer who is always
       open to new opportunities. Please reach out to me via email or LinkedIn if you want to chat </p>
    </div>
  </div>
  )
}

// Necessary Styles

const dillStyle = {

}

export default Landing;