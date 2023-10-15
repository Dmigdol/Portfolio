import React from 'react'
import ReactPlayer from 'react-player/lazy'
import PjInfo from './Pjinfo.js'

function Projects() {

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
}
export default Projects;
