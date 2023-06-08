import { AiOutlineShopping } from 'react-icons/ai'
import { BsSuitHeart } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { CiSearch } from 'react-icons/ci'
import styles from './Header.module.css'
const HelpPannel = () => {
  return (
    <div className={styles.helpPannel}>
      <CiSearch style={{ marginRight: '16px', color: '#fff' }} />
      <BsSuitHeart style={{ marginRight: '16px', color: '#fff' }} />
      <AiOutlineShopping style={{ marginRight: '16px', color: '#fff' }} />
      <CgProfile style={{ marginRight: '16px', color: '#fff' }} />
    </div>
  )
}

export default HelpPannel