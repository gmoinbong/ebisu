import styles from './Cart.module.css'
import { AiOutlineClose } from 'react-icons/ai';
import { BlockData1 } from '../../data/data';
import SingleBlock from '../single-block';
import { useDispatch, useSelector } from 'react-redux';
import { CartItem, removeFromCart } from '../../redux/slices/cartSlice';
import { RootState } from '../../app/store';


type Props = {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}


const CartComponent = ({ isVisible, setIsVisible }: Props) => {
  const dispatch = useDispatch()
  const cartItems: CartItem[] = useSelector((state: RootState) => state.cartItems)

  const handleClick = () => {
    setIsVisible(!isVisible)
  }

  const handleRemoveClick = (item: string) => {
    dispatch(removeFromCart(item))
  }

  return (
    <div className={styles.cart}>
      <div className={styles.cartBlock} >
        <div className={styles.heading}>
          <h3 >Shopping basket </h3>
          <AiOutlineClose onClick={handleClick} className={styles.closeIcon} />
        </div>
        <div>
          <h3></h3>
          <p></p>
          <img src="" alt="" />
        </div>
        <ul>
          {cartItems && cartItems.map((item: CartItem, index: number) =>
            <li className={styles.listItem} key={index}>
              <img className={styles.img} src={item.url} alt="product" />
              <div className={styles.wrapper}>
                <p>{item.name}</p>
                <p>Size: {item.size}</p>
                <p>{item.price}</p>
                <AiOutlineClose onClick={() => handleRemoveClick(item.id)}
                  className={styles.closeIcon} />
              </div>
            </li>
          )}
        </ul>
        <h4>Summary:</h4>
        {/* <p>SubTotal<span>{item.size}</span></p> */}
      </div>
    </div >
  )
}

export default CartComponent;
