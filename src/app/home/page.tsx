import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import BrowseRange from '../components/BrowseRange'
import OurProducts from '../components/OurProducts'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Banner />
        <BrowseRange />
        <OurProducts showHeading={true} showButton={true} />
        <Footer />
    </div>
  )
}

export default Home