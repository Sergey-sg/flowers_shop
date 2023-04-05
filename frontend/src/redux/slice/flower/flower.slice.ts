import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFlowerItem } from "../../../interfaces/IFlowerItem.interface";

const initialState: IFlowerItem[] = [];

const flowerSlice = createSlice({
  name: "flowers",
  initialState,
  reducers: {
    initialFlowers: (state, action: PayloadAction<IFlowerItem[]>) => [
      ...action.payload,
    ],
    addNewPageOfFlowers: (state, action: PayloadAction<IFlowerItem[]>) => [
      ...state,
      ...action.payload,
    ],
  },
});

export const { initialFlowers, addNewPageOfFlowers } = flowerSlice.actions;

export default flowerSlice.reducer;
