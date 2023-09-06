import React from 'react';
import './App.css';
import ProductList from './components/ProductList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Home from './components/Home';
import ProductDetails from './components/productDetails';
import LoginPage from './components/Login';
import CustomTooltip from './components/tooltip';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='/products' element={<ProductList />} />
          <Route path='/products/:id' element={<ProductDetails />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/tooltip' element={<CustomTooltip />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;




