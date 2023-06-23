import { useState } from "react";
import FilterProducts from "../../components/filter/FilterProducts"
import ProductCard from "./product-elements/product-card"
import PagesInformer from "../../components/pages-informer"

const ProductPage = () => {
  const [isOpenfilter, setIsOpenFilter] = useState(false);

  return (
    <>
      <PagesInformer />
      <FilterProducts isFilterOpen={isOpenfilter} setFilter={setIsOpenFilter} />
      <ProductCard isOpenFilter={isOpenfilter} />
    </>
  )
}

export default ProductPage