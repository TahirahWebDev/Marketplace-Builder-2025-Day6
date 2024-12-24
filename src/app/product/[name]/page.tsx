import React from "react";
import ProductDetail from "@/app/components/ProductDetail";
import Navbar from "@/app/components/Navbar";
import Breadcrumb from "@/app/components/Breadcrumb";
import Footer from "@/app/components/Footer";
import OurProducts from "@/app/components/OurProducts";

// Mock product data
const products = [
  { name: "Syltherine", description: "Stylish cafe chair", price: "Rp 2.500.000", originalPrice: "Rp 3.500.000", discount: "-30%", image: "/product1.png" },
  { name: "Leviosa", description: "Stylish cafe chair", price: "Rp 2.500.000", discount: "", image: "/product8.jpg" },
  { name: "Lolito", description: "Luxury big sofa", price: "Rp 7.000.000", originalPrice: "Rp 14.000.000", discount: "-50%", image: "/product3.png" },
  { name: "Respira", description: "Outdoor bar table and stool", price: "Rp 500.000", discount: "New", image: "/product4.jpg" },
  { name: "Syltherine", description: "Stylish cafe chair", price: "Rp 2.500.000", originalPrice: "Rp 3.500.000", discount: "-30%", image: "/product5.png" },
  { name: "Leviosa", description: "Stylish cafe chair", price: "Rp 2.500.000", discount: "", image: "/product6.png" },
  { name: "Lolito", description: "Luxury big sofa", price: "Rp 7.000.000", originalPrice: "Rp 14.000.000", discount: "-50%", image: "/product7.jpg" },
  { name: "Respira", description: "Outdoor bar table and stool", price: "Rp 500.000", discount: "New", image: "/product8.jpg" },
];

// Adjusted ProductPage for async params
const ProductPage = async ({ params }: { params: Promise<{ name: string }> }) => {
  const resolvedParams = await params;  // Await to resolve the Promise
  const { name } = resolvedParams;

  const product = products.find(
    (prod) => prod.name.toLowerCase() === name.toLowerCase()
  );

  if (!product) {
    return (
      <div>
        <Navbar />
        <p className="text-center text-xl mt-20 text-red-600">
          Product not found!
        </p>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <Breadcrumb product={product} />
      <ProductDetail product={product} />
      <h1 className="mt-5 mb-0 text-4xl text-center font-semibold">
        Related Products
      </h1>
      <OurProducts showButton={true} showHeading={false} />
      <Footer />
    </div>
  );
};

export default ProductPage;
