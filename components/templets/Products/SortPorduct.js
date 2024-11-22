import React, { useState } from 'react'
import { FaRankingStar } from "react-icons/fa6";


export default function SortPorduct({activeCategory, onCategoryChange }) {

    const categories = ['جدید ترین', 'پربازدید ترین', 'ارزان ترین', 'گران ترین', 'پرفروش ترین'];


  return (
    <div className='w-3/4 mx-auto my-10'>
        {/* title */}
        <div>
            <h2 className='font-bold text-lg'>{activeCategory} محصولات</h2>
        </div>

        {/*  */}

        <div className='mt-8 flex gap-x-2' >
            <div className='flex items-center gap-x-2'>
                <FaRankingStar/>
                <h2 className='font-bold'>مرتب سازی:</h2>
            </div>
            <div>
                <ul className='flex items-center font-bold text-black/75 gap-x-8'>
                    {categories.map((category,index)=>(
                         <li key={index} onClick={()=>onCategoryChange (category)}  className={activeCategory === category ? 'text-yellow' : 'cursor-pointer'}>{category}</li>
                    ))}
                    
                </ul>
            </div>
        </div>
    </div>
  )
}
