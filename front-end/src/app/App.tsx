import Header from '../components/header';
import MainPage from '../pages/main';
import Footer from '../components/footer';
import { Route, Routes } from 'react-router-dom';
import ProductPage from '../pages/products';
import { FormClothesCreate } from '../admin/form-create';
import Login from '../auth/login';
import RegPage from '../auth/register';
import ProductComponent from '../pages/products/ProductComponent';



const App = () => {
  return (
    <>
      <Header />
      <Routes >
        <Route path='/' element={<MainPage />} />
        <Route path='/products/*' element={<ProductPage />} />
        <Route path='/products/item/:id' element={<ProductComponent />} />
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
