import logo from './logo.svg';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import { Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Footer from './pages/Footer';
import CreditCard from './CreditCard/CreditCard';
import CreditCardForm from './CreditCard/CreditCardForm';
import { useState } from 'react';
import CardApp from './CreditCard/CardApp';
import Offer from './pages/Offer';
import Contact from './pages/Contact';
import About from './pages/About';
import HomeCredit from './pages/HomeCredit';
import CardPage from './pages/CardPage';
import Video from './pages/Video';

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/offer' element={<Offer/>}/>
        {/* <Route path='/credit-card' element={<CardApp/>}/> */}
        <Route path='/cardpage' element={<CardPage/>}/>
        <Route path='/video' element={<Video/>}/>
        <Route path='/HomeCred' element={<HomeCredit/>}/>
        <Route path='/HomeCred/:id' element={<CardPage/>}/>
      </Routes>
      
      <Footer />
     {/* <HomeCredit/> */}
    </div>
  );
}

export default App;
