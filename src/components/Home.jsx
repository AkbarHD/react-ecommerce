import React, { Component } from 'react'

import 'swiper/css'

import LatestProducts from './common/LatestProducts'
import FeaturedProducts from './common/FeaturedProducts'
import Hero from './common/Hero'
import Layout from './common/Layout'

export class Home extends Component {
  render() {
    return (
      <div>
        <Layout>
          {/* ===  Hero  ====*/}
          <Hero />

          {/* product section */}
          <LatestProducts />

          {/* featured Products */}
          <FeaturedProducts />
        </Layout>
      </div>
    )
  }
}

export default Home
