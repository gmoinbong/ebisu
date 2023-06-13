import CartComponent from "../../components/cart"
import ProductCard from "../../components/layout/product-card"
import PagesInformer from "../../components/pages-informer"

const ProductPage = () => {
  return (
    <>
      <CartComponent />
      <ProductCard />
      <PagesInformer />
    </>
  )
}

export default ProductPage