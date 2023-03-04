"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useGlobalContext } from "@/app/context/context";

export default function MobileMenu() {
  const { menuIsOpen, setMenuIsOpen } = useGlobalContext();

  function handleResize() {
    if (window.innerWidth > 768) {
      setMenuIsOpen(false);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      onClick={() => setMenuIsOpen(false)}
      className={`absolute w-screen z-40 flex flex-col bg-red-500 duration-300 ${
        menuIsOpen ? "top-16" : "-top-16"
      }`}
    >
      <Link href={"/"}>Home</Link>
      <Link href={"/cart"}>Cart</Link>
      <Link href={"/checkout"}>Checkout</Link>
    </div>
  );
}
