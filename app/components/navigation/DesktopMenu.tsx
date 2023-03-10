import React from "react";
import Link from "next/link";
export default function DesktopMenu() {
  return (
    <div className="hidden md:inline md:space-x-2 md:ml-auto md:pr-4 md:flex md:items-center">
      <Link href={"/"} className="group flex flex-col w-[70px]">
        Home
        <span className="h-[2px] w-0 group-hover:w-full duration-300 bg-fourthClr dark:bg-thirdClr"></span>
      </Link>
      <Link href={"/cart"} className="group flex flex-col w-[70px]">
        Cart
        <span className="h-[2px] w-0 group-hover:w-full duration-300 bg-fourthClr dark:bg-thirdClr"></span>
      </Link>
      <Link href={"/contact"} className="group flex flex-col w-[70px]">
        Contact
        <span className="h-[2px] w-0 group-hover:w-full duration-300 bg-fourthClr dark:bg-thirdClr"></span>
      </Link>
    </div>
  );
}
