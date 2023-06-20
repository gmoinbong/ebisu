import styles from './Product.module.css';

import { useParams } from "react-router-dom";
import { useFetchProduct } from "../../hooks/useFetchProduct";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import Button from "../../components/layout/button";
import PagesInformer from "../../components/pages-informer";
import loaderGif from "../../components/layout/loaderGif";

const ProductComponent: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const product = useFetchProduct(id);

  if (product?.length === 0 || product === null) {
    return <>{loaderGif}</>
  }

  const handleCartAdd = () => {
    dispatch(addToCart({
      name: product[0].name,
      url: product[0].url,
      size: product[0].size,
    }));
  }

  return (<>
    <PagesInformer />
    <div className={styles.wrapper}>
      <div className={styles.leftBlock}>
        <img alt='product' src={product[0].url} />
      </div>
      <div className={styles.rightBlock}>
        <p>{product[0].collection}</p>
        <h3 >{product[0].name}</h3>
        <p>{product[0].size}</p>

        <Button text="Add to cart" onClick={handleCartAdd} />
      </div>
    </div>
  </>
  );
};

export default ProductComponent;
