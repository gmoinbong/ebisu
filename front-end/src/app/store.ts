import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productReducer from '../redux/slices/productSlice';
import cartReducer from '../redux/slices/cartSlice';
import searchProductsReducer from '../redux/slices/searchProductsSlice';


const rootReducer = combineReducers({
  products: productReducer,
  cartItems: cartReducer,
  searchProducts: searchProductsReducer,
});

const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
