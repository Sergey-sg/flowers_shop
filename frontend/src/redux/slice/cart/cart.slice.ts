import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  IAnswerFromCart,
  ICart,
  ICustomer,
} from "../../../interfaces/Cart.interface";

const initialState: ICart = {
  items: [],
  customer: {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
  },
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    initialCart: (state, action: PayloadAction<ICart>) => action.payload,
    addProductToCart: (state, action: PayloadAction<IAnswerFromCart>) => {
      state.items = state.items?.map((item) => {
        if (item.pk === action.payload.cartItem.pk) {
          return action.payload.cartItem;
        } else {
          return item;
        }
      });
      state.total = action.payload.total;
    },
    reduceOrDeleteProductCart: (
      state,
      action: PayloadAction<IAnswerFromCart>
    ) => {
      if (!action.payload.cartItem.product) {
        state.items = state.items.filter(
          (item) => item.pk !== action.payload.cartItem.pk
        );
      } else {
        state.items = state.items.map((item) => {
          if (item.pk === action.payload.cartItem.pk) {
            return action.payload.cartItem;
          } else {
            return item;
          }
        });
      }
      state.total = action.payload.total;
    },
    removeProductFromCart: (state, action: PayloadAction<IAnswerFromCart>) => {
      state.items = state.items.filter(
        (item) => item.product.pk !== action.payload.cartItem.pk
      );
      state.total = action.payload.total;
    },
    customerToCart: (state, action: PayloadAction<ICustomer>) => {
      state.customer = action.payload;
    },
  },
});

export const {
  initialCart,
  addProductToCart,
  reduceOrDeleteProductCart,
  removeProductFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
