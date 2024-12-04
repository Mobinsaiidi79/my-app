import Link from "next/link";
import React, { useState } from "react";

interface popularProductsProps{
  id: number,
  backgroundColor: string,
  imgSrc: string,
  name: string
}
const PopularProductBox:React.FC= ()=> {
  const [popularProducts, setPopularProducts] = useState <popularProductsProps []>([
    {
      id: 1,
      backgroundColor: "rgba(233, 231, 0, 0.35), rgba(15, 26, 63, 0.35)",
      imgSrc: "./images/popular-1.png",
      name: "اسکیت"
    },
    {
      id: 2,
      backgroundColor: "rgba(255, 129, 46, 0.35)",
      imgSrc: "./images/popular-2.png",
      name: "چادر مسافرتی"
    },
    {
      id: 3,
      backgroundColor: "305.79deg, rgba(187, 43, 170, 0.252) 37.74%, rgba(0, 255, 18, 0.252) 71.99%",
      imgSrc: "./images/popular-3.png",
      name: "تراول ماگ"
    },
    {
      id: 4,
      backgroundColor: "180deg, rgba(96, 90, 91, 0.4) 0%, rgba(153, 0, 15, 0.4) 50.26%",
      imgSrc: "./images/popular-4.png",
      name: "کفش کوهنوردی"
    },
    {
      id: 5,
      backgroundColor: "rgba(194, 181, 64, 0.46)",
      imgSrc: "./images/popular-5.png",
      name: "کوله کوهنوردی"
    },
    {
      id: 6,
      backgroundColor: "rgba(0, 66, 79, 0.35)",
      imgSrc: "./images/popular-6.png",
      name: "کوله کوهنوردی"
    }
  ]);

  return (
    <div className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-7 ">
      {popularProducts.map((product) => (
        <Link href="/" key={product.id}>
          <div className="flex flex-col items-center justify-center gap-y-3">
          <div
            style={{
              background: product.backgroundColor || undefined,
              backgroundImage: product.backgroundColor ? `linear-gradient(${product.backgroundColor})` : undefined
            }}
            className="rounded-full border p-4 flex items-center justify-center"
          >
            <img
              src={product.imgSrc}
              className="w-20 h-20 object-cover"
            />
          </div>
          <span className="font-bold text-md">{product.name}</span>
        </div>
        </Link>
      ))}
    </div>
  );
}

export default PopularProductBox;