import Link from 'next/link'
import React from 'react'

type TitleSectionProps = {
  message: string
}
const TitleSection: React.FC<TitleSectionProps> =({message})=> {
  return (
    <div className='mb-10 flex items-center justify-between px-2.5' >
      <h2 className='font-bold text-xl'>{message}</h2>
      <Link href="/products" className='text-md cursor-pointer hover:font-bold transition-colors'>بیشتر</Link>
    </div>
  )
}


export default TitleSection