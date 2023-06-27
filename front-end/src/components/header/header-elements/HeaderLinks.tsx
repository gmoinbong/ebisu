import { Link } from 'react-router-dom'
import styles from '../Header.module.css'

const HeaderLinks = () => {
  return (
    <ul className={styles.links}>
      <li><Link to='/products/men'>MEN</Link></li>
      <li><Link to='/products/woman'>WOMAN</Link></li>
      <li><Link to='/products/kids'>ANYTHING ELSE</Link></li>
    </ul>)
}

export default HeaderLinks