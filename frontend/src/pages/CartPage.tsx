import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Link } from "react-router-dom";
import { fetchGetCart } from "../redux/slice/cart/cartActions";
import { CreateCustomerForm, OrderConfirmForm } from "../components/CreateCustomerForm";

export function currentImagesPath(path: string) {
  if (path.includes("http://localhost:8000/")) {
    return path;
  }
  return `http://localhost:8000/${path}`;
}

export function CartPage() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);

  useEffect(() => {
    console.log("start useEffect in CartPage");

    dispatch(fetchGetCart());
  }, [dispatch]);

  return (
    <>
      <OrderConfirmForm />
      {cart.items !== undefined && cart.items.length? (
        <CreateCustomerForm />
      ) : (
        <div className="text-3xl text-white m-auto justify-center">
          Cart is empty, go to{" "}
          <Link to={"/flowers-catalog"} className="hover:text-cyan-500">
            <span className="underline">Flowers catalog</span>
          </Link>
        </div>
      )}
    </>
  );
}
