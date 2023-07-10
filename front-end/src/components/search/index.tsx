import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from 'lodash';

import { searchProducts } from '../../redux/thunks/searchThunk';
import { RootState } from '../../app/store';
import styles from './Search.module.css';
import { AnyAction, AsyncThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import { FetchProductsOptions, Product } from '../../redux/slices/productSlice';

type Props = {
  isSearchVisible: boolean;
  setIsSearchVisible: React.Dispatch<React.SetStateAction<boolean>>;
  menuOpen: boolean;
};

const Search = ({ isSearchVisible, setIsSearchVisible, menuOpen }: Props) => {
  const [inputValue, setInputValue] = useState('');
  const searchedProducts = useSelector((state: RootState) => state.searchProducts.searchedProducts);
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      dispatch(searchProducts({ search: value }) as AsyncThunkAction<Product[], FetchProductsOptions, {}>);
    }, 500),
    [dispatch]
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  useEffect(() => {
    debouncedSearch(inputValue);
  }, [inputValue, debouncedSearch]);

  return (
    !menuOpen && (
      <div className={styles.search}>
        <AiOutlineClose style={{ color: '#ffff' }} className={styles.clearIcon} onClick={handleClick} />
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className={styles.input}
          placeholder="Search"
        />
        <button className={styles.searchButton}>
          <AiOutlineSearch className={styles.searchIcon} />
        </button>
        {isSearchVisible && inputValue.length > 0 && (
          <div className={styles.productList}>
            {searchedProducts.length > 0 ? (
              searchedProducts.slice(0, 3).map((product) => (
                <div key={product.name} className={styles.productItem}>
                  <Link onClick={handleClick} to={`/products/${product.name}`}>
                    {product.name}
                  </Link>
                </div>
              ))
            ) : (
              <div className={styles.noProduct}>
                No products for query '{inputValue}' {'  '}
                <Link to="/products" className={styles.link}>
                  See all products
                </Link>
              </div>
            )}
            <div className={styles.departments}>
              <Link to={'/products'} className={styles.link}>
                Browse all products ({searchedProducts.length})
              </Link>
            </div>
          </div>
        )}
      </div>
    )
  );
};

export default Search;
