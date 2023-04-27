import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import { CustomerSchema } from "../schemas/customerSchema";
import { ICustomer } from "../interfaces/Cart.interface";
import {
  AddProductToCart,
  ReduceOrDeleteProductFromCart,
  RemoveProductFromCart,
} from "./ButtonsForCart";
import { Link } from "react-router-dom";
import { currentImagesPath } from "../pages/CartPage";
import { useAppSelector } from "../redux/hooks";

export const OrderConfirmForm = () => {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "" }}
      validationSchema={CustomerSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className="text-[#E1E1E6]">
        <label htmlFor="firstName">First Name</label>
        <Field 
          name="firstName" 
          type="text" 
          className="bg-[#0D1D25] w-full rounded-xl py-2 px-4 focus:outline-none focus:border-slate-400 focus:ring-slate-400 focus:ring-1"
        />
        <ErrorMessage name="firstName" className="text-red-600"/>

        <label htmlFor="lastName">Last Name</label>
        <Field
          name="lastName"
          type="text"
          className="bg-[#0D1D25] w-full rounded-xl py-2 px-4 focus:outline-none focus:border-slate-400 focus:ring-slate-400 focus:ring-1"
        />
        <ErrorMessage name="lastName" />

        <label htmlFor="phone">Phone</label>
        <Field name="phone" type="phone" />
        <ErrorMessage name="phone" />

        <label htmlFor="email">Email</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" />

        <label htmlFor="address">Address</label>
        <Field name="address" type="address" />
        <ErrorMessage name="address" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export function CreateCustomerForm() {
  const cart = useAppSelector((state) => state.cart);
  const [customer, setCustomer] = useState<ICustomer>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
  });

  const formik = useFormik({
    initialValues: customer,
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: CustomerSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="w-10/12 mx-auto mb-14 text-[#E1E1E6]">
        <div className="mb-4 flex flex-row">
          <div className="flex flex-col p-4 w-5/12 border-r-2 mr-4">
            <label className="text-sm font-bold mb-2">
              First Name:
              <input
                className={`border ${
                  formik.touched.firstName && formik.errors.firstName
                    ? "border-red-700"
                    : "border-none"
                } bg-[#0D1D25] w-full rounded-xl py-2 px-4 focus:outline-none focus:border-slate-400 focus:ring-slate-400 focus:ring-1`}
                type={"text"}
                name="firstName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
            </label>
            <label className="text-sm font-bold mb-2">
              Last Name:
              <input
                className={`border ${
                  formik.touched.lastName && formik.errors.lastName
                    ? "border-red-700"
                    : "border-none"
                } bg-[#0D1D25] w-full rounded-xl py-2 px-4 focus:outline-none focus:border-slate-400 focus:ring-slate-400 focus:ring-1`}
                type={"text"}
                name="lastName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
            </label>
            <label className="text-sm font-bold mb-2">
              Phone:
              <input
                className={`border ${
                  formik.touched.phone && formik.errors.phone
                    ? "border-red-700"
                    : "border-none"
                } bg-[#0D1D25] w-full rounded-xl py-2 px-4 focus:outline-none focus:border-slate-400 focus:ring-slate-400 focus:ring-1`}
                type={"text"}
                name="phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
            </label>
            <label className="text-sm font-bold mb-2">
              Email:
              <input
                className={`border ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-700"
                    : "border-none"
                } bg-[#0D1D25] w-full rounded-xl py-2 px-4 focus:outline-none focus:border-slate-400 focus:ring-slate-400 focus:ring-1`}
                type={"text"}
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
            </label>
            <label className="text-sm font-bold mb-2">
              Address:
              <input
                className={`border ${
                  formik.touched.address && formik.errors.address
                    ? "border-red-700"
                    : "border-none"
                } bg-[#0D1D25] w-full rounded-xl py-2 px-4 focus:outline-none focus:border-slate-400 focus:ring-slate-400 focus:ring-1`}
                type={"text"}
                name="address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address}
              />
            </label>
            <div className="w-full my-4">
              {formik.touched.firstName && formik.errors.firstName && (
                <p className="text-red-500">- {formik.errors.firstName}</p>
              )}
              {formik.touched.lastName && formik.errors.lastName && (
                <p className="text-red-500">- {formik.errors.lastName}</p>
              )}
              {formik.touched.phone && formik.errors.phone && (
                <p className="text-red-500">- {formik.errors.phone}</p>
              )}
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500">- {formik.errors.email}</p>
              )}
              {formik.touched.address && formik.errors.address && (
                <p className="text-red-500">- {formik.errors.address}</p>
              )}
            </div>
          </div>
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
                    ${item.product.price / 100} x {item.quantity} = $
                    {item.sub_total / 100}
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
        {cart.total && (
          <div className="text-end pr-8 my-4">
            Total price: ${cart.total / 100}
            <br />
            <button
              type="submit"
              className="bg-[#033857] hover:bg-[#042a40] rounded-lg py-2 px-4 mt-4"
            >
              submit
            </button>
          </div>
        )}
      </div>
    </form>
  );
}
