import { createAsyncThunk, SerializedError } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

export type Params = {
  email: string;
  password: string;
};

export type AuthData = {
  token: string;
  user: User;
};

export type User = {
  id: number;
  name: string;
  email: string;
};

export const fetchAuth = createAsyncThunk<AuthData, Params, { rejectValue: SerializedError }>(
  'auth/FetchAuth',
  async ({ email, password }: Params, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<AuthData> = await axios.post('https://ebisu-backend.onrender.com/api/login', { email, password });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);
