import { createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "../slices/productSlice";
import { getClothesByName } from "../../utils/api";

export const fetchProductByName = createAsyncThunk<Product, string>(
  'products/fetchProductByName',
  async (name) => {
    const response = await getClothesByName(name);
    return response.data;
  }
);
