<<<<<<< HEAD
import Footer from '../../components/modules/Footer/Footer'
import Navbar from '../../components/modules/Navbar/Navbar'
import Pagination from '../../components/modules/Pagination/Pagination';
import ProductList from '../../components/templets/Products/ProductList';
import SortPorduct from '../../components/templets/Products/SortPorduct'
import React, { useState } from 'react'

export default function Prodcuts() {
  const [activeCategory, setActiveCategory] = useState('جدید ترین');

  const handleCategoryChange=(category:string)=>{
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
=======
import Footer from '../../components/modules/Footer/Footer'
import Navbar from '../../components/modules/Navbar/Navbar'
import Pagination from '../../components/modules/Pagination/Pagination';
import ProductList from '../../components/templets/Products/ProductList';
import SortPorduct from '../../components/templets/Products/SortPorduct'
import React, { useState } from 'react'

export default function Prodcuts() {
  const [activeCategory, setActiveCategory] = useState('جدید ترین');

  const handleCategoryChange=(category:string)=>{
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
>>>>>>> 15b9dd97678e3a06673d4dee440998b90c977cfb