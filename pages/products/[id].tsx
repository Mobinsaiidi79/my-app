import React from 'react'
import Navbar from '../../components/modules/Navbar/Navbar'
import Footer from '../../components/modules/Footer/Footer'
import ProductPageMain from '../../components/templets/ProductPageMain/ProductPageMain'

export default function ProductsPage() {
  return (
  <div>
    <Navbar/>
        <div>
            <ProductPageMain/>

        </div>
    <Footer/>
  </div>
  )
}
