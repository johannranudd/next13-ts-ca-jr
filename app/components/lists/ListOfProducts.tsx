import { use, Suspense } from "react";
import { getData } from "@/app/utils/gets";
import { IDataObject } from "@/types/types";
import Image from "next/image";

export default function ListOfProducts() {
  const data = use(getData());
  // console.log(data);
  return (
    <ul>
      <Suspense fallback={<h2>Loading...</h2>}>
        {data?.map((item: IDataObject) => {
          // console.log(item);
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
      </Suspense>
    </ul>
    // <h1>LIST</h1>
  );
}
