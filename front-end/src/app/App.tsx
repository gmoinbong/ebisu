import React from 'react';
import Header from '../components/header';
import MainPage from '../pages/main';
import Footer from '../components/footer';
import { Route, Routes } from 'react-router-dom';
import ProductPage from '../pages/products';
import { FormClothesCreate } from '../admin/form-create';


const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes >
        <Route path='/' element={<MainPage />} />
        <Route path='/product/*' element={<ProductPage />} />
        <Route path='/admin' element={<FormClothesCreate />}></Route>
      </Routes >
      <Footer />
    </>
  );
};

export default App;
