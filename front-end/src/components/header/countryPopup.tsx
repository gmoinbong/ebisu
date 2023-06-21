import React, { useEffect, useState } from 'react';
import { mainCountries } from '../../data/data';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { setCountry } from '../../redux/slices/profileSlice';
import { debounce } from 'lodash';

import styles from './Header.module.css';

type Props = {
  onClose: () => void;
  onSelectCountry: (country: string) => void;
  isOpenPopup: boolean;
};

const CountryPopup = ({ onClose, onSelectCountry, isOpenPopup }: Props) => {
  const [isOpen, setIsOpen] = useState(isOpenPopup);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  const handleCountrySelect = (country: string) => {
    onSelectCountry(country);
    dispatch(setCountry(country));
    closePopup();
  };

  const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const closePopup = debounce(() => {
    setIsOpen(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, 100);

  const popupInnerClassName = `${styles.popupInner} ${isOpen ? '' : styles.fadeOut}`;

  return (
    <div className={styles.popup} onClick={handleBackgroundClick}>
      <div className={popupInnerClassName}>
        <h3 className={styles.popupTitle}>
          Select your location
          <AiOutlineClose onClick={closePopup} />
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
