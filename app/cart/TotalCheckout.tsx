"use client";
import { useGlobalContext } from "../context/context";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function TotalCheckout() {
  const { cartState } = useGlobalContext();
  const { totalPrice } = cartState;
  const flooredTotalPrice = totalPrice.toFixed(2);
  const router = useRouter();
  const ccInputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (ccInputRef.current && ccInputRef.current.previousElementSibling) {
      if (ccInputRef.current.value.length === 4) {
        router.push(`/checkout`);
      } else {
        ccInputRef.current.style.border = "1px solid red";
        ccInputRef.current.previousElementSibling.innerHTML =
          "Fake credit card number must be 4 digits";
      }
    }
  }

  if (cartState.products.length === 0) return <div></div>;

  return (
    <div className="py-4 w-[95%] mx-auto max-w-[400px] sm:max-w-[300px]">
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
          ref={ccInputRef}
          placeholder="Input fake credit card number: 4 digits"
          className="w-full p-2 border border-black rounded-md"
        />
        <button
          type="submit"
          className="inline-block flex justify-center w-full p-2 rounded-md border border-2 border-thirdClr hover:bg-secondary hover:text-primary hover:dark:bg-primary hover:dark:text-secondary duration-300"
        >
          Checkout
        </button>
      </form>
    </div>
  );
}
