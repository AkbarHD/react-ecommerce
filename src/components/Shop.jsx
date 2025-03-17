import React, { Component } from 'react'
import Layout from './common/Layout'
import Hero from './common/Hero'

const Shop = () => {
  return (
    <>
      <Layout>
        <div className="container py-4">
          <nav aria-label="breadcrumb ">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Library
              </li>
            </ol>
          </nav>
        </div>
      </Layout>
    </>
  )
}

export default Shop
