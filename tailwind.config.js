/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "san-serif"],
        lato: ["Lato", "san-serif"],
      },
      screens: {
        sm: "768px",
        md: "1024px",
        lg: "1300px",
        xl: "1400px"
        // 'sm': {'min': '0px', 'max': '480px'},
        // 'md': {"max": '750px'},
        // 'lg': {'min': '480px', 'max': '880px'},
        //  '2xl':{"max": '880px'},
      },
      colors: {
        "primary-10": "#f0cee1",
        "primary-50": "#ffe4f7",
        "primary-100": "#B70569",
        "cool-white-100": "#f8f7f7",
      },
      fontSize: {
        title: [
          "80px",
          { lineHeight: "84px", letterSpacing: "-3px", fontWeight: 500 },
        ],

        subTitle: [
          "28px",
          { lineHeight: "40px", letterSpacing: "0.5px", fontWeight: 500 },
        ],
        mdText: [
          "54px",
          { lineHeight: "58px", letterSpacing: "-1px", fontWeight: 500 },
        ],
        // h4: [
        //   "40px",
        //   { lineHeight: "44px", letterSpacing: "-0-4px", fontWeight: 500 },
        // ],
        // h5: [
        //   "32px",
        //   { lineHeight: "38px", letterSpacing: "0px", fontWeight: 500 },
        // ],
      }
    },
  },
  plugins: [],
};
