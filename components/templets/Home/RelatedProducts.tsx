<<<<<<< HEAD
import Link from "next/link";
import React, { useState } from "react";

interface RelatedProductsProps {
  id: string;
  img: string;
  title: string;
}

export default function RelatedProducts() {

  const [RelatedProducts, setRelatedProducts] = useState<RelatedProductsProps []>([
    {
      id: "1",
      img: "./images/RelatedProducts-1.png",
      title: "یه مبارزه جذاب با بهترین دستکش ها ",
    },
    {
      id: "2",
      img: "./images/RelatedProducts-2.png",
      title: "ست بدنسازیت رو از اینجا بگیر!",
    },
    {
      id: "3",
      img: "./images/RelatedProducts-3.png",
      title: "بهترین شلوار های کوهنوردی",
    },
  ]);

  return (
    <div  className="w-full grid grid-cols-1 lg:grid-cols-3 justify-center gap-3">
      {RelatedProducts.map((product) => (
        <div className="relative flex justify-center" key={product.id}>
          <img src={product.img} className="w-full" />
          <div className="absolute p-4 right-0 top-1/2 -translate-y-1/2">
            <h3 className="mb-5 text-lg md:text-3xl  font-bold h-16 md:text-4xl lg:text-xl text-white max-w-50 ">
              {product.title}
            </h3>
            <Link
              href="/"
              className="w-20 h-8 flex items-center justify-center text-white font-bold text-sm text-center rounded-2xl "
              style={{ background: "rgba(102, 102, 102, 0.52)" }}
            >
              {" "}
              مشاهده
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
=======
import Link from "next/link";
import React, { useState } from "react";

interface RelatedProductsProps {
  id: string;
  img: string;
  title: string;
}

export default function RelatedProducts() {

  const [RelatedProducts, setRelatedProducts] = useState<RelatedProductsProps []>([
    {
      id: "1",
      img: "./images/RelatedProducts-1.png",
      title: "یه مبارزه جذاب با بهترین دستکش ها ",
    },
    {
      id: "2",
      img: "./images/RelatedProducts-2.png",
      title: "ست بدنسازیت رو از اینجا بگیر!",
    },
    {
      id: "3",
      img: "./images/RelatedProducts-3.png",
      title: "بهترین شلوار های کوهنوردی",
    },
  ]);

  return (
    <div  className="w-full grid grid-cols-1 lg:grid-cols-3 justify-center gap-3">
      {RelatedProducts.map((product) => (
        <div className="relative flex justify-center" key={product.id}>
          <img src={product.img} className="w-full" />
          <div className="absolute p-4 right-0 top-1/2 -translate-y-1/2">
            <h3 className="mb-5 text-lg md:text-3xl  font-bold h-16 md:text-4xl lg:text-xl text-white max-w-50 ">
              {product.title}
            </h3>
            <Link
              href="/"
              className="w-20 h-8 flex items-center justify-center text-white font-bold text-sm text-center rounded-2xl "
              style={{ background: "rgba(102, 102, 102, 0.52)" }}
            >
              {" "}
              مشاهده
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
>>>>>>> 15b9dd97678e3a06673d4dee440998b90c977cfb
