import { getSingleProduct } from "@/app/utils/gets";
import { IDataObject } from "@/types/types";
import Image from "next/image";
import { use } from "react";
import { IReviews } from "@/types/types";

interface IParams {
  params: {
    productId: string;
    searchParams: {};
  };
}
export default function ProductDetailPage({ params: { productId } }: IParams) {
  const data: IDataObject = use(getSingleProduct(productId));
  const {
    id,
    title,
    description,
    price,
    discountedPrice,
    imageUrl,
    rating,
    tags,
    reviews,
  } = data;

  // console.log(reviews);
  return (
    <div key={id} className="mb-28 mt-20 bg-[#def]">
      <h1>{title}</h1>
      <div className="w-[90%] max-w-[400px] mx-auto bg-[#edf]">
        {/* image */}
        <div className="relative h-64 w-full">
          <Image
            src={imageUrl}
            alt={`image of ${title}`}
            fill={true}
            className="object-cover"
          />
        </div>
        {/* description */}
        <div>{description}</div>
        {/* prices */}
        <div>
          <p>discountedPrice: {discountedPrice}</p>
          <p>price: {price}</p>
        </div>
        {/* tags and rating */}
        <div>
          <p>rating: {rating}</p>
          {tags && (
            <p>
              Tags:{" "}
              {tags?.map((tag: string, index) => {
                return (
                  <span key={index}>
                    {tag}
                    {index < tags.length - 1 && ", "}
                  </span>
                );
              })}
            </p>
          )}
        </div>
        {/* reviews */}
        {reviews.length > 0 && <ReviewsComponent reviews={reviews} />}
      </div>
    </div>
  );
}

// todo: generateStaticParams to prefetch all potential Ids

function ReviewsComponent({ reviews }: any) {
  console.log(reviews);
  return (
    <ul>
      <li>assdasd</li>
    </ul>
  );
}
