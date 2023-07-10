import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import styles from './SizeSelect.module.css';
import { availableSizes } from '../../../../data/availableSizesData';
import { Product } from '../../../../redux/slices/productSlice';

type Props = {
  size: string[];
  product: Product;
  setSelectedSize: React.Dispatch<React.SetStateAction<string>>;
  selectedSize: string;
};

const SizeSelect = ({ size, setSelectedSize, selectedSize }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSizeClick = (itemSize: string) => {
    if (size.includes(itemSize)) {
      setSelectedSize(itemSize);
      handleToggle()
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.selectContainer} onClick={handleToggle}>
        <span className={styles.selectValue}>{selectedSize || 'SELECT SIZE'}</span>
        <FiChevronDown className={styles.selectArrow} />
      </div>
      {isOpen && (
        <ul className={`${styles.optionsContainer} ${styles.showOptions}`}>
          {availableSizes.map((itemSize) => (
            <li
              key={itemSize}
              className={`${styles.option} ${!size.includes(itemSize) ? styles.outOfStock : ''}`}
              onClick={() => handleSizeClick(itemSize)} >
              <p>
                {itemSize} {size.includes(itemSize) ? '' : '(Out of stock)'}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SizeSelect;
