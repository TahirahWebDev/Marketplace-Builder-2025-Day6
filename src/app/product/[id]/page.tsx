import React from "react";
import Navbar from "@/app/components/Navbar";
import Breadcrumb from "@/app/components/Breadcrumb";
import Footer from "@/app/components/Footer";
import ProductDetail from "@/app/components/ProductDetail";
import OurProducts from "@/app/components/OurProducts";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: true,
  apiVersion: "2025-01-13",
});

const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const resolvedParams = await params; // Resolve the Promise
  const { id } = resolvedParams;

  // Fetch product by ID from Sanity
  const query = `
    *[_type == "product" && _id == $id][0]{
      title,
      price,
      description,
      discountPercentage,
      isNew,
      "productImage": productImage.asset->url
    }
  `;
  const product = await client.fetch(query, { id });

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
      <OurProducts showHeading={false} />
      <Footer />
    </div>
  );
};

export default ProductPage;
