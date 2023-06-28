import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from 'lodash';

import { searchProducts } from '../../redux/thunks/searchThunk';
import { RootState } from '../../app/store';
import styles from './Search.module.css';

type Props = {
  isSearchVisible: boolean;
  setIsSearchVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const Search = ({ isSearchVisible, setIsSearchVisible }: Props) => {
  const [inputValue, setInputValue] = useState('');
  const searchedProducts = useSelector((state: RootState) => state.searchProducts.searchedProducts);
  const dispatch = useDispatch();

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      dispatch(searchProducts({ search: value }));
    }, 500),
    []
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
                <Link onClick={handleClick} to={`/${product.name}`}>
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
  );
};

export default Search;
