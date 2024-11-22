import ProductBox from '@/components/modules/ProductBox/ProductBox';
import Link from 'next/link';
import React, { useState } from 'react';
import { BiSolidOffer } from "react-icons/bi";

export default function SpecialDiscounts() {
    const [specialProducts, setSpecialProducts] = useState([
        {
          id: 1,
          image: './images/Special-1.png',
          name: "چادر مسافرتی 12 نفره مدل prev",
          price: '5,400,000 تومان',
          discountedPrice : '4,700,000 تومان'
        },
        {
          id: 2,
          image: './images/Special-2.png',
          name: "بادگیر زنانه مخصوص کوهنوردی مارک camel",
           price: '1,700,000 تومان',
          discountedPrice : '1,450,000 تومان'
        },
        {
          id: 3,
          image: './images/Special-3.png',
          name: "شوزبگ ورزشی مدل 42Lo1  Gray",
          price: '360,000 تومان',
          discountedPrice : '173,000 تومان'
        },
        {
          id: 4,
          image: './images/Special-4.png',
          name: "طناب ورزشی 1.5متر مدل 39Z",
          price: '280,000 تومان',
          discountedPrice : '200,000 تومان'
        },
    ]);

    return (
        <div  className='w-full p-2'>
            {/* باکس زرد برای عنوان و دکمه "مشاهده همه" */}
            <div className='flex flex-col md:flex-col xl:flex-row rounded-xl bg-yellow px-2 py-8 items-center justify-around gap-2'>
                <div className=' md:w-2/6 xl:w-1/6   p-4 '>
                    <div className='flex flex-col items-center gap-y-4'>
                        <BiSolidOffer className='w-16 h-16' />
                        <h2 className='font-bold text-2xl text-center'>تخفیفات ویژه</h2>
                        <Link href="/" className='text-sm font-bold bg-gray-700 text-white px-4 py-2 rounded-2xl'>
                            مشاهده همه
                        </Link>
                    </div>
                </div>

                {/* بخش محصولات */}
                <div className='w-full md:w-5/6 grid grid-cols-1 gap-y-4  sm:grid-cols-2 sm:gap-y-4 md:grid-cols-2 md:gap-y-4 md:mx-auto lg:grid-cols-4 lg:gap-y-4 justify-items-center items-center'>
                    {specialProducts.map(specialProduct => (
                        <ProductBox
                            key={specialProduct.id}
                            name={specialProduct.name}
                            price={specialProduct.price}
                            img={specialProduct.image}
                            discountedPrice={specialProduct.discountedPrice}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
