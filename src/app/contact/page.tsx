import React from 'react';
import Navbar from '../components/Navbar';
import ShopHeader from '../components/ShopHeader';
import Footer from '../components/Footer';
import FeatureBar from '../components/FeatureBar';

const ContactSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Get In Touch With Us</h2>
        <p className="mt-2 text-center text-gray-600">
          For More Information About Our Product & Services, Please Feel Free To Drop Us An Email. 
          Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Section */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex items-start space-x-4">
              <span className="text-2xl text-black">📍</span>
              <div>
                <h3 className="font-bold text-black">Address</h3>
                <p className="text-gray-600">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>
            {/* Phone */}
            <div className="flex items-start space-x-4">
              <span className="text-2xl text-black">📞</span>
              <div>
                <h3 className="font-bold text-black">Phone</h3>
                <p className="text-gray-600">Mobile: +(84) 546-6789</p>
                <p className="text-gray-600">Hotline: +(84) 456-6789</p>
              </div>
            </div>
            {/* Working Time */}
            <div className="flex items-start space-x-4">
              <span className="text-2xl text-black">⏰</span>
              <div>
                <h3 className="font-bold text-black">Working Time</h3>
                <p className="text-gray-600">Monday-Friday: 9:00 - 22:00</p>
                <p className="text-gray-600">Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Abc"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-1 focus:ring-gray-500"
                />
              </div>
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Abc@def.com"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-1 focus:ring-gray-500"
                />
              </div>
              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="This is an optional"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-1 focus:ring-gray-500"
                />
              </div>
              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Hi! I’d like to ask about"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-1 focus:ring-gray-500"
                  rows={4}
                />
              </div>
              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#B88E2F] text-white py-2 px-4 rounded-md hover:bg-[#967525] transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

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
