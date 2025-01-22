"use client";

import React, { useEffect, useState } from "react";
import FeatureBar from "../components/FeatureBar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ShopHeader from "../components/ShopHeader";

interface Product {
  title: string;
  description: string;
  price: string;
  productImage: string;
}

const Wishlist: React.FC = () => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(storedWishlist);
  }, []);

  return (
    <>
      <Navbar />
      <ShopHeader title="Wishlist" breadcrumb="wishlist" />
      <div className="min-h-screen px-6 pb-0 flex flex-col">
        {wishlist.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlist.map((product, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={product.productImage}
                  alt={product.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {product.title}
                  </h2>
                  <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                    {product.description}
                  </p>
                  <p className="text-xl font-bold text-yellow-700 mt-4">
                    Rp {product.price}
                  </p>
                </div>
                <button
                  onClick={() => {
                    const updatedWishlist = wishlist.filter(
                      (_, i) => i !== index
                    );
                    setWishlist(updatedWishlist);
                    localStorage.setItem(
                      "wishlist",
                      JSON.stringify(updatedWishlist)
                    );
                  }}
                  className="absolute top-3 right-4 bg-red-500 text-white rounded-full px-2 shadow-md hover:bg-red-600 transition"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <img
              src="/empty-wishlist.png"
              alt="Empty wishlist"
              className="w-120 mt-6 mb-8"
            />
          </div>
        )}
      </div>
      <FeatureBar />
      <Footer />
    </>
  );
};

export default Wishlist;
