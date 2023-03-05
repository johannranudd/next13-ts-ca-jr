"use client";
import { useGlobalContext } from "../context/context";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import Image from "next/image";
import { IDataObject } from "@/types/types";
import Discounted from "./Discounted";
import { useEffect, useState } from "react";
import { getNumberOfProductsInCart, getUniqueItems } from "../utils/generic";

export default function CartList() {
  const { cartState } = useGlobalContext();
  const { products } = cartState;
  const [uniqueCart, setUniqueCart] = useState(Array<IDataObject>);

  useEffect(() => {
    const uniqueArray = getUniqueItems(products);
    const numberedArray = getNumberOfProductsInCart(uniqueArray, products);
    setUniqueCart(numberedArray);
  }, [products]);

  return (
    <ul className="py-4 w-[90%] mx-auto max-w-[400px] sm:max-w-[600px]">
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
              <div className="flex flex-col justify-between sm:space-y-20 ml-36">
                <button>
                  <BsChevronUp />
                </button>
                <button>
                  <BsChevronDown />
                </button>
              </div>
              <div className="flex flex-col justify-end sm:min-w-[200px]">
                <h4>
                  Title: <strong>{title}</strong>
                </h4>
                <p>Amount in cart: {amountInCart}</p>
                <Discounted {...product} />
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

// function getUniqueItems(products: Array<IDataObject>): Array<IDataObject> {
//   let newArr: Array<IDataObject> = [];
//   products.sort((a, b): any => {
//     if (a.id !== b.id) {
//       newArr.push(a);
//     } else {
//       return;
//     }
//   });
//   return newArr;
// }
