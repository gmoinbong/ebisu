import Header from '../components/header';
import MainPage from '../pages/main';
import Footer from '../components/footer';
import { Route, Routes } from 'react-router-dom';
import ProductPage from '../pages/products';
import { FormClothesCreate } from '../admin/form-create';
import Login from '../auth/login';
import RegPage from '../auth/register';
import SingleProductPage from '../pages/products/SingleProductPage';
import ScrollToTop from '../utils/ScrollTop';
import UserProfile from '../auth/profile';



const App = () => {

  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes >
        <Route path='/' element={<MainPage />} />
        <Route path='/products/*' element={<ProductPage />} />
        <Route path=':id' element={<SingleProductPage />} />
        <Route path='/test' element={<ProductPage />} />
        <Route path='/admin' element={<FormClothesCreate />} />
        <Route path='/register' element={<RegPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/account' element={<UserProfile />} />
        <Route />
      </Routes >
      <Footer />
    </>
  );
};

export default App;
