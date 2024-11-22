import React from "react";
import { FiPlus } from "react-icons/fi";
import { TiMinus } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

export default function BoxProductShop() {
  return (
    <table className="w-full my-3">
      <tr >

    {/*  */}

        <td  className="w-36 sm:w-52 md:w-2/4">
          <div className="flex items-center gap-x-2 ">
          <img src="./images/1.png" className="w-10 h-10 " />
          <div>
            <p className="line-clamp-1">ساک ورزشی مدل 37xlz9 جوردن</p>
           
          </div>
          </div>
          <div className="flex items-center gap-2 my-1">
              <span className="rounded-full w-5 h-5 bg-blue-900"></span>
              <span>آبی</span>
            </div>
        </td>
        
        <td>
            <div className="flex rounded-2xl w-12 h-10 md:w-24 items-center justify-between md:p-2 border border-black ">
                <FiPlus className="cursor-pointer border-l border-black w-6 h-6"/>
                <span className="mx-1">1</span>
                <TiMinus className="cursor-pointer border-r border-black w-6 h-6"/>
            </div>
        </td>
        <td>
        {/* {discountedPrice ? (
          <>
           
            <span className='font-bold text-sm line-through text-gray-500'>790,000 تومان</span>
          
            <span className='font-bold text-sm text-yellow'>640,000 تومان</span>
          </>
        ) : (
          <span className='font-bold text-sm'>790,000 تومان</span>
        )} */}
         <span className='font-bold text-xs md:text-sm'>790,000 تومان</span>
        </td>
        <td>
            <IoClose className="w-8 h-8 cursor-pointer"/>
        </td>
      </tr>
    </table>
  );
}
