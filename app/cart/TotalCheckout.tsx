"use client";
import { useGlobalContext } from "../context/context";

export default function TotalCheckout() {
  const { cartState } = useGlobalContext();
  const { totalPrice } = cartState;
  const flooredTotalPrice = totalPrice.toFixed(2);

  return <div>{flooredTotalPrice}</div>;
}
