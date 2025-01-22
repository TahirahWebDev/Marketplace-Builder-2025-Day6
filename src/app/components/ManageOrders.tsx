"use client";
import React from "react";

const ManageOrders: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Manage Orders</h2>
      <p className="text-gray-600">View and update customer orders. Track their status and ensure timely delivery.</p>
      {/* Add order management UI here */}
      <button className="mt-4 bg-yellow-600 text-white py-2 px-6 rounded-lg font-medium hover:bg-yellow-700 transition-all shadow-md">
        View All Orders
      </button>
    </div>
  );
};

export default ManageOrders;
