"use client";
// import Link from "next/link";
import { useGlobalContext } from "../context/context";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TotalCheckout() {
  const { cartState } = useGlobalContext();
  const { totalPrice } = cartState;
  const flooredTotalPrice = totalPrice.toFixed(2);
  const [creditCard, setCreditCard] = useState<number>();
  const router = useRouter();

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (creditCard?.toString().length === 4) {
      router.push(`/checkout`);
    }
  }

  if (cartState.products.length === 0) return <div></div>;

  return (
    <div className="py-4 w-[90%] mx-auto max-w-[400px] sm:max-w-[300px]">
      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="flex justify-between mb-6">
          <p>Total Price:&nbsp; </p>
          <div>
            <strong className="underline">{flooredTotalPrice}</strong>
            <p className="inline"> Nok</p>
          </div>
        </div>
        <label htmlFor="cc">Fake credit card number:</label>
        <input
          type="number"
          name="cc"
          id="cc"
          value={creditCard}
          onChange={(e) => setCreditCard(parseInt(e.target.value))}
          placeholder="Input fake credit card number: 4 digits"
          className="w-full p-2 border rounded-md"
        />
        <button
          type="submit"
          className="inline-block flex justify-center p-2 w-full rounded-md border border-black hover:bg-black hover:text-white dark:bg-white dark:text-black dark:hover:text-white dark:hover:bg-black dark:hover:border-white duration-300"
        >
          Checkout
        </button>
      </form>
    </div>
  );
}
