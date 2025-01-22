"use client";
import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";  // Import toastify styles
import Navbar from "../components/Navbar";
import ShopHeader from "../components/ShopHeader";
import FeatureBar from "../components/FeatureBar";
import Footer from "../components/Footer";

// Define the structure of formData with explicit types
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
}

type Errors = {
  [key in keyof FormData]?: string; // Ensures errors keys are only from FormData
};

const Checkout = () => {
  const [cartItems, setCartItems] = useState<
    { name: string; price: number; quantity: number }[]
  >([]);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
      setCartItems(savedCartItems);
    }
  }, []);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Handle change for form input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id as keyof FormData]: value }));
  };

  // Validate the form data
  const validateForm = () => {
    const newErrors: Errors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First Name is required.";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required.";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid Email is required.";
    if (!formData.phone.trim() || !/^\d+$/.test(formData.phone))
      newErrors.phone = "Valid Phone Number is required.";
    if (!formData.address.trim()) newErrors.address = "Address is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Show a success toast notification
      toast.success("Your order has been placed successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setCartItems([]);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
      });
      localStorage.removeItem("cartItems"); // Clear cart from localStorage
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <ShopHeader title="Checkout" breadcrumb="Checkout" />
  
      <div className="py-10">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4">
          {/* Billing Details Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { label: "First Name", id: "firstName", type: "text" },
                { label: "Last Name", id: "lastName", type: "text" },
                { label: "Email Address", id: "email", type: "email" },
                { label: "Phone Number", id: "phone", type: "text" },
                { label: "Address", id: "address", type: "text" }
              ].map(({ label, id, type }) => (
                <div key={id}>
                  <label htmlFor={id} className="block text-sm font-medium mb-2">
                    {label}
                  </label>
                  <input
                    type={type}
                    id={id}
                    value={formData[id as keyof FormData]}  // Type-safe access
                    onChange={handleChange}
                    className={`w-full border rounded-lg p-3 text-sm focus:ring-2 ${
                      errors[id as keyof FormData] 
                      ? "border-red-500 focus:ring-red-500"
                      : "focus:ring-yellow-700"
                    }`}
                  />
                  {errors[id as keyof FormData] && (
                    <span className="text-red-500 text-sm">
                      {errors[id as keyof FormData]}
                    </span>
                  )}
                </div>
              ))}
              <button
                type="submit"
                className="w-full bg-yellow-700 text-white py-3 rounded-lg font-medium hover:bg-yellow-800 transition"
              >
                Place Order
              </button>
            </form>
          </div>
  
          {/* Order Summary Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
            <div className="space-y-4">
              {cartItems.length > 0 ? (
                cartItems.map((item, index) => (
                  <div key={index} className="flex justify-between border-b pb-4 text-gray-700">
                    <span>{item.name} x {item.quantity}</span>
                    <span className="font-medium">Rs. {item.price * item.quantity}</span>
                  </div>
                ))
              ) : (
                <p className="text-gray-600">Your cart is empty.</p>
              )}
            </div>
            <div className="flex justify-between font-semibold text-lg mt-6">
              <span>Total</span>
              <span className="text-yellow-700">Rs. {total.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
  
      {/* Toast Container */}
      <ToastContainer />
  
      <FeatureBar />
      <Footer />
    </div>
  );
}

export default Checkout;
