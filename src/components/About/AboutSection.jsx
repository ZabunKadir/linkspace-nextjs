"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function EnhancedAboutSection() {
  const t = useTranslations("aboutSection");

  return (
    <section className="relative  overflow-hidden px-4 md:px-8 lg:px-36">
      <motion.div
        className="container mt-20 mx-auto px-4 flex flex-col md:flex-row items-center md:gap-x-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="w-full md:flex hidden md:w-1/2 relative mb-12 md:mb-0 h-[500px]"
          variants={itemVariants}
        >
          <div className="absolute top-[-120px] right-30 z-0">
            <img
              src="https://thepixelcurve.com/html/techwix/techwix/assets/images/shape/about-shape2.png"
              alt={t("alt.dots")}
              width={300}
              height={300}
            />
          </div>

          <div className="absolute left-0 bottom-0 z-10 top-20 w-72 h-96 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://thepixelcurve.com/html/techwix/techwix/assets/images/about-3.jpg"
              alt={t("alt.team")}
              className="object-cover"
            />
          </div>

          <div className="absolute right-0 top-0 z-20 w-72 h-96 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://thepixelcurve.com/html/techwix/techwix/assets/images/about-4.jpg"
              alt={t("alt.freelancer")}
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div className="w-full md:w-1/2 space-y-8" variants={itemVariants}>
          <div className="space-y-4">
            <motion.h3 className="text-xl font-semibold text-gray-500" variants={itemVariants}>
              {t("heading")}
            </motion.h3>

            <motion.h2
              className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t("subtitle")}
              </span>
            </motion.h2>

            <motion.p className="text-lg text-gray-600 leading-relaxed" variants={itemVariants}>
              {t("description")}
            </motion.p>
          </div>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6" variants={containerVariants}>
            <motion.div
              className="group p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {t("missionTitle")}
              </h3>
              <p className="text-gray-600 leading-relaxed">{t("missionDesc")}</p>
            </motion.div>

            <motion.div
              className="group p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-purple-200 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                {t("visionTitle")}
              </h3>
              <p className="text-gray-600 leading-relaxed">{t("visionDesc")}</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}