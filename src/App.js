import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contactus from './components/Contactus/Contactus';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Products from './components/Products/Products';
import Project from './components/Project/Project';
// import Services from './components/Services/Services';

function App() {

  const location = useLocation();
  const match = location.pathname === '/';

  return (
    <div className={match ? "App w-full App_home" : "App w-full "}>
      <Header></Header>

      {/* <Home></Home>
      <About></About>
      <Contactus></Contactus> */}



      <Routes>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/products' element={<Products />}> </Route>
        <Route path='/products/detailProduct' element={<ProductDetails />}> </Route>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contactus />} />
      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;
