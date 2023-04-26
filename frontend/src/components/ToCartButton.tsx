import React from "react";
import { AddProductToCart, ReduceOrDeleteProductFromCart } from "./ButtonsForCart";

const ToCartButton = (props: { productId: number }) => {
  return (
    <div className="flex flex-row justify-center">
      <ReduceOrDeleteProductFromCart productId={props.productId} />
      <span className="text-2xl my-auto mx-2">01</span>
      <AddProductToCart productId={props.productId} />
      <button className="py-3 px-4 ml-3 bg-red-700 hover:bg-red-800 rounded-[5px]">
        to cart
      </button>
    </div>
  );
};

export default ToCartButton;
