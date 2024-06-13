import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import Header from './components/Header'
import About from './components/About'
import ResMenu from './components/ResMenu'
import './App.css'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>                     
      <Route path='/food' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/food/cart' element={<Cart/>}/>
      <Route path='/resmen/:id' element={<ResMenu/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App