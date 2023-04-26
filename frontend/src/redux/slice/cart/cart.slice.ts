import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ICartItem {
  pk: number;
  product: {
    pk: number;
    slug: string;
    name: string;
    image: string;
    img_alt: string;
    price: number;
    stock: number | undefined | null
  };
  quantity: number;
  active: boolean;
  sub_total: number;
}

interface IAnswerFromCart {
  cartItem: ICartItem;
  total: number;
}

interface ICart {
  items: ICartItem[];
  total: number | undefined;
}

const initialState: ICart = { items: [], total: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    initialCart: (state, action: PayloadAction<ICart>) => action.payload,
    addProductToCart: (state, action: PayloadAction<IAnswerFromCart>) => {
      state.items = state.items.map((item) => {
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
        state.items = state.items.filter((item) => item.pk !== action.payload.cartItem.pk);
      } else {
        state.items = state.items.map((item) => {
          if (item.pk === action.payload.cartItem.pk) {
            return action.payload.cartItem;
          } else {
            return item;
          }
        });
      };
      state.total = action.payload.total;
    },
    removeProductFromCart: (
      state,
      action: PayloadAction<IAnswerFromCart>
    ) => {
      state.items = state.items.filter((item) => item.product.pk !== action.payload.cartItem.pk);
      state.total = action.payload.total;
    },
  },
});

export const { initialCart, addProductToCart, reduceOrDeleteProductCart, removeProductFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
