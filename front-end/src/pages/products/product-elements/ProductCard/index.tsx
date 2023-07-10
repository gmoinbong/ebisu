import { Link } from 'react-router-dom';
import Button from '../../../../components/layout/button';
import LoaderGif from '../../../../components/layout/loaderGif';
import styles from './ProductCard.module.css';
import { availableSizes } from '../../../../data/availableSizesData';
import { useState } from 'react';
import { useProductCard } from './useProductCard';
import { useProductCardActions } from './useProductCardActions';
import useIsMobile from '../../../../utils/useIsMobile';

type Props = {
  isOpenFilter: boolean;
};

function ProductCard({ isOpenFilter }: Props) {
  const {
    menuOpenIndex,
    hoveredIndex,
    visibleProductsCount,
    renderProducts,
    handleCardMouseEnter,
    handleCardMouseLeave,
    handleButtonClick,
    loadMoreProducts,
  } = useProductCard();
  const isMobile = useIsMobile();

  const { handleCartAdd } = useProductCardActions();

  const [selectedSize, setSelectedSize] = useState('');

  const handleSizeSelect = (itemSize: string) => {
    setSelectedSize(itemSize);
    const product = renderProducts[menuOpenIndex];
    if (itemSize === 'one-size' || product.size.includes(itemSize)) {
      handleCartAdd(menuOpenIndex, product, itemSize);
    }
  };

  if (renderProducts.length === 0) {
    return <LoaderGif />;
  }

  return (
    <>
      <div className={`${styles.productCard} ${isOpenFilter ? styles.filterOpened : ''}`}>
        {Array.isArray(renderProducts) ? (
          renderProducts.slice(0, visibleProductsCount).map((product, index) => (
            <div
              key={index}
              className={styles.card}
              onMouseEnter={() => handleCardMouseEnter(index)}
              onMouseLeave={handleCardMouseLeave}
            >
              <Link to={`${product.name}`}>
                <img key={product.url} src={product.url} alt="Product" />
              </Link>
              <div className={styles.wrapperItems}>
                <p key={product.category} className={styles.color}>
                  {product.collection}
                </p>
                <Link to={`${product.name}`}>
                  <h2 key={product.name}>{product.name}</h2>
                </Link>
                <h3 key={product.color} className={styles.color}>
                  {product.color}
                </h3>
              </div>
              {menuOpenIndex === index && hoveredIndex === index && (
                <ul className={styles.sizeList}>
                  {product.category !== "cap" ? (
                    availableSizes.map((size) => (
                      <li key={size}>
                        <p
                          onClick={() => handleSizeSelect(size)}
                          className={!product.size.includes(size) ? styles.outOfStock : ''}
                        >
                          {size} {!product.size.includes(size) ? '(Out of stock)' : ''}
                        </p>
                      </li>
                    ))
                  ) : (
                    <li>
                      <p onClick={() => handleSizeSelect('one-size')}>one-size</p>
                    </li>
                  )}
                </ul>
              )}
              <div className={styles.wrapper}>
                <p className={styles.price}>$ {product.price}</p>
                {isMobile ? (
                  <Button onClick={() => handleButtonClick(index)} text="Add to cart" className={styles.button} />
                ) : (
                  hoveredIndex === index && (
                    <Button onClick={() => handleButtonClick(index)} text="Add to cart" className={styles.button} />
                  )
                )}
              </div>
            </div>
          ))
        ) : (
          <LoaderGif />
        )}
      </div>
      {visibleProductsCount < renderProducts.length && (
        <Button
          top="0"
          left={` ${isMobile ? '40%' : '45%'}`}
          position="relative"
          text="Load More"
          margin="30px auto 10px "
          backgroundColor="#000"
          onClick={loadMoreProducts}
        />
      )}
    </>
  );
}

export default ProductCard;
