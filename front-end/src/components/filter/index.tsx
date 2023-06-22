import React, { useState } from 'react';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';
import styles from './Filter.module.css';

type FilterOption = string;

type FilterProps = {
  title: string;
  options: FilterOption[];
};

const Filter: React.FC<FilterProps> = ({ title, options }) => {
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
          {options.map((option) => (
            <li key={option} className={styles.filterOption}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Filter;
