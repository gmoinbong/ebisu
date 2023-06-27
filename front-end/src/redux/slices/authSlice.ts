import { createSlice } from "@reduxjs/toolkit";
import { fetchAuth } from "../thunks/authThunk";
import { RootState } from "../../app/store";

const initialState = {
  authData: null,
  status: 'loading',
  token: null
};
const loadAuthFromStorage = () => {
  const authData = localStorage.getItem('authData');
  if (authData) {
    return JSON.parse(authData)
  }
  return null
}

const saveAuthToStorage = (authData) => {
  localStorage.setItem('authData', JSON.stringify(authData))
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthData: (state, action) => {
      state.authData = action.payload
    },
    clearAuthData: (state) => {
      state.authData = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuth.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAuth.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.authData = action.payload;
      })
      .addCase(fetchAuth.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.data = action.payload;
        state.token = action.payload.token;
      })
      .addCase(fetchAuth.rejected, (state) => {
        state.status = 'error';
        state.authData = null;
        state.token = null
      });
  },
});
export const { setAuthData, clearAuthData } = authSlice.actions;

export const selectIsAuth = (state: RootState) => Boolean(state.auth.authData);
export const selectAuthData = (state: RootState) => state.auth.authData

export const initializeAuthData = () => (dispatch) => {
  const authData = loadAuthFromStorage();
  if (authData) {
    dispatch(setAuthData(authData))
  }
  else dispatch(clearAuthData())
}

export const updateAuthData = (authData) => (dispatch) => {
  saveAuthToStorage(authData);
  dispatch(setAuthData(authData))
}

export const authReducer = authSlice.reducer;
