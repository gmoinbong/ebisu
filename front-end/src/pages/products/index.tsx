import { useState } from "react";
import ProductCard from "./product-elements/ProductCard"
import PagesInformer from "../../components/pages-informer"
import FilterProducts from "../../components/Filter/FilterProducts";

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