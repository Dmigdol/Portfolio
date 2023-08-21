import React, {useState, useEffect} from 'react';
import Landing from './Pages/Landing'
import Socials from './Pages/Socials'
import Headbar from './Pages/Headbar'
import Carousel from './Pages/TechStacks/Carousel'
import AbtMe from './Pages/Paragraphs/Paragraphs'
import Projects from './Pages/Projects/Projects'

function Main() {
  return (
    <div id="Main" className="bg-offwhite bg-gradient-to-b from-peach via-white to-peach flex-wrap">
      <Headbar />
      <Socials />
      <Landing />
      <Carousel />
      <AbtMe />
      <Projects />
    </div>
  )

}

export default Main;