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

  if (searchArray.length === 0)
    return (
      <div>
        {isLoading ? <p>Loading...</p> : <p>No items match your search</p>}
      </div>
    );

  return (
    <ul className="max-w-screen-xl mx-auto grid auto-grid-200">
      {arrayToUse?.map((item: IDataObject) => {
        const { id, title, imageUrl } = item;
        return (
          <li key={id} className="p-2">
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
            <h4>{title}</h4>
            <BtnAddToCart item={item} />
          </li>
        );
      })}
    </ul>
  );
}
