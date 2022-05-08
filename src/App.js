import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contactus from './components/Contactus/Contactus';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Products from './components/Products/Products';
import Project from './components/Project/Project';





function App() {

  const [user, setUser] = useState({});

  // useEffect(() => {
  //   console.log(user)
  // }, [user])

  const location = useLocation();
  const match = location.pathname === '/';

  return (
    <div className={match ? "App w-full App_home" : "App w-full "}>
      <Header user={user}  setUser={setUser}></Header>
      <Routes>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/products' element={<Products />}> </Route>
        <Route path='/products/detailProduct' element={<ProductDetails />}> </Route>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contactus />} />
        <Route path='/login' element={<Login setUser={setUser}> </Login>} />
      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;
