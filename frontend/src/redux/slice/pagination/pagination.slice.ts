import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPagination } from "../../../interfaces/IPagination.interface";

const initialState: IPagination = {
  count: 0,
  next: "",
  previous: "",
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPagination: (state, action: PayloadAction<IPagination>) =>
      action.payload,
  },
});

export const { setPagination } = paginationSlice.actions;

export default paginationSlice.reducer;
