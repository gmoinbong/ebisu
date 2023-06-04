import React from 'react';
import Header from './components/header';
import MainPage from './pages/main';
import Footer from './components/footer';
import { Route, Routes } from 'react-router-dom';
import ProductCard from './components/layout/product-card';


const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
      <ProductCard />
      <Footer />
    </>
  );
};

export default App;
