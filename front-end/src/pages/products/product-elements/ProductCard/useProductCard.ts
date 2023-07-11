import { useEffect, useMemo, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useFetchProducts } from '../../../../hooks/useFetchProducts';
import { resetFilterOptions } from '../../../../redux/slices/filterSilce';
import { RootState } from '../../../../app/store';

export function useProductCard() {
  const [menuOpenIndex, setMenuOpenIndex] = useState(-1);
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [visibleProductsCount, setVisibleProductsCount] = useState(8);

  const products = useFetchProducts();
  const filteredProducts = useSelector((state: RootState) => state.products.filteredProducts);
  const selectedOptions = useSelector((state: RootState) => state.filter.selectedOptions);
  const isFiltered = useSelector((state: RootState) => state.filter.isFiltered);
  const oneSize = 'one-size'

  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname;

  const loadMoreProducts = () => {
    setVisibleProductsCount((prevCount) => prevCount + 8);
  };

  useEffect(() => {
    dispatch(resetFilterOptions());
  }, [dispatch, path]);

  const renderProducts = useMemo(() => {
    if (selectedOptions && Object.keys(selectedOptions).length > 0 && isFiltered) {
      return filteredProducts;
    } else {
      return products;
    }
  }, [selectedOptions, isFiltered, products, filteredProducts]);


  const handleCardMouseEnter = useCallback((index: number) => {
    setHoveredIndex(index);
  }, [])

  const handleCardMouseLeave = useCallback(() => {
    setHoveredIndex(-1);
  }, [])

  const handleButtonClick = useCallback((index: number) => {
    setMenuOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
    setHoveredIndex(index);
  }, [])

  return {
    menuOpenIndex,
    hoveredIndex,
    visibleProductsCount,
    renderProducts,
    handleCardMouseEnter,
    handleCardMouseLeave,
    handleButtonClick,
    loadMoreProducts,
    oneSize
  };
}
