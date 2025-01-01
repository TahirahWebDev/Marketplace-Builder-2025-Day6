"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Product {
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  image: string;
}

interface OurProductsProps {
  showHeading: boolean;
  showButton: boolean;
}

const OurProducts: React.FC<OurProductsProps> = ({
  showHeading,
  showButton,
}) => {
  const router = useRouter();

  const products: Product[] = [
    {
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: "Rp 3.500.000",
      discount: "-30%",
      image: "/product1.png",
    },
    {
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      discount: "",
      image: "/product8.jpg",
    },
    {
      name: "Lolito",
      description: "Luxury big sofa",
      price: "Rp 7.000.000",
      originalPrice: "Rp 14.000.000",
      discount: "-50%",
      image: "/product3.png",
    },
    {
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: "Rp 500.000",
      discount: "New",
      image: "/product4.jpg",
    },
    {
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: "Rp 3.500.000",
      discount: "-30%",
      image: "/product5.png",
    },
    {
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      discount: "",
      image: "/product6.png",
    },
    {
      name: "Lolito",
      description: "Luxury big sofa",
      price: "Rp 7.000.000",
      originalPrice: "Rp 14.000.000",
      discount: "-50%",
      image: "/product7.jpg",
    },
    {
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: "Rp 500.000",
      discount: "New",
      image: "/product8.jpg",
    },
  ];

  const handleAddToCart = (product: Product) => {
    router.push(`/product/${product.name}`);
  };

  return (
    <section className="max-w-screen-xl mx-auto mt-16 px-4 sm:px-6">
      {showHeading && (
        <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow hover:shadow-lg transition group overflow-hidden"
          >
            <div className="relative">
              <Image
                src={product.image}
                alt={product.name}
                width={285}
                height={300}
                className="w-full h-[300px] object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="px-6 py-2 bg-gold-500 text-white rounded-lg mt-20 mb-2"
                >
                  Add to cart
                </button>
              </div>
            </div>

            <div className="p-4 group-hover:bg-black group-hover:bg-opacity-80 group-hover:text-white transition duration-300">
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-gray-500 group-hover:text-gray-300">
                {product.description}
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-gold-500 font-bold">{product.price}</span>
                {product.originalPrice && (
                  <span className="line-through text-gray-400 group-hover:text-gray-500">
                    {product.originalPrice}
                  </span>
                )}
              </div>
            </div>

            {product.discount && (
              <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 text-sm rounded-full">
                {product.discount}
              </div>
            )}
          </div>
        ))}
      </div>

      {showButton && (
        <button className="block mx-auto mt-8 px-6 py-3 text-[#B88E2F] border-[#B88E2F] hover:text-white rounded-lg hover:bg-[#B88E2F]">
          Show More
        </button>
      )}
    </section>
  );
};

export default OurProducts;
