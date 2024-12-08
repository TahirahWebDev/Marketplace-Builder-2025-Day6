import React from 'react';
import { FaUser, FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';
import Image from 'next/image';

const Navbar = () => {
  return (
    <header className="flex justify-between items-center max-w-screen-xl w-full h-[70px] px-8 mx-auto">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image
          src="/logo.png"
          alt="Furniro Logo"
          width={40}
          height={40}
          className="object-contain"
        />
        <span className="text-gold-700 text-xl font-bold">Furniro</span>
      </div>

      {/* Navbar */}
      <nav className="flex items-center space-x-10">
        <a href="/" className="text-black font-medium hover:underline">
          Home
        </a>
        <a href="shop" className="text-black font-medium hover:underline">
          Shop
        </a>
        <a href="/blog" className="text-black font-medium hover:underline">
          Blog
        </a>
        <a href="/contact" className="text-black font-medium hover:underline">
          Contact
        </a>
      </nav>

      {/* Icons */}
      <div className="flex items-center space-x-6 text-black">
        <FaUser />
        <FaSearch />
        <FaHeart />
        <FaShoppingCart />
      </div>
    </header>
  );
};

export default Navbar;
