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
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const tabs = ["Description", "Additional Information", "Reviews"];

  const handleAddToCart = () => {
    const cartItem = {
      name: product.name,
      price: parseFloat(product.price), // Ensure price is a valid number
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
      <div className="flex flex-col lg:flex-row items-center justify-between bg-beige p-8">
        {/* Product Image */}
        <div className="flex flex-col gap-4 ml-28 lg:mr-8">
          <img
            src={product.image}
            alt={product.name}
            className="w-[300px] h-[400px] rounded-lg"
          />
        </div>

        {/* Product Information */}
        <div className="flex flex-col items-start lg:ml-8 lg:w-2/3">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl text-gray-600 mb-4">{product.price}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>

          {/* Size Options */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Size</h3>
            <div className="flex gap-4">
              <button className="w-10 h-10 flex items-center justify-center text-white bg-[#B88E2F] rounded">
                L
              </button>
              <button className="w-10 h-10 flex items-center justify-center bg-[#F9F1E7] rounded">
                XL
              </button>
              <button className="w-10 h-10 flex items-center justify-center bg-[#F9F1E7] rounded">
                XS
              </button>
            </div>
          </div>

          {/* Color Options */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Color</h3>
            <div className="flex gap-4">
              <div
                className="w-[30px] h-[30px] rounded-full"
                style={{ background: "#816DFA" }}
              ></div>
              <div
                className="w-[30px] h-[30px] rounded-full"
                style={{ background: "#000000" }}
              ></div>
              <div
                className="w-[30px] h-[30px] rounded-full"
                style={{ background: "#B88E2F" }}
              ></div>
            </div>
          </div>

          {/* Quantity Selector and Buttons */}
          <div className="mt-6 flex items-center gap-4">
            {/* Quantity Selector */}
            <div
              className="flex items-center justify-between w-[123px] h-[64px] border rounded-[10px]"
              style={{ gap: "0px", opacity: 1 }}
            >
              <button
                onClick={decreaseQuantity}
                className="w-10 h-full text-lg font-semibold text-gray-600 hover:text-black"
              >
                -
              </button>
              <span className="text-lg font-semibold">{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="w-10 h-full text-lg font-semibold text-gray-600 hover:text-black"
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-[215px] h-[64px] flex items-center justify-center border text-lg font-bold rounded-[15px]"
            >
              Add to Cart
            </button>

            {/* Compare Button */}
            <Link href="/productComparison">
              <button className="w-[215px] h-[64px] flex items-center justify-center border text-lg font-bold rounded-[15px]">
                + Compare
              </button>
            </Link>
          </div>

          {/* Divider */}
          <div
            className="mt-8"
            style={{
              width: "605.01px",
              height: "0px",
              borderTop: "1px solid #D9D9D9",
              opacity: 1,
            }}
          ></div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-8">
            <FaFacebook className="text-black-800" size={30} />
            <FaLinkedin className="text-black-800" size={30} />
            <FaTwitter className="text-black-800" size={30} />
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="bg-white p-8">
        <div className="flex justify-center space-x-8 border-b border-gray-300 pb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`text-lg font-semibold ${activeTab === tab ? "text-black" : "text-gray-500"}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-8 text-center">
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
