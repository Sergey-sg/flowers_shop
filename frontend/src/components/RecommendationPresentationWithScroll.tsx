import React from "react";
import ArrowScroll from "./arrowScroll/ArrowScroll";
import { useAppSelector } from "../redux/hooks";

export function RecommendationPresentationWithScroll() {
  const recommendations = useAppSelector((state) => state.recommendations);

  return (
    <>
      {recommendations.map((recommendation) => (
        <div key={recommendation.pk} className="w-11/12 mx-auto mb-14">
          <div className="text-[#E1E1E6] font-sans font-medium text-3xl leading-snug mb-4">
            {recommendation.name}
          </div>
          <br />
          <ArrowScroll items={recommendation.product} />
        </div>
      ))}
    </>
  );
}
