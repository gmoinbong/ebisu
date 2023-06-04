import logo from '../../assets/logo.svg'
import { BurgerMenu } from './BurgerMenu'
import { CiSearch } from 'react-icons/ci'
import { BsSuitHeart, BsGeoAlt } from 'react-icons/bs'
import { AiOutlineShopping } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import styles from './Header.module.css'
import { useEffect, useState } from 'react'


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  const handleFocus = () => {
    setIsFocused(true)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      setIsScrolled(scrollTop > 0)
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])


  return (
    <header onFocus={handleFocus} className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <nav className={styles.nav}>
        <div className={styles.burgerMenu}>
          <BurgerMenu />
        </div>
        <div className={styles.switcher}>
          <p>
            <BsGeoAlt />
            Country
          </p>
          <p>USD</p>
        </div>
        <div className={styles.row}>
          <img src={logo} alt="logo" className={styles.logo} />
        </div>
        <div className={styles.helpPannel}>
          <CiSearch style={{ marginRight: "16px", color: '#fff' }} />
          <BsSuitHeart style={{ marginRight: "16px", color: '#fff' }} />
          <AiOutlineShopping style={{ marginRight: "16px", color: '#fff' }} />
          <CgProfile style={{ marginRight: "16px", color: '#fff' }} />
        </div>
      </nav>
      <ul className={`${styles.links} ${isScrolled ? styles.scrolled : ""}`}>
        <li>WHAT'S NEW</li>
        <li>MEN</li>
        <li>ANYTHING ELSE</li>
        <li>EVISU STORIES</li>
        <li>SALE</li>
      </ul>
    </header>
  )
}

export default Header