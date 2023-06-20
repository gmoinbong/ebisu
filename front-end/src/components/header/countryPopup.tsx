import React from 'react';
import { mainCountries } from '../../data/data';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { setCountry } from '../../redux/slices/profileSlice';

import styles from './Header.module.css';

type Props = {
  onClose: () => void;
  onSelectCountry: (country: string) => void;
};

const CountryPopup = ({ onClose, onSelectCountry }: Props) => {
  const dispatch = useDispatch();

  const handleCountrySelect = (country: string) => {
    onSelectCountry(country);
    dispatch(setCountry(country));
    onClose();
  };

  const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <div className={styles.countryPopup} onClick={handleBackgroundClick}>
      <div className={styles.popupBackground} />
      <div className={styles.popupContent}>
        <h3 className={styles.popupTitle}>
          Select your location
          <AiOutlineClose onClick={onClose} />
        </h3>
        <ul className={styles.countryList}>
          {mainCountries.map((country, index) => (
            <li
              key={index}
              className={styles.countryItem}
              onClick={() => handleCountrySelect(country)}
            >
              {country}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CountryPopup;
