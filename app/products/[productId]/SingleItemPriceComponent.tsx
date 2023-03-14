import { IDataObject } from "@/types/types";

export default function SingleItemPriceComponent({
  discountedPrice,
  price,
}: IDataObject) {
  return (
    <div className="flex justify-between">
      <p>Price: </p>
      {discountedPrice < price ? (
        <div className="">
          <strong>
            <small className="line-through text-gray-400 dark:text-gray-500">
              {price}
            </small>{" "}
            {discountedPrice}
          </strong>
          <p>
            (Save: <strong>{(price - discountedPrice).toFixed(2)}</strong>)
          </p>
        </div>
      ) : (
        <strong>{price}</strong>
      )}
    </div>
  );
}
