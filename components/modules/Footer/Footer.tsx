import React, { useState } from "react";
import BoxIconFooter from "../BoxIconFooter/BoxIconFooter";
import { PiPhoneLight } from "react-icons/pi";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { LuClock5 } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import Image from "next/image";

interface IconType {
  id: number;
  image: string;
  text: string;
}


const Footer:React.FC=()=> {
  const [icons, setIcon] = useState<IconType []>([
    { id: 1, image: "/images/footer-1.png", text: "ضمانت اصالت کالا" },
    { id: 2, image: "/images/footer-2.png", text: "7روز ضمانت بازگشت" },
    { id: 3, image: "/images/footer-3.png", text: "پشتیبانی 24 ساعته" },
    {
      id: 4,
      image: "/images/footer-4.png",
      text: "ارسال سریع به سراسر ایران",
    },
    { id: 5, image: "/images/footer-5.png", text: "ارائه بهترین خدمات" },
  ]);

  return (
    <div className="bg-zinc-800 p-2">
      {/* icons */}
      <div className="w-5/6 md:w-3/4 mt-20 mb-10 md:my-10 mx-auto flex items-center justify-between pb-12 border-b border-white/25">
        {icons.map((icon) => (
          <BoxIconFooter key={icon.id} {...icon} />
        ))}
      </div>

      {/* contact */}
      <div className="my-8 px-6 flex w-full items-center">
        {/* logo */}
        <div className="hidden md:inline">
          <Image
            src="/images/logo.png"
            width={100}
            height={100}
            alt="Logo"
            priority
          />
        </div>

        <div className="flex flex-col gap-y-10 w-4/5 mr-10 md:flex-row md:items-center md:justify-around md:gap-x-10">
          {/* Ways of communication */}
          <div className="text-white flex flex-col items-start justify-center gap-y-4">
            <div className="flex items-center justify-start gap-3">
              <PiPhoneLight />
              <span>09125854944</span>
            </div>
            <div className="flex items-center justify-start gap-3">
              <TbDeviceLandlinePhone />
              <span>021-3266641</span>
            </div>
            <div className="flex items-center justify-start gap-3">
              <LuClock5 />
              <span>همدان,خیابان جمهوری,پاساژ سعیدیه,پلاک 290</span>
            </div>
            <div className="flex items-center justify-start gap-3">
              <CiLocationOn />
              <span>از شنبه تا پنجشنبه از ساعت 10:00 تا 21:00</span>
            </div>
          </div>

          <div className="flex items-center justify-between md:gap-x-48">
            {/* customer services */}
            <div className="text-white flex items-center flex-col gap-y-3">
              <span>خدمات مشتریان</span>
              <p className="text-sm hover:text-yellow cursor-pointer transition-colors">
                درباره ما
              </p>
              <p className="text-sm hover:text-yellow cursor-pointer transition-colors">
                قوانین
              </p>
              <p className="text-sm hover:text-yellow cursor-pointer transition-colors">
                سوالات متداول
              </p>
            </div>

            {/* Useful links */}
            <div className="text-white flex items-center flex-col justify-end gap-y-3">
              <span>لینک های مفید </span>
              <p className="text-sm hover:text-yellow cursor-pointer transition-colors">
                درباره ما
              </p>
              <p className="text-sm hover:text-yellow cursor-pointer transition-colors">
                قوانین
              </p>
              <p className="text-sm hover:text-yellow cursor-pointer transition-colors">
                سوالات متداول
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Ako Sport */}
      <div className="w-full px-6 my-8 grid-cols-1 md:grid-cols-2 relative border-t border-white/25 border-b">
        {/* title */}
        <div className="absolute flex gap-x-2 bg-zinc-800 py-2 px-3 -top-6 right-0">
          <p className="text-white"> درباره</p>
          <p className="text-yellow">آکو اسپرت</p>
        </div>

        {/* content */}
        <div className="flex flex-col md:flex-row my-4 items-center justify-around">
          {/* description */}
          <div className="w-full md:w-1/2 my-4 text-white">
            <p className="text-sm leading-10">
              فروشگاه آکو اسپرت افتخار عرضه حضوری و مجازی محصولات متنوع
              کوهنوردی طبیعت گردی و لوازم آفرود با قیمت بسیار مناسب کیفیت مطلوب
              و فراهم سازی بستری مطمئن جهت خرید آسان و با رضایت و اطمینان خاطر
              کامل مشتریان عزیز این مجموعه را در کارنامه خود دارد.
            </p>
          </div>

          {/* Trust Symbol */}
          <div className="w-1/2 flex items-center gap-x-20 justify-center">
            <Image
              src="/images/TrustSymbol-1.png"
              width={80}
              height={80}
              alt="Trust Symbol 1"
            />
            <Image
              src="/images/TrustSymbol-2.png"
              width={80}
              height={80}
              alt="Trust Symbol 2"
            />
            <Image
              src="/images/TrustSymbol-3.png"
              width={80}
              height={80}
              alt="Trust Symbol 3"
            />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full flex my-8 items-center justify-center">
        <p className="text-white/70 text-center select-none">
          تمامی حقوق برای Ako Sport محفوظ است.
        </p>
      </div>
    </div>
  );
}


export default Footer