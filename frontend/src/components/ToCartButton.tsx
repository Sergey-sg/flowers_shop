import React from "react";
import { useAppDispatch } from "../redux/hooks";
import {
  fetchAddProductToCart,
  fetchReduceOrDeleteProductInCart,
} from "../redux/slice/cart/cartActions";

const ToCartButton = (props: { productId: number }) => {
  const dispatch = useAppDispatch();

  const addProductToCart = () => {
    dispatch(fetchAddProductToCart(props.productId));
  };

  const reduceOrDeleteProductFromCart = () => {
    dispatch(fetchReduceOrDeleteProductInCart(props.productId));
  };

  return (
    <div className="flex flex-row justify-center">
      <button
        className="py-2 px-3 text-3xl hover:text-red-800"
        onClick={() => reduceOrDeleteProductFromCart()}
      >
        &#8722;
      </button>
      <span className="text-2xl my-auto mx-2">01</span>
      <button
        className="py-2 px-3 text-3xl hover:text-cyan-500"
        onClick={() => addProductToCart()}
      >
        +
      </button>
      <button className="py-3 px-4 ml-3 bg-red-700 hover:bg-red-800 rounded-[5px]">
        to cart
      </button>
    </div>
  );
};

export default ToCartButton;
