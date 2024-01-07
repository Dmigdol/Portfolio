import React, {useState, useEffect} from 'react';
import Landing from './Pages/Landing'
import Headbar from './Headbar/Headbar'
import Carousel from './Pages/TechStacks/Carousel'
import AbtMe from './Pages/Paragraphs/Paragraphs'
import Projects from './Pages/Projects/Projects'
import Modal from './Pages/Projects/Modal.js'

function Main() {

  const [videoModal, setOpenModal] = useState(false);
  const [currentModal, setCurrentModal] = useState('none')

  return (
    <div id="Main" className="flex-wrap">
      {videoModal && <Modal closeModal={setOpenModal} currentModal={currentModal}/>}
      <Headbar />
      <Landing />
      <Carousel />
      <AbtMe />
      <Projects setOpenModal={setOpenModal} setCurrentModal={setCurrentModal}/>
    </div>
  )

}

export default Main;