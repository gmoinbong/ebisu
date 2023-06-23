import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productReducer from '../redux/slices/productSlice';
import selectedProductReducer from '../redux/slices/productSlice';
import cartReducer from '../redux/slices/cartSlice';
import searchProductsReducer from '../redux/slices/searchProductsSlice';
import profileReducer from '../redux/slices/profileSlice'
import filterReducer from '../redux/slices/filterSilce'


const rootReducer = combineReducers({
  products: productReducer,
  cartItems: cartReducer,
  searchProducts: searchProductsReducer,
  selectedProduct: selectedProductReducer,
  setCountry: profileReducer,
  filter: filterReducer,
});

const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
