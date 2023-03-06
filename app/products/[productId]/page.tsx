import React from "react";

interface IParams {
  params: {
    productId: string;
    searchParams: {};
  };
}
export default async function ProductDetailPage({
  params: { productId },
}: IParams) {
  // console.log(productId);
  return (
    <div className="mb-28 mt-20">
      <h1>ProductDetailPage</h1>
      <p>
        displaying product: <strong>{productId}</strong>
      </p>
    </div>
  );
}

// todo: generateStaticParams to prefetch all potential Ids
