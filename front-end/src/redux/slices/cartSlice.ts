import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id?: string;
  price?: string;
  color?: string;
  name?: string;
  size?: string | [];
  url?: string;
  quantity?: number
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: [] as CartItem[],
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const { id, price, color, name, size, url, quantity } = action.payload;
      const newItem: CartItem = { id, price, color, name, size, url, quantity };
      state.push(newItem);
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const itemIndex = state.findIndex(item => item.id === itemId);
      if (itemIndex !== -1) {
        state.splice(itemIndex, 1);
      }
    },
    clearCart: (state) => {
      state.length = 0
    },

    updateCart: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const { id, quantity } = action.payload;
      const item = state.find(item => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
    }
  },
});

export const { addToCart, removeFromCart, clearCart, updateCart } = cartSlice.actions;

export default cartSlice.reducer;
