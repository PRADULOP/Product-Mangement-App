import React from 'react'
import Home from './components/Home'
import AddProduct from './components/AddProduct'
import Main from './components/Main'
import { Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main child={<Home/>} />} />
        <Route path="/add-product" element={<Main child={<AddProduct/>} />} />
      </Routes>
    </div>
  )
}

export default App