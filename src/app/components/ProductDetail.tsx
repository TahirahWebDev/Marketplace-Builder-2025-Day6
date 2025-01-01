"use client";

import React, { useState } from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import Sidebar from "../components/Sidebar";

interface Product {
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  image: string;
}

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("Description");
  const [cartItems, setCartItems] = useState<
    { name: string; price: number; quantity: number }[]
  >([]);
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const tabs = ["Description", "Additional Information", "Reviews"];

  const handleAddToCart = () => {
    const cartItem = {
      name: product.name,
      price: parseFloat(product.price.replace(/[^\d.-]/g, "")), // Extract numeric value
      quantity,
    };
    setCartItems((prevItems) => [...prevItems, cartItem]);
    setSidebarVisible(true);
  };

  const handleRemoveItem = (itemName: string) => {
    const updatedCartItems = cartItems.filter((item) => item.name !== itemName);
    setCartItems(updatedCartItems);
  };

  return (
    <div>
      {/* Product Details Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between bg-beige p-6 lg:p-8 gap-8">
        {/* Product Image */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-sm h-auto rounded-lg"
          />
        </div>

        {/* Product Information */}
        <div className="flex flex-col items-start lg:w-2/3 space-y-4">
          <h1 className="text-2xl lg:text-3xl font-bold">{product.name}</h1>
          <p className="text-lg lg:text-2xl text-gray-600">{product.price}</p>
          <p className="text-sm lg:text-base text-gray-600">{product.description}</p>

          {/* Size Options */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Size</h3>
            <div className="flex gap-2">
              {["L", "XL", "XS"].map((size) => (
                <button
                  key={size}
                  className="w-10 h-10 flex items-center justify-center border rounded-lg"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Options */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Color</h3>
            <div className="flex gap-2">
              {["#816DFA", "#000000", "#B88E2F"].map((color) => (
                <div
                  key={color}
                  className="w-8 h-8 rounded-full"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>

          {/* Quantity Selector and Buttons */}
          <div className="flex items-center gap-4">
            <div className="flex items-center border rounded-lg">
              <button
                onClick={decreaseQuantity}
                className="px-4 py-2 text-lg font-semibold text-gray-600 hover:text-black"
              >
                -
              </button>
              <span className="px-4 text-lg font-semibold">{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="px-4 py-2 text-lg font-semibold text-gray-600 hover:text-black"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="px-4 py-2 border font-bold rounded-lg"
            >
              Add to Cart
            </button>

            <Link href="/productComparison">
              <button className="px-4 py-2 border font-bold rounded-lg">
                + Compare
              </button>
            </Link>
          </div>

          <div className="w-full h-px bg-gray-300 mt-6"></div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <FaFacebook className="text-black" size={24} />
            <FaLinkedin className="text-black" size={24} />
            <FaTwitter className="text-black" size={24} />
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="bg-white p-6 lg:p-8">
        <div className="flex justify-center space-x-4 lg:space-x-8 border-b border-gray-300 pb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`text-sm lg:text-lg font-semibold ${
                activeTab === tab ? "text-black" : "text-gray-500"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-6 lg:mt-8 text-center">
          {activeTab === "Description" && (
            <p className="text-gray-600">
              Embodying the raw, wayward spirit of rock n roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road.
            </p>
          )}
          {activeTab === "Additional Information" && (
            <p className="text-gray-600">Additional info content here.</p>
          )}
          {activeTab === "Reviews" && (
            <p className="text-gray-600">Reviews content here.</p>
          )}
        </div>
      </div>

      {/* Sidebar Component */}
      <Sidebar
        show={isSidebarVisible}
        onClose={() => setSidebarVisible(false)}
        cartItems={cartItems}
        removeItem={handleRemoveItem}
      />
    </div>
  );
};

export default ProductDetail;
