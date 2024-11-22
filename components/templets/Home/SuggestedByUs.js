import ProductBox from '@/components/modules/ProductBox/ProductBox';
import TitleSection from '@/components/modules/TitleSection/TitleSection'
import React, { useState } from 'react'

export default function SuggestedByUs() {
    const [ SuggestedProducts, setSuggestedProducts] = useState([
        {
          id: 1,
          image: "./images/SuggestedByUs-1.png",
          name: "دستکش بوکس مارک reves",
          price: "970,000 تومان",
        },
        {
          id: 2,
          image: "./images/SuggestedByUs-2.png",
          name: "ست ورزشی مردانه مدل باشگاهی نایک",
          price: "430,000 تومان",
        },
        {
          id: 3,
          image: "./images/SuggestedByUs-3.png",
          name: "چادر صحرایی کینگ کمپ مدل MARASUSA",
          price: "2,540,000 تومان",
        },
        {
          id: 4,
          image: "./images/SuggestedByUs-4.png",
          name: "کلاه محافظ دوچرخه سواری حرفه ای مدل limar",
          price: "1,450,000 تومان",
        
        },
        {
          id: 5,
          image: "./images/SuggestedByUs-5.png",
          name: "کفش کوهنوردی مردانه مدل RUNNER",
          price: "3,980,000 تومان",
        },
      ]);
  return (
    <div  className='my-10'>
        <TitleSection message={"پیشنهاد ما"}/>
        <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {SuggestedProducts.map(product=>(
                <ProductBox img={product.image} name={product.name} price={product.price}  />
            ))}
        </div>
    </div>
  )
}
