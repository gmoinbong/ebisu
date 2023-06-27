import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../redux/slices/cartSlice';
import { Product } from '../../../../redux/slices/productSlice';

export function useProductCardActions() {
  const dispatch = useDispatch();

  const handleCartAdd = (index: number, product: Product, size: string) => {
    dispatch(addToCart({
      price: product.price,
      color: product.color,
      name: product.name,
      size: size,
      url: product.url,
    }));
  };

  return {
    handleCartAdd,
  };
}
