import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export type Params = {
  email: string,
  password: string
}
export const fetchAuth = createAsyncThunk('auth/FetchAuth', async ({ email, password }: Params) => {
  const { data } = await axios.post('https://ebisu-backend.onrender.com/api/login', { email, password });
  return data;
});
