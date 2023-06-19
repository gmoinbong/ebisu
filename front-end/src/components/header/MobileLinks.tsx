import { AiOutlineRight } from 'react-icons/ai';
import styles from './Header.module.css';

const MobileLinks = () => {

  return (
    <ul>
      <li className={styles.category}><p>men</p><AiOutlineRight /></li>
      <li className={styles.category}><p>women</p><AiOutlineRight /></li>
      <li className={styles.category}><p>Account</p><AiOutlineRight /></li>
      <li className={styles.category}><p>Region</p><AiOutlineRight /></li>
      <li className={styles.category}><p>Language</p><AiOutlineRight /></li>
    </ul>
  );
};

export default MobileLinks;
