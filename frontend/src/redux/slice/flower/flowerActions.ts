import { AxiosError } from "axios";
import { api } from "../../../axios/axios";
import { AppDispatch } from "../../store";
import { errorOccurred, resetError } from "../loader/error.slice";
import { startLoading, stopLoading } from "../loader/loader.slice";
import { successAction } from "../loader/success.slice";
import { initialFlowers } from "./flower.slice";

const getOneFlowerBySlug = (slug: string) => {
  return api.get(`shop/flowers/${slug}/`);
};

const getAllFlowers = () => {
  return api.get("shop/flowers/");
};

const getAllFlowersByCategory = (slug: string) => {
  return api.get(`shop/flowers/?category__slug=${slug}`);
};

export const fetchAllFlowers = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(resetError());
      dispatch(startLoading());

      const response = await getAllFlowers();

      dispatch(initialFlowers(response?.data.results));
      dispatch(successAction({ message: "Flowers loaded successfully" }));
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

export const fetchAllFlowersForCategory = (slug: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(resetError());
      dispatch(startLoading());

      const response = await getAllFlowersByCategory(slug);

      dispatch(initialFlowers(response?.data.results));
      dispatch(
        successAction({ message: "Flowers by category loaded successfully" })
      );
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
