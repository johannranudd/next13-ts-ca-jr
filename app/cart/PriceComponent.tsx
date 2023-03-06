import { IDataObject } from "@/types/types";

export default function PriceComponent({
  discountedPrice,
  price,
  amountInCart,
}: IDataObject) {
  const totalPriceSingleItem: number = amountInCart
    ? Number((discountedPrice * amountInCart).toFixed(2))
    : 0;

  if (discountedPrice < price) {
    return (
      <>
        <p>
          Price per Item:{" "}
          <strong>
            {discountedPrice}{" "}
            <small className="line-through text-gray-500">{price} </small>
          </strong>
        </p>
        <p>In cart: {amountInCart}</p>
        <p>
          <strong>{discountedPrice}</strong> x <strong>{amountInCart}</strong> ={" "}
          <strong className="underline">{totalPriceSingleItem}</strong> Nok
        </p>
      </>
    );
  }
  return (
    <>
      <p>
        Price per Item: <strong>{discountedPrice}</strong>
      </p>
      <p>In cart: {amountInCart}</p>
      <p>
        <strong>{discountedPrice}</strong> x <strong>{amountInCart}</strong> ={" "}
        <strong className="underline">{totalPriceSingleItem}</strong> Nok
      </p>
    </>
  );
}
