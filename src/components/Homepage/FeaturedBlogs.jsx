// src/components/Homepage/FeaturedBlogs.jsx
import { dummyBlogs } from "@/data/blogs";
import BlogCard from "./BlogCard";
import Button from "../Common/Button";
import Title from "../Common/Title";
import { motion } from "framer-motion";

// Motion variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function FeaturedBlogs({ count = 3 }) {
  const featured = dummyBlogs.slice(0, count);

  return (
    <section className="py-12">
      <div className="container mx-auto max-w-7xl px-4">
        <Title
          level={3}
          children="Our Featured Blogs"
          align="start"
          size="text-lg md:text-5xl"
          weight="bold"
          color="text-black"
          className="uppercase"
        />

        {/* Animated grid container with equal-height items */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {featured.map((blog) => (
            <motion.div
              key={blog.slug}
              variants={itemVariants}
              className="h-full min-h-[450px]"
            >
              <BlogCard
                slug={blog.slug}
                image={blog.image}
                title={blog.title}
                summary={blog.summary}
                date={blog.date}
              />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 text-center">
          <Button
            size="md"
            variant="primary"
            children="View All Blogs"
            className="px-6 py-2"
          />
        </div>
      </div>
    </section>
  );
}
