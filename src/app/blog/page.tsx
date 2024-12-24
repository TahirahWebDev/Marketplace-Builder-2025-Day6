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
import BlogSection from '../components/BlogSection';

const Blog = () => {
  return (
    <div>
      <Navbar />
      <ShopHeader title="Blog" breadcrumb="Blog" />
      <BlogSection />
      
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
