import { useParams } from 'react-router-dom';
import { useFetchProduct } from '../../hooks/useFetchProduct';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';
import Button from '../../components/layout/button';
import PagesInformer from '../../components/pages-informer';
import LoaderGif from '../../components/layout/loaderGif';
import styles from './Product.module.css';
import ReturnPolicy from './ReturnPolicy';
import { availableSizes } from '../../data/data';

const ProductComponent = () => {
  const { id } = useParams();
  const product = useFetchProduct(id);
  const dispatch = useDispatch();


  if (product?.length === 0 || product === null) {
    return <LoaderGif />;
  }

  const handleCartAdd = () => {
    dispatch(
      addToCart({
        name: product[0].name,
        url: product[0].url,
        size: product[0].size,
      })
    );
  };

  const {
    collection,
    price,
    name,
    category,
    gender,
    color,
    size,
    url,
  } = product[0];

  return (
    <>
      <PagesInformer />
      <div className={styles.wrapper}>
        <div className={styles.imageContainer}>
          <img className={styles.image} alt="product" src={url} />
        </div>
        <div className={styles.detailsContainer}>
          <div className={styles.detailsWrapper}>
            <p className={styles.collection}>{collection}</p>
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.color}>Color: {color}</p>
          </div>
          <p className={styles.gender}>Gender: {gender}</p>
          <p className={styles.category}>Category: {category}</p>
          <p className={styles.price}>Price: {price}</p>
          <div className={styles.sizeBlock}>
            <p>Available Sizes:</p>
            <ul className={styles.sizeList}>
              {availableSizes.map((sizeOption) => (
                <li key={sizeOption} className={styles.sizeOption}>
                  {sizeOption}
                </li>
              ))}
            </ul>
          </div>
          <Button
            className={styles.addButton}
            text="Add to Cart"
            onClick={handleCartAdd}
          />
          <ReturnPolicy />
        </div>
      </div>
    </>
  );
};

export default ProductComponent;
