import React from 'react';
import Navbar from '../components/Navbar';
import ShopHeader from '../components/ShopHeader';
import FeatureBar from '../components/FeatureBar';
import Footer from '../components/Footer';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
} from '@/components/ui/pagination';

const Blog = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Header section for the blog */}
      <ShopHeader title="Blog" breadcrumb="Blog" />

      <div className="container mx-auto mt-16 p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Blog posts */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="/blog1.jpg" alt="Blog 1" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Going all-in with millennial design</h2>
              <div className="text-sm text-gray-500 space-x-4 mb-4">
                <span>Admin</span>
                <span>14 Oct 2022</span>
                <span>Wood</span>
              </div>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Mauris mauris vitae ultricies leo
                integer malesuada nunc...
              </p>
              <a href="#" className="text-blue-500 font-medium">Read more</a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="/blog2.jpg" alt="Blog 2" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Exploring new ways of decorating</h2>
              <div className="text-sm text-gray-500 space-x-4 mb-4">
                <span>Admin</span>
                <span>14 Oct 2022</span>
                <span>Handmade</span>
              </div>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Mauris mauris vitae ultricies leo
                integer malesuada nunc...
              </p>
              <a href="#" className="text-blue-500 font-medium">Read more</a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="/blog3.jpg" alt="Blog 3" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Handmade pieces that took time to make</h2>
              <div className="text-sm text-gray-500 space-x-4 mb-4">
                <span>Admin</span>
                <span>14 Oct 2022</span>
                <span>Wood</span>
              </div>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Mauris mauris vitae ultricies leo
                integer malesuada nunc...
              </p>
              <a href="#" className="text-blue-500 font-medium">Read more</a>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Search input */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 border rounded-lg"
            />
          </div>

          {/* Categories */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li className="text-gray-700">Crafts (2)</li>
              <li className="text-gray-700">Design (8)</li>
              <li className="text-gray-700">Handmade (7)</li>
              <li className="text-gray-700">Interior (1)</li>
              <li className="text-gray-700">Wood (6)</li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
            <ul className="space-y-4">
              <li className="text-gray-700 flex justify-between">
                <a href="#" className="text-blue-500">Going all-in with millennial design</a>
                <span className="text-sm text-gray-500">03 Aug 2022</span>
              </li>
              <li className="text-gray-700 flex justify-between">
                <a href="#" className="text-blue-500">Exploring new ways of decorating</a>
                <span className="text-sm text-gray-500">03 Aug 2022</span>
              </li>
              <li className="text-gray-700 flex justify-between">
                <a href="#" className="text-blue-500">Handmade pieces that took time to make</a>
                <span className="text-sm text-gray-500">03 Aug 2022</span>
              </li>
              <li className="text-gray-700 flex justify-between">
                <a href="#" className="text-blue-500">Modern home in Milan</a>
                <span className="text-sm text-gray-500">03 Aug 2022</span>
              </li>
              <li className="text-gray-700 flex justify-between">
                <a href="#" className="text-blue-500">Colorful office redesign</a>
                <span className="text-sm text-gray-500">03 Aug 2022</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="container mx-auto py-6">
        <Pagination>
          <PaginationContent className="flex justify-center space-x-2">
            <PaginationItem>
              <PaginationLink href="/" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="/">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="/">3</PaginationLink>
            </PaginationItem>
            <PaginationNext href="/" />
          </PaginationContent>
        </Pagination>
      </div>

      <FeatureBar />
      <Footer />
    </div>
  );
};

export default Blog;
