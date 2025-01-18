"use client";

import React, { useState, useEffect } from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Sidebar from "../components/Sidebar";

interface Product {
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  productImage: string;
}

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState<{
    name: string;
    price: number;
    quantity: number;
  }[]>([]);
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    const cartItem = {
      name: product.title,
      price: parseFloat(product.price),
      quantity,
    };

    setCartItems((prevItems) => {
      const updatedCartItems = [...prevItems, cartItem];
      setSidebarVisible(true);
      return updatedCartItems;
    });
  };

  const handleRemoveItem = (itemName: string) => {
    const updatedCartItems = cartItems.filter((item) => item.name !== itemName);
    setCartItems(updatedCartItems);
  };

  useEffect(() => {
    if (cartItems.length > 0) {
      const queryParams = new URLSearchParams({
        cartItems: JSON.stringify(cartItems),
      }).toString();
      router.push(`/checkout?${queryParams}`);
    }
  }, [cartItems, router]);

  const truncateDescription = (description: string, maxLength: number) => {
    if (description.length > maxLength) {
      return `${description.slice(0, maxLength)}...`;
    }
    return description;
  };

  return (
    <div className="min-h-screen  p-6">
      {/* Product Details Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between bg-white shadow-lg rounded-lg p-6 lg:p-8 gap-8">
        {/* Product Image */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <div className="relative">
            {product.discount && (
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                {product.discount}% OFF
              </span>
            )}
            <img
              src={product.productImage}
              alt={product.title}
              className="w-full max-w-sm h-auto rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col items-start lg:w-2/3 space-y-4">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-800">
            {product.title}
          </h1>
          <div className="flex items-center space-x-4">
            <p className="text-2xl font-bold text-gray-800">Rp {product.price}</p>
            {product.originalPrice && (
              <p className="text-xl text-gray-500 line-through">
                Rp {product.originalPrice}
              </p>
            )}
          </div>
          <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
            {truncateDescription(product.description, 300)}
          </p>

          {/* Size Selector */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Size</h3>
            <div className="flex gap-2">
              {["L", "XL", "XS"].map((size) => (
                <button
                  key={size}
                  className="w-10 h-10 flex items-center justify-center border rounded-lg hover:shadow-md transition-shadow"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selector */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Color</h3>
            <div className="flex gap-2">
              {["#816DFA", "#000000", "#B88E2F"].map((color) => (
                <div
                  key={color}
                  className="w-8 h-8 rounded-full border-2 border-gray-300 shadow-md"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center gap-4">
            <div className="flex items-center border rounded-lg shadow-md">
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
              className="px-4 py-2 bg-yellow-700 hover:bg-yellow-800 text-white font-bold rounded-lg shadow-md transition"
            >
              Add to Cart
            </button>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-300 mt-6"></div>

          {/* Social Share Icons */}
          <div className="flex items-center gap-4">
            <FaFacebook className="hover:text-yellow-800" size={32} />
            <FaLinkedin className="hover:text-yellow-800" size={32} />
            <FaTwitter className="hover:text-yellow-800" size={32} />
          </div>
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
