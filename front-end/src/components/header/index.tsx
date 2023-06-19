import logo from '../../assets/logo.svg';
import { BurgerMenu } from './BurgerMenu';
import { BsGeoAlt, BsX } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import HelpPannel from './HelpPannel';

import styles from './Header.module.css';
import SearchComponent from '../search';
import { useRouteChange } from '../../hooks/useRouteChange';
import HeaderLinks from './HeaderLinks';
import MobileLinks from './MobileLinks';

const Header = () => {
  const routeChange = useRouteChange()

  const [isSearchVisible, setIsSearchVisible] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const headerStyles = `${styles.header} ${location.pathname !== '/' ? styles.scrolled : ''}
   ${isScrolled || menuOpen ? styles.scrolled : ''}  ${menuOpen ? styles.mobileHeader : ''}`;
  const imgStyles = `${styles.logo} ${menuOpen ? styles.mobileLogo : ''} ${location.pathname !== '/' ? styles.hovered : ''}`

  const handleFocus = () => {
    setIsScrolled(true);
  };

  const handleMobileMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  const handleClickRouteToMain = () => routeChange('/')

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible)
  }


  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header onFocus={handleFocus} className={headerStyles}>
        {isSearchVisible && <SearchComponent isSearchVisible={isSearchVisible} setIsSearchVisible={setIsSearchVisible} />}
        <nav className={`${styles.nav} ${menuOpen ? styles.mobileNav : ''}`}>
          <div className={styles.burgerMenu}>
            <BurgerMenu toggleMenu={handleMobileMenuToggle} isOpen={menuOpen} />
          </div>
          <div className={styles.switcher}>
            <p>
              <BsGeoAlt />
              Country
            </p>
            <p>USD</p>
          </div>
          <div className={menuOpen ? styles.row : styles.mobileRow}>
            <img src={logo} alt="logo" onClick={
              location.pathname !== '/' ? handleClickRouteToMain : undefined}
              className={imgStyles} />
            {menuOpen && (
              <BsX size={24} className={`${styles.crossIcon} crossIcon`} onClick={handleMobileMenuToggle} />)}
          </div >
          {menuOpen ? null : <HelpPannel toggleSearch={toggleSearch} />}
        </nav >
        {menuOpen ? <MobileLinks /> : <HeaderLinks />}
      </header >
    </>
  );
};

export default Header;
