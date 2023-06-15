import React, { useEffect, useState, useCallback } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { searchProducts } from '../../redux/thunks/productThunk';
import { debounce } from 'lodash';

type Props = {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchComponent = ({ isVisible, setIsVisible }: Props) => {
  const [inputValue, setInputValue] = useState('');
  const products = useSelector((state: RootState) => state.products.products);
  const dispatch = useDispatch();

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      dispatch(searchProducts({ search: value }));
    }, 700),
    []
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    debouncedSearch(inputValue);
  }, [inputValue, debouncedSearch]);

  return (
    <div style={{ position: 'fixed', top: '0' }}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      {products.map((el) => (
        <div key={el.name}>{el.name}</div>
      ))}
      <AiOutlineClose onClick={handleClick} />
    </div>
  );
};

export default SearchComponent;
