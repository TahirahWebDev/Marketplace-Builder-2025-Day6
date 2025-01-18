import React from 'react';
import Navbar from '../components/Navbar';
import ShopHeader from '../components/ShopHeader';
import FeatureBar from '../components/FeatureBar';
import Footer from '../components/Footer';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext } from '@/components/ui/pagination';
import BlogSection from '../components/BlogSection';
import { createClient } from 'next-sanity';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: true,
  apiVersion: "2025-01-13", // Use the API version as required
});

const Blog = async () => {
  try {
    const query = `*[_type == "blog"]{
      _id,
      name,
      bio,
      image{
        asset->{
          _id,
          url
        }
      },
      _createdAt
    }`;

    const posts = await client.fetch(query);

    const formattedPosts = posts.map((post: any) => ({
      _id: post._id,
      name: post.name,
      bio: post.bio,
      imageUrl: post.image?.asset?.url || '/fallback-image.jpg',
      _createdAt: post._createdAt,
    }));

    return (
      <div>
        <Navbar />
        <ShopHeader title="Blog" breadcrumb="Blog" />
        <BlogSection posts={formattedPosts} />
        
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
  } catch (error) {
    console.error('Error fetching posts:', error);
    return (
      <div>
        <Navbar />
        <ShopHeader title="Blog" breadcrumb="Blog" />
        <div>No blog posts available</div>
        <FeatureBar />
        <Footer />
      </div>
    );
  }
};

export default Blog;
