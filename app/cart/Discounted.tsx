import { IDataObject } from "@/types/types";

export default function Discounted(product: IDataObject) {
  const { discountedPrice, price } = product;

  if (discountedPrice < price) {
    return (
      <p>
        Price:{" "}
        <strong>
          {discountedPrice}{" "}
          <small className="line-through text-gray-500">{price} </small>
        </strong>
      </p>
    );
  }
  return (
    <p>
      Price: <strong>{discountedPrice}</strong>
    </p>
  );
}
