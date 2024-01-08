import React from 'react';
import ReactPlayer from 'react-player/lazy'
import Image from 'next/image'
import PjInfo from './Pjinfo.js'
import AliceCarousel from "react-alice-carousel";
import {useState} from 'react';


function Modal({closeModal, currentModal}) {

  const [imgIndex, setImgIndex] = useState(0);
  const images = []

  currentModal[1].media.forEach((img) => {
    images.push(
      <div className='carouselImg'>
        <img src={img} className='media'/>
      </div>
      )
  })

console.log(images)

  const slideChange = (context) => {
    context === forward ?
      imgIndex < currentModal[1].media.length ?
        setImgIndex(imgIndex + 1) : setImgIndex(imgIndex)
    : imgIndex > 0 ?
        setImgIndex(imgIndex - 1) : setImgIndex(imgIndex)
  }


  return(
  <div className='modalBackground bg-white border-2 border-orange-400 rounded
  w-5/6 h-5/6
  '>
    <div className='modalContainer'>
      <div className='title paragraphs pb-8 mt-5 text-center text-5xl'>{currentModal[1].Title}</div>
      <div className='closeBtn absolute right-0 top-0 text-golden text-4xl'>
        <button
        onClick={() => {closeModal(false); document.body.style.overflow = "visible"
      }}
        > &times; </button>
      </div>
      <div className='videoContainer flex justify-center'>
        <AliceCarousel
          activeIndex={imgIndex}
          disableDotsControls
          disableButtonsControls
          items={images}
        />
      </div>
      <div className='border-2 w-3/5 mx-auto mt-7'>
        <p className='body m-0 break-words'>
          {currentModal[1].description}
        </p>
      </div>
      <span className='Stack absolute float-left left-8 bottom-9 text-xl'>Tech Stack : </span>
      <button className='mt-2 absolute right-4 bottom-4 duration-150 hover:scale-150'
      to='https://www.google.com'
      target='_blank'>
    <Image
      src='/github-logo.png'
      width={50}
      height={50}
      onClick={() => (window.open(currentModal[1].githubUrl, "_blank"))}
      />
    </button>
    </div>
  </div>

  )
}

export default Modal;


/*  old video container
        <vid className='video'>
                <ReactPlayer
                url={currentModal[1].videoUrl}
                height='270px'
                width='480px'/>
              </vid>

*/