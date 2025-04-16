import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import {Routes,Route} from 'react-router-dom'
import OnlineMenu from './pages/OnlineMenu'
import Catering from './pages/Catering'
import Cakes from './pages/Cakes'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Product from './pages/Product'

const App = () => {
  return (
    <div className='bg-primary px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/onlineMenu' element={<OnlineMenu/>} />
        <Route path='/catering' element={<Catering/>} />
        <Route path='/cakes' element={<Cakes/>} />
        <Route path='/aboutUs' element={<AboutUs/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product/:id' element={<Product />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App