import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../button';

import styles from './ProductCard.module.css';
import { isMobile } from '../../../utils/isMobile';
import { fetchProducts } from '../../../redux/slices/productSlice';
import { RootState } from '../../../app/store';

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
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useDispatch();
  const selectProducts = (state: RootState) => state.products.products;
  const products = useSelector(selectProducts);
  const [isHovered, setIsHovered] = useState(false);

  const handleCardMouseEnter = () => {
    setIsHovered(true);
  };

  const handleCardMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);



  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles['product-card']}>
      {products.map((product: Product, index) => (
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
      ))}
    </div>
  );
}

export default ProductCard;
