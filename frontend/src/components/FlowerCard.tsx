import React from "react";
import { Link } from "react-router-dom";
import { IFlowerItem } from "../interfaces/IFlowerItem.interface";
import ToCartButton from "./ToCartButton";

export function FlowerCard(props: { flower: IFlowerItem }) {
  return (
    <div className="container">
      <div className="container text-[#E1E1E6] my-auto w-max text-center mx-10 w-10/12">
        <Link
          to={"/category/flower"}
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
        <p className="font-normal text-sm leading-relaxed">
          {props.flower.description.substring(0, 100)}
          {props.flower.description.length > 100 ? " ..." : ""}
        </p>
        <p className="text-[#82F3FF] font-normal text-3xl leading-relaxed">
          $ {props.flower.price / 100}
        </p>
        <ToCartButton />
      </div>
    </div>
  );
}
