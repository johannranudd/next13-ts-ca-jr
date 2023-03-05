"use client";
import { useGlobalContext } from "../context/context";

export default function TotalCheckout() {
  const { cartState } = useGlobalContext();
  const { totalPrice } = cartState;
  const flooredPrice = totalPrice.toFixed(2);

  return <div>{flooredPrice}</div>;
}
