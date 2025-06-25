// src/components/Homepage/BlogCard.jsx
import Link from "next/link";

export default function BlogCard({ slug, image, title, summary, date }) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group flex flex-col h-full border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
    >
      {/* Image container */}
      <div className="overflow-hidden h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full  object-cover transition-transform duration-300 transform group-hover:scale-105"
        />
      </div>

      {/* Content container grows to fill */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-1">{title}</h3>
          <p className="text-gray-600 text-sm mb-3">{date}</p>
          <p className="text-gray-800 overflow-hidden text-ellipsis line-clamp-3">
            {summary}
          </p>
        </div>
      </div>
    </Link>
  );
}