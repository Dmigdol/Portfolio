import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Socials from './Socials'

function Headbar() {
  return(
    <div className='bg-orange-400 py-2 font-serif text-center'>
      <span className='text-center text-2xl'> Contact me </span>
      <Socials />
    </div>
  )
}
export default Headbar;
