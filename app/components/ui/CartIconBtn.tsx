"use client";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useGlobalContext } from "@/app/context/context";
import Link from "next/link";

export default function CartIconBtn() {
  const { cartState } = useGlobalContext();

  return (
    <Link href={`/cart`} className="relative">
      <div className="absolute bottom-0 -right-[5px] flex justify-center items-center bg-fourthClr dark:bg-thirdClr h-[18px] w-[18px] rounded-full">
        {cartState.products.length}
      </div>
      <AiOutlineShoppingCart className="text-[2rem]" />
    </Link>
  );
}
