import { AiOutlineRight } from 'react-icons/ai';
import styles from '../Header.module.css';
import { Link } from 'react-router-dom';

type Props = {
  closeMenu: () => void
}

const MobileLinks = ({ closeMenu }: Props) => {

  return (
    <ul>
      <li className={styles.category}><Link onClick={closeMenu} style={{ textDecoration: 'none' }} to='/products/men'> <p>men</p></Link><AiOutlineRight /></li>
      <li className={styles.category}> <Link onClick={closeMenu} style={{ textDecoration: 'none' }} to='/products/woman'><p>woman</p></Link><AiOutlineRight /></li>
      <li className={styles.category}><Link onClick={closeMenu} style={{ textDecoration: 'none' }} to='/account'><p>Account</p></Link><AiOutlineRight /></li>
    </ul>
  );
};

export default MobileLinks;
