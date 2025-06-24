"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import Button from "../Common/Button";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } },
};

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <motion.section
      ref={ref}
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("/HeroSectionBackground.png")',
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      <motion.div
        className="container mx-auto flex flex-wrap justify-between items-center px-4 sm:px-6 lg:px-12 xl:px-24 py-10"
        variants={staggerContainer}
      >
        <motion.div
          className="w-full lg:w-1/2 space-y-5 text-start mt-10  "
          variants={fadeIn}
        >
          <p className="hidden lg:flex font-medium text-eerieBlack uppercase text-3xl">
            Hemen Başla
          </p>
          <h2 className="font-bold text-eerieBlack text-4xl md:text-7xl">
            LinkSpace ile bağlantılarını yönet
          </h2>
          <p className="text-purpleBrown text-sm sm:text-base leading-6 sm:leading-7 md:leading-8">
            Bağlantılarını tek bir yerde topla, paylaş ve analiz et. Modern ve
            güvenli arayüzle işini kolaylaştır.
          </p>
          <motion.div
            className="flex flex-col sm:flex-row sm:justify-center md:justify-center lg:justify-start items-center sm:space-y-0 sm:space-x-3"
            variants={fadeIn}
          >
            <Button children="İletişime Geç" size="md" href="/contact" />
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 flex justify-center items-center mt-10 "
          variants={fadeIn}
        >
          <div className="w-full lg:max-w-full">
            <img
              src="/HeroSection.png"
              alt="Spor Klübü Yönetim Sistemi"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
