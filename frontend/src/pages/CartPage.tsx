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
    <div className="w-10/12 mx-auto mb-14">
      {!cart ? (
        <div className="m-auto text-[#E1E1E6]">
          <br />
          <div className="text-3xl">Your cart is empty'</div>
          <br />
          <div className="mt-20 mr-6 font-normal leading-relaxed">
            <Link to={"/flowers-catalog"} className="hover:text-cyan-500">
              <p className="my-4 p-3">
                Click here to go back to products catalog
              </p>
            </Link>
          </div>
        </div>
      ) : (
        <form className="w-full">
          <div className="flex flex-row w-full">
            <div className="flex flex-col border rounded text-[#E1E1E6] px-3">
                <br />
                <label>
                  name
                  <br/>
                  <input type="text" />
                </label>
                <br />
                <label>
                  email
                  <br/>
                  <input type="email" />
                </label>
                <br />
                <label>
                  phone
                  <br/>
                  <input type="number" />
                </label>
            </div>
            <div className="flex flex-col justify-between border rounded w-full text-[#E1E1E6]">
              <table>
                <thead className="cart-thead">
                  <tr>
                    <th colSpan={4}>Your items</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.products?.map((product) => (
                    <tr key={product.pk}>
                      <td>
                        <Link
                          to={`/${product.product.slug}`}
                          className="text-[#FFFFFF] hover:text-cyan-500"
                        >
                          {product.product.image && (
                            <>
                              <img
                                src={`${product.product.image}`}
                                alt={product.product.img_alt}
                                className="mx-auto max-h-[150px]"
                              />
                              <br />
                            </>
                          )}
                          <p className="font-bold text-2xl leading-snug">
                            {product.product.name}
                          </p>
                        </Link>
                      </td>
                      <td className="justify-start">
                        <div>
                          Quantity: {product.quantity} x {product.product.name}
                        </div>
                      </td>
                      <td>${product.sub_total}</td>
                      {/* {% if cart_item.product.stock == None or cart_item.quantity < cart_item.product.stock %}
                            <td>
                                <a href="{{ url('add_cart', cart_item.product_id) }}" class="add-cart" data-id="{{ cart_item.product.id }}" data-name="{{ cart_item.product.name }}"><i class="material-icons cart-icon">add_shopping_cart</i></a>
                                <a href="{{ url('cart_remove', cart_item.product_id) }}"><i class="material-icons cart-icon">remove_circle_outline</i></a>
                                <a href="{{ url('cart_remove_product', cart_item.product_id) }}"><i class="material-icons cart-icon">delete</i></a>
                            </td>
                        {% else %}
                            <td>
                                <a href="{{ url('cart_remove', cart_item.product_id) }}"><i class="material-icons cart-icon">remove_circle_outline</i></a>
                                <a href="{{ url('cart_remove_product', cart_item.product_id) }}"><i class="material-icons cart-icon">delete</i></a>
                            </td>
                        {% endif %} */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <br />
          <div className="container">
            <br />
            <div className="text-end">
              Total price: <strong>${cart.total}</strong>&nbsp&nbsp&nbsp&nbsp
              <button
                className="bg-[#033857] hover:bg-[#042a40] text-[#E1E1E6] px-3 py-2"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
