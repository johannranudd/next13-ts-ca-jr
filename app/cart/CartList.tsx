"use client";
import { useGlobalContext } from "../context/context";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import Image from "next/image";
import { IDataObject } from "@/types/types";
import PriceComponent from "./PriceComponent";
import { useEffect, useState } from "react";
import { getUniqueNumberedSortedCart } from "../utils/generic";
import Link from "next/link";

export default function CartList() {
  const { cartState, dispatch } = useGlobalContext();
  const { products } = cartState;
  const [uniqueCart, setUniqueCart] = useState(Array<IDataObject>);

  useEffect(() => {
    const getFinalCart = getUniqueNumberedSortedCart(products);
    setUniqueCart(getFinalCart);
  }, [products]);

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center">
        <h1>No items in cart</h1>
        <Link
          href={`/`}
          className="p-2 rounded-md border border-2 border-thirdClr hover:bg-secondary hover:text-primary hover:dark:bg-primary hover:dark:text-secondary duration-300"
        >
          Back to home page
        </Link>
      </div>
    );
  }

  return (
    <>
      <h1>Cart</h1>
      <ul className="py-4 mb-16 w-[95%] mx-auto max-w-[400px] sm:max-w-[650px]">
        {uniqueCart?.map((product: IDataObject) => {
          const { id, title, price, discountedPrice, imageUrl, amountInCart } =
            product;

          return (
            <li key={id} className="py-4 sm:flex ">
              <div className="relative w-full h-48 sm:w-64">
                <Image
                  src={imageUrl}
                  alt={`image of ${title}`}
                  fill={true}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-row-reverse justify-between sm:w-full sm:flex-row sm:items-end">
                <div className="flex flex-col justify-between sm:space-y-20 sm:ml-[29%]">
                  <button
                    onClick={() =>
                      dispatch({ type: "INCREMENT", payload: product })
                    }
                    className="text-xl hover:scale-150 active:scale-100 duration-100 text-thirdClrDark dark:text-thirdClr"
                  >
                    <BsChevronUp />
                  </button>
                  <button
                    onClick={() =>
                      dispatch({ type: "DECREMENT", payload: product })
                    }
                    className="text-xl hover:scale-150 active:scale-100 duration-100 text-thirdClrDark dark:text-thirdClr"
                  >
                    <BsChevronDown />
                  </button>
                </div>
                <PriceComponent {...product} />
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
