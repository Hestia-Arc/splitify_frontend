/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': {'min': '0px', 'max': '480px'},  
        'md': {"max": '750px'},  
        'lg': {'min': '480px', 'max': '880px'}, 
         '2xl':{"max": '880px'},
      },
      colors: {
        "primary-50": "#ffe4f7",
        "primary-100": " #B70569",

       
      }
    },
  },
  plugins: [],
}