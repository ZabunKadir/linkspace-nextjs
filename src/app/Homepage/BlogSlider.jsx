"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import Link from "next/link";
import { dummyBlogs } from "@/data/blogs";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Title from "../../components/Common/Title";

export default function BlogSlider() {
  return (
    <div className="py-12">
      <div className="w-full px-4">
        <Title
          level={3}
          children="En Çok Okunan Yazılar"         
          size="text-xl md:text-3xl"
          weight="bold"
          color="text-black"
          className="uppercase mb-6 px-10"
        />
        <div className="relative  mx-auto px-10">
          {/* Sol Buton */}
          <button
            className="swiper-button-prev-custom absolute px-4 top-1/2 -translate-y-1/2 -left-4 md:-left-6 z-10 bg-white  p-1.5"
            aria-label="Geri"
          >
            <AiOutlineLeft className=" text-2xl text-blue-600" />
          </button>

            {/* Sağ Buton */}
            <button
              className="swiper-button-next-custom absolute px-4 top-1/2 -translate-y-1/2 -right-4 md:-right-6 z-10 bg-white  p-1.5"
              aria-label="İleri"
            >
              <AiOutlineRight className="text-2xl text-blue-600" />
          </button>

          {/* Swiper */}
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {dummyBlogs.map((blog) => (
              <SwiperSlide key={blog.slug}>
                <Link
                  href={`/blog/${blog.slug}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 h-full min-h-[420px] flex flex-col"
                >
                  {/* Görsel */}
                  <div className="overflow-hidden h-48">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* İçerik */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h2 className="text-lg font-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-200 line-clamp-2">
                        {blog.title}
                      </h2>
                      <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                        {blog.summary}
                      </p>
                    </div>

                    {/* Alt kısım: tarih + devam */}
                    <div className="mt-4 flex items-center justify-between">
                      <p className="text-xs text-gray-400">{blog.date}</p>
                      <span className="text-sm text-blue-500 font-medium hover:no-underline transition">
                        Devamını Oku →
                      </span>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
