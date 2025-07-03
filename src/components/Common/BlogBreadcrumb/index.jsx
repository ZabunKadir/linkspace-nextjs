import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";

export default function BlogBreadcrumb({ title }) {
  return (
    <nav className=" text-base text-gray-600 mb-4 flex items-center space-x-2">
      <Link href="/" className=" hover:no-underline text-gray-500">
       Home
      </Link>
      <AiOutlineRight size={12} />
      <Link href="/blog" className="hover:no-underline text-gray-500">
        Blog
      </Link>
      <AiOutlineRight size={12} />
      <span className="text-gray-600 font-bold truncate max-w-[200px] md:max-w-none">
        {title}
      </span>
    </nav>
  );
}
