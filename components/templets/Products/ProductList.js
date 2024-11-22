import ProductBox from "@/components/modules/ProductBox/ProductBox";
import React from "react";

export default function ProductList({ category }) {
  const filteredProducts = (products, category) => {
    switch (category) {
      case "جدید ترین":
        return products.sort((a, b) => new Date(b.data) - new Date(a.data));
      case "پربازدید ترین":
        return products.sort((a, b) => b.views - a.views);
      case "گران ترین":
        return products.sort((a, b) => b.price - a.price);
      case "ارزان ترین":
        return products.sort((a, b) => a.price - b.price);
      case "پرفروش ترین":
        return products.sort((a, b) => b.sales - a.sales);
    }
  };
  return <div className="w-3/4 mx-auto">
    {filteredProducts.map(product =>(
        <ProductBox/>
    ))}
  </div>;
}
