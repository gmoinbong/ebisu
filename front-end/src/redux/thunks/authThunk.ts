import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export type Params = {
  email: string,
  password: string
}
export const fetchAuth = createAsyncThunk('auth/FetchAuth', async ({ email, password }: Params) => {
  const { data } = await axios.post('http://localhost:5172/api/login', { email, password });
  return data;
});
