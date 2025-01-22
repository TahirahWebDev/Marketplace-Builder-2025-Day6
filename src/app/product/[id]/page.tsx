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
  const resolvedParams = await params; 
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

  const relatedProductsQuery = `
    *[_type == "product" && _id != $id]{
      _id,
      title,
      price,
      discountPercentage,
      isNew,
      "productImage": productImage.asset->url,
      stockStatus
    }[0..4]`; // Limit to 4 related products

  const relatedProducts = await client.fetch(relatedProductsQuery, { id });

  return (
    <div>
      <Navbar />
      <Breadcrumb product={product} />
      <ProductDetail product={product} />
      <h1 className="mt-5 mb-0 ml-16 text-3xl font-semibold">
        You May Also Like
      </h1>
      
      {/* Display related products */}
      <OurProducts
  products={relatedProducts || []}
  isLoading={!relatedProducts} // Assume loading if relatedProducts is not yet available
  showHeading={false}
/>
      
      <Footer />
    </div>
  );
};

export default ProductPage;
