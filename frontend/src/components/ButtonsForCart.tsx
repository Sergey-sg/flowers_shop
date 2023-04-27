import React from "react";
import { useAppDispatch } from "../redux/hooks";
import {
  fetchAddProductToCart,
  fetchReduceOrDeleteProductInCart,
  fetchRemoveProductFromCart,
} from "../redux/slice/cart/cartActions";
import { MdOutlineDelete } from "react-icons/md";

export const ReduceOrDeleteProductFromCart = (props: { productId: number }) => {
  const dispatch = useAppDispatch();
  const reduceOrDeleteProductFromCart = () => {
    dispatch(fetchReduceOrDeleteProductInCart(props.productId));
  };

  return (
    <button
      type="button"
      className="py-2 px-3 text-3xl hover:text-red-800"
      onClick={() => reduceOrDeleteProductFromCart()}
    >
      &#8722;
    </button>
  );
};

export const AddProductToCart = (props: { productId: number }) => {
  const dispatch = useAppDispatch();
  const addProductToCart = () => {
    dispatch(fetchAddProductToCart(props.productId));
  };
  return (
    <button
      type="button"
      className="py-2 px-3 text-3xl hover:text-cyan-500"
      onClick={() => addProductToCart()}
    >
      +
    </button>
  );
};

export const RemoveProductFromCart = (props: { productId: number }) => {
  const dispatch = useAppDispatch();
  const removeProductFromCart = () => {
    dispatch(fetchRemoveProductFromCart(props.productId));
  };
  return (
    <button
      type="button"
      className="py-2 px-3 text-3xl hover:text-red-800"
      onClick={() => removeProductFromCart()}
    >
      <MdOutlineDelete />
    </button>
  );
};
