import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./pages/Home"
import Menu from './pages/Menu';
import AboutUs from './pages/AboutUs';
import OrderOnline from './pages/OrderOnline';
import Reservation from './pages/Reservation';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import Signup from './pages/Signup'
import Cart from './pages/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import "./App.css";
import SignupPage from './pages/Signup';

function App() {
  return (
    <div  className="flex flex-col min-h-screen flex-grow">
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer></Footer>
    </Router>
    </div>
    
    //  <div className='text-sm bg-red-600'>
    //   APP
    // </div>
  );
}

export default App;
