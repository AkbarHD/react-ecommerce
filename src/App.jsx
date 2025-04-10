import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom' // import baru
import Home from './components/Home'
import Shop from './components/Shop'
import Product from './components/Product'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import Login from './components/admin/Login'
import { ToastContainer, toast } from 'react-toastify' // toastify
import Dashboard from './components/admin/Dashboard'
import { AdminRequireAuth } from './components/admin/AdminRequireAuth'
import {default as ShowCategories} from './components/admin/category/Show'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/dashboard" element={
            // BUAT PROTECTED ROUTE
            <AdminRequireAuth>
              <Dashboard />
            </AdminRequireAuth>
          } />
          <Route path="/admin/categories" element={
            // BUAT PROTECTED ROUTE
            <AdminRequireAuth>
              <ShowCategories />
            </AdminRequireAuth>
          } />
        </Routes>
      </BrowserRouter>

      {/* di parent tarohnya  */}
      <ToastContainer />
    </>
  )
}

export default App
