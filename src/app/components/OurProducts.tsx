"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@sanity/client";

interface Product {
  _id: string;
  title: string;
  price: number;
  discountPercentage?: number;
  isNew?: boolean;
  productImage: string;
}

interface OurProductsProps {
  showHeading: boolean;
  showButton: boolean;
}

// Configure the Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: true,
  apiVersion: "2025-01-13",
});

const OurProducts: React.FC<OurProductsProps> = ({ showHeading, showButton }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Fetch products from Sanity
    const fetchProducts = async () => {
      const query = `
        *[_type == "product"]{
          _id,
          title,
          price,
          discountPercentage,
          isNew,
          "productImage": productImage.asset->url
        }
      `;

      const data = await client.fetch(query);
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (productId: string) => {
    router.push(`/product/${productId}`);
  };

  return (
    <section className="max-w-screen-xl mx-auto mt-16 px-4 sm:px-6">
      {showHeading && (
        <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="relative bg-white rounded-lg shadow hover:shadow-lg transition group overflow-hidden"
          >
            <div className="relative">
              <img
                src={product.productImage}
                alt={product.title}
                width={285}
                height={300}
                className="w-full h-[300px] object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center">
                <button
                  onClick={() => handleAddToCart(product._id)}
                  className="px-6 py-2 bg-gold-500 text-white rounded-lg mt-20 mb-2"
                >
                  Add to cart
                </button>
              </div>
            </div>

            <div className="p-4 group-hover:bg-black group-hover:bg-opacity-80 group-hover:text-white transition duration-300">
              <h3 className="font-semibold text-lg">{product.title}</h3>
              <div className="flex justify-between items-center mt-4">
                <span className="text-gold-500 font-bold">Rp {product.price}</span>
                {product.discountPercentage && (
                  <span className="text-red-500">
                    -{product.discountPercentage}%
                  </span>
                )}
              </div>
            </div>

            {product.isNew && (
              <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 text-sm rounded-full">
                New
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProducts;
