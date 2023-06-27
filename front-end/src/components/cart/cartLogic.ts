import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { CartItem, removeFromCart, updateCart } from '../../redux/slices/cartSlice';
import styles from './Cart.module.css'

const useCartLogic = (isVisible: boolean, setIsVisible: React.Dispatch<React.SetStateAction<boolean>>) => {
  const dispatch = useDispatch();
  const cartItems: CartItem[] = useSelector((state: RootState) => state.cartItems);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const handleRemoveClick = (item: string) => {
    dispatch(removeFromCart(item));
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    dispatch(updateCart({ id, quantity }));
  };

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      const itemQuantity = item.quantity || 1;
      total += parseFloat(item.price) * itemQuantity;
    });
    return total.toFixed(2);
  };

  useEffect(() => {
    document.body.style.overflow = isVisible ? 'hidden' : 'auto';
    const cartElement = document.querySelector(`.${styles.cart}`);
    if (cartElement) {
      cartElement.style.overflow = isVisible ? 'auto' : 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isVisible]);

  return {
    handleClick,
    handleRemoveClick,
    handleQuantityChange,
    calculateTotal,
  };
};

export default useCartLogic;
