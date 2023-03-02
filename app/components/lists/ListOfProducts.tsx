import { use } from "react";
import { getData } from "@/app/utils/gets";
import { IDataObject } from "@/types/types";
import Image from "next/image";
import BtnAddToCart from "../ui/BtnAddToCart";

export default function ListOfProducts() {
  const data = use(getData());
  return (
    <ul className="grid auto-grid-200">
      {data?.map((item: IDataObject) => {
        const { id, title, imageUrl } = item;
        return (
          <li key={id} className="p-2">
            <div className="relative h-48">
              <Image
                src={imageUrl}
                alt={`image of ${title}`}
                fill={true}
                className="object-cover"
              />
            </div>
            <h4>{title}</h4>
            <BtnAddToCart id={id} />
          </li>
        );
      })}
    </ul>
  );
}
