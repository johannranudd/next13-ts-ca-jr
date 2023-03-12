import { IReviews } from "@/types/types";
import RatingComponent from "./RatingComponent";

export default function ReviewsComponent({ reviews }: any) {
  if (reviews.length === 0) return <div></div>;
  return (
    <div className="w-[95%] max-w-[400px] mx-auto space-y-4">
      <h3 className="text-center text-xl underline">Reviews</h3>
      <ul className="space-y-5">
        {reviews.map((review: IReviews) => {
          const { id, username, rating, description } = review;
          return (
            <li
              key={id}
              className="p-2 space-y-3 rounded-md bg-secondary text-primary dark:bg-primary dark:text-secondary"
            >
              <div className="flex justify-between pb-2 border-dotted border-b border-thirdClr dark:border-thirdClrDark">
                <h4>
                  <strong>{username}</strong>
                </h4>
                <RatingComponent rating={rating} />
              </div>
              <p>{description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
