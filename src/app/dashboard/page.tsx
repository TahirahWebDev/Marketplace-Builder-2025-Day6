"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FeatureBar from "../components/FeatureBar";
import ShopHeader from "../components/ShopHeader";
import Analytics from "../components/Analytics";
import ManageProducts from "../components/ManageProducts";
import ManageOrders from "../components/ManageOrders";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminDashboard: React.FC = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [activeComponent, setActiveComponent] = useState<"analytics" | "products" | "orders" | null>(null);
  const router = useRouter();

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (!isAdmin) {
      toast.error("Access denied! Please log in as an admin.");
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } else {
      setIsAuthorized(true);
    }
  }, [router]);

  if (!isAuthorized) {
    return null;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <ToastContainer />
      <Navbar />
      <ShopHeader title="Admin Dashboard" breadcrumb="dashboard" />
      <div className="container mx-auto px-6 lg:px-8 mt-4 flex justify-end">
        <button
          onClick={() => {
            localStorage.removeItem("isAdmin");
            toast.success("You have successfully logged out!");
            setTimeout(() => router.push("/login"), 2000);
          }}
          className="bg-red-500 text-white py-2 px-6 rounded-md font-semibold hover:bg-red-600 transition shadow-lg"
        >
          Logout
        </button>
      </div>

      <div className="container mx-auto px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Analytics Card */}
          <div
            className={`p-6 rounded-lg shadow-md transition-all ${
              activeComponent === "analytics"
                ? "bg-blue-600 text-white"
                : "bg-white border border-gray-300"
            } hover:shadow-lg cursor-pointer`}
            onClick={() =>
              setActiveComponent((prev) => (prev === "analytics" ? null : "analytics"))
            }
          >
            <h2 className="text-xl font-semibold mb-2">Analytics</h2>
            <p className="text-sm">
              {activeComponent === "analytics"
                ? "Viewing Analytics data"
                : "Click to view analytics"}
            </p>
          </div>

          {/* Manage Products Card */}
          <div
            className={`p-6 rounded-lg shadow-md transition-all ${
              activeComponent === "products"
                ? "bg-green-600 text-white"
                : "bg-white border border-gray-300"
            } hover:shadow-lg cursor-pointer`}
            onClick={() =>
              setActiveComponent((prev) => (prev === "products" ? null : "products"))
            }
          >
            <h2 className="text-xl font-semibold mb-2">Manage Products</h2>
            <p className="text-sm">
              {activeComponent === "products"
                ? "Viewing Products Management"
                : "Click to manage products"}
            </p>
          </div>

          {/* Manage Orders Card */}
          <div
            className={`p-6 rounded-lg shadow-md transition-all ${
              activeComponent === "orders"
                ? "bg-yellow-600 text-white"
                : "bg-white border border-gray-300"
            } hover:shadow-lg cursor-pointer`}
            onClick={() =>
              setActiveComponent((prev) => (prev === "orders" ? null : "orders"))
            }
          >
            <h2 className="text-xl font-semibold mb-2">Manage Orders</h2>
            <p className="text-sm">
              {activeComponent === "orders"
                ? "Viewing Orders Management"
                : "Click to manage orders"}
            </p>
          </div>
        </div>

        {/* Dynamic Component Rendering */}
        <div className="bg-white p-6 rounded-lg shadow-lg mt-4">
          {activeComponent === "analytics" && <Analytics />}
          {activeComponent === "products" && <ManageProducts />}
          {activeComponent === "orders" && <ManageOrders />}
          {!activeComponent && (
            <p className="text-gray-500 text-center">
              Select a section above to view its details.
            </p>
          )}
        </div>
      </div>

      <FeatureBar />
      <Footer />
    </div>
  );
};

export default AdminDashboard;
