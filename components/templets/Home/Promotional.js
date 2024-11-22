import Link from 'next/link'
import React from 'react'

export default function Promotional() {


    
  return (
    <div className="w-full my-20  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8">

          <div style={{background: "linear-gradient(270deg, #2B4627 14.92%, rgba(52, 84, 40, 0.84) 93.79%)"}} className="w-auto p-4 h-52 rounded-xl flex items-center justify-between">
            <div className="p-4 flex flex-col justify-between gap-y-4">
              <h2 className="font-bold text-xl text-white">کوهنوردی اسان با بهترین باتوم ها</h2>
              <Link href="/" className="w-20 h-8 flex items-center justify-center text-white font-bold text-sm text-center rounded-2xl " style={{background:"rgba(102, 102, 102, 0.52)"}} > مشاهده</Link>
            </div>
            <div>
              <img src="./images/2.png" className="w-48 h-48"/>
            </div>
          </div>
          
          <div style={{background: 'linear-gradient(270deg, #001936 1.97%, #36485E 100%)'}} className="w-auto p-4 h-52 rounded-xl flex items-center justify-between">
            <div className="p-4 flex flex-col justify-between gap-y-4">
              <h2 className="font-bold text-xl text-white">به راحتی هرجایی آشپزی کنید!
              با محصوات بولین
              </h2>
              <Link href="/" className="w-20 h-8 flex items-center justify-center text-white font-bold text-sm text-center rounded-2xl " style={{background:"rgba(102, 102, 102, 0.52)"}} > مشاهده</Link>
            </div>
            <div>
              <img src="./images/1.png" className="w-48 h-48"/>
            </div>
          </div>
        </div>
  )
}
