import { AiOutlineShopping } from 'react-icons/ai'
import { BsSuitHeart } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { CiSearch } from 'react-icons/ci'
import styles from './Header.module.css'
import CartComponent from '../cart'
import { useState } from 'react'
import SearchComponent from '../search'
import Dropdown from './Dropdown'
const HelpPannel = () => {
  const [isCartVisible, setIsCartVisible] = useState(false)
  const [isSearchVisible, setIsSearchtVisible] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false);

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible)
  }
  const toggleSearch = () => {
    setIsSearchtVisible(!isCartVisible)
  }

  const handleProfileClick = () => {
    setShowAuthModal(!showAuthModal);
  };

  return (
    <>
      {isCartVisible && <CartComponent isVisible={isCartVisible} setIsVisible={setIsCartVisible} />}
      {isSearchVisible && <SearchComponent isVisible={isSearchVisible} setIsVisible={setIsSearchtVisible} />}
      {showAuthModal && <Dropdown handleProfileClick={handleProfileClick} />}
      <div className={styles.helpPannel}>
        <CiSearch onClick={toggleSearch} style={{ marginRight: '16px', color: '#fff' }} />
        <AiOutlineShopping onClick={toggleCart} style={{ marginRight: '16px', color: '#fff' }} />
        <CgProfile onClick={handleProfileClick} style={{ marginRight: '16px', color: '#fff' }} />
      </div>
    </>
  )
}

export default HelpPannel