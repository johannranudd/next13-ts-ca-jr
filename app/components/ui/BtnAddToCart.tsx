"use client";

import { useGlobalContext } from "@/app/context/context";
// import { IDataObject } from "@/types/types";
export default function BtnAddToCart({ item }: any) {
  const { cartState, dispatch } = useGlobalContext();
  return (
    <button onClick={() => dispatch({ type: "ADD", payload: item })}>
      Add to cart
    </button>
  );
}
// { id }: { id: string },
