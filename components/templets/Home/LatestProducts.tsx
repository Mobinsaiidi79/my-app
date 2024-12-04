<<<<<<< HEAD
import ProductBox from "../../modules/ProductBox/ProductBox";
import TitleSection from "../../modules/TitleSection/TitleSection";
import React, { useState } from "react";

// تعریف تایپ محصول
interface Product {
  id: number;
  image: string;
  name: string;
  price: string;
}

const LatestProducts: React.FC = () => {
  // تعریف State با تایپ مشخص
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      image: "./images/Newproduct-1.png",
      name: "شیکر بدنسازی مدل pro0097 سفید",
      price: "350,000 تومان",
    },
    {
      id: 2,
      image: "./images/Newproduct-2.png",
      name: "ساک ورزشی مدل 90",
      price: "700,000 تومان",
    },
    {
      id: 3,
      image: "./images/Newproduct-3.png",
      name: "کفش کوهنوردی مردانه مدل RUNNER",
      price: "540,000 تومان",
    },
    {
      id: 4,
      image: "./images/Newproduct-4.png",
      name: "کلاه محافظ دوچرخه سواری حرفه ای مدل limar",
      price: "1,450,000 تومان",
    },
    {
      id: 5,
      image: "./images/Newproduct-5.png",
      name: "طناب ورزشی 1.5 متری مدل 023",
      price: "98,000 تومان",
    },
  ]);

  return (
    <div className="my-5" >
      <TitleSection message={"محصولات جدید"} />
      <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {products.map((product) => (
          <ProductBox
            key={product.id} // کلید یکتا برای هر محصول
            name={product.name}
            img={product.image}
            price={product.price} discountedPrice={undefined} offer={undefined}          />
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
=======
import ProductBox from "../../modules/ProductBox/ProductBox";
import TitleSection from "../../modules/TitleSection/TitleSection";
import React, { useState } from "react";

// تعریف تایپ محصول
interface Product {
  id: number;
  image: string;
  name: string;
  price: string;
}

const LatestProducts: React.FC = () => {
  // تعریف State با تایپ مشخص
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      image: "./images/Newproduct-1.png",
      name: "شیکر بدنسازی مدل pro0097 سفید",
      price: "350,000 تومان",
    },
    {
      id: 2,
      image: "./images/Newproduct-2.png",
      name: "ساک ورزشی مدل 90",
      price: "700,000 تومان",
    },
    {
      id: 3,
      image: "./images/Newproduct-3.png",
      name: "کفش کوهنوردی مردانه مدل RUNNER",
      price: "540,000 تومان",
    },
    {
      id: 4,
      image: "./images/Newproduct-4.png",
      name: "کلاه محافظ دوچرخه سواری حرفه ای مدل limar",
      price: "1,450,000 تومان",
    },
    {
      id: 5,
      image: "./images/Newproduct-5.png",
      name: "طناب ورزشی 1.5 متری مدل 023",
      price: "98,000 تومان",
    },
  ]);

  return (
    <div className="my-5" >
      <TitleSection message={"محصولات جدید"} />
      <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {products.map((product) => (
          <ProductBox
            key={product.id} // کلید یکتا برای هر محصول
            name={product.name}
            img={product.image}
            price={product.price} discountedPrice={undefined} offer={undefined}          />
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
>>>>>>> 15b9dd97678e3a06673d4dee440998b90c977cfb
