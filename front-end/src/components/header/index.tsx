import logo from '../../assets/logo.svg';
import { BurgerMenu } from './header-elements/BurgerMenu';
import { BsX } from 'react-icons/bs';

import styles from './Header.module.css';
import SearchComponent from '../search';
import HeaderLinks from './header-elements/HeaderLinks';
import HelpPannel from './header-elements/HelpPannel';
import MobileLinks from './header-elements/MobileLinks';
import CountryPopup from './header-elements/countryPopup';
import { CountryPannel } from './header-elements/countryPannel';
import useHeaderState from './headerHooks/useHeaderState';
import useScroll from './headerHooks/useScroll';

const Header = () => {
  const isScrolled = useScroll();

  const { isSearchVisible, setIsSearchVisible, menuOpen,
    showPopup, handleClickRouteToMain, handleFocus, handleMobileMenuToggle,
    handlePopupClose, handlePopupOpen, toggleSearch, handleCountrySelect, isMobile } = useHeaderState();

  const headerStyles = `${styles.header} ${location.pathname !== '/' ? styles.scrolled : ''}
   ${isScrolled || menuOpen ? styles.scrolled : ''}  ${menuOpen ? styles.mobileHeader : ''}`;
  const imgStyles = `${styles.logo} ${menuOpen ? styles.mobileLogo : ''} ${location.pathname !== '/' ? styles.hovered : ''}`

  return (
    <>
      <header onFocus={handleFocus} className={headerStyles}>
        {isSearchVisible && (
          <SearchComponent
            isSearchVisible={isSearchVisible}
            setIsSearchVisible={setIsSearchVisible}
          />
        )}
        {showPopup && (
          <CountryPopup
            isOpenPopup={showPopup}
            onClose={handlePopupClose}
            onSelectCountry={handleCountrySelect}
          />
        )}
        <nav className={`${styles.nav} ${menuOpen ? styles.mobileNav : ''}`}>
          <div className={styles.burgerMenu}>
            <BurgerMenu toggleMenu={handleMobileMenuToggle} isOpen={menuOpen} />
          </div>
          <div className={styles.switcher}>
            {!isMobile && <CountryPannel popupOpen={handlePopupOpen} />}
            <p> USD</p>
          </div>
          <div className={`${menuOpen ? styles.row : styles.mobileRow} ${isMobile ? styles.headerMobileLogo : ''} `}>
            <img
              src={logo}
              alt="logo"
              onClick={location.pathname !== '/' ? handleClickRouteToMain : undefined}
              className={imgStyles}
            />
            {menuOpen && (
              <BsX
                size={24}
                className={`${styles.crossIcon} crossIcon`}
                onClick={handleMobileMenuToggle}
              />
            )}
          </div>
          {menuOpen ? null : <HelpPannel openPopup={handlePopupOpen} toggleSearch={toggleSearch} />}
        </nav>
        {menuOpen ? <MobileLinks closeMenu={handleMobileMenuToggle} /> : <HeaderLinks />}
      </header>
    </>
  );
};

export default Header;
