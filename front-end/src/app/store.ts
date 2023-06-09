import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productReducer from '../redux/slices/productSlice';

const rootReducer = combineReducers({
  products: productReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
