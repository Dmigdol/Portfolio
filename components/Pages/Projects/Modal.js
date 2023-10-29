import React from 'react';
import ReactPlayer from 'react-player/lazy'

function Modal({pInfo, closeModal}) {

  return(

  <div className='modalBackground shadow-2xl bg-gradient-to-b from-white to-offwhite border-orange-400 border-2 rounded
  w-5/6 h-5/6
  '>
    <div className='modalContainer flex-wrap'>
      <div className='title paragraphs mt-5 text-center text-4xl'>Title</div>
      <div className='closeBtn absolute right-0 top-0 text-golden text-4xl'>
        <button
        onClick={() => {closeModal(false); document.body.style.overflow = "visible"
      }}
        > &times; </button>
      </div>
      <div className='videoContainer mt-28 ml-20 border-2 w-fit'>
        <vid className='video'>
                <ReactPlayer
                url='https://www.youtube.com/watch?v=_gF21Jimxi0'
                height='270px'
                width='480px'/>
              </vid>
      </div>
      <div className='body m-0'>body</div>
      <div className='Stack'>Stack</div>
      <div className='links'>links</div>
    </div>
  </div>

  )
}

export default Modal;