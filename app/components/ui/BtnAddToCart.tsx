"use client";
import { useGlobalContext } from "@/app/context/context";
import { IDataObject } from "@/types/types";
export default function BtnAddToCart(item: IDataObject) {
  const { dispatch } = useGlobalContext();
  return (
    <button
      onClick={() => dispatch({ type: "INCREMENT", payload: item })}
      className="btn-add-to-cart"
    ></button>
  );
}
