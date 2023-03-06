"use client";
import Link from "next/link";
import { useGlobalContext } from "../context/context";

export default function TotalCheckout() {
  const { cartState } = useGlobalContext();
  const { totalPrice } = cartState;
  const flooredTotalPrice = totalPrice.toFixed(2);

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
  }

  if (cartState.products.length === 0) return <div></div>;

  return (
    <div className="py-4 w-[90%] mx-auto max-w-[400px] sm:max-w-[300px]">
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between mb-6">
          <p>Total Price:&nbsp; </p>
          <div>
            <strong className="underline">{flooredTotalPrice}</strong>
            <p className="inline"> Nok</p>
          </div>
        </div>

        <Link
          href={`/checkout`}
          className="inline-block flex justify-center p-2 w-full rounded-md border border-black hover:bg-black hover:text-white dark:bg-white dark:text-black dark:hover:text-white dark:hover:bg-black dark:hover:border-white duration-300"
        >
          Checkout
        </Link>
      </form>
    </div>
  );
}
