import { AxiosError } from "axios";
import { api } from "../../../axios/axios";
import { AppDispatch } from "../../store";
import { errorOccurred, resetError } from "../loader/error.slice";
import { startLoading, stopLoading } from "../loader/loader.slice";
import { initialCategories } from "./category.slice";

const getAllCategories = () => {
  return api.get("/shop/categories/");
};

export const fetchAllCategories = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(resetError());
      dispatch(startLoading());
      const response = await getAllCategories();

      console.log(response.data);

      dispatch(initialCategories(response.data.data));
      //   dispatch(setPagination(response.data.meta))
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
