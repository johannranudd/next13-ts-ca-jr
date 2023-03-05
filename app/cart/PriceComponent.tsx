export default function PriceComponent({ product, totalItemsOfOneType }: any) {
  const { discountedPrice, price, amountInCart } = product;

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
          <strong className="underline">{totalItemsOfOneType}</strong> Nok
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
        <strong className="underline">{totalItemsOfOneType}</strong> Nok
      </p>
    </>
  );
}
