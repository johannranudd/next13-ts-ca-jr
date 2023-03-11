"use client";
import Link from "next/link";
import Image from "next/image";
import { IDataObject } from "@/types/types";
import BtnAddToCart from "../ui/BtnAddToCart";
import { useEffect, useState } from "react";
import { useGlobalContext } from "@/app/context/context";

export default function ListOfProducts({ data }: { data: IDataObject[] }) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { searchArray }: { searchArray: IDataObject[] } = useGlobalContext();
  const [arrayToUse, setArrayToUse] = useState(data);

  useEffect(() => {
    if (searchArray.length > 0) {
      setArrayToUse(searchArray);
      setIsLoading(false);
    }
  }, [searchArray]);

  if (searchArray.length === 0) {
    return (
      <div>
        {isLoading ? <p>Loading...</p> : <p>No items match your search</p>}
      </div>
    );
  }

  return (
    <ul className="max-w-screen-xl mx-auto grid auto-grid-200 gap-4">
      {arrayToUse?.map((item: IDataObject) => {
        const { id, title, imageUrl, discountedPrice } = item;
        return (
          <li
            key={id}
            className="border rounded-md overflow-hidden border border-secondary dark:border-primary shadow-xl dark:shadow-sm dark:shadow-primary"
          >
            <div className="relative h-48">
              <Link href={`/products/${id}`}>
                <Image
                  src={imageUrl}
                  alt={`image of ${title}`}
                  fill={true}
                  className="object-cover"
                />
              </Link>
            </div>
            <div className="flex justify-between p-2">
              <h4 className="font-bold">{title}</h4>
              <span className="font-bold text-fourthClr dark:text-thirdClr">
                {discountedPrice}
              </span>
            </div>
            <div className="p-2">
              <BtnAddToCart item={item} />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
