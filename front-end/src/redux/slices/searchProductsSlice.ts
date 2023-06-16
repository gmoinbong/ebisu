import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from './productSlice';
import { searchProducts } from '../thunks/searchThunk';

interface SearchProductsState {
  searchedProducts: Product[];
}

const initialState: SearchProductsState = {
  searchedProducts: [],
};

const searchProductsSlice = createSlice({
  name: 'searchProducts',
  initialState,
  reducers: {
    setSearchProducts: (state, action: PayloadAction<Product[]>) => {
      state.searchedProducts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.searchedProducts = action.payload;
      })
  },
});

export const { setSearchProducts } = searchProductsSlice.actions;
export default searchProductsSlice.reducer;
