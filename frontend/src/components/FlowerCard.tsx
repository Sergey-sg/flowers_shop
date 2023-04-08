import React from "react";
import { Link } from "react-router-dom";
import { IFlowerItem } from "../interfaces/IFlowerItem.interface";
import ToCartButton from "./ToCartButton";

export function FlowerCard(props: { flower: IFlowerItem }) {
  return (
    <div className="flex flex-col text-[#E1E1E6] w-max text-center mx-4 mb-12 max-w-xs esm:max-w-[180px] h-full">
      <Link
        to={`/${props.flower.slug}`}
        className="text-[#FFFFFF] hover:text-cyan-500"
      >
        <img
          src={`${props.flower.image}`}
          alt={props.flower.img_alt}
          className="mx-auto max-h-[150px]"
        />
        <br />
        <p className="font-bold text-2xl leading-snug">{props.flower.name}</p>
      </Link>
      <div className="font-normal text-sm leading-relaxed">
        {props.flower.description.substring(0, 100)}
        {props.flower.description.length > 100 ? " ..." : ""}
      </div>
      <div className="mx-4 mt-auto">
        <span className="text-[#82F3FF] font-normal text-3xl leading-relaxed">
          $ {props.flower.price / 100}
        </span>
        <br />
        <ToCartButton />
      </div>
    </div>
  );
}
