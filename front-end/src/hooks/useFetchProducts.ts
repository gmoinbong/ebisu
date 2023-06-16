import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { RootState } from '../app/store';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { fetchProducts } from '../redux/thunks/productThunk';

export function useFetchProducts() {
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let gender: string | undefined;

        if (location.pathname.includes('/product/men')) {
          gender = 'men';
        } else if (location.pathname.includes('/product/woman')) {
          gender = 'woman';
        }
        await dispatch(fetchProducts({ gender }));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [dispatch, location.pathname]);

  return products;
}
