import { searchProducts } from './../thunks/searchThunk';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProducts } from '../thunks/productThunk';
import { Filter } from './filterSilce';
import { fetchFilteredProducts } from '../thunks/filterThunk';

export interface FetchProductsOptions {
  gender?: string;
  search?: string;
  name?: string
}

export interface Product {
  collection: string;
  price: string;
  name: string;
  category: string;
  gender: string;
  color: string;
  size: string[];
  url: string;
  id?: any;
  quantity?: number,
  images?: string[]
}

interface ProductState {
  products: Product[];
  searchProducts: Product[];
  selectedProduct: Product[] | null
  selectedOptions: Filter;
  filteredProducts: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  searchProducts: [],
  selectedProduct: null,
  selectedOptions: {
    collection: [],
    price: [],
    name: [],
    category: [],
    gender: [],
    color: [],
    size: [],
  },
  filteredProducts: [],
  loading: false,
  error: null,
};


const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    setSelectedProduct: (state, action: PayloadAction<Product[]>) => {
      state.selectedProduct = action.payload
    },
    setFilteredProducts: (state, action: PayloadAction<Product[]>) => {
      state.filteredProducts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.products = action.payload;
      })
      .addCase(searchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.searchProducts = action.payload;
      })
      .addCase(fetchFilteredProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.filteredProducts = action.payload
      })
  },
});

export const { setProducts, setSelectedProduct, setFilteredProducts } = productSlice.actions;
export default productSlice.reducer;
