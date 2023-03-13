"use client";
import { useGlobalContext } from "@/app/context/context";
export default function BtnAddToCart({ item }: any) {
  const { dispatch } = useGlobalContext();
  return (
    <button
      onClick={() => dispatch({ type: "INCREMENT", payload: item })}
      className="btn-add-to-cart"
    ></button>
  );
}
// before:bg-green-500 after:bg-red-500
