<<<<<<< HEAD
import BoxProductShop from '../../modules/BoxProductShop/BoxProductShop';
import Link from 'next/link';
import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";

const Basket=()=> {
  return (
    <div className='w-full  px-10 py-16 bg-gray-100 '>
        {/* Header title */}
        <div className='w-full mx-auto mb-10 relative border-t border-black/80 ' >
           <div className='absolute bg-gray-100 -top-8 right-0 p-4'>
           <h2 className='text-yellow'>سبد خرید شما</h2>
           </div>
        </div>

        {/* Section: Shop Basket */}
        <div className='flex flex-col lg:flex-row items-center justify-between gap-24'>
            
            {/* Table of Products */}
            <div  className='bg-white h-96 overflow-y-auto w-full lg:w-3/4 p-8 rounded-3xl'>
                <table className='w-full flex flex-col justify-between items-stretch'>
                    <thead className='w-full border-b border-dashed border-black/24'>
                        <tr className='flex mb-6 justify-around md:justify-between'>
                            <th className='md:w-3/5 text-right'> محصولات</th>
                            <th className='md:w-2/5'>تعداد</th>
                            <th className='md:w-2/5'>قیمت کل</th>
                        </tr>
                    </thead>
                    <tbody className='border-b'>
                        <BoxProductShop />
                    </tbody>
                </table>
            </div>

            {/* Price Details */}
            <div  className='bg-white h-96 w-full lg:w-[371px] p-5 rounded-xl'>
                <div className='w-full space-y-5 border-b-2 pb-8 border-black border-dashed'>
                    <div className='flex items-center text-sm md:text-lg justify-between'>
                        <h2>قیمت کالا ها</h2>
                        <span>4,670,000 تومان</span>
                    </div>
                    <div className='flex items-center justify-between'>
                        <h2>تخفیف کالا ها</h2>
                        <span className='text-yellow'>4,670,000 تومان</span>
                    </div>
                </div>

                {/* Basket Summary */}
                <div className='w-full my-5'>
                    <div className='flex items-center justify-between'>
                        <h2>جمع سبد خرید</h2>
                        <span>3,790,000  تومان</span>
                    </div>
                </div>

                {/* Shipping Cost */}
                <div className='w-full flex items-center justify-around'>
                    <TbTruckDelivery className='w-5 h-5'/>
                    <p className='text-xs w-4/5'>هزینه‌ی ارسال در ادامه بر اساس آدرس، زمان و نحوه‌ی ارسال انتخابی شما‌ محاسبه و به این مبلغ اضافه خواهد شد.</p>
                </div>

                {/* Order Button */}
                <div className='my-10 w-full p-2 text-center rounded-xl text-white  bg-yellow'>
                    <Link href="/" className='w-full text-xl'>ثبت سفارش</Link>
                </div>
            </div>
        </div>
    </div>
  )
}


=======
import BoxProductShop from '../../modules/BoxProductShop/BoxProductShop';
import Link from 'next/link';
import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";

const Basket=()=> {
  return (
    <div className='w-full  px-10 py-16 bg-gray-100 '>
        {/* Header title */}
        <div className='w-full mx-auto mb-10 relative border-t border-black/80 ' >
           <div className='absolute bg-gray-100 -top-8 right-0 p-4'>
           <h2 className='text-yellow'>سبد خرید شما</h2>
           </div>
        </div>

        {/* Section: Shop Basket */}
        <div className='flex flex-col lg:flex-row items-center justify-between gap-24'>
            
            {/* Table of Products */}
            <div  className='bg-white h-96 overflow-y-auto w-full lg:w-3/4 p-8 rounded-3xl'>
                <table className='w-full flex flex-col justify-between items-stretch'>
                    <thead className='w-full border-b border-dashed border-black/24'>
                        <tr className='flex mb-6 justify-around md:justify-between'>
                            <th className='md:w-3/5 text-right'> محصولات</th>
                            <th className='md:w-2/5'>تعداد</th>
                            <th className='md:w-2/5'>قیمت کل</th>
                        </tr>
                    </thead>
                    <tbody className='border-b'>
                        <BoxProductShop />
                    </tbody>
                </table>
            </div>

            {/* Price Details */}
            <div  className='bg-white h-96 w-full lg:w-[371px] p-5 rounded-xl'>
                <div className='w-full space-y-5 border-b-2 pb-8 border-black border-dashed'>
                    <div className='flex items-center text-sm md:text-lg justify-between'>
                        <h2>قیمت کالا ها</h2>
                        <span>4,670,000 تومان</span>
                    </div>
                    <div className='flex items-center justify-between'>
                        <h2>تخفیف کالا ها</h2>
                        <span className='text-yellow'>4,670,000 تومان</span>
                    </div>
                </div>

                {/* Basket Summary */}
                <div className='w-full my-5'>
                    <div className='flex items-center justify-between'>
                        <h2>جمع سبد خرید</h2>
                        <span>3,790,000  تومان</span>
                    </div>
                </div>

                {/* Shipping Cost */}
                <div className='w-full flex items-center justify-around'>
                    <TbTruckDelivery className='w-5 h-5'/>
                    <p className='text-xs w-4/5'>هزینه‌ی ارسال در ادامه بر اساس آدرس، زمان و نحوه‌ی ارسال انتخابی شما‌ محاسبه و به این مبلغ اضافه خواهد شد.</p>
                </div>

                {/* Order Button */}
                <div className='my-10 w-full p-2 text-center rounded-xl text-white  bg-yellow'>
                    <Link href="/" className='w-full text-xl'>ثبت سفارش</Link>
                </div>
            </div>
        </div>
    </div>
  )
}


>>>>>>> 15b9dd97678e3a06673d4dee440998b90c977cfb
export default Basket;