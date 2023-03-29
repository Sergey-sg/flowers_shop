import React from "react";
import { Link } from "react-router-dom";
import productImage from "../assets/images/testProduct.png";
import { IFlowerItem } from "../interfaces/IFlowerItem.interface";
import ToCartButton from "./ToCartButton";

export function FlowerCard(props: { flower: IFlowerItem }) {
  return (
    <div className="container grid grid-rows-1 grid-flow-col gap-4 overflow-x-auto">
      <div
        key={props.flower.id}
        className="container text-[#E1E1E6] my-auto w-max text-center scroll-ml-6 snap-start mx-10"
      >
        <Link to={"/category/flower"} className="text-[#FFFFFF] hover:text-cyan-500">
          <img src={productImage} alt={props.flower.name} className="mx-auto" />
          <p className="font-bold text-2xl leading-snug">
            {props.flower.name} {props.flower.id}
          </p>
        </Link>
        <p className="font-normal text-sm leading-relaxed">
          {props.flower.detail}
        </p>
        <p className="text-[#82F3FF] font-normal text-3xl leading-relaxed">
          $ {props.flower.price}
        </p>
        <ToCartButton/>
      </div>
    </div>
  );
}
