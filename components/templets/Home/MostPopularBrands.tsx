<<<<<<< HEAD
import React, { useState } from 'react'

interface Brand  {
    id: string;
    img: string;
}
export default function MostPopularBrands() {
    const[PopularBrands , setPopularBrands]=useState<Brand []>([
        {id:"1" , img:"./images/brand-1.png"},
        {id:"2" , img:"./images/brand-2.png"},
        {id:"3" , img:"./images/brand-3.png"},
        {id:"4" , img:"./images/brand-4.png"},
        {id:"5" , img:"./images/brand-5.png"},
    ])
  return (
    <div  className='my-10 p-5'>
        <div className='w-full text-center my-5'>
            <h2 className='font-bold text-3xl'>محبوب ترین برند ها</h2>
        </div>
        <div className="grid w-full grid-cols-2 gap-5 justify-center mt-10 md:grid-cols-3 lg:grid-cols-5">
           {PopularBrands.map(brand => (
            <div key={brand.id} className='flex justify-center'>
                 <img src={brand.img} className='w-72 h-42.5'/>
            </div>
           ))}
        </div>
    </div>
  )
}
=======
import React, { useState } from 'react'

interface Brand  {
    id: string;
    img: string;
}
export default function MostPopularBrands() {
    const[PopularBrands , setPopularBrands]=useState<Brand []>([
        {id:"1" , img:"./images/brand-1.png"},
        {id:"2" , img:"./images/brand-2.png"},
        {id:"3" , img:"./images/brand-3.png"},
        {id:"4" , img:"./images/brand-4.png"},
        {id:"5" , img:"./images/brand-5.png"},
    ])
  return (
    <div  className='my-10 p-5'>
        <div className='w-full text-center my-5'>
            <h2 className='font-bold text-3xl'>محبوب ترین برند ها</h2>
        </div>
        <div className="grid w-full grid-cols-2 gap-5 justify-center mt-10 md:grid-cols-3 lg:grid-cols-5">
           {PopularBrands.map(brand => (
            <div key={brand.id} className='flex justify-center'>
                 <img src={brand.img} className='w-72 h-42.5'/>
            </div>
           ))}
        </div>
    </div>
  )
}
>>>>>>> 15b9dd97678e3a06673d4dee440998b90c977cfb
