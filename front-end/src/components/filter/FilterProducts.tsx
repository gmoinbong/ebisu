import React, { useState, useEffect } from 'react';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';
import styles from '../filter/FIlter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { collectionOptions, categoryOptions, genderOptions, sizeOptions, colorOptions } from '../../data/filterOptions';
import { FilterOptions, fetchFilteredProducts } from '../../redux/thunks/filterThunk';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { setSelectedOptions } from '../../redux/slices/filterSilce';
import { Filter } from './index';

type Props = {
  isFilterOpen: boolean;
  setFilter: React.Dispatch<React.SetStateAction<boolean>>;
};

type UpdatedOptions = {
  [key: string]: string[];
};
type SelectedOptions = {
  Collection?: string[];
  Size?: string[];
  Gender?: string[];
  Color?: string[];
  Categories?: string[]
}

const FilterProducts: React.FC<Props> = ({ isFilterOpen, setFilter }: Props) => {
  const dispatch: ThunkDispatch<RootState, unknown, any> = useDispatch();
  const selectedOptions: SelectedOptions = useSelector((state: RootState) => state.filter.selectedOptions);

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setFilter(!isFilterOpen);
    setIsOpen(!isOpen);
  };

  const handelChangeOptions = (category: string, value: string) => {
    const updatedOptions: UpdatedOptions = { ...selectedOptions };

    if (updatedOptions[category]) {
      const optionValues = updatedOptions[category];

      if (optionValues.includes(value)) {
        updatedOptions[category] = optionValues.filter((v: string) => v !== value);

        if (updatedOptions[category].length === 0) {
          delete updatedOptions[category];
        }
      } else {
        updatedOptions[category] = [...optionValues, value];
      }
    } else {
      updatedOptions[category] = [value];
    }

    Object.keys(updatedOptions).forEach((key) => {
      if (updatedOptions[key].length === 0) {
        delete updatedOptions[key];
      }
    });

    dispatch(setSelectedOptions(updatedOptions));
  };

  useEffect(() => {
    dispatch(fetchFilteredProducts(selectedOptions as FilterOptions));
  }, [dispatch, selectedOptions]);

  return (
    <div className={`${styles.wrapper} ${isFilterOpen === true ? styles.filterProductsOpened : ''}`}>
      <div className={`${styles.title} ${isOpen ? styles.opened : ''}`}>
        <p onClick={handleClick} className={`${styles.filterTitle} ${isFilterOpen ? styles.filterOpened : ''}`}>
          FILTER
        </p>
        {isOpen ? (
          <FiChevronDown onClick={handleClick} className={styles.filterIcon} />
        ) : (
          <FiChevronRight onClick={handleClick} className={styles.filterIcon} />
        )}
      </div>
      {isFilterOpen && (
        <>
          <Filter
            className={styles.s}
            title="Collection"
            options={collectionOptions.map((option: string) => {
              const isSelected = selectedOptions.Collection && selectedOptions.Collection.includes(option);
              return {
                label: option,
                value: option,
                selected: isSelected,
                onChange: () => handelChangeOptions('collection', option.toString())
              };
            })}
          />
          <Filter
            title="Categories"
            options={categoryOptions.map((option) => {
              const isSelected = selectedOptions.Categories && selectedOptions.Categories.includes(option);
              return {
                label: option,
                value: option,
                selected: isSelected,
                onChange: () => handelChangeOptions('categories', option)
              };
            })}
          />
          <Filter
            title="Gender"
            options={genderOptions.map((option) => {
              const isSelected = selectedOptions.Gender && selectedOptions.Gender.includes(option);
              return {
                label: option,
                value: option,
                selected: isSelected,
                onChange: () => handelChangeOptions('gender', option)
              };
            })}
          />
          <Filter
            title="Size"
            options={sizeOptions.map((option) => {
              const isSelected = selectedOptions.Size && selectedOptions.Size.includes(option);
              return {
                label: option,
                value: option,
                selected: isSelected,
                onChange: () => handelChangeOptions('size', option)
              };
            })}
          />
          <Filter
            title="Color"
            options={colorOptions.map((option) => {
              const isSelected = selectedOptions.Color && selectedOptions.Color.includes(option);
              return {
                label: option,
                value: option,
                selected: isSelected,
                onChange: () => handelChangeOptions('color', option)
              };
            })}
          />
        </>
      )}
    </div>
  );
};

export default FilterProducts;
