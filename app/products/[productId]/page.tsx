import { getSingleProduct } from "@/app/utils/gets";
import { IDataObject } from "@/types/types";
import Image from "next/image";
import { use } from "react";
import { getData } from "@/app/utils/gets";
import RatingComponent from "./RatingComponent";
import TagsComponent from "./TagComponent";
import SingleItemPriceComponent from "./SingleItemPriceComponent";
import ReviewsComponent from "./ReviewsComponent";
import ModalComponent from "./ModalComponent";

export async function generateStaticParams() {
  const data = await getData();
  return data?.map((product: any) => ({
    productId: product.id,
  }));
}

export default function ProductDetailPage({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = params;
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

  return (
    <div key={id} className="mb-48 mt-20">
      <h1>{title}</h1>
      <div className="w-[95%] max-w-[400px] mx-auto mb-8 p-2 rounded-md bg-secondary text-primary dark:bg-primary dark:text-secondary shadow-#5">
        <div className="relative h-64 w-full">
          <ModalComponent {...data} />
          <Image
            src={imageUrl}
            alt={`image of ${title}`}
            fill={true}
            className="object-cover"
          />
        </div>
        <div className="p-2 space-y-5">
          <div className="pb-2 border-dotted border-b border-thirdClr dark:border-thirdClrDark">
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
