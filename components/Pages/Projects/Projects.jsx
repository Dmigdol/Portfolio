import React from 'react'
import ReactPlayer from 'react-player/lazy'
function Projects() {

  return (
    <div className='text-center relative'>
      <header className='mt-4 paragraphs text-3xl'>
        Projects
      </header>
      <vid>
        <ReactPlayer
        url='https://www.youtube.com/watch?v=_gF21Jimxi0'/>
      </vid>
    </div>
  )
}
export default Projects;
