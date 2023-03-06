"use client";
import { useGlobalContext } from "../context/context";
import { useState, useEffect } from "react";
import { getUniqueNumberedSortedCart } from "../utils/generic";
import { IDataObject } from "@/types/types";
import Image from "next/image";

export default function ListOfPurchases() {
  const { cartState, dispatch } = useGlobalContext();
  const { totalPrice, products } = cartState;
  const [havePurchased, setHavePurchased] = useState(Array<IDataObject>);
  useEffect(() => {
    const getFinalCart = getUniqueNumberedSortedCart(products);
    setHavePurchased(getFinalCart);
  }, []);

  useEffect(() => {
    if (document.readyState === "complete") {
      dispatch({ type: "CLEAR_CART" });
    }
  }, [document.readyState]);

  if (havePurchased.length === 0) return <div></div>;

  return (
    <>
      <h1 className="text-center">Success!</h1>
      <p className="text-center">Thank you for your purchase:</p>
      <ul className="py-4 mb-8 w-[90%] mx-auto max-w-[400px]">
        {havePurchased?.map((product: IDataObject) => {
          const { id, title, price, discountedPrice, imageUrl, amountInCart } =
            product;
          return (
            <li key={id} className="flex items-center justify-between">
              <div className="relative w-full h-20 sm:w-20">
                <Image
                  src={imageUrl}
                  alt={`image of ${title}`}
                  fill={true}
                  className="object-cover"
                />
              </div>
              <p>
                <strong>{title}</strong> x <strong>{amountInCart}</strong>
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
