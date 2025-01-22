"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FeatureBar from "../components/FeatureBar";
import ShopHeader from "../components/ShopHeader";
import Analytics from "../components/Analytics";
import ManageProducts from "../components/ManageProducts";
import ManageOrders from "../components/ManageOrders";

const AdminDashboard: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<"analytics" | "products" | "orders" | null>(null);

  const logout = () => {
    localStorage.removeItem("isAdmin"); // Remove session flag
    location.href = "/login"; // Redirect to login
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <ShopHeader title="Admin Dashboard" breadcrumb="dashboard" />
      {/* Logout button below the ShopHeader */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-4 flex justify-end">
        <button
          onClick={logout}
          className="bg-red-500 text-white py-2 px-6 rounded-lg font-medium hover:bg-red-600 transition-all shadow-md"
        >
          Logout
        </button>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div
            className="bg-blue-500 text-white p-6 rounded-lg shadow-md hover:shadow-lg cursor-pointer"
            onClick={() => setActiveComponent("analytics")} // Show Analytics component
          >
            <h2 className="text-xl font-medium">Analytics</h2>
          </div>
          <div
            className="bg-green-500 text-white p-6 rounded-lg shadow-md hover:shadow-lg cursor-pointer"
            onClick={() => setActiveComponent("products")} // Show Manage Products component
          >
            <h2 className="text-xl font-medium">Manage Products</h2>
          </div>
          <div
            className="bg-yellow-500 text-white p-6 rounded-lg shadow-md hover:shadow-lg cursor-pointer"
            onClick={() => setActiveComponent("orders")} // Show Manage Orders component
          >
            <h2 className="text-xl font-medium">Manage Orders</h2>
          </div>
        </div>

        {/* Conditional Rendering of Components */}
        {activeComponent === "analytics" && <Analytics />}
        {activeComponent === "products" && <ManageProducts />}
        {activeComponent === "orders" && <ManageOrders />}
      </div>
      <FeatureBar />
      <Footer />
    </div>
  );
};

// Export directly as the default Next.js page component
export default AdminDashboard;
