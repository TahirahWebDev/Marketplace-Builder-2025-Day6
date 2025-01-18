import React from 'react';

type Post = {
  _id: string;
  name: string;
  bio: string;
  imageUrl: string;
  _createdAt: string;
};

type BlogProps = {
  posts: Post[];
};

const BlogSection: React.FC<BlogProps> = ({ posts }) => {
  if (!Array.isArray(posts) || posts.length === 0) {
    return <div>No blog posts available</div>;
  }

  return (
    <div className="container mx-auto mt-16 p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="lg:col-span-3 space-y-6">
        {posts.map((post) => (
          <div key={post._id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={post.imageUrl}
              alt={post.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">{post.name}</h2>
              <div className="text-sm text-gray-500 space-x-4 mb-4">
                <span>Admin</span>
                <span>{new Date(post._createdAt).toLocaleDateString()}</span>
              </div>
              <p className="text-gray-700 mb-4">{post.bio}</p>
              <a href="/" className="text-blue-500 font-medium">Read more</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
