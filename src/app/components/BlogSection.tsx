import React from 'react'
import Image from 'next/image'

const BlogSection = () => {
  return (
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

          <div className="flex justify-start items-start">
            <h1 className="text-[24px] font-medium sm:semibold max-sm:pt-8">
              Categories
            </h1>
          </div>

          <div className="flex pt-16 max-sm:pt-8 justify-between w-80 max-sm:w-72 font-medium">
            <div className="flex flex-col gap-10">
              <h1 className="text-[16px] text-[#9F9F9F]">Crafts</h1>
              <h1 className="text-[16px] text-[#9F9F9F]">Design</h1>
              <h1 className="text-[16px] text-[#9F9F9F]">Handmade</h1>
              <h1 className="text-[16px] text-[#9F9F9F]">Interior</h1>
              <h1 className="text-[16px] text-[#9F9F9F]">wood</h1>
            </div>
            <div className="flex flex-col gap-10">
              <h1 className="text-[16px] text-[#9F9F9F]">2</h1>
              <h1 className="text-[16px] text-[#9F9F9F]">8</h1>
              <h1 className="text-[16px] text-[#9F9F9F]">7</h1>
              <h1 className="text-[16px] text-[#9F9F9F]">1</h1>
              <h1 className="text-[16px] text-[#9F9F9F]">6</h1>
            </div>
          </div>
          <div className="max-sm:w-full flex flex-col justify-center items-start">
            <h1 className="text-[24px] font-medium sm:semibold pt-20 max-sm:pt-14">
              Recent Posts
            </h1>
            <div className="pt-12 max-sm:pt-4 flex flex-col gap-10 max-sm:gap-5">
              <Image
                src="/blogpost1.png"
                alt="blog post"
                width={211}
                height={60}
              />
              <Image
                src="/blogpost2.png"
                alt="blog post"
                width={241}
                height={60}
              />
              <Image
                src="/blogpost3.png"
                alt="blog post"
                width={251}
                height={60}
              />
              <Image
                src="/blogpost4.png"
                alt="blog post"
                width={211}
                height={60}
              />
              <Image
                src="/blogpost5.png"
                alt="blog post"
                width={211}
                height={60}
              />
            </div>
          </div>
        </div>
      </div>
  )
}

export default BlogSection