<<<<<<< HEAD
import React, { useState } from "react";
import { AiFillStar, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

// تعریف انواع داده‌ها
type Color = {
  id: string;
  value: string;
};

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type Specification = {
  label: string;
  value: string;
};

const ProductPage: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string>("blue");
  const [selectedSize, setSelectedSize] = useState<string>("40");
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<string>("description");

  const colors: Color[] = [
    { id: "gray", value: "#374151" },
    { id: "blue", value: "#1d4ed8" },
    { id: "red", value: "#dc2626" },
    { id: "black", value: "#000000" },
  ];

  const sizes: string[] = ["38", "39", "40", "41"];

  const similarProducts: Product[] = [
    {
      id: 1,
      name: "کفش کوهنوردی مردانه مدل RUNNER",
      price: 3980000,
      image: "/images/shoes.png",
    },
    {
      id: 2,
      name: "کفش محافظ دوچرخه سواری حرفه",
      price: 1650000,
      image: "/images/shoes-1.png",
    },
    {
      id: 3,
      name: "چرم مصنوعی تنگ کپ مدل MARASUSA",
      price: 2540000,
      image: "/images/shoes-2.png",
    },
    {
      id: 4,
      name: "ست ورزشی مردانه پشت باشگاهی",
      price: 3300000,
      image: "/images/shoes-3.png",
    },
    {
      id: 5,
      name: "دستکش پولیش مدل reves",
      price: 970000,
      image: "/images/shoes-4.png",
    },
  ];

  const specifications: Specification[] = [
    { label: "جنس رویه", value: "ضدآب و مقاوم" },
    { label: "کفی", value: "لاستیکی و ضدلغزش" },
    { label: "مناسب برای", value: "کوهنوردی و پیاده‌روی در طبیعت" },
  ];

  const stock: number = 10; // مقدار موجودی کالا

  const formattedPrice: string = new Intl.NumberFormat('fa-IR').format(2350000); // فرمت کردن قیمت

  return (
    <div className="max-w-7xl mx-auto px-12 py-4">
      <div className="grid md:grid-cols-2 mt-10 gap-8">
        {/* Product Image Section */}
        <div>
          <div className="relative bg-white rounded-lg overflow-hidden">
            <img
              src="/images/shoes.png"
              alt="کفش کوهنوردی"
              className="w-4/5"
              loading="lazy" // بارگذاری تنبل
            />
          </div>
        </div>

        {/* Product Details Section */}
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold">کفش کوهنوردی زنانه کینگتکس مدل DENA</h1>
            <div className="flex items-center mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <AiFillStar key={star} className="w-4 h-4 text-yellow" />
              ))}
              <span className="text-sm text-gray-500 mr-2">(از ۱۲ نفر)</span>
            </div>
          </div>

          <div className="text-2xl font-bold">{formattedPrice} تومان</div>

          {/* Color Selection Section */}
          <div>
            <div className="mb-4">
              <span className="block mb-2">رنگ کفش: آبی مشکی</span>
              <div className="flex gap-2">
                {colors.map((color) => (
                  <button
                    key={color.id}
                    className={`w-8 h-8 rounded-full border-2 ${selectedColor === color.id ? "border-yellow" : "border-transparent"}`}
                    style={{ backgroundColor: color.value }}
                    title={`انتخاب رنگ ${color.id}`} // افزودن tooltip برای دسترسی
                    onClick={() => setSelectedColor(color.id)}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection Section */}
            <div>
              <span className="block mb-2">سایز کفش: {selectedSize}</span>
              <div className="flex gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`w-12 h-12 rounded border ${selectedSize === size ? "bg-yellow text-white border-yellow" : "border-gray-300 hover:border-gray-400"}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar Section (Quantity, Add to Cart, Thumbnails) */}
      <div className="w-full flex flex-col md:flex-row items-center gap-y-7 justify-between">
        {/* Thumbnail Images */}
        <div className="flex w-full md:w-1/2 gap-2 overflow-x-auto">
          {[1, 2, 3, 4].map((img) => (
            <div key={img} className="aspect-square bg-white rounded-lg overflow-hidden flex-shrink-0">
              <img
                src={`/images/shoes-${img}.png`}
                alt={`تصویر ${img}`}
                className="object-contain w-32 h-32"
                loading="lazy" // بارگذاری تنبل
              />
            </div>
          ))}
        </div>

        {/* Quantity Buttons and Add to Cart */}
        <div className="flex w-full md:w-1/2 gap-4">
          <div className="flex w-1/3 items-center justify-around gap-x-2">
            <button
              className="w-8 h-8 rounded-full bg-gray-300 hover:bg-gray-200 flex items-center justify-center"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            >
              <AiOutlineMinus className="w-4 h-4" />
            </button>
            <span className="w-8 text-center">{quantity}</span>
            <button
              className="w-8 h-8 rounded-full bg-gray-300 hover:bg-gray-200 flex items-center justify-center"
              onClick={() => setQuantity((q) => Math.min(stock, q + 1))} // بررسی موجودی
              disabled={quantity >= stock} // غیرفعال کردن دکمه در صورت تمام شدن موجودی
            >
              <AiOutlinePlus className="w-4 h-4" />
            </button>
          </div>
          <button className="flex-1 w-2/3 bg-yellow text-white py-2 px-4 rounded-lg hover:bg-yellow">
            افزودن به سبد خرید
          </button>
        </div>
      </div>

      {/* Tabs for Description, Specifications, and Reviews */}
      <div className="mt-8">
        <div className="flex space-x-8 border-b pb-2">
          <button
            className={`pb-2 px-4 text-sm font-semibold ${activeTab === "description" ? "border-b-2 border-yellow" : ""}`}
            onClick={() => setActiveTab("description")}
          >
            توضیحات
          </button>
          <button
            className={`pb-2 px-4 text-sm font-semibold ${activeTab === "specifications" ? "border-b-2 border-yellow" : ""}`}
            onClick={() => setActiveTab("specifications")}
          >
            مشخصات
          </button>
          <button
            className={`pb-2 px-4 text-sm font-semibold ${activeTab === "reviews" ? "border-b-2 border-yellow" : ""}`}
            onClick={() => setActiveTab("reviews")}
          >
            نظرات کاربران
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "description" && (
          <div className="text-sm h-72 text-gray-700 my-6 border-b-2 border-dashed">
            <p>
              این کفش کوهنوردی برای استفاده در شرایط سخت طراحی شده است. با کفی
              مقاوم و رویه‌ای ضدآب، این محصول راحتی و پایداری بالایی را در مسیرهای دشوار فراهم می‌کند.
            </p>
          </div>
        )}
        {activeTab === "specifications" && (
          <div className="text-sm h-72 text-gray-700 my-6 border-b-2 border-dashed">
            <ul>
              {specifications.map((spec) => (
                <li key={spec.label} className="flex justify-between">
                  <span>{spec.label}</span>
                  <span>{spec.value}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {activeTab === "reviews" && (
          <div className="text-sm h-72 text-gray-700 my-6">
            <p>نظرات کاربران را اینجا می‌توان دید.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
=======
import React, { useState } from "react";
import { AiFillStar, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

type Color = {
  id: string;
  value: string;
};

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type Specification = {
  label: string;
  value: string;
};

const ProductPage: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string>("blue");
  const [selectedSize, setSelectedSize] = useState<string>("40");
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<string>("description");

  const colors: Color[] = [
    { id: "gray", value: "#374151" },
    { id: "blue", value: "#1d4ed8" },
    { id: "red", value: "#dc2626" },
    { id: "black", value: "#000000" },
  ];

  const sizes: string[] = ["38", "39", "40", "41"];

  const similarProducts: Product[] = [
    {
      id: 1,
      name: "کفش کوهنوردی مردانه مدل RUNNER",
      price: 3980000,
      image: "/images/shoes.png",
    },
    {
      id: 2,
      name: "کفش محافظ دوچرخه سواری حرفه",
      price: 1650000,
      image: "/images/shoes-1.png",
    },
    {
      id: 3,
      name: "چرم مصنوعی تنگ کپ مدل MARASUSA",
      price: 2540000,
      image: "/images/shoes-2.png",
    },
    {
      id: 4,
      name: "ست ورزشی مردانه پشت باشگاهی",
      price: 3300000,
      image: "/images/shoes-3.png",
    },
    {
      id: 5,
      name: "دستکش پولیش مدل reves",
      price: 970000,
      image: "/images/shoes-4.png",
    },
  ];

  const specifications: Specification[] = [
    { label: "جنس رویه", value: "ضدآب و مقاوم" },
    { label: "کفی", value: "لاستیکی و ضدلغزش" },
    { label: "مناسب برای", value: "کوهنوردی و پیاده‌روی در طبیعت" },
  ];

  const stock: number = 10; // مقدار موجودی کالا

  const formattedPrice: string = new Intl.NumberFormat("fa-IR").format(2350000); // فرمت کردن قیمت

  return (
    <div className="max-w-7xl mx-auto px-12 py-4">
      <div className="grid md:grid-cols-2 mt-10 gap-8">
        {/* Product Image Section */}
        <div>
          <div className="relative bg-white rounded-lg overflow-hidden">
            <img
              src="/images/shoes.png"
              alt="کفش کوهنوردی"
              className="w-4/5"
              loading="lazy" // بارگذاری تنبل
            />
          </div>
        </div>

        {/* Product Details Section */}
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold">
              کفش کوهنوردی زنانه کینگتکس مدل DENA
            </h1>
            <div className="flex items-center mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <AiFillStar key={star} className="w-4 h-4 text-yellow" />
              ))}
              <span className="text-sm text-gray-500 mr-2">(از ۱۲ نفر)</span>
            </div>
          </div>

          <div className="text-2xl font-bold">{formattedPrice} تومان</div>

          {/* Color Selection Section */}
          <div>
            <div className="mb-4">
              <span className="block mb-2">رنگ کفش: آبی مشکی</span>
              <div className="flex gap-2">
                {colors.map((color) => (
                  <button
                    key={color.id}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === color.id
                        ? "border-yellow"
                        : "border-transparent"
                    }`}
                    style={{ backgroundColor: color.value }}
                    title={`انتخاب رنگ ${color.id}`} // افزودن tooltip برای دسترسی
                    onClick={() => setSelectedColor(color.id)}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection Section */}
            <div>
              <span className="block mb-2">سایز کفش: {selectedSize}</span>
              <div className="flex gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`w-12 h-12 rounded border ${
                      selectedSize === size
                        ? "bg-yellow text-white border-yellow"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar Section (Quantity, Add to Cart, Thumbnails) */}
      <div className="w-full flex flex-col md:flex-row items-center gap-y-7 justify-between">
        {/* Thumbnail Images */}
        <div className="flex w-full md:w-1/2 gap-2 overflow-x-auto">
          {[1, 2, 3, 4].map((img) => (
            <div
              key={img}
              className="aspect-square bg-white rounded-lg overflow-hidden flex-shrink-0"
            >
              <img
                src={`/images/shoes-${img}.png`}
                alt={`تصویر ${img}`}
                className="object-contain w-32 h-32"
                loading="lazy" // بارگذاری تنبل
              />
            </div>
          ))}
        </div>

        {/* Quantity Buttons and Add to Cart */}
        <div className="flex w-full md:w-1/2 gap-4">
          <div className="flex w-1/3 items-center justify-around gap-x-2">
            <button
              className="w-8 h-8 rounded-full bg-gray-300 hover:bg-gray-200 flex items-center justify-center"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            >
              <AiOutlineMinus className="w-4 h-4" />
            </button>
            <span className="w-8 text-center">{quantity}</span>
            <button
              className="w-8 h-8 rounded-full bg-gray-300 hover:bg-gray-200 flex items-center justify-center"
              onClick={() => setQuantity((q) => Math.min(stock, q + 1))} // بررسی موجودی
              disabled={quantity >= stock} // غیرفعال کردن دکمه در صورت تمام شدن موجودی
            >
              <AiOutlinePlus className="w-4 h-4" />
            </button>
          </div>
          <button className="flex-1 w-2/3 bg-yellow text-white py-2 px-4 rounded-lg hover:bg-yellow">
            افزودن به سبد خرید
          </button>
        </div>
      </div>

      {/* Tabs for Description, Specifications, and Reviews */}
      <div className="mt-8">
        <div className="flex space-x-8 border-b pb-2">
          <button
            className={`pb-2 px-4 text-sm font-semibold ${
              activeTab === "description" ? "border-b-2 border-yellow" : ""
            }`}
            onClick={() => setActiveTab("description")}
          >
            توضیحات
          </button>
          <button
            className={`pb-2 px-4 text-sm font-semibold ${
              activeTab === "specifications" ? "border-b-2 border-yellow" : ""
            }`}
            onClick={() => setActiveTab("specifications")}
          >
            مشخصات
          </button>
          <button
            className={`pb-2 px-4 text-sm font-semibold ${
              activeTab === "reviews" ? "border-b-2 border-yellow" : ""
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            نظرات کاربران
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "description" && (
          <div className="text-sm h-72 text-gray-700 my-6 border-b-2 border-dashed">
            <p>
              این کفش کوهنوردی برای استفاده در شرایط سخت طراحی شده است. با کفی
              مقاوم و رویه‌ای ضدآب، این محصول راحتی و پایداری بالایی را در
              مسیرهای دشوار فراهم می‌کند.
            </p>
          </div>
        )}
        {activeTab === "specifications" && (
          <div className="text-sm h-72 text-gray-700 my-6 border-b-2 border-dashed">
            <ul>
              {specifications.map((spec) => (
                <li key={spec.label} className="flex justify-between">
                  <span>{spec.label}</span>
                  <span>{spec.value}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {activeTab === "reviews" && (
          <div className="text-sm h-72 text-gray-700 my-6">
            <p>نظرات کاربران را اینجا می‌توان دید.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
>>>>>>> 15b9dd97678e3a06673d4dee440998b90c977cfb
