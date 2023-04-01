import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategory } from "../../../interfaces/ICategory.interface";

const initialState: { categories: ICategory[] } = { categories: [] };

export const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    initialCategories: (state, action) => ({
      categories: action.payload,
    }),
  },
});

export const { initialCategories } = categorySlice.actions;

export default categorySlice.reducer;
