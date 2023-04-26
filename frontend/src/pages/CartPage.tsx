import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Link } from "react-router-dom";
import { fetchGetCart } from "../redux/slice/cart/cartActions";
import { ReduceOrDeleteProductFromCart, AddProductToCart, RemoveProductFromCart } from "../components/ButtonsForCart";

function currentImagesPath(path: string) {
  if (path.includes("http://localhost:8000/")) {
    return path
  }
  return `http://localhost:8000/${path}`
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
      {cart.items.length ? (
        <div className="w-10/12 mx-auto mb-14 text-[#E1E1E6]">
          <div className="mb-4 flex flex-row">
            <form className="flex flex-col p-4 w-5/12 border-r-2 mr-4">
              <label>
                *Name: <br />
                <input
                  type={"text"}
                  name="name"
                  className="bg-[#0D1D25] w-full rounded-xl py-2 px-4 focus:outline-none focus:border-slate-400 focus:ring-slate-400 focus:ring-1"
                />
              </label>
              <label>
                *Email: <br />
                <input
                  type={"email"}
                  name="email"
                  className="bg-[#0D1D25] w-full rounded-xl py-2 px-4 focus:outline-none focus:border-slate-400 focus:ring-slate-400 focus:ring-1"
                />
              </label>
              <label>
                *Address: <br />
                <input
                  type={"text"}
                  name="address"
                  className="bg-[#0D1D25] w-full rounded-xl py-2 px-4 focus:outline-none focus:border-slate-400 focus:ring-slate-400 focus:ring-1"
                />
              </label>
            </form>
            <div className="flex flex-col w-full max-h-[70vh] overflow-y-auto">
              {cart.items?.map((item) => (
                <div key={item.pk} className="flex flex-row mt-2 justify-between">
                  <Link
                    to={`/${item.product.slug}`}
                    className="hover:text-cyan-500 flex flex-row"
                  >
                    <img
                      src={currentImagesPath(item.product.image)}
                      alt={item.product.img_alt}
                      className="w-24 my-auto"
                    />
                    <span className="my-auto ml-4">{item.product.name}</span>
                  </Link>
                  <div className="my-auto pl-1 ml-auto mr-0 flex flex-row">
                    <span className="my-auto mx-2">
                      ${item.product.price/100} x {item.quantity} = ${item.sub_total/100}
                    </span>
                    <ReduceOrDeleteProductFromCart productId={item.product.pk} />
                    <AddProductToCart productId={item.product.pk} />
                    <RemoveProductFromCart productId={item.product.pk} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <hr />
          {cart.total && <div className="text-end pr-8 my-4">Total price: ${cart.total/100}</div>}
        </div>
      ) : (
        <div className="text-3xl text-white m-auto justify-center">
          Cart is empty, go to{' '}
          <Link
            to={"/flowers-catalog"}
            className="hover:text-cyan-500"
          >
            <span className="underline">Flowers catalog</span>
          </Link>
        </div>
      )}
    </>
  );
}
