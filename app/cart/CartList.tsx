"use client";
import { useGlobalContext } from "../context/context";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import Image from "next/image";
import { IDataObject } from "@/types/types";
import Discounted from "./Discounted";

export default function CartList() {
  const { cartState } = useGlobalContext();
  const { products } = cartState;
  return (
    <ul className="py-4 w-[90%] mx-auto max-w-[400px] sm:max-w-[600px]">
      {products?.map((product: IDataObject) => {
        const { id, title, price, discountedPrice, imageUrl } = product;
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
            {/* flex flex-row-reverse justify-between sm:w-full sm:h-full sm:flex-row sm:bg-red-500 */}
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
                <Discounted {...product} />
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
