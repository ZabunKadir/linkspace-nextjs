"use client";
import Link from "next/link";

export default function BlogSidebarCard({ blog }) {
  return (
    <Link
      href={`/blog/${blog?.slug || "#"}`}
      className="block rounded-lg overflow-hidden shadow-md group relative"
    >
      <div className="relative h-40">
        <img
          src={blog?.image || "/default.jpg"}
          alt={blog?.title || "Blog Başlığı"}
          className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 text-sm font-semibold">
          {blog?.title || "Blog Başlığı"}
        </div>
      </div>
    </Link>
  );
}

