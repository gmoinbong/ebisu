import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { useFetchProducts } from '../../hooks/useFetchProducts';
type Props = {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchComponent = ({ isVisible, setIsVisible }: Props) => {
  const products = useFetchProducts();
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleClick = () => {
    setIsVisible(!isVisible)
  }

  const filteredData = products.filter((el) =>
    el.name.toLowerCase().trim().includes(inputValue.toLowerCase().trim())
  );

  console.log(filteredData);
  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      {filteredData.map((el) =>
        <div key={el.name}>{el.name}</div>
      )}
      <AiOutlineClose onClick={handleClick} />
    </div>
  )
}

export default SearchComponent