"use client";
import BlogBreadcrumb from "@/components/Common/BlogBreadcrumb";
import { dummyBlogs } from "@/data/blogs";
import { useParams } from "next/navigation";
import React from "react";

const BlogDetailPage = () => {
  const { slug } = useParams();
  const blog = dummyBlogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="max-w-3xl mx-auto py-10 px-4 text-center text-red-500">
        Blog not found
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <BlogBreadcrumb title={blog.title} />

      {/* Görsel */}
      {blog.image && (
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 object-cover rounded-lg shadow mb-6"
        />
      )}

      {/* Başlık */}
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
        {blog.title}
      </h1>

      {/* Tarih */}
      <p className="text-sm text-gray-500 mb-8">{blog.date}</p>

      {/* İçerik */}
      <div
        className="prose prose-sm sm:prose-base prose-blue max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
};

export default BlogDetailPage;
