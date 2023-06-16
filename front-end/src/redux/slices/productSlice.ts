import { searchProducts } from './../thunks/searchThunk';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProducts } from '../thunks/productThunk';

export interface FetchProductsOptions {
  gender?: string;
  search?: string
}

export interface Product {
  collection: string;
  price: string;
  name: string;
  category: string;
  gender: string;
  color: string;
  size: string;
  url: string;
}

interface ProductState {
  products: Product[];
  searchProducts: Product[]; // Добавлено поле searchProducts
}

const initialState: ProductState = {
  products: [],
  searchProducts: [] // Добавлено поле searchProducts
};


const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.products = action.payload;
      })
      .addCase(searchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.searchProducts = action.payload;
      });
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
