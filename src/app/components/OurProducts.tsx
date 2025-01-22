import Link from "next/link";
import React from "react";

interface Product {
  _id: string;
  title: string;
  price: number;
  discountPercentage?: number;
  isNew?: boolean;
  productImage: string;
  stockStatus: "in-stock" | "out-of-stock";
}

interface OurProductsProps {
  products: Product[];
  isLoading: boolean;
  showHeading: boolean;
}

const OurProducts: React.FC<OurProductsProps> = ({ products, isLoading, showHeading }) => {
  return (
    <section className="max-w-screen-xl mx-auto mt-16 px-4 sm:px-6">
      {showHeading && (
        <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {isLoading ? (
          <p className="text-center text-gray-500">Loading products...</p>
        ) : products.length > 0 ? (
          products.map((product) => (
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
                  <button className="px-6 py-2 bg-gold-500 text-white rounded-lg mt-20 mb-2">
                    <Link href={`/product/${product._id}`}>Add to cart</Link>
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
                <div
                  className={`mt-2 text-sm font-medium ${
                    product.stockStatus === "in-stock"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {product.stockStatus === "in-stock"
                    ? "In Stock"
                    : "Out of Stock"}
                </div>
              </div>

              {product.isNew && (
                <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 text-sm rounded-full">
                  New
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No products found.</p>
        )}
      </div>
    </section>
  );
};

export default OurProducts;
