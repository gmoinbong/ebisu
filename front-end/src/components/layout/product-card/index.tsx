import axios from 'axios';
import { useEffect, useState } from 'react';
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
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = window.innerWidth <= 768
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
          <img key={index} src={item.url} alt="Product" />
          <h2 key={index} >{item.name}</h2>
          <h3 key={index} className={styles.color}>{item.color}</h3>
          <div key={index} className={styles.wrapper}>
            <p key={index} className={styles.price}>$ {item.price}</p>
            {isMobile ? <Button text='Add to cart' className={styles.button} />
              : isHovered && <Button key={index} text='Add to cart' className={styles.button} />}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
