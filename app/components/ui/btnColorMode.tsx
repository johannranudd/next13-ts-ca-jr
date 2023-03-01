"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const BtnColorMode = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="grid place-items-center m-auto border border-2 border-purple-600 p-2 w-10 h-10">
      {currentTheme === "dark" ? (
        <button
          onClick={() => setTheme("light")}
          className="flex justify-center alight-center"
        >
          <BsFillSunFill />
        </button>
      ) : (
        <button
          onClick={() => setTheme("dark")}
          className="flex justify-center alight-center"
        >
          <BsFillMoonFill />
        </button>
      )}
    </div>
  );
};

export default BtnColorMode;
