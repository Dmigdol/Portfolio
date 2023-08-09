import React, {useState, useEffect} from 'react';
import Landing from './Pages/Landing'
import Socials from './Pages/Socials'
import Headbar from './Pages/Headbar'
import Carousel from './Pages/Carousel'

function Main() {
  return (
    <div id="Main" className="bg-offwhite bg-gradient-to-b from-peach to-white flex-wrap h-screen">
      <Headbar />
      <Socials />
      <Landing />
      <Carousel />
    </div>
  )

}

export default Main;