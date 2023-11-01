import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './Components/Navbar/navBar'
import Home from './Components/Home/Home'
import Nosotros from './Components/Nosotros/Nosotros'
import Services from './Components/Service/service'
import Galeria from './Components/Galeria/Galeria'
import Footer from './Components/Footer/footer'
import ScrollToTop from './Components/Scol/Scrol'
import './App.css'





function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop/>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/nosotros" element={<Nosotros/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/galeria" element={<Galeria/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
    
  )
}

export default App
