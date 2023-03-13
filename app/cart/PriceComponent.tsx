import { IDataObject } from "@/types/types";

export default function PriceComponent({
  discountedPrice,
  price,
  amountInCart,
  title,
}: IDataObject) {
  const totalPriceSingleItem: number = amountInCart
    ? Number((discountedPrice * amountInCart).toFixed(2))
    : 0;
  return (
    <div className="flex flex-col space-y-2 w-[70%] max-w-[200px] sm:w-1/2 sm:max-w-full">
      <h4>
        <strong>{title}</strong>
      </h4>
      <p className="flex justify-between">
        <span>Price: </span>
        <strong>
          {discountedPrice < price && (
            <small className="line-through text-gray-500 dark:text-gray-400">
              {price}{" "}
            </small>
          )}
          {discountedPrice}{" "}
        </strong>
      </p>
      <p className="flex justify-between">
        In cart: <strong>{amountInCart}</strong>
      </p>
      <p className="flex justify-between">
        Total: <strong>{totalPriceSingleItem}</strong>
      </p>
    </div>
  );
}
