import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const sendCartData = createAsyncThunk('cart/sendCartData',
  async (cartItems) => {
    const response = await axios.post('https://ebisu-backend.onrender.com/api/cart', cartItems);
    return response.data;
  });