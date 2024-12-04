import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { HiOutlineArrowDownTray } from "react-icons/hi2";
import { FaShoppingCart } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const links = [
    { href: "/", label: "صفحه اصلی" },
    { href: "/products", label: "محصولات" },
    { href: "/", label: "فروش ویژه" },
    { href: "/", label: "درباره ما" },
  ];

  return (
    <div className="relative">
      {/* Header Section */}
      <div className="w-full bg-gray-light h-10"></div>

      {/* Navbar desktop */}
      <div className="hidden md:flex md:w-full shadow-md md:items-center md:justify-between bg-white px-12 py-3">
        <div className="flex md:gap-x-10 lg:gap-x-14 items-center">
          <Link href="/">
            <Image src="/images/logo.png" width={42} height={56} alt="Logo" />
          </Link>
          <ul className="flex items-center gap-x-5 text-md font-bold text-black/80">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-x-10">
          <Link
            href="/login"
            className="flex items-center gap-x-2 text-sm font-bold text-black/80 border p-2.5 border-yellow hover:bg-yellow transition-colors rounded"
          >
            <HiOutlineArrowDownTray className="-rotate-90 w-6 h-6" />
            ورود / ثبت نام
          </Link>
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
        <Link href="/">
          <Image src="/images/logo.png" width={42} height={56} alt="Logo" />
        </Link>
        <TiThMenu
          className="w-10 h-10 cursor-pointer"
          onClick={toggleMobileMenu}
        />
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-1/2 h-full bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out">
          <div className="flex justify-between items-center p-4 border-b">
            <span className="text-lg font-bold">منو</span>
            <AiOutlineClose
              className="w-6 h-6 hover:text-yellow transition-all cursor-pointer"
              onClick={toggleMobileMenu}
            />
          </div>
          <ul className="flex flex-col items-center gap-y-5 text-md font-bold text-black/80 mt-5">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={toggleMobileMenu}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex justify-center flex-col items-center mt-12 gap-y-10">
            <Link
              href="/login"
              className="flex items-center gap-x-2 text-sm font-bold text-black/80 border p-2.5 border-yellow hover:bg-yellow transition-colors rounded"
            >
              <HiOutlineArrowDownTray className="-rotate-90 w-6 h-6" />
              ورود / ثبت نام
            </Link>
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
      )}
    </div>
  );
};

export default Navbar;
