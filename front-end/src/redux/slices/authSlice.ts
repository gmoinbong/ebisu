import { createSlice, createAsyncThunk, createSelector, Dispatch } from "@reduxjs/toolkit";
import { fetchAuth } from "../thunks/authThunk";
import { RootState } from "../../app/store";

interface AuthData {
  email: string
  fullName: string
}

const loadAuthFromStorage = () => {
  const authData = localStorage.getItem('authData');
  if (authData) {
    const parsedAuthData = JSON.parse(authData);
    return {
      ...parsedAuthData,
      logout: () => {
        localStorage.removeItem('authData');
      },
    };
  }
  return null;
};

export const logout = () => async (dispatch: Dispatch) => {
  localStorage.removeItem('authData');
  dispatch(clearAuthData());
};


const saveAuthToStorage = (authData: AuthData | null) => {
  localStorage.setItem('authData', JSON.stringify(authData));
}

export const initializeAuthData = createAsyncThunk(
  'auth/initializeAuthData',
  async (_, { dispatch }) => {
    const authData = loadAuthFromStorage();
    if (authData) {
      dispatch(setAuthData(authData));
    } else {
      dispatch(clearAuthData());
    }
  }
);

const initialState = {
  authData: loadAuthFromStorage() as AuthData | null | any,
  status: loadAuthFromStorage() ? 'loaded' : 'loading',
  token: loadAuthFromStorage() ? loadAuthFromStorage().token : null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthData: (state, action) => {
      state.authData = action.payload;
      state.token = action.payload.token;
      state.status = 'loaded';
    },
    clearAuthData: (state) => {
      state.authData = null;
      state.token = null;
      state.status = 'loading';
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
        state.token = action.payload.token;
        saveAuthToStorage(action.payload)
      })
      .addCase(fetchAuth.rejected, (state) => {
        state.status = 'error';
        state.authData = null;
        state.token = null;
        saveAuthToStorage(null)
      });
  },
});

export const { setAuthData, clearAuthData } = authSlice.actions;

export const selectIsAuth = createSelector(
  (state: RootState) => state.auth.authData,
  (authData) => !!authData
);
export const selectAuthData = (state: RootState) => state.auth.authData;

export default authSlice.reducer;
