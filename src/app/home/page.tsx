"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import BrowseRange from "../components/BrowseRange";
import OurProducts from "../components/OurProducts";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import { createClient } from "next-sanity";

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

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: true,
  apiVersion: "2025-01-13",
});

const productsQuery = `*[_type == "product"]{
  _id,
  title,
  price,
  discountPercentage,
  isNew,
  "productImage": productImage.asset->url,
  stockStatus
}`;

const browseRangeQuery = `*[_type == "browseRange"]{
  _id,
  title,
  "imageUrl": image.asset->url
}`;

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [browseRange, setBrowseRange] = useState([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  const [isLoadingBrowseRange, setIsLoadingBrowseRange] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data: Product[] = await client.fetch(productsQuery);
        console.log("Fetched Products:", data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoadingProducts(false);
      }
    };

    const fetchBrowseRange = async () => {
      try {
        const data = await client.fetch(browseRangeQuery);
        console.log("Fetched BrowseRange:", data); // Debugging log
        setBrowseRange(data);
      } catch (error) {
        console.error("Error fetching browse range:", error);
      } finally {
        setIsLoadingBrowseRange(false);
      }
    };

    fetchProducts();
    fetchBrowseRange();
  }, []);

  return (
    <div>
      <Navbar />
      <Banner />
      {!isLoadingBrowseRange && <BrowseRange data={browseRange} />}
      <OurProducts products={products} isLoading={isLoadingProducts} showHeading={true} />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
