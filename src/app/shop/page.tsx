"use client";

import React, { useState, useEffect } from "react";
import { createClient } from "@sanity/client";
import FilterBar from "../components/FilterBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ShopHeader from "../components/ShopHeader";
import FeatureBar from "../components/FeatureBar";
import OurProducts from "../components/OurProducts"; // Importing OurProducts component

interface Product {
  _id: string;
  title: string;
  tags: string[];
  price: number;
  discountPercentage?: number;
  isNew?: boolean;
  productImage: string;
  stockStatus: "in-stock" | "out-of-stock";
}

const productsQuery = `*[_type == "product"]{
  _id,
  title,
  price,
  discountPercentage,
  isNew,
  "productImage": productImage.asset->url,
  stockStatus
}`;

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: true,
  apiVersion: "2025-01-13",
});

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data: Product[] = await client.fetch(productsQuery);
      setProducts(data);
      setFilteredProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Shop Header */}
      <ShopHeader title="Shop" breadcrumb="Shop" />

      {/* Filter Bar */}
      <FilterBar products={products} onFilter={setFilteredProducts} />

      {/* Display filtered products using OurProducts component */}
      <OurProducts products={filteredProducts} showHeading={false} />

      {/* Feature Bar */}
      <FeatureBar />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Shop;
