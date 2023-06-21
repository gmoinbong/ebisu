import styles from './ProductCard.module.css';

import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useFetchProducts } from '../../../hooks/useFetchProducts';
import { addToCart } from '../../../redux/slices/cartSlice';
import { Product } from '../../../redux/slices/productSlice';
import { isMobile } from '../../../utils/isMobile';
import Button from '../button';
import loaderGif from '../../../assets/loader-1.gif'
import { Link } from 'react-router-dom';

function ProductCard() {
  const products = useFetchProducts()
  const dispatch = useDispatch()

  const [menuOpenIndex, setMenuOpenIndex] = useState(-1)
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleCardMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleCardMouseLeave = () => {
    setHoveredIndex(-1);
  };

  const availableSizes = ['s', 'm', 'l', 'xl'];

  const handleButtonClick = (index: number,) => {
    setMenuOpenIndex((prevIndex) => (prevIndex === index ? -1 : index))
    setHoveredIndex(index);
  }

  const handleCartAdd = (index: number) => {
    dispatch(addToCart({
      price: products[index].price,
      color: products[index].color,
      name: products[index].name,
      size: products[index].size,
      url: products[index].url
    }));
  }

  if (products.length === 0) {
    return <div><img style={{ width: 'auto', margin: "0 auto" }} src={loaderGif} /></div>;
  }
  else {
    return (
      <div className={styles['product-card']}>
        {Array.isArray(products) ? (products.map((product: Product, index) => (
          <div key={index}
            className={styles.card}
            onMouseEnter={() => handleCardMouseEnter(index)}
            onMouseLeave={handleCardMouseLeave}>
            <Link to={`/${product.name}`}>
              <img key={product.url} src={product.url} alt="Product" />
            </Link>
            <div className={styles.wrapperContent}>
              <div className={styles.wrapperItems}>
                <p key={product.category} className={styles.color}>
                  {product.collection}
                </p>
                <Link to={`/${product.name}`}>
                  <h2 key={product.name}>{product.name}</h2>
                </Link>
                <h3 key={product.color} className={styles.color}>
                  {product.color}
                </h3>
              </div>
              {menuOpenIndex === index && hoveredIndex === index && (
                <ul onMouseEnter={() => handleCardMouseEnter(index)} className={styles.sizeList}>
                  {availableSizes.map((size) => (
                    <li key={size}>
                      <p
                        onClick={() => handleCartAdd(index)}
                        className={!product.size.includes(size) ? styles.outOfStock : ''}
                      >
                        {size} {!product.size.includes(size) ? '(Out of stock)' : ''}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
              <div className={styles.wrapper}>
                <p className={styles.price}>
                  $ {product.price}
                </p>
                {isMobile ? (
                  <Button onClick={() => handleButtonClick(index)} text="Add to cart" className={styles.button} />
                ) : (
                  hoveredIndex === index && (
                    <Button onClick={() => handleButtonClick(index)} text="Add to cart" className={styles.button} />
                  ))}
              </div>
            </div>
          </div>
        )))
          : <div><img style={{ margin: "0 auto" }} src={loaderGif} /></div>
        }
      </div >
    );
  }
}
export default ProductCard