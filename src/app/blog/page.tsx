"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ShopHeader from "../components/ShopHeader";
import FeatureBar from "../components/FeatureBar";
import Footer from "../components/Footer";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext } from "@/components/ui/pagination";
import BlogSection from "../components/BlogSection";
import { createClient } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: true,
  apiVersion: "2025-01-13",
});

interface BlogPost {
  _id: string;
  name: string;
  bio: string;
  imageUrl: string;
  _createdAt: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const query: string = `*[_type == "blog"]{
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

        const fetchedPosts = await client.fetch(query);

        const formattedPosts = fetchedPosts.map((post: any) => ({
          _id: post._id,
          name: post.name,
          bio: post.bio,
          imageUrl: post.image?.asset?.url || "/fallback-image.jpg",
          _createdAt: post._createdAt,
        }));

        setPosts(formattedPosts);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError("Failed to fetch blog posts.");
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div>
        <Navbar />
        <ShopHeader title="Blog" breadcrumb="Blog" />
        <div className="text-center py-10">Loading...</div>
        <FeatureBar />
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Navbar />
        <ShopHeader title="Blog" breadcrumb="Blog" />
        <div className="text-center py-10">{error}</div>
        <FeatureBar />
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <ShopHeader title="Blog" breadcrumb="Blog" />
      <BlogSection posts={posts} />
      
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
