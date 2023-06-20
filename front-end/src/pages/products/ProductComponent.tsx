import { useParams } from "react-router-dom";
import styles from './Product.module.css';
import { useFetchProduct } from "../../hooks/useFetchProduct";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import Button from "../../components/layout/button";
import PagesInformer from "../../components/pages-informer";

const ProductComponent = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const product = useFetchProduct(id);

  if (product == null) {
    return <div>Loading...</div>;
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
