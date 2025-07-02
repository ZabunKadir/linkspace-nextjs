import Link from "next/link";
import Button from "../Common/Button";
import Title from "../Common/Title";
import { dummyBlogs } from "@/data/blogs";

export default function FeaturedBlogs({ fullWidth = false }) {
  const blog = dummyBlogs[0];

  return (
    <section
      className={`py-8 bg-gray-50 ${
        fullWidth ? "w-full px-6" : "container mx-auto max-w-7xl px-4"
      }`}
    >
      <Title
        level={3}
        children="Linkspace Blogs"
        align={fullWidth ? "start" : "center"}
        size="text-xl md:text-3xl"
        weight="bold"
        color="text-black"
        className="uppercase mb-6"
      />
      <div className="grid md:grid-cols-2 gap-6 items-center">
        {/* Görsel */}
        <div className="rounded-xl overflow-hidden shadow-md h-52 md:h-64">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* İçerik */}
        <div className="flex flex-col space-y-3">
          <span className="text-xl font-bold text-black">En Son Çıkanlar</span>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
            {blog.title}
          </h2>
          <p className="text-xs text-gray-500">{blog.date}</p>
          <p className="text-sm text-gray-700 leading-relaxed line-clamp-3">
            {blog.summary}
          </p>

          <div>
            <Link href={`/blog/${blog.slug}`}>
              <Button size="sm" className="py-1.5 px-4 text-sm">
                Hemen Oku
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
