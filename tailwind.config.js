/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  // darkMode: "media",
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
      backgroundColor: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        thirdClr: "var(--thirdClr)",
      },
      textColor: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        thirdClr: "var(--thirdClr)",
      },
      borderColor: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        thirdClr: "var(--thirdClr)",
      },
    },
  },
  plugins: [],
};
