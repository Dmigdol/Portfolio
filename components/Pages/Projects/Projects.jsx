import React from 'react'
import ReactPlayer from 'react-player/lazy'
import PjInfo from './Pjinfo.js'
import Modal from './Modal.js'

function Projects({ setOpenModal }) {

  return (
    <div className='text-center'>
      <header className='mt-4 paragraphs text-3xl'>
        Projects
      </header>
      <div className='flex'>
      {Object.entries(PjInfo).map((item) => (
        <h1 className='paragraphs w-screen'>
          <div>
            <p className='m-5 text-2xl'
            onClick={() => {setOpenModal(true); document.body.style.overflow = "hidden"}}
            >{item[0]}</p>
        </div>
      </h1>
      ))}
    </div>
  </div>
  )
}
export default Projects;


/*
    PREVIOUS VERSION OF VIDEO PLAYER RENDERING
      SWITCHING TO MODAL DESIGN

      return (
    <div className='text-center relative'>
      <header className='mt-4 paragraphs text-3xl'>
        Projects
      </header>
      <div className='flex'>
      {Object.entries(PjInfo).map((item) => (
        <h1 className='paragraphs w-screen'>
          <div>
            <p className='m-5 text-2xl'>{item[0]}</p>
            <vid className='flex justify-center'>
              <ReactPlayer
              url={item[1]}
              height='180px'
              width='320px'/>
            </vid>
        </div>
      </h1>
      ))}
    </div>
  </div>
  )
*/