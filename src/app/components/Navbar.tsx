"use client"
import React, { useState } from 'react';
import { FaUser, FaSearch, FaHeart, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center max-w-screen-xl w-full h-[70px] px-8 mx-auto relative">
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

      {/* Hamburger Menu (Mobile and Medium Screens) */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-black text-2xl"
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Navbar */}
      <nav
        className={`absolute md:static top-[70px] left-0 w-full md:w-auto bg-white md:bg-transparent md:flex items-center md:space-x-10 flex-col md:flex-row z-50 transition-all duration-300 ${
          isMenuOpen ? 'flex' : 'hidden'
        }`}
      >
        <Link href="/" className="block text-black font-medium hover:underline py-2 md:py-0">
          Home
        </Link>
        <Link href="/shop" className="block text-black font-medium hover:underline py-2 md:py-0">
          Shop
        </Link>
        <Link href="/blog" className="block text-black font-medium hover:underline py-2 md:py-0">
          Blog
        </Link>
        <Link href="/contact" className="block text-black font-medium hover:underline py-2 md:py-0">
          Contact
        </Link>
      </nav>

      {/* Icons */}
      <div className="hidden md:flex items-center space-x-6 text-black">
        <FaUser />
        <FaSearch />
        <FaHeart />
        <FaShoppingCart />
      </div>
    </header>
  );
};

export default Navbar;
