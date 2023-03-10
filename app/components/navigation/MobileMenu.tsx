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
      className={`absolute w-full -z-50 flex flex-col bg-secondary text-primary dark:bg-primary dark:text-secondary border-2 rounded-b-md border-fourthClr dark:border-thirdClr duration-300 ${
        menuIsOpen ? "top-16" : "-top-[300%]"
      }`}
    >
      <Link
        href={"/"}
        className="inline-block p-4 hover:shadow-[inset_0_-0px_10px_rgba(0,0,0,0.6)] hover:pl-8 duration-300"
      >
        Home
      </Link>
      <Link
        href={"/cart"}
        className="inline-block p-4 hover:shadow-[inset_0_-0px_10px_rgba(0,0,0,0.6)] hover:pl-8 duration-300"
      >
        Cart
      </Link>
      <Link
        href={"/contact"}
        className="inline-block p-4 hover:shadow-[inset_0_-0px_10px_rgba(0,0,0,0.6)] hover:pl-8 duration-300"
      >
        Contact
      </Link>
    </div>
  );
}

// hover:shadow-[inset_0_-0px_10px_rgba(0,0,0,0.6)]
