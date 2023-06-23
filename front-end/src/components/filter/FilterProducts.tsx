import React, { useState } from 'react';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';
import Filter from './index';
import { categoryOptions, collectionOptions, colorOptions, genderOptions, sizeOptions } from '../../data/filterOptions';

import styles from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';

type Props = {
  isFilterOpen: boolean;
  setFilter: React.Dispatch<React.SetStateAction<boolean>>
}

const FilterProducts: React.FC<Props> = ({ isFilterOpen, setFilter }: Props) => {
  const dispatch = useDispatch()
  const selectedOptions = useSelector((state: RootState) => state.filter.selectedOptions)
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setFilter(!isFilterOpen);
    setIsOpen(!isOpen);
  };

  const handelChangeOptions = (option) => {
    selectedOptions()
  }

  return (
    <div className={`${styles.wrapper} ${isFilterOpen === true ? styles.filterProductsOpened : ''}`}>
      <div className={`${styles.title} ${isOpen ? styles.opened : ''}`}>
        <p onClick={handleClick} className={`${styles.filterTitle}  ${isFilterOpen ? styles.filterOpened : ''}`}>
          FILTER
        </p>
        {isOpen ? (
          <FiChevronDown onClick={handleClick} className={styles.filterIcon} />
        ) : (
          <FiChevronRight onClick={handleClick} className={styles.filterIcon} />
        )}
      </div>
      {
        isFilterOpen && (
          <>
            <Filter title="Collection" options={collectionOptions.map((option) => (
              <label key={option} className={styles.filterOption}>
                <input onChange={() => handelChangeOptions(option)} type="checkbox" className={styles.checkbox} />
                {option}
              </label>
            ))} />
            <Filter title="Categories" options={categoryOptions.map((option) => (
              <label key={option} className={styles.filterOption}>
                <input onChange={() => handelChangeOptions(option)} type="checkbox" className={styles.checkbox} />
                {option}
              </label>
            ))} />
            <Filter title="Gender" options={genderOptions.map((option) => (
              <label key={option} className={styles.filterOption}>
                <input onChange={() => handelChangeOptions(option)} type="checkbox" className={styles.checkbox} />
                {option}
              </label>
            ))} />
            <Filter title="Size" options={sizeOptions.map((option) => (
              <label key={option} className={styles.filterOption}>
                <input onChange={() => handelChangeOptions(option)} type="checkbox" className={styles.checkbox} />
                {option}
              </label>
            ))} />
            <Filter title="Color" options={colorOptions.map((option) => (
              <label key={option} className={styles.filterOption}>
                <input onChange={() => handelChangeOptions(option)} type="checkbox" className={styles.checkbox} />
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
