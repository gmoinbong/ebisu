import { AiOutlineClose } from 'react-icons/ai';
import { BlockData1 } from '../../data/data';
import SingleBlock from '../single-block';
import styles from './Cart.module.css'

const products = ['item1', 'item2']


const CartComponent = () => {
  return (
    <div className={styles.cart}>
      <div className={styles.cartBlock} >
        <div className={styles.heading}>
          <h3 >Shopping basket </h3>
          <AiOutlineClose className={styles.closeIcon} />
        </div>
        <SingleBlock  {...BlockData1} />
        {products.length > 0 ? products.map((item, index) =>
          <ul>
            <li className={styles.listItem} key={index}>{item}
              <AiOutlineClose className={styles.closeIcon} />
            </li>
          </ul>
        ) : <p>Your cart is empty</p>}
      </div>
    </div >
  )
}

export default CartComponent;
