import React, { useEffect, useState } from 'react';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';
import { categoryOptions, collectionOptions, colorOptions, genderOptions, sizeOptions } from '../../data/filterOptions';

import styles from './Filter.module.css';
import { RootState } from '../../app/store';
import { setSelectedOptions } from '../../redux/slices/filterSilce';
import { Filter } from './index';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { fetchFilteredProducts } from '../../redux/thunks/filterThunk';

type Props = {
  isFilterOpen: boolean;
  setFilter: React.Dispatch<React.SetStateAction<boolean>>
}
type UpdatedOptions = {
  [key: string]: string[];
}

type SelectedOptions = {
  Collection?: string[];
  Size?: string[];
  Gender?: string[];
  Color?: string[];
  Categories?: string[]
}

const FilterProducts: React.FC<Props> = ({ isFilterOpen, setFilter }: Props) => {
  const dispatch = useDispatch()
  const selectedOptions: SelectedOptions = useSelector((state: RootState) => state.filter.selectedOptions)


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
    dispatch(fetchFilteredProducts(selectedOptions));
  }, [dispatch, selectedOptions]);

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
            <Filter
              title="Collection"
              options={collectionOptions.map((option, index) => {
                const isSelected = selectedOptions["Collection"] && selectedOptions["Collection"].includes(option);
                return (
                  <label key={`collection-${index}`} className={styles.filterOption}>
                    <input
                      onClick={() => handelChangeOptions("collection", option)}
                      type="checkbox"
                      className={styles.checkbox}
                      checked={isSelected}
                    />
                    {option}
                  </label>
                );
              })}
            />


            <Filter
              title="Categories"
              options={categoryOptions.map((option, index) => {
                const isSelected = selectedOptions["Categories"] && selectedOptions["Categories"].includes(option);
                return (
                  <label key={`categories-${index}`} className={styles.filterOption}>
                    <input
                      onClick={() => handelChangeOptions("categories", option)}
                      type="checkbox"
                      className={styles.checkbox}
                      checked={isSelected}
                    />
                    {option}
                  </label>
                )
              })}
            />
            <Filter
              title="Gender"
              options={genderOptions.map((option, index) => {
                const isSelected = selectedOptions["Gender"] && selectedOptions["Gender"].includes(option);
                return (
                  <label key={`gender-${index}`} className={styles.filterOption}>
                    <input
                      onClick={() => handelChangeOptions("gender", option)}
                      type="checkbox"
                      className={styles.checkbox}
                      checked={isSelected}
                    />
                    {option}
                  </label>
                )
              })}
            />

            <Filter
              title="Size"
              options={sizeOptions.map((option, index) => {
                const isSelected = selectedOptions["Size"] && selectedOptions["Size"].includes(option);
                return (
                  <label key={`size-${index}`} className={styles.filterOption}>
                    <input
                      onClick={() => handelChangeOptions("size", option)}
                      type="checkbox"
                      className={styles.checkbox}
                      checked={isSelected}

                    />
                    {option}
                  </label>
                )
              })}
            />
            <Filter
              title="Color"
              options={colorOptions.map((option, index) => {
                const isSelected = selectedOptions["Color"] && selectedOptions["Color"].includes(option);
                return (
                  <label key={`color-${index}`} className={styles.filterOption}>
                    <input
                      onClick={() => handelChangeOptions("color", option)}
                      type="checkbox"
                      className={styles.checkbox}
                      checked={isSelected}
                    />
                    {option}
                  </label>
                );
              })}
            />


          </>
        )
      }
    </div >
  );
};

export default FilterProducts;
