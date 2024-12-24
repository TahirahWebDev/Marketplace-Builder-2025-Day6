import React from 'react';
import { FaUser, FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link'

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
        <Link href="/" className="text-black font-medium hover:underline">
          Home
        </Link>
        <Link href="shop" className="text-black font-medium hover:underline">
          Shop
        </Link>
        <Link href="/blog" className="text-black font-medium hover:underline">
          Blog
        </Link>
        <Link href="/contact" className="text-black font-medium hover:underline">
          Contact
        </Link>
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
