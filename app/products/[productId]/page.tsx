import { getSingleProduct } from "@/app/utils/gets";
import { IDataObject } from "@/types/types";
import Image from "next/image";
import { use } from "react";
import { IReviews } from "@/types/types";
import PriceComponent from "@/app/cart/PriceComponent";
import RatingComponent from "./RatingComponent";

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

  // todo: put back colors to fit theme

  return (
    <div key={id} className="mb-28 mt-20 bg-[#def]">
      <h1>{title}</h1>
      <div className="w-[90%] max-w-[400px] mx-auto bg-[#edf] mb-4">
        <div className="relative h-64 w-full">
          <Image
            src={imageUrl}
            alt={`image of ${title}`}
            fill={true}
            className="object-cover"
          />
        </div>
        <div className="p-2 space-y-3">
          <div>{description}</div>
          <SingleItemPriceComponent {...data} />
          <RatingComponent rating={rating} />
          <TagsComponent tags={tags} />
        </div>
      </div>
      <ReviewsComponent reviews={reviews} />
    </div>
  );
}

// todo: generateStaticParams to prefetch all potential Ids

function TagsComponent({ tags }: any) {
  if (tags.length === 0) return <div></div>;
  return (
    <div>
      {
        <p>
          {tags?.map((tag: string, index: number) => {
            return <small key={index}>#{`${tag} `}</small>;
          })}
        </p>
      }
    </div>
  );
}

function SingleItemPriceComponent({ discountedPrice, price }: IDataObject) {
  return (
    <div>
      <p className="inline">Price </p>
      {discountedPrice < price ? (
        <>
          <strong>
            {discountedPrice}{" "}
            <small className="line-through text-gray-500">{price}</small>
          </strong>
          <p>
            Save: <strong>{(price - discountedPrice).toFixed(2)}</strong>
          </p>
        </>
      ) : (
        <strong>{price}</strong>
      )}
    </div>
  );
}

function ReviewsComponent({ reviews }: any) {
  if (reviews.length === 0) return <div></div>;
  return (
    <div className="w-[90%] max-w-[400px] mx-auto space-y-4">
      <h3>Reviews</h3>
      <ul>
        {reviews.map((review: IReviews) => {
          const { id, username, rating, description } = review;
          return (
            <li key={id} className="bg-[#fed]">
              <p>{username}</p>
              <p>{rating}</p>
              <p>{description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
