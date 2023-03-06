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
    <div className="flex flex-col sm:items-end space-y-2">
      <h4>
        <strong>{title}</strong>
      </h4>
      <p>
        Price:{" "}
        <strong>
          {discountedPrice}{" "}
          {discountedPrice < price && (
            <small className="line-through text-gray-500">{price} </small>
          )}
        </strong>
      </p>
      <p>
        In cart: <strong>{amountInCart}</strong>
      </p>
      <p>
        Total: <strong>{totalPriceSingleItem}</strong>
      </p>
    </div>
  );
}
