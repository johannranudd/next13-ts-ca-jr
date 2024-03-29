"use client";
import Link from "next/link";
import Image from "next/image";
import { IDataObject } from "@/types/types";
import BtnAddToCart from "../ui/BtnAddToCart";
import { useEffect, useState } from "react";
import { useGlobalContext } from "@/app/context/context";
import LoadingWidget from "../widgets/LoadingWidget";
import placeholderImage from "../../../images/placeholder-image.png";

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
      <div className="flex justify-center">
        {isLoading ? (
          <LoadingWidget />
        ) : (
          <p className="text-xl">No items match your search</p>
        )}
      </div>
    );
  }

  return (
    <section>
      <h2 className="mb-8 text-xl">Products</h2>
      <ul className="px-2 max-w-screen-xl mx-auto grid xxs:auto-grid-200 gap-6">
        {arrayToUse?.map((item: IDataObject) => {
          const { id, title, imageUrl, discountedPrice } = item;
          return (
            <li
              key={id}
              className="flex flex-col justify-between border rounded-md overflow-hidden bg-secondary text-primary shadow-#5 dark:bg-primary dark:text-secondary border border-secondary dark:border-primary"
            >
              <div>
                <div className="relative h-48">
                  <Link role="button" href={`/products/${id}`}>
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
                <div className="flex justify-between p-2">
                  <h4 className="pr-2 break-words font-semibold">{title}</h4>
                  <span className="font-bold text-thirdClr dark:text-thirdClrDark">
                    {discountedPrice}
                  </span>
                </div>
              </div>
              <div className="py-4 px-2">
                <BtnAddToCart {...item} />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
