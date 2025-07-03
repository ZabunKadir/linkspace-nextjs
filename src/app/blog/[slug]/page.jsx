// pages/blog/[slug].jsx
"use client";
import BlogBreadcrumb from "@/components/Common/BlogBreadcrumb";
import BlogSidebarCard from "@/components/Common/BlogSidebarCard";
import BlogSlider from "@/components/Homepage/BlogSlider";
import { dummyBlogs } from "@/data/blogs";
import { useParams } from "next/navigation";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const blog = dummyBlogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="max-w-3xl mx-auto py-10 px-4 text-center text-red-500">
        Blog not found
      </div>
    );
  }

  const related = dummyBlogs.filter((b) => b.slug !== slug);

  return (
    <div className=" py-10 px-4 space-y-8">
      <div className="max-w-7xl mx-auto">
        <BlogBreadcrumb title={blog.title} />

        {/* 1) Başlık + Görsel + Tarih tüm container genişliğini kaplasın */}
        <header className="space-y-4 mt-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-800">
            {blog.title}
          </h1>
          {blog.image && (
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-[561px] object-cover rounded-lg shadow"
            />
          )}
          <p className="text-md font-bold text-gray-500">{blog.date}</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <article className="lg:col-span-2 prose prose-blue max-w-none">
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          </article>

          <aside className="space-y-4 hidden md:block">
            {related.map((b) => (
              <BlogSidebarCard key={b.slug} blog={b} />
            ))}
          </aside>
        </div>
      </div>

      <BlogSlider />
    </div>
  );
}
