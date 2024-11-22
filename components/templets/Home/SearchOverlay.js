import React from 'react'

import { IoSearchOutline } from "react-icons/io5";

export default function SearchOverlay() {
  return (
    <div className='relative w-full mb-16 h-[500px]'>
      
      {/* Background Image */}
      <img
        src='./images/bg.png'
        alt='Background'
        className='object-cover w-full h-full'
      />
      
      {/* Search Overlay */}
      <div className='absolute -bottom-10 left-1/2 transform rounded-md -translate-x-1/2 w-[90%] max-w-[700px] h-[80px] shadow-2xl  bg-white flex items-center px-4'>
        
        {/* Input and Search Icon */}
        <IoSearchOutline className='text-gray-600 mr-2 text-3xl cursor-pointer' />
        
        <input 
          placeholder='محصول مورد نظر خود را جستجو کنید...' 
          className='w-full h-full px-4 text-black border-none outline-none'
        />
      
      </div>
    </div>
  );
}
