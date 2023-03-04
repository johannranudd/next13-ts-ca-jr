"use client";
import { ThemeProvider } from "next-themes";
import Script from "next/script";

const ColorThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  );
};

export default ColorThemeProvider;

// enableSystem={true} attribute="class"
