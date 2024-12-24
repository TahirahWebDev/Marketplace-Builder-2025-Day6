"use client"
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ShopHeader from "../components/ShopHeader";
import FeatureBar from "../components/FeatureBar";
import Footer from "../components/Footer";

const Checkout = () => {
  // State for payment method
  const [paymentMethod, setPaymentMethod] = useState("bank");

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Header Section */}
      <ShopHeader title="Checkout" breadcrumb="Checkout" />

      {/* Main Checkout Section */}
      <div className="bg-gray-50 py-10">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-4">

          {/* Billing Details Form */}
          <div className="bg-white p-8 shadow-md rounded-md">
            <h2 className="text-xl font-bold mb-6">Billing details</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Company Name */}
              <div className="md:col-span-2">
                <label htmlFor="company" className="block text-sm font-medium mb-1">
                  Company Name (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Country/Region */}
              <div>
                <label htmlFor="country" className="block text-sm font-medium mb-1">
                  Country / Region
                </label>
                <select
                  id="country"
                  className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500"
                >
                  <option>Sri Lanka</option>
                </select>
              </div>

              {/* Street Address */}
              <div>
                <label htmlFor="address" className="block text-sm font-medium mb-1">
                  Street Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Town/City */}
              <div>
                <label htmlFor="city" className="block text-sm font-medium mb-1">
                  Town / City
                </label>
                <input
                  type="text"
                  id="city"
                  className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Province */}
              <div>
                <label htmlFor="province" className="block text-sm font-medium mb-1">
                  Province
                </label>
                <select
                  id="province"
                  className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500"
                >
                  <option>Western Province</option>
                </select>
              </div>

              {/* ZIP Code */}
              <div>
                <label htmlFor="zip" className="block text-sm font-medium mb-1">
                  ZIP Code
                </label>
                <input
                  type="text"
                  id="zip"
                  className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Additional Information */}
              <div className="md:col-span-2">
                <label htmlFor="additionalInfo" className="block text-sm font-medium mb-1">
                  Additional Information
                </label>
                <textarea
                  id="additionalInfo"
                  rows={4}
                  className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
            </form>
          </div>

          {/* Order Summary Section */}
          <div className="bg-white p-8 shadow-md rounded-md">
            <h2 className="text-xl font-bold mb-6">Product</h2>

            {/* Order Details */}
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span>Asgaard sofa x 1</span>
                <span>Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span className="text-orange-500">Rs. 250,000.00</span>
              </div>
            </div>

            {/* Payment Method */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Payment Method</label>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    value="bank"
                    className="mr-2"
                    checked={paymentMethod === "bank"}
                    onChange={() => setPaymentMethod("bank")}
                  />
                  <span>Direct Bank Transfer</span>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    className="mr-2"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                  />
                  <span>Cash On Delivery</span>
                </div>
              </div>
            </div>

            {/* Place Order Button */}
            <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">
              Place Order
            </button>
          </div>
        </div>
      </div>

      {/* FeatureBar and Footer */}
      <FeatureBar />
      <Footer />
    </div>
  );
};

export default Checkout;
