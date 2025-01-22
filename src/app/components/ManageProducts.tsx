"use client";
import React from "react";

const ManageProducts: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Manage Products</h2>
      <p className="text-gray-600">Here you can manage all the products listed in the store. Add, edit, or delete products as required.</p>
      {/* Add product management UI here */}
      <button className="mt-4 bg-green-500 text-white py-2 px-6 rounded-lg font-medium hover:bg-green-600 transition-all shadow-md">
        Add New Product
      </button>
    </div>
  );
};

export default ManageProducts;
