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

const App = () => {
  return (
    <div className='bg-primary'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/onlineMenu' element={<OnlineMenu/>} />
        <Route path='/catering' element={<Catering/>} />
        <Route path='/cakes' element={<Cakes/>} />
        <Route path='/aboutUs' element={<AboutUs/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App