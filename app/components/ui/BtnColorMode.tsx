"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import CartIconBtn from "./CartIconBtn";

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
    <div className="flex justify-evenly items-center">
      <div className="text-[1.7rem]">
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
      <CartIconBtn />
    </div>
  );
};

export default BtnColorMode;
// grid place-items-center m-auto border border-2 border-purple-600 p-2 w-10 h-10
