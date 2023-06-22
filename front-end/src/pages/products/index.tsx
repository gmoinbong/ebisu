import FilterProducts from "../../components/filter/FilterProducts"
import ProductCard from "../../components/layout/product-card"
import PagesInformer from "../../components/pages-informer"

const ProductPage = () => {
  return (
    <>
      <PagesInformer />
      <FilterProducts />
      <ProductCard />
    </>
  )
}

export default ProductPage