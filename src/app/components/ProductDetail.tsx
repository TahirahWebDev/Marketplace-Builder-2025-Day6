"use client";

import React, { useState, useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Reviews from "./Reviews";
import ShareButton from "./ShareButton";

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
  const [cartItems, setCartItems] = useState<
    { name: string; price: number; quantity: number }[]
  >([]);
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    const alreadyInWishlist = wishlist.some(
      (item: Product) => item.title === product.title
    );
    setIsInWishlist(alreadyInWishlist);
  }, [product.title]);

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
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      setSidebarVisible(true);
      setShowToast(true); // Trigger toast notification
      return updatedCartItems;
    });
  };

  // Toast notification effect
  useEffect(() => {
    if (showToast) {
      toast.success(`${product.title} added to cart!`);
      setShowToast(false); // Reset toast trigger
    }
  }, [showToast, product.title]);

  const handleRemoveItem = (itemName: string) => {
    const updatedCartItems = cartItems.filter((item) => item.name !== itemName);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const toggleWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    if (isInWishlist) {
      const updatedWishlist = wishlist.filter(
        (item: Product) => item.title !== product.title
      );
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      setIsInWishlist(false);
      toast.error(`${product.title} removed from wishlist.`);
    } else {
      const updatedWishlist = [...wishlist, product];
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      setIsInWishlist(true);
      toast.success(`${product.title} added to wishlist!`);
    }
  };

  const truncateDescription = (description: string, maxLength: number) => {
    if (description.length > maxLength) {
      return `${description.slice(0, maxLength)}...`;
    }
    return description;
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <ToastContainer />
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between bg-white shadow-lg rounded-lg p-6 lg:p-8 gap-8">
        {/* Product Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
          <div className="relative w-full max-w-md">
            {product.discount && (
              <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                {product.discount}% OFF
              </span>
            )}
            <img
              src={product.productImage}
              alt={product.title}
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>

        {/* Product Info Section */}
        <div className="flex flex-col items-start lg:w-1/2 space-y-6">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-800">{product.title}</h1>
          <div className="flex items-center space-x-4">
            <p className="text-3xl font-bold text-gray-800">Rp {product.price}</p>
            {product.originalPrice && (
              <p className="text-xl text-gray-500 line-through">
                Rp {product.originalPrice}
              </p>
            )}
          </div>
          <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
            {truncateDescription(product.description, 200)}
          </p>

          {/* Size and Color Selector */}
          <div className="w-full">
            <h3 className="text-lg font-semibold text-gray-700">Size</h3>
            <div className="flex gap-4 mt-2">
              {["L", "XL", "XS"].map((size) => (
                <button
                  key={size}
                  className="w-12 h-12 flex items-center justify-center border rounded-lg hover:shadow-md transition-shadow"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full mt-6">
            <h3 className="text-lg font-semibold text-gray-700">Color</h3>
            <div className="flex gap-4 mt-2">
              {["#816DFA", "#000000", "#B88E2F"].map((color) => (
                <div
                  key={color}
                  className="w-10 h-10 rounded-full border-2 border-gray-300 shadow-md"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>

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

          {/* Action Buttons */}
          <div className="flex items-center gap-6 mt-6">
            <button
              onClick={handleAddToCart}
              className="px-6 py-3 bg-yellow-700 hover:bg-yellow-800 text-white font-bold rounded-lg shadow-md transition"
            >
              Add to Cart
            </button>
            <button
              onClick={toggleWishlist}
              className="flex items-center mt-0 text-xl font-semibold text-gray-600"
            >
              {isInWishlist ? (
                <FaHeart className="text-red-500 mr-2" />
              ) : (
                <FaRegHeart className="text-gray-600 mr-2" />
              )}
              <span>{isInWishlist ? "Wishlist" : "Wishlist"}</span>
            </button>
            <ShareButton />
          </div>
        </div>
      </div>

      {/* Reviews */}
      <Reviews productTitle={product.title} />
    </div>
  );
};

export default ProductDetail;
