import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useFetchProduct } from '../../hooks/useFetchProduct';
import { addToCart } from '../../redux/slices/cartSlice';
import Button from '../../components/layout/button';
import PagesInformer from '../../components/pages-informer';
import LoaderGif from '../../components/layout/loaderGif';
import Accordion from './product-elements/Accordion';
import { ReturnPolicy } from './product-elements/ReturnPolicy';
import Descrpition from './product-elements/Descrpition';
import ProductSlider, { ProductSliderItem } from '../../components/slider/ProductSlider';
import { useRouteChange } from '../../hooks/useRouteChange';

import styles from './Product.module.css';
import SizeSelect from './product-elements/size-select';

const SingleProductPage = () => {
  const { id } = useParams();
  const product = useFetchProduct(id);
  const dispatch = useDispatch();
  const routeChange = useRouteChange()

  const handleClickToHome = () => {
    routeChange('/')
  }

  if (product?.length === 0 || product === null) {
    return <LoaderGif />;
  }

  const handleCartAdd = () => {
    dispatch(
      addToCart({
        name: product[0].name,
        url: product[0].url,
        size: product[0].size,
        color: product[0].color,
        quantity: 1,
        price: product[0].price
      })
    );
  };


  const { collection, price,
    name, category,
    gender, color,
    size, url,
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
            <SizeSelect />
            <Button maxWidth={'120px'}
              width={'100%'}
              margin={' 10px 0  10px 0 '}
              className={styles.addButton}
              text="Add to Cart"
              onClick={handleCartAdd} />
            <Accordion title='RETURN POLICY' child={<ReturnPolicy />} />
            <Accordion title='PRODUCT DETAILS' child={<Descrpition category={category} gender={gender} />} />
          </div>
        </div>
        <Button onClick={handleClickToHome}
          maxWidth={'200px'}
          width={'100%'}
          margin={'15px auto '}
          className={styles.addButton}
          text="BACK TO HOME"
          backgroundColor={'#000'} />
      </div>
    </>
  );
};

export default SingleProductPage;
