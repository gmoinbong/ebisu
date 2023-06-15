import { useState } from 'react';
import loaderGif from '../../../assets/loader-1.gif'
import Button from '../button';
import { isMobile } from '../../../utils/isMobile';

import styles from './ProductCard.module.css';
import { useFetchProducts } from '../../../hooks/useFetchProducts';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/slices/cartSlice';
import { Product } from '../../../redux/slices/productSlice';

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
                <ul onMouseEnter={() => handleCardMouseEnter(index)} className={styles.sizeList}>
                  <li>
                    <p onClick={() => handleCartAdd(index)}> {product.size}</p> </li>
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