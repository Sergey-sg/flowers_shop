import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IRecommendation } from "../../../interfaces/IRecommendation.interface";

const initialState: IRecommendation[] = [];

const recommendationSlice = createSlice({
  name: "recommendations",
  initialState,
  reducers: {
    initialRecommendations: (
      state,
      action: PayloadAction<IRecommendation[]>
    ) => [...action.payload],
  },
});

export const { initialRecommendations } = recommendationSlice.actions;

export default recommendationSlice.reducer;
