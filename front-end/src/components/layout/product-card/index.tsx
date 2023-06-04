import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from './ProductCard.module.css'
import Button from '../button';

interface Product {
  _id: string;
  price: string,
  name: string,
  category: string,
  gender: string,
  color: string,
  size: string,
  url: string
}

function ProductCard() {
  const [items, setItems] = useState<Product[]>([])
  const [isFocused, setIsFocused] = useState(false);

  const handleCardFocus = () => {
    setIsFocused(true);
  };

  const handleCardBlur = () => {
    setIsFocused(false);
  };

  useEffect(() => {
    axios.get<Product[]>('http://localhost:5172/api/Clothes')
      .then((response) => {
        setItems(response.data)
        console.log(response.data);
      })
      .catch((error) => {
        console.log('Error fetching clothes', error);
      })
  }, [])


  return (
    <div
      className={`${styles['product-card']} ${isFocused ? styles.focused : ''}`}
      onFocus={handleCardFocus}
      onBlur={handleCardBlur}
    >
      {items.map((item, index) => (
        <div key={index} className={styles.card}>
          <img src={item.url} alt="Product" />
          <h2>{item.name}</h2>
          <h3>{item.color}</h3>
          <p>$ {item.price}</p>
          <Button text='Add to Cart'></Button>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
