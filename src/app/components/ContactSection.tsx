"use client";
import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Reset errors
    setErrors({
      name: false,
      email: false,
      message: false,
    });

    const { name, email, message } = formData;
    const newErrors = {
      name: !name.trim(),
      email: !validateEmail(email),
      message: !message.trim(),
    };

    setErrors(newErrors);

    // If no errors, show success toast
    if (!Object.values(newErrors).some((error) => error)) {
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      toast.error("Please fill in all required fields correctly.");
    }
  };

  return (
    <div className="py-16 bg-gray-50">
      <ToastContainer />
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
            <form className="space-y-6" onSubmit={handleSubmit}>
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
                  value={formData.name}
                  onChange={handleChange}
                  className={`mt-2 block w-full border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#B88E2F]`}
                />
                {errors.name && <p className="text-red-500 text-sm">Name is required.</p>}
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
                  value={formData.email}
                  onChange={handleChange}
                  className={`mt-2 block w-full border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#B88E2F]`}
                />
                {errors.email && <p className="text-red-500 text-sm">Valid email is required.</p>}
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
                  value={formData.subject}
                  onChange={handleChange}
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
                  value={formData.message}
                  onChange={handleChange}
                  className={`mt-2 block w-full border ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  } rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#B88E2F]`}
                />
                {errors.message && <p className="text-red-500 text-sm">Message is required.</p>}
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
