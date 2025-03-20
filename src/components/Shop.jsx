import React, { Component } from 'react'
import Layout from './common/Layout'
import ProductImg from '../assets/images/eight.jpg'
import { Link } from 'react-router-dom'

const Shop = () => {
  return (
    <>
      <Layout>
        <div className="container py-4">
          <nav aria-label="breadcrumb ">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Shop
              </li>
            </ol>
          </nav>

          <div className="row">
            {/* categories */}
            <div className="col-md-3">
              <div className="card shadow border-0 mb-3">
                <div className="card-body p-4">
                  <h3 className="mb-3">Categories</h3>
                  <ul>
                    <li className="mb-2">
                      <input type="checkbox" name="" id="" />
                      <label htmlFor="" className="ps-2">
                        Kids
                      </label>
                    </li>
                    <li className="mb-2">
                      <input type="checkbox" name="" id="" />
                      <label htmlFor="" className="ps-2">
                        Mens
                      </label>
                    </li>
                    <li className="mb-2">
                      <input type="checkbox" name="" id="" />
                      <label htmlFor="" className="ps-2">
                        Womens
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card shadow border-0 mb-3">
                <div className="card-body p-4">
                  <h3 className="mb-3">Brands</h3>
                  <ul>
                    <li className="mb-2">
                      <input type="checkbox" name="" id="" />
                      <label htmlFor="" className="ps-2">
                        Puma
                      </label>
                    </li>
                    <li className="mb-2">
                      <input type="checkbox" name="" id="" />
                      <label htmlFor="" className="ps-2">
                        Killer
                      </label>
                    </li>
                    <li className="mb-2">
                      <input type="checkbox" name="" id="" />
                      <label htmlFor="" className="ps-2">
                        Levis
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* products */}
            <div className="col-md-9">
              <div className="row pb-5">
                <div className="col-md-4 col-6">
                  <div className="product card border-0">
                    <div className="card-img">
                      <Link to="/product">
                        <img src={ProductImg} alt="" className="w-100" />
                      </Link>
                    </div>

                    <div className="card-body pt-3">
                      <Link to="/product">Red Check Shirt for men</Link>
                      <div className="price mx-2">
                        Rp. 85.000{' '}
                        <span className="text-decoration-line-through m-lg-2">
                          Rp. 100.000
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-6">
                  <div className="product card border-0">
                    <div className="card-img">
                      <img src={ProductImg} alt="" className="w-100" />
                    </div>

                    <div className="card-body pt-3">
                      <a href="">Red Check Shirt for men</a>
                      <div className="price mx-2">
                        Rp. 85.000{' '}
                        <span className="text-decoration-line-through m-lg-2">
                          Rp. 100.000
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-6">
                  <div className="product card border-0">
                    <div className="card-img">
                      <img src={ProductImg} alt="" className="w-100" />
                    </div>

                    <div className="card-body pt-3">
                      <a href="">Red Check Shirt for men</a>
                      <div className="price mx-2">
                        Rp. 85.000{' '}
                        <span className="text-decoration-line-through m-lg-2">
                          Rp. 100.000
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-6">
                  <div className="product card border-0">
                    <div className="card-img">
                      <img src={ProductImg} alt="" className="w-100" />
                    </div>

                    <div className="card-body pt-3">
                      <a href="">Red Check Shirt for men</a>
                      <div className="price mx-2">
                        Rp. 85.000{' '}
                        <span className="text-decoration-line-through m-lg-2">
                          Rp. 100.000
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-6">
                  <div className="product card border-0">
                    <div className="card-img">
                      <img src={ProductImg} alt="" className="w-100" />
                    </div>

                    <div className="card-body pt-3">
                      <a href="">Red Check Shirt for men</a>
                      <div className="price mx-2">
                        Rp. 85.000{' '}
                        <span className="text-decoration-line-through m-lg-2">
                          Rp. 100.000
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-6">
                  <div className="product card border-0">
                    <div className="card-img">
                      <img src={ProductImg} alt="" className="w-100" />
                    </div>

                    <div className="card-body pt-3">
                      <a href="">Red Check Shirt for men</a>
                      <div className="price mx-2">
                        Rp. 85.000{' '}
                        <span className="text-decoration-line-through m-lg-2">
                          Rp. 100.000
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Shop
