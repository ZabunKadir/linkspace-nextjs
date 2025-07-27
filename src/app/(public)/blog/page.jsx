"use client";
import React, { useState } from "react";
import Link from "next/link";
import { dummyBlogs } from "@/data/blogs";
import BlogSlider from "@/app/(public)/Homepage/BlogSlider";
import Title from "@/components/Common/Title";
import FeaturedBlogs from "@/app/(public)/Homepage/FeaturedBlogs";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tümü");

  const categories = ["Tümü", "Teknoloji", "Kariyer", "İpuçları"];

  const filteredBlogs = dummyBlogs.filter((blog) => {
    const matchesSearch = blog.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "Tümü" || blog.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-10 overflow-x-hidden">
      <div className="w-full flex justify-start">
        <FeaturedBlogs fullWidth />
      </div>

      <BlogSlider />

      <Title className="text-2xl font-semibold mb-4 px-10">Blog Yazıları</Title>

      {/* Kategori + Arama Alanı */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-10 mb-8">
        {/* Kategoriler (sol taraf) */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 text-sm rounded-full border transition ${
                selectedCategory === cat
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Arama kutusu (sağ taraf) */}
        <div className="w-full md:w-auto flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
            Blog Ara:
          </span>
          <input
            type="text"
            placeholder="Başlık giriniz..."
            className="w-48 md:w-60 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Blog Kartları */}
      <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-6 px-14 mt-4">
        {filteredBlogs.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blog/${blog.slug}`}
            className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col"
          >
            <div className="overflow-hidden">
              <img
                src={blog.image || "https://via.placeholder.com/600x400"}
                alt={blog.title}
                className="w-full h-44 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-200 line-clamp-2">
                  {blog.title}
                </h2>
                <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                  {blog.summary}
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <p className="text-xs text-gray-400">{blog.date}</p>
                <span className="text-sm text-blue-500 font-medium transition">
                  Devamını Oku →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
