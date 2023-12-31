import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import socials from './SocialsInfo'

function Socials() {

  return (
    <div className='border-tan'>
      {Object.entries(socials).map((item) => (
        <div>
          here
        </div>
      ))}
    <button className='mt-2 duration-150 hover:scale-150'>
    <Image
      src='/linkin.png'
      width={50}
      height={50}
      />
    </button>
    <button className='mt-2 pt-2 duration-150 hover:scale-150'>
      <Image
      src='/github-logo.png'
      width={50}
      height={50}
      />
    </button>
    <button className='mt-2 pt-2 duration-150 hover:scale-150'>
    <Image
      src='/email.png'
      width={50}
      height={50}
      />
    </button>

    </div>
  )
}

export default Socials;
