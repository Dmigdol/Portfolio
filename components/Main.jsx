import React, {useState, useEffect} from 'react';
import Landing from './Pages/Landing'
import Socials from './Pages/Socials'
import Headbar from './Pages/Headbar'
import Carousel from './Pages/TechStacks/Carousel'
import AbtMe from './Pages/Paragraphs/Paragraphs'
import Projects from './Pages/Projects/Projects'
import Modal from './Pages/Projects/Modal.js'

function Main() {

  const [videoModal, setOpenModal] = useState(false);

  return (
    <div id="Main" className="bg-offwhite bg-gradient-to-b from-peach via-white to-peach flex-wrap">
      {videoModal && <Modal closeModal={setOpenModal}/>}
      <Headbar />
      <Socials />
      <Landing />
      <Carousel />
      <AbtMe />
      <Projects setOpenModal={setOpenModal}/>
    </div>
  )

}

export default Main;