"use client";

import Image from "next/image";
import Title from "../Common/Title";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function AboutSection() {
  return (
    <section className="md:py-20 relative overflow-hidden px-4 md:px-8 lg:px-36">
      <motion.div
        className="container mx-auto px-4 flex flex-col md:flex-row items-center md:gap-x-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Images */}
        <motion.div
          className="w-full md:flex hidden md:w-1/2 relative mb-12 md:mb-0 h-[500px]"
          variants={itemVariants}
        >
          <div className="absolute top-[-120px] right-30 z-0">
            <img
              src="https://thepixelcurve.com/html/techwix/techwix/assets/images/shape/about-shape2.png"
              alt="dots"
              width={300}
              height={300}
            />
          </div>
          <div className="absolute left-0 bottom-0 z-10 top-20 w-72 h-96 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://thepixelcurve.com/html/techwix/techwix/assets/images/about-3.jpg"
              alt="Team at work"
              className="object-cover"
            />
          </div>
          <div className="absolute right-0 top-0 z-20 w-72 h-96 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://thepixelcurve.com/html/techwix/techwix/assets/images/about-4.jpg"
              alt="Freelancer at work"
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          className="w-full md:w-1/2"
          variants={itemVariants}
        >
          <Title
            level={3}
            children="About LinkSpace"
            color="text-blue-500"
            weight="bold"
            upparcase
          />

          <h2 className="text-3xl lg:text-4xl font-bold mt-2 leading-snug">
            Bridging Talent and Opportunity
          </h2>

          <p className="mt-4 text-gray-600">
            LinkSpace is a modern job marketplace that connects ambitious
            professionals with forward-thinking companies. We streamline the
            application process, empower candidates with the right tools, and
            help employers discover top talent fast.
          </p>

          <motion.div
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold">Our Mission</h3>
              <p className="mt-2 text-gray-600">
                To empower job seekers with a seamless application experience
                and equip employers with powerful tools to find their perfect
                match.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold">Our Vision</h3>
              <p className="mt-2 text-gray-600">
                To be the go-to platform where every opportunity meets the right
                talent, fostering growth and success for all.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
