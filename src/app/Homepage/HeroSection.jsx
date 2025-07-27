"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Button from "../../components/Common/Button";
import Title from "../../components/Common/Title";
import { useTranslations } from "next-intl";
import { FaArrowRight } from "react-icons/fa";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function SideBySideHero() {
  const t = useTranslations("bannerSection");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.section
      ref={ref}
      className="relative px-4 sm:px-6 md:px-8 lg:px-20  py-20 min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      {/* Container */}
      <div className="container mx-auto relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh]"
          variants={staggerContainer}
        >
          {/* Left Content */}
          <motion.div
            className="space-y-6 text-center md:text-start"
            variants={slideInLeft}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-sm text-indigo-700 text-xs sm:text-sm font-medium border border-indigo-200 shadow-sm"
              variants={fadeIn}
            >
              <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2 animate-pulse"></div>
              <span className="hidden sm:inline">{t("start")}</span>
              <span className="sm:hidden">New</span>
            </motion.div>
            <motion.div variants={fadeIn}>
              <Title
                level={1}
                size="text-lg md:text-5xl lg:text-6xl "
                weight="bold"
                color="text-gray-900"
                className="uppercase leading-tight "
              >
                <span className="bg-gradient-to-r text-center from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {t("title")}
                </span>
              </Title>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-full md:max-w-lg mx-auto md:mx-0 px-4"
              variants={fadeIn}
            >
              {t("description")}
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={fadeIn}>
              <Button
                size="md"
                href="/contact"
                className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
              >
                {t("contact")}
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center px-10 md:justify-end"
            variants={slideInRight}
          >
            <div className="relative w-full md:max-w-lg">
              <motion.div
                className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl border border-white/30"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/HeroSection.png"
                  alt={t("title")}
                  className="w-full h-auto rounded-xl shadow-lg"
                />

                <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-indigo-200 via-blue-200 to-purple-200 rounded-2xl -z-10 opacity-60"></div>
              </motion.div>

              {/* Floating decor */}
              <motion.div
                className="absolute -top-4 -left-4 w-6 h-6 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg shadow-lg"
                animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg"
                animate={{ y: [0, -8, 0], scale: [1, 1.15, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-indigo-300 rounded-full flex justify-center">
          <div className="w-1 h-3 sm:w-1 sm:h-3 bg-gradient-to-b from-indigo-500 to-blue-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </motion.section>
  );
}
