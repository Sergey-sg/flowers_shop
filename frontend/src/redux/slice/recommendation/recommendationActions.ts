import { AxiosError } from "axios";
import { api } from "../../../axios/axios";
import { AppDispatch } from "../../store";
import { errorOccurred, resetError } from "../loader/error.slice";
import { startLoading, stopLoading } from "../loader/loader.slice";
import { successAction } from "../loader/success.slice";
import { initialRecommendations } from "./recommendation.slice";

const getRecommendations = () => {
  return api.get("shop/recommendations/");
};

export const fetchRecommendations = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(resetError());
      dispatch(startLoading());

      const response = await getRecommendations();

      dispatch(initialRecommendations(response?.data.results));
      dispatch(successAction({ message: "Recommendations loaded successfully" }));
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
