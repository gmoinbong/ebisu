import { useParams } from 'react-router-dom';
import { useFetchProduct } from '../../hooks/useFetchProduct';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';
import Button from '../../components/layout/button';
import PagesInformer from '../../components/pages-informer';
import LoaderGif from '../../components/layout/loaderGif';
import styles from './Product.module.css';
import { availableSizes } from '../../data/data';
import Accordion from './Accordion';
import { ReturnPolicy } from './ReturnPolicy';
import Descrpition from './Descrpition';
import ProductSlider, { ProductSliderItem } from '../../components/slider/ProductSlider';
import { useRouteChange } from '../../hooks/useRouteChange';

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
      <div className={styles.productComponent}>
        <div className={styles.wrapper}>
          <div className={styles.imageContainer}>
            <ProductSlider maxWidth={'500px'} width={'100%'}>
              <ProductSliderItem><img className={styles.image} alt="product" src={url} /></ProductSliderItem>
              <ProductSliderItem><img className={styles.image} alt="product" src={url} /></ProductSliderItem>
            </ProductSlider>
          </div>
          <div className={styles.detailsContainer}>
            <div className={styles.detailsWrapper}>
              <p className={styles.collection}>{collection}</p>
              <h3 className={styles.name}>{name}</h3>
              <p className={styles.price}>$ {price}</p>
            </div>
            <p className={styles.color}>{color} COLOR</p>
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
              maxWidth={'120px'}
              width={'100%'}
              margin={'0 0 10px 0 '}
              className={styles.addButton}
              text="Add to Cart"
              onClick={handleCartAdd}
            />
            <Accordion title='RETURN POLICY' child={<ReturnPolicy />} />
            <Accordion title='PRODUCT DETAILS' child={<Descrpition category={category} gender={gender} />} />
          </div>
        </div>
        <Button
          maxWidth={'200px'}
          width={'100%'}
          margin={'15px auto '}
          className={styles.addButton}
          text="BACK TO HOME"
          backgroundColor={'#000'}
        />
      </div>
    </>
  );
};

export default ProductComponent;
