import React, {useState, useEffect} from 'react';
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function Techcarousel() {
  return (
    <div className='border-2 '>
      <Carousel
      autoPlay='true'
      dynamicHeight='false'
      >
        <div>
            <img src="/linkin.png"/>
        </div>
        <div>
            <img src="/email.png" />
        </div>
        <div>
            <img src="/github-logo.png" />
        </div>
    </Carousel>
    </div>

  )
}

export default Techcarousel;
