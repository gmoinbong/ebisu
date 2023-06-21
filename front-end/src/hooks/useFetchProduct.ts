import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { fetchProductByName } from '../redux/thunks/selectedProductThunk';
import { setSelectedProduct } from '../redux/slices/productSlice';

export function useFetchProduct(name: string) {
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useDispatch();
  const selectedProduct = useSelector((state: RootState) => state.selectedProduct.selectedProduct);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(fetchProductByName(name));
        dispatch(setSelectedProduct(response.payload));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [dispatch, name]);

  return selectedProduct;
}
