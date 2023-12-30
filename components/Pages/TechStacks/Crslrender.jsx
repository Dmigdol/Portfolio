import React, {useState, useEffect} from 'react';
import Image from 'next/image'
import { BrowserRouter, Route, Link } from "react-router-dom";


function Crender({tech}) {
  return (
    <div className='text-center grid px-2 justify-items-center group'>
      <Image
        className="m-5 ml-10 duration-150 cursor-pointer group-hover:scale-150 "
        src={tech[1][0]}
        width={80}
        height={80}
        onClick={()=> window.open(tech[1][1], "_blank")}
      />
      <span className="tooltip m-5 ml-10 group-hover:scale-100 cursor-pointer">{tech[0]}</span>
    </div>
  )
}
export default Crender;