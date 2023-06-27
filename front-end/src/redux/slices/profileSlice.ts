import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../app/store';

export const fetchProfile = createAsyncThunk('profile/fetchProfile', async (_, { getState }) => {
  const token = (getState() as RootState).auth.token;
  const response = await axios.get('http://localhost:5172/api/me', {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return response.data;
});

const initialState = {
  data: null,
  status: 'idle',
  error: null,
  country: 'Ukraine',
  token: null
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setCountry: (state, action) => {
      state.country = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.token = action.meta.arg.token;
        state.data = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setCountry } = profileSlice.actions;
export const selectProfileData = (state: RootState) => state.profile.data;
export const selectProfileStatus = (state: RootState) => state.profile.status;
export const selectProfileCountry = (state: RootState) => state.profile.country;

export default profileSlice.reducer;
