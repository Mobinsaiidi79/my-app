import Footer from '@/components/modules/Footer/Footer'
import Navbar from '@/components/modules/Navbar/Navbar'
import Pagination from '@/components/modules/Pagination/Pagination';
import ProductList from '@/components/templets/Products/ProductList';
import SortPorduct from '@/components/templets/Products/SortPorduct'
import React, { useState } from 'react'

export default function Prodcuts() {
  const [activeCategory, setActiveCategory] = useState('جدید ترین');

  const handleCategoryChange=(category)=>{
    setActiveCategory(category);
  }

  return (
    <div>
        <Navbar/>
        <SortPorduct activeCategory={activeCategory} onCategoryChange={handleCategoryChange}/>
        {/* <ProductList category={activeCategory}/> */}
        <Pagination/>
        <Footer/>
    </div>
  )
}
