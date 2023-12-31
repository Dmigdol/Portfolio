import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import socials from './SocialsInfo'

function Socials() {

  return (
    <div className='border-tan flex justify-center'>
      {Object.entries(socials).map((item) => (
        <div className='mt-2 duration-150 px-2 pt-3 hover:scale-150'>
          <Image
          src={item[1][0]}
          width={50}
          height={50}
          onClick={()=>
            item[0] !== 'Email' ?
              window.open(item[1][1], "_blank")
            : navigator.clipboard.writeText(item[1][1])
          }
          />
        </div>
      ))}
    </div>
  )
}

export default Socials;
