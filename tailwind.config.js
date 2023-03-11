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
        fourthClr: "var(--fourthClr)",
      },
      backgroundColor: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        thirdClr: "var(--thirdClr)",
        fourthClr: "var(--fourthClr)",
      },
      textColor: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        thirdClr: "var(--thirdClr)",
        fourthClr: "var(--fourthClr)",
      },
      borderColor: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        thirdClr: "var(--thirdClr)",
        fourthClr: "var(--fourthClr)",
      },
    },
  },
  plugins: [],
};
