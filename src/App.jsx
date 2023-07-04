import { useState } from 'react'
import React,{useContext} from 'react'
import './App.css'
import { Mnavbar } from './Pages/Mnavbar'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import { Shop } from './Pages/Shop/Shop'
import { Cart } from './Pages/cart/Cart'
import { ShopContextProvider } from './context/ShopContextProvider'

function App() {     


  return (

   <div className="App">
    <ShopContextProvider>
    <Router>
    <Mnavbar/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/Cart" element={<Cart />}/>
        <Route path="*" element={<h1>Not Found</h1>}/>
        <Route/>
      </Routes>
    </Router>
    </ShopContextProvider>

   </div>
       
  )
}

export default App
