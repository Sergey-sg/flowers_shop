import React from "react";
import { IFlowerItem } from "../interfaces/IFlowerItem.interface";
import productImage from "../assets/images/testProduct.png";
import ToCartButton from "../components/ToCartButton";

const flower: IFlowerItem = {
  id: 1,
  name: "Name of flower",
  detail:
    "Performed suspicion in certainty so frankness by attention pretended. Newspaper or in tolerably education enjoyment. Extremity excellent certainty discourse sincerity no he so resembled. Joy house worse arise total boy but.",
  price: 79.5,
};

export function FlowerDetail() {
  return (
    <div className="w-11/12 mx-auto">
      <div className="pt-6 pb-2 px-4 text-2xl hover:text-cyan-500 font-bold leading-snug text-[#E1E1E6] mb-14 max-w-max">
        &lt; back
      </div>
      <div className="flex">
        <img src={productImage} width="25%" className="ml-8 mr-20" />
        <div className="text-[#E1E1E6] max-w-4xl my-auto">
          <p className="font-medium text-4xl leading-snug">{flower.name}</p>
          <br />
          <p className="font-normal text-2xl leading-snug">{flower.detail}</p>
          <br />
          <p className="text-[#82F3FF] font-normal text-3xl leading-relaxed">
            $ {flower.price}
          </p>
          <br />
          <ToCartButton />
        </div>
      </div>
    </div>
  );
}
