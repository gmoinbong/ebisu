import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FetchProductsOptions, Product } from "../slices/productSlice";
import { getClothesByGender } from "../../utils/api";

export const fetchProducts = createAsyncThunk<Product[], FetchProductsOptions>(
  'products/fetchProducts',
  async (options = {}) => {
    const { gender } = options;
    if (gender) {
      const response = await getClothesByGender(gender);
      return response.data;
    }

    else {
      const response = await axios.get<Product[]>('https://ebisu-backend.onrender.com/api/Clothes');
      return response.data;
    }
  }
);






