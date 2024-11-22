import Footer from '@/components/modules/Footer/Footer'
import Navbar from '@/components/modules/Navbar/Navbar'
import Basket from '@/components/templets/ShopBasket/Basket'
import React from 'react'

export default function ShopBasket() {
  return (
    <div>
        <Navbar/>
        <Basket/>
        <Footer/>
    </div>
  )
}
