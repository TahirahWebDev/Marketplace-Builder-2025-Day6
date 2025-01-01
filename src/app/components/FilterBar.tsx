import React from "react";
import { FiFilter } from "react-icons/fi";
import { BsGrid3X3, BsList } from "react-icons/bs";

const FilterBar = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full py-4 px-6 bg-[#fdf6ee]">
      {/* Left Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-x-6 md:space-y-0 w-full md:w-auto">
        {/* Filter Button */}
        <button className="flex items-center space-x-2 text-black font-medium">
          <FiFilter className="text-xl" />
          <span>Filter</span>
        </button>

        {/* View Buttons */}
        <div className="flex items-center space-x-4">
          <BsGrid3X3 className="text-xl cursor-pointer" />
          <BsList className="text-xl cursor-pointer" />
        </div>

        {/* Divider */}
        <div className="h-6 w-px bg-gray-400 hidden md:block"></div>

        {/* Results */}
        <span className="text-gray-600">Showing 1–16 of 32 results</span>
      </div>

      {/* Right Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-x-6 md:space-y-0 w-full md:w-auto mt-4 md:mt-0">
        {/* Show */}
        <div className="flex items-center space-x-2">
          <span className="text-black">Show</span>
          <input
            type="number"
            className="w-12 h-8 text-center border border-gray-300 rounded-md text-gray-700"
            value="16"
            readOnly
          />
        </div>

        {/* Sort By */}
        <div className="flex items-center space-x-2">
          <span className="text-black">Sort by</span>
          <select
            className="h-8 px-4 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400"
            defaultValue="Default"
          >
            <option value="Default">Default</option>
            <option value="Price">Price</option>
            <option value="Popularity">Popularity</option>
            <option value="Rating">Rating</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
