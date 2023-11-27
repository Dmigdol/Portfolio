import React, {useState, useEffect} from 'react';
import Image from 'next/image'

function Crender({tech}) {
  return (
    <div className='text-center grid justify-items-center group'>
      <Image
      className="m-5 duration-150 group-hover:scale-150 "
      src={tech[1]}
      width={75}
      height={75}
      />
      <span className="tooltip group-hover:scale-100">{tech[0]}</span>
    </div>
  )
}
export default Crender;