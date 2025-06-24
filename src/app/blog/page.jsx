"use client";
import React from "react";
import Link from "next/link";
import { dummyBlogs } from "@/data/blogs";

const BlogPage = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Latest Blog Posts
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyBlogs.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blog/${blog.slug}`}
            className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
          >
            {/* Resim alanı */}
            <div className="overflow-hidden">
              <img
                src={blog.image || "https://via.placeholder.com/600x400"}
                alt={blog.title}
                className="w-full h-44 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* İçerik alanı */}
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-200 line-clamp-2">
                {blog.title}
              </h2>

              <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                {blog.summary}
              </p>

              <p className="text-xs text-gray-400 mt-4">{blog.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
