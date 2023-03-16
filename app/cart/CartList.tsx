"use client";
import { useGlobalContext } from "../context/context";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import Image from "next/image";
import { IDataObject } from "@/types/types";
import PriceComponent from "./PriceComponent";
import { useEffect, useState } from "react";
import { getUniqueNumberedSortedCart } from "../utils/generic";
import Link from "next/link";
import placeholderImage from "../../images/placeholder-image.png";

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
        <h1 className="text-[1.8rem] py-8">No items in cart</h1>
        <Link
          href={`/`}
          className="p-2 rounded-md border border-2 border-thirdClrDark dark:border-thirdClr hover:bg-secondary hover:text-primary hover:dark:bg-primary hover:dark:text-secondary duration-300"
        >
          Back to home page
        </Link>
      </div>
    );
  }

  return (
    <>
      <h1 className="text-[1.8rem] py-8">Cart</h1>
      <ul className="w-[95%] max-w-[280px] mx-auto sm:max-w-[650px]">
        {uniqueCart?.map((product: IDataObject) => {
          const { id, title, imageUrl } = product;

          return (
            <li key={id} className="py-6 sm:flex">
              <div className="relative w-full h-48 mb-3 sm:m-0 sm:w-64 shadow-#5">
                <Link href={`/products/${id}`}>
                  <Image
                    src={imageUrl ?? placeholderImage}
                    alt={`image of ${title}`}
                    fill={true}
                    className="object-cover"
                  />
                  <div className="absolute opacity-0 hover:opacity-70 bg-black w-full h-full flex justify-center items-center duration-300">
                    <p className="text-primary">View Porduct</p>
                  </div>
                </Link>
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
      <div className="my-8 w-[95%] max-w-[280px] mx-auto flex justify-center sm:max-w-[300px]">
        <button
          onClick={() => dispatch({ type: "CLEAR_CART" })}
          className="p-2 w-full rounded-md border border-2 border-red-300 hover:bg-red-300 hover:text-primary"
        >
          Clear cart
        </button>
      </div>
    </>
  );
}
