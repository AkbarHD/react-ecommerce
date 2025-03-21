import React, { useState } from 'react'
import Layout from './common/Layout'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs, FreeMode, Navigation } from 'swiper/modules'
import { Rating } from 'react-simple-star-rating' // simple rating star

import Tab from 'react-bootstrap/Tab' // dari react bootstrap
import Tabs from 'react-bootstrap/Tabs'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import ProductImgOne from '../assets/images/Mens/eight.jpg'
import ProductImgTwo from '../assets/images/Mens/six.jpg'
import ProductImgThree from '../assets/images/Mens/seven.jpg'

const Product = () => {
  const [rating, setRating] = useState(4) // initial rating value
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  return (
    <div>
      <Layout>
        <div className="container py-4 product-detail">
          <nav aria-label="breadcrumb ">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item" aria-current="page">
                <Link to="/shop">Shop</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <Link to="/product">Product</Link>
              </li>
            </ol>
          </nav>

          <div className="row">
            <div className="col-md-5">
              <div className="row">
                {/* ------ column 1  ------------*/}
                <div className="col-md-2">
                  <Swiper
                    style={{
                      '--swiper-navigation-color': '#000',
                      '--swiper-pagination-color': '#000',
                    }}
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    direction={`vertical`}
                    spaceBetween={10}
                    slidesPerView={6}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper mt-2"
                  >
                    <SwiperSlide>
                      <div className="content">
                        <img
                          src={ProductImgOne}
                          alt=""
                          height={100}
                          className="w-100"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="content">
                        <img
                          src={ProductImgTwo}
                          alt=""
                          height={100}
                          className="w-100"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="content">
                        <img
                          src={ProductImgThree}
                          alt=""
                          height={100}
                          className="w-100"
                        />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>

                {/* ------ column 2  ------------*/}
                <div className="col-md-10">
                  <Swiper
                    style={{
                      '--swiper-navigation-color': '#000',
                      '--swiper-pagination-color': '#000',
                    }}
                    loop={true}
                    spaceBetween={0}
                    navigation={true}
                    thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                  >
                    <SwiperSlide>
                      <div className="content">
                        <img src={ProductImgOne} alt="" className="w-100" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="content">
                        <img src={ProductImgTwo} alt="" className="w-100" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="content">
                        <img src={ProductImgThree} alt="" className="w-100" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>

            <div className="col-md-7">
              <h2>Dummy Product Title</h2>
              <div className="d-flex">
                <Rating size={20} readonly initialValue={rating} />
                <span className="pt-1 ps-2">10 reviews</span>
              </div>

              <div className="price h3">
                Rp. 85.000{' '}
                <span className="text-decoration-line-through ms-2">
                  Rp. 100.000
                </span>
              </div>

              <div>
                100% original product pay on <br /> delivery might be eligible
                for cashback <br /> offer of 10% on your first order
              </div>

              <div className="pt-3">
                <strong>Select Size</strong>
                <div className="sizes pt-2">
                  <button className="btn btn-size ms-1">S</button>
                  <button className="btn btn-size ms-1">M</button>
                  <button className="btn btn-size ms-1">L</button>
                  <button className="btn btn-size ms-1">XL</button>
                </div>
              </div>

              <div className="add-to-cart mt-4">
                <button className="btn btn-primary">Add to Cart</button>
              </div>

              <hr />

              <div>
                <strong>SKU:</strong>
                DDXX2234
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="home" title="Home">
                  Tab content for Home
                </Tab>
                <Tab eventKey="profile" title="Profile">
                  Tab content for Profile
                </Tab>
                
              </Tabs>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Product
