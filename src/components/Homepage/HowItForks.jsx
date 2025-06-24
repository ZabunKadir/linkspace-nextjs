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

const badgeColors = ["bg-indigo-600", "bg-green-600", "bg-yellow-500"];

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section
      ref={ref}
      className="flex flex-col items-center  px-6 bg-white max-w-7xl mx-auto md:px-10"
    >
      <motion.div
        className="w-full text-center mb-16"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <motion.h2
          className="font-bold text-eerieBlack text-4xl md:text-6xl font-calsans"
          variants={fadeIn}
        >
          How It Works
        </motion.h2>
      </motion.div>

      <motion.div
        className="flex flex-col md:flex-row justify-between w-full gap-16"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <div className="flex flex-1 space-y-10 flex-col justify-center items-start px-4 md:px-0">
          {[
            {
              id: 1,
              title: "Increase in Membership",
              description:
                "Grow your user base organically through smart campaigns.",
            },
            {
              id: 2,
              title: "Boost Member Engagement",
              description:
                "Keep your audience coming back with engaging features.",
            },
            {
              id: 3,
              title: "Increase Revenue",
              description:
                "Turn your platform into a source of income efficiently.",
            },
          ].map((item, index) => (
            <motion.div key={item.id} className="space-y-2" variants={fadeIn}>
              <h3 className="text-xl font-semibold flex items-center font-sans">
                <span
                  className={`mr-3 text-white ${badgeColors[index]} rounded-full w-9 h-9 flex items-center justify-center font-bold`}
                >
                  {item.id}
                </span>
                {item.title}
              </h3>
              <p className="text-gray-600 font-sans leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}

          <motion.div variants={fadeIn}>
            <Button children="Contact Us" size="md" href="/contact" />
          </motion.div>
        </div>

        <motion.div
          className="flex flex-1 hidden md:flex justify-center items-center"
          variants={fadeIn}
        >
          <div className="flex flex-row overflow-hidden rounded-xl shadow-lg">
            <img
              src="/HowItForks.png"
              alt="How It Works"
              className="w-full object-contain"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HowItWorks;
