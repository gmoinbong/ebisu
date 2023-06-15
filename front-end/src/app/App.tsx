import React from 'react';
import Header from '../components/header';
import MainPage from '../pages/main';
import Footer from '../components/footer';
import { Route, Routes } from 'react-router-dom';
import ProductPage from '../pages/products';
import { FormClothesCreate } from '../admin/form-create';
import Login from '../auth/login';
import SearchComponent from '../components/search';
import RegPage from '../auth/register';
type Props = {
  isSearchVisible: boolean;
  setIsSearchtVisible: React.Dispatch<React.SetStateAction<boolean>>

}

const App = ({ isSearchVisible, setIsSearchtVisible }: Props) => {
  return (
    <>
      {isSearchVisible && <SearchComponent isVisible={isSearchVisible} setIsVisible={setIsSearchtVisible} />}
      <Header />
      <Routes >
        <Route path='/' element={<MainPage />} />
        <Route path='/product/*' element={<ProductPage />} />
        <Route path='/admin' element={<FormClothesCreate />} />
        <Route path='/register' element={<RegPage />} />
        <Route path='/login' element={<Login />} />
        <Route />
      </Routes >
      <Footer />
    </>
  );
};

export default App;
