import { AiOutlineShopping } from 'react-icons/ai'
import { BsSuitHeart } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { CiSearch } from 'react-icons/ci'
import styles from './Header.module.css'
import CartComponent from '../cart'
import { useState } from 'react'
const HelpPannel = () => {
  const [isVisible, setIsVisible] = useState(false)
  const toggleSideBar = () => {
    setIsVisible(!isVisible)
  }

  return (
    <> {isVisible && <CartComponent />}
      <div className={styles.helpPannel}>
        <CiSearch style={{ marginRight: '16px', color: '#fff' }} />
        <BsSuitHeart onClick={toggleSideBar} style={{ marginRight: '16px', color: '#fff' }} />
        <AiOutlineShopping style={{ marginRight: '16px', color: '#fff' }} />
        <CgProfile style={{ marginRight: '16px', color: '#fff' }} />
      </div>
    </>
  )
}

export default HelpPannel