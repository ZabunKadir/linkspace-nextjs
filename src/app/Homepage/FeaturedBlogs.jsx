import Link from "next/link"
import Button from "../../components/Common/Button"
import Title from "../../components/Common/Title"
import { dummyBlogs } from "@/data/blogs"

export default function FeaturedBlogs() {
  const blog = dummyBlogs[0]

  return (
    <section className="w-full bg-gray-100 py-12">
      {/* İçerik konteyneri */}
      <div className="mx-auto max-w-7xl px-6">
        {/* Başlık */}
        <Title
          children="LinkSpace Blogs"
          level={1}
          size="text-4xl md:text-5xl"
          weight="bold"
          color="text-blue-500"
          className="mb-8 text-left"
        />

        {/* İki kolonlu düzen */}
        <div className="grid md:grid-cols-2 items-center gap-8">
          {/* Sol: Resim */}
          <div className="w-full">
            <img
              src={blog.image || "/placeholder.svg"}
              alt={blog.title}
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>

          {/* Sağ: İçerik */}
          <div className="w-full">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              En Son Çıkanlar
            </h3>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {blog.title}
            </h2>
            <p className="text-sm text-gray-400 mb-6">{blog.date}</p>
            <p className="text-gray-600 leading-relaxed mb-6">
              {blog.summary}
            </p>
            <Link href={`/blog/${blog.slug}`}>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
                Hemen Oku
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
