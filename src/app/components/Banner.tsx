import React from 'react';

const Banner = () => {
  return (
    <div className="relative w-screen h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/banner.jpg"
          alt="Banner Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:left-[60%] sm:top-[40%] sm:transform sm:-translate-y-[40%] bg-[#FFF3e3] p-8 rounded-md shadow-lg w-[90%] sm:w-[400px]">
        <p className="text-sm font-medium text-gray-600">New Arrival</p>
        <h1 className="text-4xl font-bold text-yellow-800 mt-2 leading-snug">
          Discover Our <br /> New Collection
        </h1>
        <p className="text-sm text-gray-600 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="mt-6 px-6 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700">
          BUY NOW
        </button>
      </div>
    </div>
  );
};

export default Banner;
