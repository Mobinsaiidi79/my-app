/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-light": "rgba(148, 138, 103, 0.42)",
        "yellow": "#F0C400"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fonts:{
        "ykanbakh": "ykanbakh",
        "ykanbakhBold": "ykanbakh-Bold",
        "vazir": "vazir",
        "vazirBold": "vazir-Bold",
      }
    },
  },
  plugins: [],
};
