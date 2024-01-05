import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Socials from './Socials'

function Headbar() {
  return(
    <div className='bg-gradient-to-b from-orange-400 to-white py-1 font-serif text-center'>
      <span className='text-center text-2xl'> Contact me </span>
      <Socials />
    </div>
  )
}
export default Headbar;
