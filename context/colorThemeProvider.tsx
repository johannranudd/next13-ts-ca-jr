"use client";
import React from "react";
import { ThemeProvider } from "next-themes";

const ColorThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  );
};

export default ColorThemeProvider;
