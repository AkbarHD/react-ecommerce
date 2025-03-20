import React, { useState } from 'react';
import Layout from './Layout'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs, FreeMode, Navigation  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import ProductImgOne from '../../assets/images/Mens/eight.jpg'
import ProductImgTwo from '../../assets/images/Mens/six.jpg'
import ProductImgThree from '../../assets/images/Mens/seven.jpg'

const Product = () => {
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
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Product
