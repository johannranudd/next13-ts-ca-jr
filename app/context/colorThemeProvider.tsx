"use client";
import { ThemeProvider } from "next-themes";
import Script from "next/script";
import { useEffect, useState } from "react";

const ColorThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  );
};

export default ColorThemeProvider;

// enableSystem={true} attribute="class"
