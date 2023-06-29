import { Routes, Route } from "react-router-dom";
import Login from "../auth/Login/index";
import Register from "../auth/Register";
import Footer from "../components/Footer";
import Header from "../components/header";
import MainPage from "../pages/MainPage";
import NotFoundPage from "../pages/NotFoundPage";
import ProfilePage from "../pages/ProfilePage";
import ProductPage from "../pages/products";
import SingleProductPage from "../pages/products/SingleProductPage";
import ScrollToTop from "../utils/ScrollTop";



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
