import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FetchProductsOptions, Product } from "../slices/productSlice";
import { getClothesByGender, getClothesBySearch } from "../../utils/api";

export const fetchProducts = createAsyncThunk<Product[], FetchProductsOptions>(
  'products/fetchProducts',
  async (options = {}) => {
    const { gender } = options;
    if (gender) {
      const response = await getClothesByGender(gender);
      return response.data;
    }
    else {
      const response = await axios.get<Product[]>('http://localhost:5172/api/Clothes');
      return response.data;
    }
  }
);



export const searchProducts = createAsyncThunk<Product[], FetchProductsOptions>(
  'products/searchProducts',
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


