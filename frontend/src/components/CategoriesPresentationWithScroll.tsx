import React from "react";
import ArrowScroll from "../components/arrowScroll/ArrowScroll";
import { IFlowerItem } from "../interfaces/IFlowerItem.interface";

export function CategoriesPresentationWithScroll(props: {
  categories: string[];
}) {
  const flowers: IFlowerItem[] = Array.from(Array(10).keys()).map((x) => ({
    id: x,
    name: "Name of flower",
    detail: "Detail of flower",
    price: 79.5,
  }));

  return (
    <div>
      {props.categories.map((category) => (
        <div className="w-11/12 mx-auto pb-14">
          <div className="text-[#E1E1E6] font-sans font-medium text-3xl leading-snug mb-4">
            {category}
          </div>
          <br />
          <ArrowScroll items={flowers} />
        </div>
      ))}
    </div>
  );
}
