import React from 'react';
import { MdAddShoppingCart } from "react-icons/md";

interface ProductBoxProps {
  id: number;
  img: string;
  name: string;
  price: number;  // قیمت باید عدد باشد
  discountedPrice?: number;  // تخفیف به صورت عدد
  offer?: number;  // درصد تخفیف
}

const ProductBox: React.FC<ProductBoxProps> = ({ name, img, price, discountedPrice, offer }) => {
  return (
    <div className="max-w-44 h-64 relative border p-3 overflow-hidden flex flex-col shadow shadow-3xl bg-white rounded-xl justify-between">
      {/* نمایش درصد تخفیف */}
      {offer && (
        <span className="w-24 h-8 absolute top-1 -rotate-45 text-center pt-1 -left-6 font-bold text-xl bg-yellow">
          %{offer}
        </span>
      )}
      
      <div>
        <img src={img} className="w-24 h-24 mx-auto" alt={name} />
      </div>

      <span className="font-bold text-sm line-clamp-2">{name}</span>

      <div className="flex items-center h-10 justify-between mt-2">
        <MdAddShoppingCart className="w-5 h-5 text-yellow cursor-pointer hover:text-black transition-all" />

        <div className="flex flex-col items-start">
          {discountedPrice ? (
            <>
              {/* نمایش قیمت اصلی و قیمت تخفیف‌خورده */}
              <span className="font-bold text-sm line-through text-gray-500"> تومان {price.toLocaleString()}</span>
              <span className="font-bold text-sm text-yellow">تومان {discountedPrice.toLocaleString()}</span>
            </>
          ) : (
            <span className="font-bold text-sm">{price.toLocaleString()}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
