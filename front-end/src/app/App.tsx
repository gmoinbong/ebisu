import React from 'react';
import Header from '../components/header';
import MainPage from '../pages/main';
import Footer from '../components/footer';
import { Route, Routes } from 'react-router-dom';
import ProductPage from '../pages/products';
import { FormClothesCreate } from '../admin/form-create';
import RegisterComponent from '../auth/register'
import Login from '../auth/login';
import { useFetchProducts } from '../hooks/useFetchProducts';
import { useDispatch } from 'react-redux';

const App: React.FC = () => {
  const products = useFetchProducts()
  const dispatch = useDispatch()

  return (
    <>
      <Header />
      <Routes >
        <Route path='/' element={<MainPage />} />
        <Route path='/product/*' element={<ProductPage />} />
        <Route path='/admin' element={<FormClothesCreate />} />
        <Route path='/register' element={<RegisterComponent />} />
        <Route path='/login' element={<Login />} />
        <Route />
      </Routes >
      <Footer />
    </>
  );
};

export default App;
