import ProductBox from "@/components/modules/ProductBox/ProductBox";
import TitleSection from "@/components/modules/TitleSection/TitleSection";
import React, { useState } from "react";

export default function BestSellers() {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: "./images/BestSellersImg-1.png",
      name: "ساک ورزشی مدل 37xlz9 جوردن",
      price: "790,000 تومان",
      discountedPrice: "640,000 تومان",
      offer:"25"
    },
    {
      id: 2,
      image: "./images/BestSellersImg-2.png",
      name: "ظرف غذا تفلون مخصوص کوهنوردی و سفر laken",
      price: "385,000 تومان",
    },
    {
      id: 3,
      image: "./images/BestSellersImg-3.png",
      name: "دستکش بدنیازی مخصوص بانوان",
      price: "540,000 تومان",
    },
    {
      id: 4,
      image: "./images/BestSellersImg-4.png",
      name: "عینک شنا حرفه ای مدل zx9 مردانه",
      price: "1,430,000 تومان",
      discountedPrice: "1,970,000 تومان",
      offer:"25"
    },
    {
      id: 5,
      image: "./images/BestSellersImg-5.png",
      name: "کیسه خواب کوهنوردی 1.8 متری",
      price: "98,000 تومان",
    },
  ]);
  return (
    <div className="my-16">
      <TitleSection message={"پرفروش ترین محصولات "} />
      <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {products.map(product=>(
            <ProductBox img={product.image} name={product.name} price={product.price} discountedPrice={product.discountedPrice} offer={product.offer}/>
        ))}
     </div>
    </div>
  );
}
