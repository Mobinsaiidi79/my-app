import Link from 'next/link'
import React from 'react'

export default function TitleSection({message}) {
  return (
    <div className='mb-10 flex items-center justify-between px-2.5' >
      <h2 className='font-bold text-xl'>{message}</h2>
      <Link href="/products" className='text-md cursor-pointer hover:font-bold transition-colors'>بیشتر</Link>
    </div>
  )
}
