import { AiOutlineShopping } from 'react-icons/ai'
import { BsSuitHeart } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { CiSearch } from 'react-icons/ci'
import styles from './Header.module.css'
import CartComponent from '../cart'
import { useState } from 'react'
import SearchComponent from '../search'
import AuthModal from '../../auth/modal'
const HelpPannel = () => {
  const [isCartVisible, setIsCartVisible] = useState(false)
  const [isSearchVisible, setIsSearchtVisible] = useState(false)
  const [isAuthVisible, setIsAuthVisible] = useState(false)

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible)
  }
  const toggleSearch = () => {
    setIsSearchtVisible(!isCartVisible)
  }
  const toggleAuthModal = () => {
    setIsAuthVisible(!isAuthVisible)
  }
  return (
    <>
      {isCartVisible && <CartComponent isVisible={isCartVisible} setIsVisible={setIsCartVisible} />}
      {isSearchVisible && <SearchComponent isVisible={isSearchVisible} setIsVisible={setIsSearchtVisible} />}
      {isAuthVisible && <AuthModal isVisible={isAuthVisible} setIsVisible={setIsAuthVisible} />}
      <div className={styles.helpPannel}>
        <CiSearch onClick={toggleSearch} style={{ marginRight: '16px', color: '#fff' }} />
        <BsSuitHeart onClick={toggleCart} style={{ marginRight: '16px', color: '#fff' }} />
        <AiOutlineShopping style={{ marginRight: '16px', color: '#fff' }} />
        <CgProfile onClick={toggleAuthModal} style={{ marginRight: '16px', color: '#fff' }} />
      </div>
    </>
  )
}

export default HelpPannel