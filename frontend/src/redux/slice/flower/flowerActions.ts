import { AxiosError } from "axios";
import { api } from "../../../axios/axios";
import { AppDispatch } from "../../store";
import { errorOccurred, resetError } from "../loader/error.slice";
import { startLoading, stopLoading } from "../loader/loader.slice";
import { successAction } from "../loader/success.slice";
import { addNewPageOfFlowers, initialFlowers } from "./flower.slice";
import { setPagination } from "../pagination/pagination.slice";

const getOneFlowerBySlug = (slug: string) => {
  return api.get(`shop/flowers/${slug}/`);
};

const getAllFlowers = () => {
  return api.get("shop/flowers/");
};

const getNextPageOfFlowers = (url: string) => {
  return api.get(url);
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
      dispatch(
        setPagination({
          count: response?.data.count,
          next: response?.data.next,
          previous: response?.data.previous,
        })
      );
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

export const fetchNextPageOfFlowers = (url: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(resetError());
      dispatch(startLoading());

      const response = await getNextPageOfFlowers(url);

      dispatch(addNewPageOfFlowers(response?.data.results));
      dispatch(
        setPagination({
          count: response?.data.count,
          next: response?.data.next,
          previous: response?.data.previous,
        })
      );
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

export const fetchOneFlowerBySlug = (slug: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(resetError());
      dispatch(startLoading());

      const response = await getOneFlowerBySlug(slug);

      dispatch(initialFlowers([response?.data]));
      dispatch(successAction({ message: "Flower loaded successfully" }));
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
