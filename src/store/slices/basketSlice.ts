import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BasketItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface BasketState {
  active: boolean;
  items: BasketItem[];
}

const initialState: BasketState = {
  active: false,
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,

  reducers: {
    setBasketActive: (state, action: PayloadAction<boolean>) => {
      state.active = action.payload;
    },

    addToBasket: (
      state,
      action: PayloadAction<Omit<BasketItem, "quantity">>
    ) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromBasket: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    updateItemQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
  },
});

export const {
  setBasketActive,
  addToBasket,
  removeFromBasket,
  updateItemQuantity,
} = basketSlice.actions;

export default basketSlice.reducer;
