"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AnalyticsDashboard: React.FC = () => {
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales Over Time",
        data: [50, 100, 150, 200, 250, 300],
        borderColor: "#4CAF50",
        pointBackgroundColor: "#4CAF50",
        pointBorderColor: "#fff",
        pointHoverBorderColor: "#4CAF50",
        tension: 0.4,
      },
    ],
  };

  const userTrafficData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "User Traffic",
        data: [2000, 3000, 2500, 3500, 4500, 6000],
        borderColor: "#2196F3",
        pointBackgroundColor: "#2196F3",
        pointBorderColor: "#fff",
        pointHoverBorderColor: "#2196F3",
        tension: 0.4,
      },
    ],
  };

  return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Key Performance Indicators (KPIs) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-r from-green-400 to-green-500 text-white p-6 rounded-lg shadow-md hover:shadow-lg">
            <h2 className="text-lg font-medium">Total Sales</h2>
            <p className="text-3xl font-bold mt-2">$50,000</p>
          </div>
          <div className="bg-gradient-to-r from-blue-400 to-blue-500 text-white p-6 rounded-lg shadow-md hover:shadow-lg">
            <h2 className="text-lg font-medium">User Traffic</h2>
            <p className="text-3xl font-bold mt-2">10,000 visits</p>
          </div>
          <div className="bg-gradient-to-r from-purple-400 to-purple-500 text-white p-6 rounded-lg shadow-md hover:shadow-lg">
            <h2 className="text-lg font-medium">Popular Products</h2>
            <p className="text-3xl font-bold mt-2">Product A, Product B</p>
          </div>
        </div>

        {/* Sales Graph */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Sales Over Time</h2>
          <div className="relative">
            <Line
              data={chartData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: "top" as const,
                  },
                },
              }}
            />
          </div>
        </div>

        {/* User Traffic Graph */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">User Traffic Trends</h2>
          <div className="relative">
            <Line
              data={userTrafficData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: "top" as const,
                  },
                },
              }}
            />
          </div>
        </div>

        {/* Popular Products Section */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Popular Products</h2>
          <ul className="space-y-2">
            <li className="text-gray-700">
              <span className="font-semibold text-purple-600">Product A</span> - 200 sales
            </li>
            <li className="text-gray-700">
              <span className="font-semibold text-purple-600">Product B</span> - 180 sales
            </li>
            <li className="text-gray-700">
              <span className="font-semibold text-purple-600">Product C</span> - 150 sales
            </li>
          </ul>
        </div>
      </div>
  )
}

export default AnalyticsDashboard;
