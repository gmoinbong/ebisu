import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id?: string;
  price: string;
  color: string;
  name: string;
  size: string;
  url: string;
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: [] as CartItem[],
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const { id, price, color, name, size, url } = action.payload;
      const newItem: CartItem = { id, price, color, name, size, url };
      state.push(newItem);
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const itemIndex = state.findIndex(item => item.id === itemId);
      if (itemIndex !== -1) {
        state.splice(itemIndex, 1);
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
