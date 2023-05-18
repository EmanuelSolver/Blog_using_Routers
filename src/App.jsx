// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Highlights from './Pages/Highlights'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {

  return (
    <div style={{backgroundColor:"aliceblue", height:"100%"}}>
     <BrowserRouter>
     <Header/>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/highlights' element={<Highlights />} />

      </Routes>
      <Footer/>
     </BrowserRouter>
    </div>
  )
}

export default App
