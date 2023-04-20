import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Link } from "react-router-dom";

export function CartPage() {
  const dispatch = useAppDispatch();
  const cart = {
    products: [
      {
        pk: 2,
        product: {
          pk: 10,
          slug: "tets-flower",
          name: "Test flower",
          image:
            "http://127.0.0.1:8000/media/product/2023/04/05/Tets_flower-2023-04-05_155020.805675.png",
          img_alt: "Tets flower",
        },
        quantity: 1,
        active: true,
        sub_total: 365,
      },
      {
        pk: 4,
        product: {
          pk: 11,
          slug: "test-2",
          name: "Test 2",
          image:
            "http://127.0.0.1:8000/media/product/2023/04/05/Test_2-2023-04-05_155125.844408.png",
          img_alt: "Test 2",
        },
        quantity: 1,
        active: true,
        sub_total: 256,
      },
    ],
    total: 621,
  };

  //   useEffect(() => {
  //     console.log("start useEffect in FlowerDetail page");

  //     if (!flower && flowerSlug) {
  //       dispatch(fetchOneFlowerBySlug(flowerSlug));
  //     }
  //   });

  return (
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
        <div className="flex flex-col">
          {cart.products?.map((product) => (
            <div key={product.pk} className="flex flex-row mt-2">
              <img
                src={`${product.product.image}`}
                alt={product.product.img_alt}
                className="h-24 my-auto"
              />
              <div className="my-auto pl-4">
                {product.product.name} x {product.quantity} = $
                {product.sub_total}
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className="text-end pr-8 my-4">Total price: ${cart.total}</div>
    </div>
  );
}
