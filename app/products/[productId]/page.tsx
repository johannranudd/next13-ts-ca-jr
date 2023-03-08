import { getSingleProduct } from "@/app/utils/gets";
import { IDataObject } from "@/types/types";
import Image from "next/image";
import { use } from "react";
// import { IReviews } from "@/types/types";
// import PriceComponent from "@/app/cart/PriceComponent";
import RatingComponent from "./RatingComponent";
import TagsComponent from "./TagComponent";
import SingleItemPriceComponent from "./SingleItemPriceComponent";
import ReviewsComponent from "./ReviewsComponent";

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
  const isTotalRating = true;
  // todo: put back colors to fit theme

  return (
    <div key={id} className="mb-28 mt-20">
      <h1 className="text-thirdClr">{title}</h1>
      <div className="w-[95%] max-w-[400px] mx-auto mb-8 p-2 rounded-md bg-secondary text-primary dark:bg-primary dark:text-secondary">
        <div className="relative h-64 w-full">
          <Image
            src={imageUrl}
            alt={`image of ${title}`}
            fill={true}
            className="object-cover"
          />
        </div>
        <div className="p-2 space-y-5">
          <div className="pb-2 border-dotted border-b border-primary dark:border-secondary">
            {description}
          </div>
          <SingleItemPriceComponent {...data} />
          <RatingComponent rating={rating} isTotalRating={isTotalRating} />
          <TagsComponent tags={tags} />
        </div>
      </div>
      <ReviewsComponent reviews={reviews} />
    </div>
  );
}

// todo: generateStaticParams to prefetch all potential Ids
