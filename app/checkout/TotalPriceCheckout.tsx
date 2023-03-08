"use client";
import Link from "next/link";
import { useGlobalContext } from "../context/context";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function TotalPriceCheckout() {
  const { cartState } = useGlobalContext();
  const { totalPrice } = cartState;
  const flooredTotalPrice = totalPrice.toFixed(2);
  const [totalPriceAfterClearingCart, setTotalPriceAfterClearingCart] =
    useState<number>();
  const router = useRouter();
  useEffect(() => {
    setTotalPriceAfterClearingCart(flooredTotalPrice);
  }, []);
  if (totalPriceAfterClearingCart == 0) {
    router.push(`/`);
    return <div></div>;
  }
  return (
    <div className="flex flex-col items-center">
      <p className="mb-8">
        Total price:{" "}
        <strong className="underline">{totalPriceAfterClearingCart}</strong> Nok
      </p>
      <Link
        href={`/`}
        className="inline-block flex justify-center p-2 rounded-md border border-2 border-thirdClr hover:bg-secondary hover:text-primary hover:dark:bg-primary hover:dark:text-secondary duration-300"
      >
        Back to home page
      </Link>
    </div>
  );
}
