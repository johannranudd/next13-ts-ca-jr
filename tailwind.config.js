/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxs: "400px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        thirdClr: "var(--thirdClr)",
        thirdClrDark: "var(--thirdClrDark)",
        fourthClr: "var(--fourthClr)",
        fourthClrDark: "var(--fourthClrDark)",
      },
      boxShadow: {
        "#3": "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        "#5": "rgba(0, 0, 0, 0.7) 0px 3px 8px",
        "#6": "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        // "#5-white": "rgba(255, 255, 255, 0.3) 0px 3px 8px",
      },
    },
  },
  plugins: [],
};
