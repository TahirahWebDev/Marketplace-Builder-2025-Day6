"use client";

import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

const ShareButtonWithPopup: React.FC = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleShareClick = () => {
    setIsPopupVisible(true); // Show the popup
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false); // Hide the popup
  };

  const handleIconClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="relative">
      {/* Share Button */}
      <button
        onClick={handleShareClick}
        className="px-4 py-2 bg-yellow-700 hover:bg-yellow-800 text-white text-[20px] font-bold rounded-lg shadow-md transition"
      >
        Share
      </button>

      {/* Popup Modal */}
      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          {/* Modal Content */}
          <div className="bg-white rounded-lg p-6 shadow-lg w-80 text-center">
            <h3 className="text-lg font-bold mb-4">Share this product</h3>
            <div className="flex justify-center items-center gap-6">
              <FaFacebook
                size={32}
                className="text-blue-600 hover:text-blue-800 cursor-pointer transition"
                onClick={() => handleIconClick("https://www.facebook.com")}
              />
              <FaTwitter
                size={32}
                className="text-blue-400 hover:text-blue-600 cursor-pointer transition"
                onClick={() => handleIconClick("https://www.twitter.com")}
              />
              <FaWhatsapp
                size={32}
                className="text-green-500 hover:text-green-700 cursor-pointer transition"
                onClick={() => handleIconClick("https://www.whatsapp.com")}
              />
            </div>
            <button
              onClick={handleClosePopup}
              className="mt-6 px-4 py-2 bg-gray-600 hover:bg-gray-800 text-white font-bold rounded-lg transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShareButtonWithPopup;
