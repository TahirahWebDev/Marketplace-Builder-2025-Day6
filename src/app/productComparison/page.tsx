import React from 'react'
import Navbar from '../components/Navbar'
import ShopHeader from '../components/ShopHeader'
import FeatureBar from '../components/FeatureBar'
import Footer from '../components/Footer'

const ProductComparison = () => {
  return (
    <div>
        <Navbar />
        <ShopHeader title='Product Comparison' breadcrumb='Product Comparison' />
        <FeatureBar />
        <Footer />
    </div>
  )
}

export default ProductComparison