import { useState } from 'react';
import loaderGif from '../../../assets/loader-1.gif'
import Button from '../button';
import { isMobile } from '../../../utils/isMobile';

import styles from './ProductCard.module.css';
import { useFetchProducts } from '../../../hooks/useFetchProducts';
import { addToCart, removeFromCart, updateCartItem } from '../../../redux/slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

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
  const [menuOpenIndex, setMenuOpenIndex] = useState(-1)
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleCardMouseEnter = (index: any) => {
    setHoveredIndex(index);
  };

  const handleCardMouseLeave = () => {
    setHoveredIndex(-1);
  };
  const handleButtonClick = (index: any) => {
    setMenuOpenIndex((prevIndex) => (prevIndex === index ? -1 : index))
    setHoveredIndex(index);
    handleAddToCart(products === index)

  }
  const handleMenuClose = () => {
    setMenuOpenIndex(-1);
  };

  if (products.length === 0) {
    return <div><img style={{ width: 'auto', margin: "0 auto" }} src={loaderGif} /></div>;
  }
  else {
    return (
      <div className={styles['product-card']}>
        {Array.isArray(products) ? (products.map((product: Product, index) => (
          <div
            key={index}
            className={styles.card}
            onMouseEnter={() => handleCardMouseEnter(index)}
            onMouseLeave={handleCardMouseLeave}
          >
            <img key={product.url} src={product.url} alt="Product" />
            <div className={styles.wrapperContent}>
              <div className={styles.wrapperItems}>
                <p key={product.category} className={styles.color}>
                  {product.collection}
                </p>
                <h2 key={product.name}>{product.name}</h2>
                <h3 key={product.color} className={styles.color}>
                  {product.color}
                </h3>
              </div>
              {menuOpenIndex === index && hoveredIndex === index && (
                <ul className={styles.sizeList}>
                  <li onMouseEnter={() => handleCardMouseEnter(index)}>{product.size}</li>
                </ul>
              )}
              <div className={styles.wrapper}>
                <p className={styles.price}>
                  $ {product.price}
                </p>
                {isMobile ? (
                  <Button text="Add to cart" className={styles.button} />
                ) : (
                  hoveredIndex === index && (
                    <Button onClick={() => handleButtonClick(index)} text="Add to cart" className={styles.button} />
                  )
                )
                }
              </div>
            </div>
          </div>
        )))
          : <div><img style={{ margin: "0 auto" }} src={loaderGif} /></div>}
        {(menuOpenIndex !== -1 && hoveredIndex !== menuOpenIndex) && handleMenuClose()}
      </div>
    );
  }

}

export default ProductCard;
