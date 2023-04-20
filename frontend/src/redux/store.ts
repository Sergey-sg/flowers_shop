import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slice/category/category.slice";
import recommendationSlice from "./slice/recommendation/recommendation.slice";
import flowerSlice from "./slice/flower/flower.slice";
import successSlice from "./slice/loader/success.slice";
import errorSlice from "./slice/loader/error.slice";
import loaderSlice from "./slice/loader/loader.slice";
import paginationSlice from "./slice/pagination/pagination.slice";
import cartSlice from "./slice/cart/cart.slice";

export const store = configureStore({
  reducer: {
    categories: categorySlice,
    recommendations: recommendationSlice,
    flowers: flowerSlice,
    pagination: paginationSlice,
    success: successSlice,
    error: errorSlice,
    loader: loaderSlice,
    cart: cartSlice,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
