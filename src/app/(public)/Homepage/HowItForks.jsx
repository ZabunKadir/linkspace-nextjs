"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Button from "../../../components/Common/Button";
import Title from "../../../components/Common/Title";
import { useTranslations } from "next-intl";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

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
  visible: { transition: { staggerChildren: 0.2 } },
};

const badgeColors = [
  "bg-gradient-to-r from-indigo-500 to-blue-500",
  "bg-gradient-to-r from-green-500 to-emerald-500",
  "bg-gradient-to-r from-purple-500 to-pink-500",
];

export default function EnhancedHowItWorks() {
  const t = useTranslations("howItWorksSection");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const steps = [
    {
      id: 1,
      title: t("step1Title"),
      description: t("step1Description"),
    },
    {
      id: 2,
      title: t("step2Title"),
      description: t("step2Description"),
    },
    {
      id: 3,
      title: t("step3Title"),
      description: t("step3Description"),
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-20 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-40 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn}>
            <Title
              level={2}
              align="center"
              size="text-4xl md:text-6xl"
              weight="bold"
              color="text-gray-900"
              className="uppercase"
            >
              <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t("heading")}
              </span>
            </Title>
          </motion.div>
        </motion.div>
        <motion.div
          className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div className="space-y-8" variants={slideInLeft}>
            {steps.map((item, idx) => (
              <motion.div
                key={item.id}
                className="relative group"
                variants={fadeIn}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                {idx < steps.length - 1 && (
                  <div className="absolute left-4 top-12 w-0.5 h-16 bg-gradient-to-b from-gray-300 to-transparent"></div>
                )}
                <div className="flex items-start space-x-4">
                  <div
                    className={`${badgeColors[idx]} rounded-xl w-8 h-8 flex items-center justify-center font-bold text-white text-sm shadow-lg group-hover:scale-110 transition-transform duration-200`}
                  >
                    {item.id}
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10 shadow-lg"></div>
              </motion.div>
            ))}

            <motion.div
              className="pt-4 flex md:block justify-center"
              variants={fadeIn}
            >
              <Button
                size="lg"
                href="/contact"
                className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2 group"
              >
                {t("contact")}
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center items-center"
            variants={slideInRight}
          >
            <div className="relative px-10 w-full max-w-lg">
              <motion.div
                className="relative  bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/30"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/HowItForks.png"
                  alt={t("heading")}
                  className="w-full h-auto rounded-xl shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-indigo-200 via-blue-200 to-purple-200 rounded-2xl -z-10 opacity-60"></div>
              </motion.div>
              <motion.div
                className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <FaCheck className="w-6 h-6 text-white" />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-white/30"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              ></motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
