"use client";
import React from "react";
import { useGlobalContext } from "@/context/context";

export default function MenuIcon() {
  const { menuIsOpen, setMenuIsOpen } = useGlobalContext();

  function handleClick() {
    if (!menuIsOpen) {
      setMenuIsOpen(!menuIsOpen);
    } else {
      setMenuIsOpen(!menuIsOpen);
    }
  }

  return (
    <div
      onClick={handleClick}
      className="ml-auto cursor-pointer pr-4 space-y-1.5 md:hidden"
    >
      <div
        className={`w-8 h-[3px] bg-black duration-300 rounded-md dark:bg-white ${
          menuIsOpen && "rotate-45 translate-y-[9px]"
        }`}
      ></div>
      <div
        className={`w-8 h-[3px]  duration-300 rounded-md bg-black ${
          menuIsOpen ? "bg-transparent" : "dark:bg-white"
        }`}
      ></div>
      <div
        className={`w-8 h-[3px] bg-black duration-300 rounded-md dark:bg-white ${
          menuIsOpen && "-rotate-45 translate-y-[-9px]"
        }`}
      ></div>
    </div>
  );
}
