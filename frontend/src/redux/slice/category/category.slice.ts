import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategory } from "../../../interfaces/ICategory.interface";

const initialState: ICategory[] = [];

export const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    initialCategories: (state, action: PayloadAction<ICategory[]>) => [
      ...action.payload,
    ],
  },
});

export const { initialCategories } = categorySlice.actions;

export default categorySlice.reducer;
