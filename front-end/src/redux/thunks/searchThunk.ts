import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchProductsOptions, Product } from "../slices/productSlice";
import { getClothesBySearch } from "../../utils/api";

export const searchProducts = createAsyncThunk<Product[], FetchProductsOptions>(
  'searchProducts/searchedProducts',
  async (options = {}) => {
    const { search } = options;
    if (search) {
      const response = await getClothesBySearch(search);
      return response.data;
    } else {
      return [];
    }
  }
);