import React from 'react'
import Navbar from '../components/Navbar'
import ShopHeader from '../components/ShopHeader'
import FeatureBar from '../components/FeatureBar'
import Footer from '../components/Footer'

const Cart = () => {
  return (
    <div>
        <Navbar />
        <ShopHeader title='Cart' breadcrumb='Cart' />
        <FeatureBar />
        <Footer />
    </div>
  )
}

export default Cart