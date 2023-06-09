import logo from '../../assets/logo.svg';
import { BurgerMenu } from './BurgerMenu';
import { BsGeoAlt, BsX } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import HelpPannel from './HelpPannel';

import styles from './Header.module.css';

const Header = () => {
  const location = useLocation();

  const navigate = useNavigate()
  const routeChange = (path: string) => {
    navigate(path)
  }

  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const headerStyles = `${styles.header} ${location.pathname !== '/' ? styles.scrolled : ''} ${isScrolled || menuOpen ? styles.scrolled : ''}`;
  const imgStyles = `${styles.logo} ${menuOpen ? styles.mobileLogo : ''} ${location.pathname !== '/' ? styles.hovered : ''}`

  const handleFocus = () => {
    setIsScrolled(true);
  };

  const handleMobileMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  const handleClickRouteToMain = () => routeChange('/')



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
    <header onFocus={handleFocus} className={headerStyles}>
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
        {menuOpen ? null : <HelpPannel />}
      </nav >
      <ul className={`${styles.links} ${menuOpen ? styles.mobileLinks : ''}`}>
        <li>WHAT'S NEW</li>
        <li>MEN</li>
        <li>ANYTHING ELSE</li>
        <li>EVISU STORIES</li>
        <li>SALE</li>
      </ul>
    </header >
  );
};

export default Header;
