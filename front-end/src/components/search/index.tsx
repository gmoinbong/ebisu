import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { fetchProducts } from '../../redux/thunks/productThunk';

type Props = {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchComponent = ({ isVisible, setIsVisible }: Props) => {
  const [inputValue, setInputValue] = useState('');
  const products = useSelector((state: RootState) => state.products.products);
  const dispatch = useDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const filteredData = products.filter((el) =>
    el.name.toLowerCase().trim().includes(inputValue.toLowerCase().trim())
  );


  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts({}));
    }
  }, [dispatch, products.length]);

  console.log(filteredData);

  return (
    <div>
      {products.length > 0 && (
        <>
          <input type="text" value={inputValue} onChange={handleInputChange} />
          {filteredData.map((el) => (
            <div key={el.name}>{el.name}</div>
          ))}
          <AiOutlineClose onClick={handleClick} />
        </>
      )}
    </div>
  );
};

export default SearchComponent;
