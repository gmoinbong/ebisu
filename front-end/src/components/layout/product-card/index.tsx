import { useState } from 'react';
import loaderGif from '../../../assets/loader-1.gif'
import Button from '../button';
import { isMobile } from '../../../utils/isMobile';

import styles from './ProductCard.module.css';
import { useFetchProducts } from '../../../hooks/useFetchProducts';

export interface Product {
  collection: string;
  price: string;
  name: string;
  category: string;
  gender: string;
  color: string;
  size: string;
  url: string;
}

function ProductCard() {
  const products = useFetchProducts()
  const [isHovered, setIsHovered] = useState(false);

  const handleCardMouseEnter = () => {
    setIsHovered(true);
  };

  const handleCardMouseLeave = () => {
    setIsHovered(false);
  };


  if (!products) {
    return loaderGif;
  }

  return (
    <div className={styles['product-card']}>
      {Array.isArray(products) ? (products.map((product: Product, index) => (
        <div
          key={index}
          className={styles.card}
          onMouseEnter={handleCardMouseEnter}
          onMouseLeave={handleCardMouseLeave}
        >
          <img key={product.url} src={product.url} alt="Product" />
          <div className={styles.wrapperItems}>
            <p key={product.category} className={styles.color}>
              {product.collection}
            </p>
            <h2 key={product.name}>{product.name}</h2>
            <h3 key={product.color} className={styles.color}>
              {product.color}
            </h3>
          </div>
          <div key={product.category + index} className={styles.wrapper}>
            <p key={product.price} className={styles.price}>
              $ {product.price}
            </p>
            {isMobile ? (
              <Button text="Add to cart" className={styles.button} />
            ) : (
              isHovered && (
                <Button key={product.gender + index} text="Add to cart" className={styles.button} />
              )
            )}
          </div>
        </div>
      )))
        : <div>{loaderGif}</div>}
    </div>
  );
}

export default ProductCard;
