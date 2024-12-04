<<<<<<< HEAD
import ProductBox from "@/components/modules/ProductBox/ProductBox";
import React from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  views: number;
  sales: number;
  date: string;
  img: string;  // به فرض اینکه هر محصول یک تصویر دارد
  discountedPrice?: number; // به فرض اینکه قیمت تخفیف‌خورده وجود دارد
  offer?: string;  // به فرض اینکه پیشنهاد ویژه برای هر محصول وجود دارد
}

interface ProductListProps {
  products: Product[];
  category: string;
}

export default function ProductList({ products, category }: ProductListProps) {
  // تابع فیلتر کردن و مرتب کردن محصولات بر اساس دسته‌بندی
  const filteredProducts = (products: Product[], category: string) => {
    switch (category) {
      case "جدید ترین":
        return [...products].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      case "پربازدید ترین":
        return [...products].sort((a, b) => b.views - a.views);
      case "گران ترین":
        return [...products].sort((a, b) => b.price - a.price);
      case "ارزان ترین":
        return [...products].sort((a, b) => a.price - b.price);
      case "پرفروش ترین":
        return [...products].sort((a, b) => b.sales - a.sales);
      default:
        return products;
    }
  };

  const sortedProducts = filteredProducts(products, category);

  return (
    <div className="w-3/4 mx-auto">
      {sortedProducts.map((product) => (
        <ProductBox
          key={product.id}
          name={product.name}
          img={product.img}
          price={product.price}
          discountedPrice={product.discountedPrice}
          offer={product.offer}
        />
      ))}
    </div>
  );
}
=======
import ProductBox from "../../modules/ProductBox/ProductBox";
import React from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  views: number;
  sales: number;
  date: string;
  img: string;  // به فرض اینکه هر محصول یک تصویر دارد
  discountedPrice?: number; // به فرض اینکه قیمت تخفیف‌خورده وجود دارد
  offer?: string;  // به فرض اینکه پیشنهاد ویژه برای هر محصول وجود دارد
}

interface ProductListProps {
  products: Product[];
  category: string;
}

export default function ProductList({ products, category }: ProductListProps) {
  // تابع فیلتر کردن و مرتب کردن محصولات بر اساس دسته‌بندی
  const filteredProducts = (products: Product[], category: string) => {
    switch (category) {
      case "جدید ترین":
        return [...products].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      case "پربازدید ترین":
        return [...products].sort((a, b) => b.views - a.views);
      case "گران ترین":
        return [...products].sort((a, b) => b.price - a.price);
      case "ارزان ترین":
        return [...products].sort((a, b) => a.price - b.price);
      case "پرفروش ترین":
        return [...products].sort((a, b) => b.sales - a.sales);
      default:
        return products;
    }
  };

  const sortedProducts = filteredProducts(products, category);

  return (
    <div className="w-3/4 mx-auto">
      {sortedProducts.map((product) => (
        <ProductBox
          key={product.id}
          name={product.name}
          img={product.img}
          price={product.price}
          discountedPrice={product.discountedPrice}
          offer={product.offer}
        />
      ))}
    </div>
  );
}
>>>>>>> 15b9dd97678e3a06673d4dee440998b90c977cfb
