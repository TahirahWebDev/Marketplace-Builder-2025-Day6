"use client";
import React, { useState } from "react";

interface Product {
  _id: string;
  title: string;
  tags?: string[]; // Updated to make tags optional
  price: number;
  discountPercentage?: number;
  isNew?: boolean;
  productImage: string;
  stockStatus: "in-stock" | "out-of-stock";
}

interface FilterBarProps {
  products: Product[];
  onFilter: (filtered: Product[]) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ products, onFilter }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);

    const filtered = products.filter(
      (product) =>
        product.title.toLowerCase().includes(value) ||
        (product.tags?.some((tag) => tag.toLowerCase().includes(value)) ?? false)
    );

    onFilter(filtered);
  };

  return (
    <div className="bg-[#f8f8f8] p-6 rounded-lg shadow-lg mb-8">
      <div className="flex items-center justify-between gap-6">
        <input
          type="text"
          placeholder="Search products by name or tags..."
          value={search}
          onChange={handleSearch}
          className="w-full p-3 border border-gray-300 rounded-lg text-sm placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:outline-none"
        />
        <button
          onClick={() => {
            setSearch("");
            onFilter(products); // Reset filter on clear
          }}
          className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition duration-200"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
