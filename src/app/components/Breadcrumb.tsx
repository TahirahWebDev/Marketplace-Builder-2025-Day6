import React from "react";
import Link from "next/link";

interface Product {
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  image: string;
}

const Breadcrumb = ({ product }: { product: Product }) => {
  return (
    <div className="flex items-center w-full py-4 px-6 bg-[#fdf6ee]">
      {/* Breadcrumb Links */}
      <nav className="flex items-center text-sm text-gray-600 space-x-2">
        <Link href="/" passHref>
          <span className="hover:text-black cursor-pointer">Home</span>
        </Link>
        <span className="text-black">&gt;</span>
        <Link href="/shop" passHref>
          <span className="hover:text-black cursor-pointer">Shop</span>
        </Link>
        <span className="text-black">&gt;</span>
        <div className="ml-4 w-[1px] h-4 bg-gray-300"></div>
        <span className="text-black font-medium">{product.name}</span>
      </nav>
    </div>
  );
};

export default Breadcrumb;
