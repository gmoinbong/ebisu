import { AiOutlineShopping } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { CiSearch } from 'react-icons/ci'
import styles from '../Header.module.css'
import { useState } from 'react'
import Dropdown from './Dropdown'
import Cart from '../../Cart'
import { CountryPannel } from './countryPannel'
import useIsMobile from '../../../utils/useIsMobile'

type Props = {
  toggleSearch: () => void
  openPopup: () => void
}

const HelpPannel = ({ toggleSearch, openPopup }: Props) => {
  const isMobile = useIsMobile()
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
      {isCartVisible && <Cart isVisible={isCartVisible} setIsVisible={setIsCartVisible} />}
      {showAuth && <Dropdown handleProfileClick={handleProfileClick} />}
      <div className={styles.helpPannel}>
        <CiSearch onClick={toggleSearch} style={{ cursor: 'pointer', marginRight: '16px', color: '#fff' }} />
        {isMobile ? < CountryPannel popupOpen={openPopup} /> : null}
        <AiOutlineShopping onClick={toggleCart} style={{ cursor: 'pointer', marginRight: '16px', color: '#fff' }} />
        <CgProfile onClick={handleProfileClick} style={{ cursor: 'pointer', marginRight: '16px', color: '#fff' }} />
      </div>
    </>
  )
}

export default HelpPannel