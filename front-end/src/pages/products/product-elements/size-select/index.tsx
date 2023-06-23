import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import styles from './SizeSelect.module.css';
import { availableSizes } from '../../../../data/data';


const SizeSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState('CHOOSE SIZE');

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
    setIsOpen(false);
  };

  return (
    <div className={styles.wrapper} >
      <div className={styles.selectContainer} onClick={handleToggle}>
        <span className={styles.selectValue}>{selectedSize || 'CHOOSE SIZE'}</span>
        <FiChevronDown className={styles.selectArrow} />
      </div>
      {isOpen && (
        <ul className={`${styles.optionsContainer} ${styles.showOptions}`}>
          {availableSizes.map((size) => (
            <li key={size} className={styles.option} onClick={() => handleSizeSelect(size)}>
              {size}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SizeSelect;
