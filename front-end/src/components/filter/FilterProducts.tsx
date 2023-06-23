import React, { useState } from 'react';
import Filter from './index';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';
import styles from './Filter.module.css';
import { categoryOptions, collectionOptions, colorOptions, genderOptions, sizeOptions } from '../../data/data';

type Props = {
  filter: boolean;
  setFilter: React.Dispatch<React.SetStateAction<boolean>>
}

const FilterProducts: React.FC<Props> = ({ filter, setFilter }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setFilter(!filter);
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.wrapper} ${filter === true ? styles.filterProductsOpened : ''}`}>
      <div className={`${styles.title} ${isOpen ? styles.opened : ''}`}>
        <p onClick={handleClick} className={styles.filterTitle}>
          FILTER
        </p>
        {isOpen ? (
          <FiChevronDown onClick={handleClick} className={styles.filterIcon} />
        ) : (
          <FiChevronRight onClick={handleClick} className={styles.filterIcon} />
        )}
      </div>
      {
        filter && (
          <>
            <Filter title="Collection" options={collectionOptions.map((option) => (
              <label key={option} className={styles.filterOption}>
                <input type="checkbox" className={styles.checkbox} />
                {option}
              </label>
            ))} />
            <Filter title="Categories" options={categoryOptions.map((option) => (
              <label key={option} className={styles.filterOption}>
                <input type="checkbox" className={styles.checkbox} />
                {option}
              </label>
            ))} />
            <Filter title="Gender" options={genderOptions.map((option) => (
              <label key={option} className={styles.filterOption}>
                <input type="checkbox" className={styles.checkbox} />
                {option}
              </label>
            ))} />
            <Filter title="Size" options={sizeOptions.map((option) => (
              <label key={option} className={styles.filterOption}>
                <input type="checkbox" className={styles.checkbox} />
                {option}
              </label>
            ))} />
            <Filter title="Color" options={colorOptions.map((option) => (
              <label key={option} className={styles.filterOption}>
                <input type="checkbox" className={styles.checkbox} />
                {option}
              </label>
            ))} />
          </>
        )
      }
    </div >
  );
};

export default FilterProducts;
