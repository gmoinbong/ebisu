import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../components/layout/product-card';
import { fetchProducts } from '../thunks/productThunk';

export interface FetchProductsOptions {
  gender?: string
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
    builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    });
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
