import React, { useState } from "react";

export default function LoginPage() {
  const [login, setLogin] = useState(true);

  return (
    <div className="bg-white w-full h-screen">
      {login ? (
        // Login Section
        <div className="w-full flex h-screen items-center justify-center">
          <div className="w-1/2 p-10">
            <div className="w-full border-r-4 border-yellow">
              <h2 className="text-2xl font-bold text-right mt-10 mx-4">
                ورود حساب کاربری
              </h2>
            </div>
            <div className="w-full">
              <input
                type="number"
                placeholder="موبایل"
                className="w-full border-2 border-gray-300 rounded-lg p-2 mt-5"
              />
              <input
                type="password"
                placeholder="رمز عبور"
                className="w-full border-2 border-gray-300 rounded-lg p-2 mt-5"
              />
              <button type="button" className="text-yellow mt-3">
                فراموشی رمز عبور
              </button>
            </div>

            <div className="mt-5">
              <button
                type="button"
                className="bg-yellow text-white text-center py-2 px-4 rounded"
              >
                ورود
              </button>
            </div>

            <div className="mt-3">
              من هنوز ثبت نام نکرده‌ام؟
              <button
                type="button"
                className="text-yellow cursor-pointer ml-2"
                onClick={() => setLogin(false)}
              >
                صفحه ثبت‌نام
              </button>
            </div>
          </div>
          <div className="w-1/2 flex justify-center">
            <img src="./images/login.png" alt="login" className="w-2/3" />
          </div>
        </div>
      ) : (
        // Create Account Section
        <div className="flex items-center justify-center">
          <div className="w-1/2 p-10">
            <div className="w-full border-r-4 border-yellow">
              <h2 className="text-2xl font-bold text-right mt-10 mx-4">
                ایجاد حساب کاربری
              </h2>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-x-3">
                <input
                  type="text"
                  placeholder="نام"
                  className="w-1/2 border-2 border-gray-300 rounded-lg p-2 mt-5"
                />
                <input
                  type="text"
                  placeholder="نام خانوادگی"
                  className="w-1/2 border-2 border-gray-300 rounded-lg p-2 mt-5"
                />
              </div>
              <input
                type="number"
                placeholder="موبایل"
                className="w-full border-2 border-gray-300 rounded-lg p-2 mt-5"
              />
              <input
                type="password"
                placeholder="رمز عبور"
                className="w-full border-2 border-gray-300 rounded-lg p-2 mt-5"
              />
              <input
                type="password"
                placeholder="تایید رمز عبور"
                className="w-full border-2 border-gray-300 rounded-lg p-2 mt-5"
              />
            </div>
            <div className="my-5 flex items-center gap-x-2">
              <input type="checkbox" />
              <label className="text-blue-700">پذیرفتن حریم خصوصی</label>
            </div>

            <div className="my-5 w-full flex justify-center">
              <button
                type="button"
                className="bg-yellow text-white text-center p-4 w-full rounded"
              >
                ثبت‌نام
              </button>
            </div>

            <div>
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
          <div className="w-1/2 flex justify-center">
            <img src="./images/login.png" alt="login" className="w-2/3" />
          </div>
        </div>
      )}
    </div>
  );
}
