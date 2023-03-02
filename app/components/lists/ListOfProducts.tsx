import { use } from "react";
import { getData } from "@/app/utils/gets";
import { IDataObject } from "@/types/types";
import Image from "next/image";

export default function ListOfProducts() {
  const data = use(getData());
  return (
    <ul>
      {data?.map((item: IDataObject) => {
        const { id, title, imageUrl } = item;
        return (
          <li key={id}>
            <h4>{title}</h4>
            <div className="relative h-48 w-48">
              <Image
                src={imageUrl}
                alt={`image of ${title}`}
                fill={true}
                className="object-cover"
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
