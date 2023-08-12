import React, {useState, useEffect} from 'react';
import Image from 'next/image'

function Crender({stack}) {
  console.log(stack)
  return (
    <Image
    className="mx-5"
    src={'/'+stack}
    width={50}
    height={50}
    />
  )
}
export default Crender;