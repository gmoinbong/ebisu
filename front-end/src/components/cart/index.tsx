import styles from './Cart.module.css';
import { useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import Button from '../layout/Button';
import { CartItem } from '../../redux/slices/cartSlice';
import useCartLogic from './cartLogic';
import QuantitySelect from './QuantitySelect';
import { Link } from 'react-router-dom';

type Props = {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const Cart = ({ isVisible, setIsVisible }: Props) => {
  const cartItems: CartItem[] = useSelector((state: RootState) => state.cartItems);

  const { handleClick, handleRemoveClick, handleQuantityChange, calculateTotal, handleCheckoutCart, showSuccessNotification, setShowSuccessNotification } = useCartLogic(
    isVisible,
    setIsVisible,
  );

  const onClose = () => {
    undefined
  };

  useEffect(() => {
    if (showSuccessNotification) {
      const timer = setTimeout(() => {
        setShowSuccessNotification(false);
        onClose();
      }, 3000);

      return () => {
        setIsVisible(!isVisible)
        clearTimeout(timer);
      };
    }
  }, [showSuccessNotification, onClose]);


  const handleCheckoutCartWithNotification = () => {
    handleCheckoutCart();
  };

  return (
    <div className={`${styles.cart} ${isVisible ? styles.cartVisible : ''} ${isVisible ? styles.darkOverlay : ''}`}>

      <div className={styles.cartBlock}>
        <div className={styles.heading}>
          <h3>Shopping basket</h3>
          <AiOutlineClose onClick={handleClick} className={styles.closeIcon} />
        </div>
        <div>
          <h3></h3>
          <p></p>
          <img src="" alt="" />
        </div>
        <div className={styles.blockWrapper} style={showSuccessNotification ? { justifyContent: 'flex-start', marginTop: '10px', alignItems: 'center' } : { display: 'flex' }}>
          {cartItems.length === 0 ? (showSuccessNotification ? (
            <div className={styles.successNotification} onClick={onClose}>
              <p>Purchase was successful!</p>
              <Link to="/account" className={styles.accountLink}>
                Go to Account
              </Link>
            </div>)
            : < p className={styles.emptyCartMessage}>You have no items in your shopping cart.</p>

          ) : (
            <>
              <ul className={styles.product}>
                {cartItems.map((item: CartItem, index: number) => (
                  <li className={styles.listItem} key={index}>
                    <img className={styles.img} src={item.url} alt="product" />
                    <div className={styles.wrapper}>
                      <div className={styles.itemName}>
                        <p className={styles.name}>{item.name}</p>
                        <AiOutlineClose
                          onClick={() => handleRemoveClick(item.id as any)}
                          className={styles.closeIcon}
                        />
                      </div>
                      <p>
                        Size: <span className={styles.size}>{item.size} / {item.color}</span>
                      </p>
                      <p>{item.price}</p>
                      <QuantitySelect id={item.id} onSelect={handleQuantityChange} />
                    </div>
                  </li>
                ))}
              </ul>
              <div className={styles.check}>
                <h4 className={styles.summary}>Summary:</h4>
                <p>
                  Grand Total: $ <span>{calculateTotal()}</span>
                </p>
                <Button onClick={handleCheckoutCartWithNotification} text='CHECKOUT NOW' backgroundColor="#000" width="100%" />
              </div>
            </>
          )}
        </div>
      </div>
    </div >
  );
};

export default Cart;
