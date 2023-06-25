import styles from './ProductCard.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import Button from '../../../../components/layout/button';
import { availableSizes } from '../../../../data/availableSizesData';
import { useFetchProducts } from '../../../../hooks/useFetchProducts';
import { addToCart } from '../../../../redux/slices/cartSlice';
import { Product } from '../../../../redux/slices/productSlice';
import { isMobile } from '../../../../utils/isMobile';
import LoaderGif from '../../../../components/layout/loaderGif';
import { RootState } from '../../../../app/store';
import { resetFilterOptions } from '../../../../redux/slices/filterSilce';

type Props = {
  isOpenFilter: boolean;
};

function ProductCard({ isOpenFilter }: Props) {
  const [menuOpenIndex, setMenuOpenIndex] = useState(-1);
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const products = useFetchProducts();
  const filteredProducts = useSelector((state: RootState) => state.products.filteredProducts);
  const selectedOptions = useSelector((state: RootState) => state.filter.selectedOptions);
  const isFiltered = useSelector((state: RootState) => state.filter.isFiltered);
  console.log('isFilterd', isFiltered);

  const dispatch = useDispatch();
  const location = useLocation()
  const path = location.pathname
  useEffect(() => {
    dispatch(resetFilterOptions());
  }, [dispatch, path]);

  let renderProducts: Product[] = selectedOptions && Object.keys(selectedOptions).length > 0 && isFiltered
    ? filteredProducts
    : products;
  useEffect(() => {
    if (selectedOptions && Object.keys(selectedOptions).length > 0 && isFiltered) {
      renderProducts = filteredProducts;
    } else {
      renderProducts = products;
    }
  }, [selectedOptions, isFiltered, products, filteredProducts]);

  const handleCardMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleCardMouseLeave = () => {
    setHoveredIndex(-1);
  };

  const handleButtonClick = (index: number) => {
    setMenuOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
    setHoveredIndex(index);
  };

  const handleCartAdd = (index: number) => {
    dispatch(addToCart({
      price: renderProducts[index].price,
      color: renderProducts[index].color,
      name: renderProducts[index].name,
      size: renderProducts[index].size,
      url: renderProducts[index].url
    }));
  };

  if (renderProducts.length === 0) {
    return <><LoaderGif /></>;
  } else {
    return (
      <div className={`${styles.productCard} ${isOpenFilter ? styles.filterOpened : ''}`}>
        {Array.isArray(renderProducts) ? (
          renderProducts.map((product: Product, index) => (
            <div
              key={index}
              className={styles.card}
              onMouseEnter={() => handleCardMouseEnter(index)}
              onMouseLeave={handleCardMouseLeave}
            >
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
                  <ul className={styles.sizeList}>
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
          ))
        ) : (
          <LoaderGif />
        )}
      </div>
    );
  }
}

export default ProductCard;
