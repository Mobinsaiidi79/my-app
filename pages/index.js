import Footer from "@/components/modules/Footer/Footer";
import Navbar from "@/components/modules/Navbar/Navbar";
import BestSellers from "@/components/templets/Home/BestSellers";
import LatestProducts from "@/components/templets/Home/LatestProducts";
import MostPopularBrands from "@/components/templets/Home/MostPopularBrands";
import PopularProducts from "@/components/templets/Home/PopularProducts";
import Promotional from "@/components/templets/Home/Promotional";
import RelatedProducts from "@/components/templets/Home/RelatedProducts";
import SearchOverlay from "@/components/templets/Home/SearchOverlay";
import SpecialDiscounts from "@/components/templets/Home/SpecialDiscounts";
import SuggestedByUs from "@/components/templets/Home/SuggestedByUs";
import TravelEssentials from "@/components/templets/Home/TravelEssentials";

import Link from "next/link";
import React, { useState } from "react";

export default function index() {

  const[titleSection , setTitleSection]=useState("محصولات")


  return (
    <>
      <Navbar />
      <SearchOverlay />
      <div className="p-4 w-3/4 mx-auto">
        <PopularProducts />
        <LatestProducts />  
        <Promotional/>
        <SpecialDiscounts />
        <TravelEssentials/>
        <BestSellers/>
        <RelatedProducts/>
        <SuggestedByUs/>
        <MostPopularBrands/>
      </div>
    <Footer/>
    </>
  );
}
// 