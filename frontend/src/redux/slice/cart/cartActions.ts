import { AxiosError } from "axios";
import { api } from "../../../axios/axios";
import { AppDispatch } from "../../store";
import { errorOccurred, resetError } from "../loader/error.slice";
import { startLoading, stopLoading } from "../loader/loader.slice";
import { successAction } from "../loader/success.slice";
import { addProductToCart, initialCart, reduceOrDeleteProductCart } from "./cart.slice";

const getCart = () => {
  return api.get('shop/cart/');
};

const addCartItemToCart = (productId: number) => {
  return api.get(`shop/cart/${productId}/add/`);
};

const reduceQuantityOrDelete = (productId: number) => {
  return api.get(`shop/cart/${productId}/remove/`);
};

export const fetchGetCart = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(resetError());
      dispatch(startLoading());

      const response = await getCart();

      dispatch(initialCart(response?.data));
      dispatch(successAction({ message: "Cart loaded successfully" }));
    } catch (e) {
      const axiosErr = e as AxiosError;
      const status = axiosErr.response?.status;
      const message = axiosErr.message;

      dispatch(errorOccurred({ statusCode: status, message: message }));
    } finally {
      dispatch(stopLoading());
    }
  };
};

export const fetchAddProductToCart = (productId: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(resetError());
      dispatch(startLoading());

      const response = await addCartItemToCart(productId);

      dispatch(addProductToCart(response?.data));
      dispatch(successAction({ message: "Product added to cart successfully" }));
    } catch (e) {
      const axiosErr = e as AxiosError;
      const status = axiosErr.response?.status;
      const message = axiosErr.message;

      dispatch(errorOccurred({ statusCode: status, message: message }));
    } finally {
      dispatch(stopLoading());
    }
  };
};

export const fetchReduceOrDeleteProductInCart = (productId: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(resetError());
      dispatch(startLoading());

      const response = await reduceQuantityOrDelete(productId);

      dispatch(reduceOrDeleteProductCart(response?.data));
      dispatch(successAction({ message: "Product remove from cart successfully" }));
    } catch (e) {
      const axiosErr = e as AxiosError;
      const status = axiosErr.response?.status;
      const message = axiosErr.message;

      dispatch(errorOccurred({ statusCode: status, message: message }));
    } finally {
      dispatch(stopLoading());
    }
  };
};
