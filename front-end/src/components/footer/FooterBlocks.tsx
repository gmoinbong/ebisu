import footer1 from '../../assets/footer/footer1.png'
import footer2 from '../../assets/footer/icon_1.png'
import footer3 from '../../assets/footer/footer3.png'
import footer4 from '../../assets/footer/icon_2.png'

import styles from './Footer.module.css'

const FooterBlocks = () => {
  return (
    <div className={styles.inner}>
      <ul className={styles.footer}>
        <li className={styles.list}>
          <img className={styles.img} src={footer1} />
          <span className={styles.text}>
            Complimentary
            <br />
            Shipping for any
            <br />
            ORDER USD$150
          </span>
        </li>
        <li className={styles.list}> <img className={styles.img} src={footer2} />
          <span className={styles.text}>
            Free shipping
            <br />
            with  all jeans
          </span>
        </li>
        <li className={styles.list}>
          <img className={styles.img} src={footer3} />
          <span className={styles.text}>
            Complimentary
            <br />
            Evisu gift-wrapping
          </span>
        </li>
        <li className={styles.list}>
          <img className={styles.img} src={footer4} />
          <span className={styles.text}>
            14 DAYS RETURN
            <br />
            OR EXCHANGE
          </span>
        </li>
      </ul>
    </div>
  )
}

export default FooterBlocks