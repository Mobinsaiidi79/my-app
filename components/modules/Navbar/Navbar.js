import Link from "next/link";
import React, { useState } from "react";
import { HiOutlineArrowDownTray } from "react-icons/hi2";
import { FaShoppingCart } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative">
      {/* Header Section */}
      <div className="w-full bg-gray-light h-10"></div>

      {/* Navbar desktop */}
      <div className="hidden md:flex md:w-full md:items-center md:justify-between bg-white px-12 py-3">
        {/* Logo and Menu Section */}
        <div className="flex md:gap-x-10 lg:gap-x-14 items-center">
          {/* Logo */}
          <div>
            <Link href="/">
              <img
                src="./images/logo.png"
                className="w-10.5 h-14 cursor-pointer"
                alt="Logo"
              />
            </Link>
          </div>

          {/* Menu Items */}
          <div>
            <ul className="flex items-center gap-x-5 text-md font-bold text-black/80">
              <li>
                <Link href="/">صفحه اصلی</Link>
              </li>
              <li>
                <Link href="/products">محصولات</Link>
              </li>
              <li>
                <Link href="/">فروش ویژه</Link>
              </li>
              <li>
                <Link href="/">درباره ما</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Login/Register and Shopping Basket */}
        <div className="flex items-center gap-x-10">
          {/* Login & Register */}
          <div className="flex justify-center items-center cursor-pointer border p-2.5 border-yellow hover:bg-yellow transition-colors rounded">
            <Link
              href="/login"
              className="flex items-center gap-x-2 text-sm font-bold text-black/80"
            >
              <HiOutlineArrowDownTray className="-rotate-90 w-6 h-6" />
              <span className="flex items-center">ورود / ثبت نام</span>
            </Link>
          </div>

          {/* Shopping Basket */}
          <div className="relative inline-block">
            <Link href="/shopBasket">
              <FaShoppingCart className="w-8 h-8 text-gray-800" />
              <span className="absolute -top-3 right-0 bg-yellow text-white rounded-full px-2 py-1 text-xs font-bold">
                3
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Navbar mobile */}
      <div className="md:hidden bg-white px-12 py-3 flex items-center justify-between">
        <div>
          <Link href="/">
            <img
              src="./images/logo.png"
              className="w-10.5 h-14 cursor-pointer"
              alt="Logo"
            />
          </Link>
        </div>
        <TiThMenu
          className="w-10 h-10 cursor-pointer"
          onClick={toggleMobileMenu}
        />
        
      </div>
     

      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-1/2 h-full bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out">
          <div className="flex justify-between items-center p-4 border-b">
            <span className="text-lg font-bold">منو</span>
            {/* <span className="text-lg font-bold text-yellow">آکو اسپورت</span> */}
            <span className="text-lg font-bold text-yellow">Ako Sport</span>
            <AiOutlineClose
              className="w-6 h-6 hover:text-yellow transition-all cursor-pointer"
              onClick={toggleMobileMenu}
            />
          </div>
          <ul className="flex flex-col items-center gap-y-5 text-md font-bold text-black/80 mt-5">
            <li>
              <Link
                href="/"
                onClick={toggleMobileMenu}
                className="hover:text-yellow transition-all"
              >
                صفحه اصلی
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                onClick={toggleMobileMenu}
                className="hover:text-yellow transition-all"
              >
                محصولات
              </Link>
            </li>
            <li>
              <Link
                href="/"
                onClick={toggleMobileMenu}
                className="hover:text-yellow transition-all"
              >
                فروش ویژه
              </Link>
            </li>
            <li>
              <Link
                href="/"
                onClick={toggleMobileMenu}
                className="hover:text-yellow transition-all"
              >
                درباره ما
              </Link>
            </li>
          </ul>

           {/* Login/Register and Shopping Basket */}
        <div className="flex flex-col my-5 border-t pt-4 items-center justify-center gap-y-8">
          {/* Login & Register */}
          <div className="flex justify-center items-center cursor-pointer border p-2 border-yellow hover:bg-yellow transition-colors rounded">
            <Link
              href="/"
              className="flex items-center gap-x-2 text-sm font-bold text-black/80"
            >
              <HiOutlineArrowDownTray className="-rotate-90 w-4 h-4" />
              <span className="flex items-center text-xs">ورود / ثبت نام</span>
            </Link>
          </div>

          {/* Shopping Basket */}
          <div className="relative inline-block">
            <Link href="/">
              <FaShoppingCart className="w-8 h-8 text-gray-800" />
              <span className="absolute -top-3 right-0 bg-yellow text-white rounded-full px-2 py-1 text-xs font-bold">
                3
              </span>
            </Link>
          </div>
        </div>
        </div>
      )}
    </div>
  );
}
