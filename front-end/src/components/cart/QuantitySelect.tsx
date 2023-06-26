import React, { useState } from 'react';
import styles from './Cart.module.css';

type QuantitySelectProps = {
  id: string;
  onSelect: (id: string, quantity: number) => void;
};

const QuantitySelect: React.FC<QuantitySelectProps> = ({ onSelect, id }) => {
  const [quantity, setQuantity] = useState(1);
  const [isVisibleSelect, setIsVisibleSelect] = useState(false)

  const handleQuantityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
  };

  const handleConfirmClick = () => {
    onSelect(id, quantity);
    setIsVisibleSelect(!isVisibleSelect)
  };
  const handleOpenSelect = () => {
    setIsVisibleSelect(!isVisibleSelect)
  }
  return (
    <div className={styles.selectContainer}>
      {isVisibleSelect ? <>
        <select className={styles.select} value={quantity} onChange={handleQuantityChange}>
          {[1, 2, 3, 4, 5].map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
        <p className={styles.confirm} onClick={handleConfirmClick}>Confirm</p></> : <>
        <span className={styles.quantity}> Quantity: {quantity}</span>
        <p className={styles.confirm} onClick={handleOpenSelect}>Change</p></>
      }
    </div>
  );
};

export default QuantitySelect;
