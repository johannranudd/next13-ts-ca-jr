"use client";
import { MdOutlineStarBorder } from "react-icons/md";
import { useRef, useEffect } from "react";
export default function RatingComponent({ rating }: any) {
  const outerContainerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && outerContainerRef.current) {
      const starsWidth = containerRef.current.getBoundingClientRect().width;
      const starsDividedByHundred = starsWidth / 100;
      const ratingToHundred = rating * 10 * 2;
      const starsWidthMultipliedByRating =
        starsDividedByHundred * ratingToHundred;
      outerContainerRef.current.style.width = `${starsWidthMultipliedByRating}px`;
    }
  }, [containerRef, outerContainerRef]);

  if (rating === 0) return <div></div>;
  return (
    <div className="flex">
      <p>Rating:</p>
      <div ref={outerContainerRef} className={`relative h-6 overflow-hidden`}>
        <div ref={containerRef} className="absolute flex text-[1.5rem]">
          <MdOutlineStarBorder />
          <MdOutlineStarBorder />
          <MdOutlineStarBorder />
          <MdOutlineStarBorder />
          <MdOutlineStarBorder />
        </div>
      </div>
    </div>
  );
}
