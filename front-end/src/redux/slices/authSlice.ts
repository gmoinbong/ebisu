import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import { fetchAuth } from "../thunks/authThunk";
import { RootState } from "../../app/store";
import { useDispatch } from "react-redux";
const dispatch = useDispatch

const loadAuthFromStorage = () => {
  const authData = localStorage.getItem('authData');
  if (authData) {
    const parsedAuthData = JSON.parse(authData);
    return {
      ...parsedAuthData,
      logout: () => {
        localStorage.removeItem('authData');
        dispatch(clearAuthData(null));
      },
    };
  }
  return null;
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem('authData');
  dispatch(clearAuthData());
};


const saveAuthToStorage = (authData) => {
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
  authData: loadAuthFromStorage(),
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
