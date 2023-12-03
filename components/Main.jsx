import React, {useState, useEffect} from 'react';
import Landing from './Pages/Landing'
import Headbar from './Pages/Headbar'
import Carousel from './Pages/TechStacks/Carousel'
import AbtMe from './Pages/Paragraphs/Paragraphs'
import Projects from './Pages/Projects/Projects'
import Modal from './Pages/Projects/Modal.js'

function Main() {

  const [videoModal, setOpenModal] = useState(false);

  return (
    <div id="Main" className="flex-wrap">
      {videoModal && <Modal closeModal={setOpenModal}/>}
      <Headbar />
      <Landing />
      <Carousel />
        <div className='flex float-right'>here</div>
      <AbtMe />
      <Projects setOpenModal={setOpenModal}/>
    </div>
  )

}

export default Main;