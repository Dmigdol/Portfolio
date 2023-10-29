import React from 'react';

function Modal({pInfo, closeModal}) {

  return(

  <div className='modalBackground bg-white border-orange-400 border-2 rounded
  w-2/3 h-2/3
  '>
    <div className='modalContainer flex-wrap'>
      <div className='title paragraphs text-center text-4xl'>Title</div>
      <div className='closeBtn'>
        <button
        onClick={() => {closeModal(false); document.body.style.overflow = "visible"
      }}
        > X </button>
      </div>
      <div className='body'>body</div>
      <div className='video'>video</div>
    </div>
  </div>

  )
}

export default Modal;