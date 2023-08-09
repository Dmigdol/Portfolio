import React, {useState, useEffect} from 'react';
import Landing from './Pages/Landing'
import Socials from './Pages/Socials'
import Headbar from './Pages/Headbar'
function Main() {

  return (
    <div id="Main" className="bg-offwhite bg-gradient-to-b from-peach to-white flex h-screen">
      <Headbar />
      <Socials />
      <Landing />
    </div>
  )

}

export default Main;