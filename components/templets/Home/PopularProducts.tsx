import PopularProductBox from '../../modules/PopularProductBox/PopularProductBox'
import React from 'react'

const PopularProducts=()=> {
  return (
    <div  className='my-20  w-full flex gap-y-12 flex-col items-center'>
        <h4 className='font-bold text-md'>محصولات محبوب </h4>
        <PopularProductBox/>
    </div>
  )
}

export default PopularProducts