import React, {useState, useEffect} from 'react';
import Image from 'next/image'

function Crender({tech}) {
  return (
    <div className='text-center grid px-2 justify-items-center group'>
      <Image
      className="m-5 ml-10 duration-150 group-hover:scale-150 "
      src={tech[1][0]}
      width={80}
      height={80}
      />
      <span className="tooltip group-hover:scale-100">{tech[0]}</span>
    </div>
  )
}
export default Crender;