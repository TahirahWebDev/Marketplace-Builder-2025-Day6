import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import BrowseRange from '../components/BrowseRange'
import OurProducts from '../components/OurProducts'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Banner />
        <BrowseRange />
        <OurProducts showHeading={true} showButton={true} />
        <Gallery />
        <Footer />
    </div>
  )
}

export default Home