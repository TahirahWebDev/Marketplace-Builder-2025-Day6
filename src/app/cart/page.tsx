"use client";
import React, { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import Navbar from "../components/Navbar";
import ShopHeader from "../components/ShopHeader";
import FeatureBar from "../components/FeatureBar";
import Footer from "../components/Footer";

const Cart = () => {
  const [cartItems, setCartItems] = useState<
    { name: string; price: number; quantity: number }[]
  >([]);

  // Fetch cart items from localStorage on component mount
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    setCartItems(savedCartItems);
  }, []);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Handle item deletion
  const handleDeleteItem = (itemName: string) => {
    const updatedCartItems = cartItems.filter((item) => item.name !== itemName);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  return (
    <div className="bg-gray-50">
      <Navbar />
      <ShopHeader title="Cart" breadcrumb="Cart" />

      <div className="max-w-6xl mx-auto py-10">
        {cartItems.length > 0 ? (
          <div className="space-y-8">

            <div className="space-y-6">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-6 bg-white shadow-lg rounded-lg transform transition-all hover:scale-105"
                >
                  <div className="flex items-center">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {item.name}
                    </h3>
                    <p className="ml-4 text-gray-600 text-lg">
                      {item.quantity} x Rs. {item.price.toLocaleString()}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() => handleDeleteItem(item.name)}
                      className="text-red-500 hover:text-red-700 transition"
                      title="Remove Item"
                    >
                      <FaTrash size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800">Total:</h3>
              <p className="text-xl font-bold text-gray-800">
                Rs. {totalPrice.toLocaleString()}
              </p>
            </div>

            <div className="mt-6">
              <button
                onClick={() => (window.location.href = "/checkout")}
                className="w-full py-4 bg-yellow-700 text-white font-semibold rounded-lg hover:bg-yellow-800 transition"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-lg text-gray-600">Your cart is empty.</p>
        )}
      </div>

      <FeatureBar />
      <Footer />
    </div>
  );
};

export default Cart;
