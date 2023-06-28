import Header from '../components/header';
import MainPage from '../pages/MainPage';
import Footer from '../components/Footer';
import { Route, Routes } from 'react-router-dom';
import ProductPage from '../pages/products';
import { FormClothesCreate } from '../admin/FormClothesCreate';
import Login from '../auth/Login';
import Register from '../auth/Register';
import SingleProductPage from '../pages/products/SingleProductPage';
import ScrollToTop from '../utils/ScrollTop';
import ProfilePage from '../pages/ProfilePage';
import NotFoundPage from '../pages/NotFoundPage';



const App = () => {

  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes >
        <Route path='/' element={<MainPage />} />
        <Route path='/products/men' element={<ProductPage />} />
        <Route path='/products/woman' element={<ProductPage />} />
        <Route path='products/woman/:id' element={<SingleProductPage />} />
        <Route path='products/men/:id' element={<SingleProductPage />} />
        <Route path='products/:id' element={<SingleProductPage />} />
        <Route path='/products/*' element={<ProductPage />} />
        <Route path='/test' element={<ProductPage />} />
        <Route path='/admin' element={<FormClothesCreate />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/account' element={<ProfilePage />} />
        <Route path='*' element={<NotFoundPage />} />
        <Route />
      </Routes >
      <Footer />
    </>
  );
};

export default App;
