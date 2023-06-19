import { AiOutlineShopping } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { CiSearch } from 'react-icons/ci'
import styles from './Header.module.css'
import CartComponent from '../cart'
import { useState } from 'react'
import Dropdown from './Dropdown'

type Props = {
  toggleSearch: () => void
}

const HelpPannel = ({ toggleSearch }: Props) => {
  const [isCartVisible, setIsCartVisible] = useState(false)
  const [showAuth, setShowAuthModal] = useState(false);

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible)
  }


  const handleProfileClick = () => {
    setShowAuthModal(!showAuth);
  };

  return (
    <>
      {isCartVisible && <CartComponent isVisible={isCartVisible} setIsVisible={setIsCartVisible} />}
      {showAuth && <Dropdown handleProfileClick={handleProfileClick} />}
      <div className={styles.helpPannel}>
        <CiSearch onClick={toggleSearch} style={{ cursor: 'pointer', marginRight: '16px', color: '#fff' }} />
        <AiOutlineShopping onClick={toggleCart} style={{ cursor: 'pointer', marginRight: '16px', color: '#fff' }} />
        <CgProfile onClick={handleProfileClick} style={{ cursor: 'pointer', marginRight: '16px', color: '#fff' }} />
      </div>
    </>
  )
}

export default HelpPannel