<<<<<<< HEAD

import React from 'react'
type BoxIconFooteredProps = {
  image: string,
  text: string
}
const BoxIconFooter:React.FC<BoxIconFooteredProps> =({image , text})=> {
  return (
    <div className='w-5  h-5 md:w-20 md:h-20 lg:w-40 lg:h-40 flex flex-col justify-center items-center gap-y-5 '>
        <img src={image} className='w-12 h-12'/>
        <span className=' w-20 md:w-36 text-xs md:text-sm text-center text-white'>{text}</span>
    </div>
  )
}

=======

import React from 'react'
type BoxIconFooteredProps = {
  image: string,
  text: string
}
const BoxIconFooter:React.FC<BoxIconFooteredProps> =({image , text})=> {
  return (
    <div className='w-5  h-5 md:w-20 md:h-20 lg:w-40 lg:h-40 flex flex-col justify-center items-center gap-y-5 '>
        <img src={image} className='w-12 h-12'/>
        <span className=' w-20 md:w-36 text-xs md:text-sm text-center text-white'>{text}</span>
    </div>
  )
}

>>>>>>> 15b9dd97678e3a06673d4dee440998b90c977cfb
export default BoxIconFooter