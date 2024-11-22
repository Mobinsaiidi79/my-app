import React from 'react'

export default function BoxIconFooter({image , text}) {
  return (
    <div className='w-5  h-5 md:w-20 md:h-20 lg:w-40 lg:h-40 flex flex-col justify-center items-center gap-y-5 '>
        <img src={image} className='w-12 h-12'/>
        <span className=' w-20 md:w-36 text-xs md:text-sm text-center text-white'>{text}</span>
    </div>
  )
}
