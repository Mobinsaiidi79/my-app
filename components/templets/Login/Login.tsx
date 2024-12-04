import React, { useState } from "react";
import Image from "next/image"; 

export default function LoginPage() {
  const [login, setLogin] = useState<boolean>(true); // تایپ‌دهی دقیق‌تر برای login

  return (
    <div className="bg-white w-full flex items-center justify-center p-4">
      {login ? (
        // Login Section
        <div className="h-screen items-center flex flex-col lg:flex-row w-full md:h-3/4 items-center justify-between">
          {/* Form Section */}
          <div className="w-full md:w-1/2 py-6 px-9 bg-gray-50 md:mt-10 rounded-lg shadow-lg">
            <div className="border-r-4 border-yellow">
              <h2 className="text-2xl font-bold text-right mt-4 mx-4">
                ورود حساب کاربری
              </h2>
            </div>
            <div className="w-full mt-4">
              <input
                type="number"
                placeholder="موبایل"
                className="w-full border-2 border-gray-300 rounded-lg p-3 mt-4"
              />
              <input
                type="password"
                placeholder="رمز عبور"
                className="w-full border-2 border-gray-300 rounded-lg p-3 mt-4"
              />
              <button type="button" className="text-yellow mt-3">
                فراموشی رمز عبور
              </button>
            </div>

            <div className="mt-5">
              <button
                type="button"
                className="bg-yellow text-white text-center w-full py-3 px-4 rounded"
              >
                ورود
              </button>
            </div>

            <div className="mt-3 text-center">
              من هنوز ثبت نام نکرده‌ام؟
              <button
                type="button"
                className="text-yellow cursor-pointer ml-2"
                onClick={() => setLogin(false)}
              >
                صفحه ثبت‌ نام
              </button>
            </div>
          </div>
          {/* Image Section */}
          <div className="w-full md:w-1/2 hidden md:flex justify-center mt-6 md:mt-0">
            <Image
              src="/images/login.png" // استفاده از مسیر صحیح و بهینه تصویر
              alt="login"
              width={500} // تنظیم عرض مناسب
              height={300} // تنظیم ارتفاع مناسب
              className="w-full md:w-2/3 object-contain"
            />
          </div>
        </div>
      ) : (
        // Create Account Section
        <div className="h-screen items-center flex flex-col md:flex-row w-full md:h-3/4 items-center justify-between">
          {/* Form Section */}
          <div className="w-full md:w-1/2 py-6 px-9 bg-gray-50 rounded-lg shadow-lg">
            <div className="border-r-4 border-yellow">
              <h2 className="text-2xl font-bold text-right mt-4 mx-4">
                ایجاد حساب کاربری
              </h2>
            </div>
            <div className="flex flex-col mt-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="نام"
                  className="w-full md:w-1/2 border-2 border-gray-300 rounded-lg p-3"
                />
                <input
                  type="text"
                  placeholder="نام خانوادگی"
                  className="w-full md:w-1/2 border-2 border-gray-300 rounded-lg p-3"
                />
              </div>
              <input
                type="number"
                placeholder="موبایل"
                className="w-full border-2 border-gray-300 rounded-lg p-3 mt-4"
              />
              <input
                type="password"
                placeholder="رمز عبور"
                className="w-full border-2 border-gray-300 rounded-lg p-3 mt-4"
              />
              <input
                type="password"
                placeholder="تایید رمز عبور"
                className="w-full border-2 border-gray-300 rounded-lg p-3 mt-4"
              />
            </div>
            <div className="my-5 flex items-center gap-x-2">
              <input type="checkbox" />
              <label className="text-blue-700">پذیرفتن حریم خصوصی</label>
            </div>

            <div className="my-5 w-full">
              <button
                type="button"
                className="bg-yellow text-white text-center py-3 px-4 w-full rounded"
              >
                ثبت‌نام
              </button>
            </div>

            <div className="text-center">
              من قبلاً ثبت‌نام کرده‌ام؟
              <button
                type="button"
                className="text-yellow cursor-pointer ml-2"
                onClick={() => setLogin(true)}
              >
                صفحه ورود
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 hidden md:flex justify-center mt-6 md:mt-0">
            <Image
              src="/images/login.png"
              alt="login"
              width={500}
              height={300}
              className="w-full md:w-2/3 object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
