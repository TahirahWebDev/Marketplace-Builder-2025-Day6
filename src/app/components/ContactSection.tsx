import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">Get in Touch with Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            Have questions about our products or services? Feel free to reach out. 
            We’re here to help and always happy to assist!
          </p>
        </div>

        {/* Contact Content */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section: Contact Details */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-3xl text-[#B88E2F]" />
              <div>
                <h3 className="text-xl font-bold text-gray-800">Address</h3>
                <p className="text-gray-600">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>
            {/* Phone */}
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-3xl text-[#B88E2F]" />
              <div>
                <h3 className="text-xl font-bold text-gray-800">Phone</h3>
                <p className="text-gray-600">Mobile: +(84) 546-6789</p>
                <p className="text-gray-600">Hotline: +(84) 456-6789</p>
              </div>
            </div>
            {/* Working Hours */}
            <div className="flex items-center space-x-4">
              <FaClock className="text-3xl text-[#B88E2F]" />
              <div>
                <h3 className="text-xl font-bold text-gray-800">Working Hours</h3>
                <p className="text-gray-600">Monday-Friday: 9:00 AM - 10:00 PM</p>
                <p className="text-gray-600">Saturday-Sunday: 9:00 AM - 9:00 PM</p>
              </div>
            </div>
          </div>

          {/* Right Section: Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <form className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="mt-2 block w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
                />
              </div>
              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  className="mt-2 block w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
                />
              </div>
              {/* Subject Field */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Optional Subject"
                  className="mt-2 block w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
                />
              </div>
              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Hi! I’d like to ask about..."
                  rows={4}
                  className="mt-2 block w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
                />
              </div>
              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#B88E2F] text-white py-3 px-6 rounded-md hover:bg-[#967525] transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
