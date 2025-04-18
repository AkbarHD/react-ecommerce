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

import { default as ShowCategories } from './components/admin/category/Show'
import { default as CreateCategories } from './components/admin/category/Create'
import { default as EditCategories } from './components/admin/category/Edit'

import { default as ShowBrands } from './components/admin/brand/Show'
import { default as CreateBrands } from './components/admin/brand/Create'
import { default as EditBrands } from './components/admin/brand/Edit'

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
          <Route
            path="/admin/dashboard"
            element={
              // BUAT PROTECTED ROUTE
              <AdminRequireAuth>
                <Dashboard />
              </AdminRequireAuth>
            }
          />
          <Route
            path="/admin/categories"
            element={
              // BUAT PROTECTED ROUTE
              <AdminRequireAuth>
                <ShowCategories />
              </AdminRequireAuth>
            }
          />

          <Route
            path="/admin/categories/create"
            element={
              // BUAT PROTECTED ROUTE
              <AdminRequireAuth>
                <CreateCategories />
              </AdminRequireAuth>
            }
          />

          <Route
            path="/admin/categories/edit/:id"
            element={
              // BUAT PROTECTED ROUTE
              <AdminRequireAuth>
                <EditCategories />
              </AdminRequireAuth>
            }
          />

          <Route
            path="/admin/brands"
            element={
              // BUAT PROTECTED ROUTE
              <AdminRequireAuth>
                <ShowBrands />
              </AdminRequireAuth>
            }
          />

          <Route
            path="/admin/brands/create"
            element={
              // BUAT PROTECTED ROUTE
              <AdminRequireAuth>
                <CreateBrands />
              </AdminRequireAuth>
            }
          />

          <Route
            path="/admin/brands/edit/:id"
            element={
              // BUAT PROTECTED ROUTE
              <AdminRequireAuth>
                <EditBrands />
              </AdminRequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>

      {/* di parent tarohnya  */}
      <ToastContainer />
    </>
  )
}

export default App
