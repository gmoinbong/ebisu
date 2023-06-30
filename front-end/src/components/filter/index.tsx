import { useState } from 'react';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';
import styles from '../filter/FilterProducts';


type FilterOption = {
  label: string;
  value: string;
  selected: boolean | undefined;
  onChange: () => void;
};

type FilterProps = {
  title: string;
  options: FilterOption[];
};

export const Filter = ({ title, options }: FilterProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  return (
    <div className={styles.filter}>
      <div className={styles.filterHeader} onClick={handleToggle}>
        <span className={styles.filterTitle}>{title}</span>
        {isOpen ? (
          <FiChevronDown className={styles.filterIcon} />
        ) : (
          <FiChevronRight className={styles.filterIcon} />
        )}
      </div>
      {isOpen && (
        <ul className={styles.filterOptions}>
          {options.map((option, index) => (
            <li key={option.label + index} className={styles.filterOption}>
              <label>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  checked={option.selected}
                  onChange={option.onChange}
                />
                {option.label}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

