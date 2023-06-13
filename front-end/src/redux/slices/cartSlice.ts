import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      state.push(newItem);
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const itemIndex = state.findIndex(item => item.id === itemId);
      if (itemIndex !== -1) {
        state.splice(itemIndex, 1);
      }
    },
    updateCartItem: (state, action) => {
      const { itemId, quantity } = action.payload;
      const item = state.find(item => item.id === itemId);
      if (item) {
        item.quantity = quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateCartItem } = cartSlice.actions;

export default cartSlice.reducer;
