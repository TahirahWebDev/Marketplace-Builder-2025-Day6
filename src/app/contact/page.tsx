import React from 'react';
import Navbar from '../components/Navbar';
import ShopHeader from '../components/ShopHeader';
import Footer from '../components/Footer';
import FeatureBar from '../components/FeatureBar';
import ContactSection from '../components/ContactSection'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <ShopHeader title="Contact" breadcrumb="Contact" />
      <ContactSection />
      <FeatureBar />
      <Footer />
    </div>
  );
};

export default Contact;
