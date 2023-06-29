import { getClothesByFilter } from './../../utils/api';

import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Product, setFilteredProducts } from "../slices/productSlice";

export type FilterOptions = {
  collection?: string;
  category?: string;
  gender?: string;
  size?: string;
  color?: string;
};


export const fetchFilteredProducts = createAsyncThunk<Product[], FilterOptions, { state: RootState }>(
  'products/fetchFilteredProducts',
  async (_, { getState, dispatch }) => {
    const selectedOptions = getState().filter.selectedOptions;
    try {
      const filteredProducts = await getClothesByFilter(selectedOptions as FilterOptions);
      dispatch(setFilteredProducts(filteredProducts));
      return filteredProducts;
    } catch (error) {
      console.log('Error:', error);
      throw error;
    }
  }
);
