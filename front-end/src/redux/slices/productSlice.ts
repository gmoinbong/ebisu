import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProducts, searchProducts } from '../thunks/productThunk';

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
}

const initialState: ProductState = {
  products: [],
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
        state.products = action.payload;
      });
  },

});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
