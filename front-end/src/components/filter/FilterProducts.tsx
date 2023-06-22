import React, { useState } from 'react';
import Filter from './index';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';
import styles from './Filter.module.css';
import { categoryOptions, collectionOptions, colorOptions, genderOptions, sizeOptions } from '../../data/data';

const FilterProducts: React.FC = () => {
  const [filter, setFilter] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setFilter(!filter);
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.wrapper}>
      <p onClick={handleClick} className={styles.filterTitle}>
        FILTER
        {isOpen ? (
          <FiChevronDown className={styles.filterIcon} />
        ) : (
          <FiChevronRight className={styles.filterIcon} />
        )}
      </p>
      {filter && (
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
      )}
    </div>
  );
};

export default FilterProducts;
