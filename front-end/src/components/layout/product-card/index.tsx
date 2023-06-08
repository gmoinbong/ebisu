import axios from 'axios';
import { useEffect, useState } from 'react';
import { isMobile } from '../../../utils/isMobile';
import Button from '../button';

import styles from './ProductCard.module.css'

interface Product {
  collection: string,
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
  const [isHovered, setIsHovered] = useState(false);
  const handleCardMouseEnter = () => {
    setIsHovered(true);
  };

  const handleCardMouseLeave = () => {
    setIsHovered(false);
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
    <div className={styles['product-card']} >
      {items.map((item, index) => (
        <div key={index} className={styles.card}
          onMouseEnter={handleCardMouseEnter} onMouseLeave={handleCardMouseLeave}>
          <img key={item.url} src={item.url} alt="Product" />
          <div className={styles.wrapperItems}>
            <p key={item.category} className={styles.color}>{item.collection}</p>
            <h2 key={item.name} >{item.name}</h2>
            <h3 key={item.color} className={styles.color}>{item.color}</h3>
          </div>
          <div key={item.category + index} className={styles.wrapper}>
            <p key={item.price} className={styles.price}>$ {item.price}</p>
            {isMobile ? < Button text='Add to cart' className={styles.button} />
              : isHovered && <Button key={item.gender + index}
                text='Add to cart' className={styles.button} />}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
