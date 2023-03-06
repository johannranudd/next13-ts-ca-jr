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
          className="p-2 rounded-md border border-black hover:bg-black hover:text-white dark:bg-white dark:text-black dark:hover:text-white dark:hover:bg-black dark:hover:border-white duration-300"
        >
          Back to home page
        </Link>
      </div>
    );
  }

  return (
    <ul className="py-4 mb-16 w-[90%] mx-auto max-w-[400px] sm:max-w-[600px]">
      {uniqueCart?.map((product: IDataObject) => {
        const { id, title, price, discountedPrice, imageUrl, amountInCart } =
          product;

        return (
          <li key={id} className="py-4 sm:flex sm:justify-between sm:items-end">
            <div className="relative w-full h-48 sm:w-48">
              <Image
                src={imageUrl}
                alt={`image of ${title}`}
                fill={true}
                className="object-cover"
              />
            </div>
            <div className="flex flex-row-reverse justify-between sm:w-full sm:flex-row">
              <div className="flex flex-col justify-between sm:space-y-20 sm:ml-36">
                <button
                  onClick={() =>
                    dispatch({ type: "INCREMENT", payload: product })
                  }
                >
                  <BsChevronUp />
                </button>
                <button
                  onClick={() =>
                    dispatch({ type: "DECREMENT", payload: product })
                  }
                >
                  <BsChevronDown />
                </button>
              </div>
              <div className="flex flex-col justify-end sm:min-w-[200px]">
                <h4>
                  Title: <strong>{title}</strong>
                </h4>
                <PriceComponent {...product} />
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
