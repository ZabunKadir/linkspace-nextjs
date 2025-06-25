// src/components/About/StatsSection.jsx
"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useState } from "react";

const CountUp = dynamic(() => import("react-countup"), { ssr: false });

const stats = [
  { value: "1,200+",  label: "Active Job Listings" },
  { value: "750+",    label: "Partner Companies" },
  { value: "98%",     label: "Successful Matches" },
  { value: "10,000+", label: "Talents Onboarded" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function StatsSection() {
  return (
    <section
      className="relative py-16 bg-cover bg-center px-4 md:px-8 lg:px-36 overflow-hidden"
      style={{
        backgroundImage:
          'url("https://thepixelcurve.com/html/techwix/techwix/assets/images/bg/counter-bg2.jpg")',
      }}
    >
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({ value, label }) {
  const [viewed, setViewed] = useState(false);
  const num = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const suffix = value.replace(/[0-9,]/g, "");

  return (
    <motion.div
      className="p-4"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      onViewportEnter={() => setViewed(true)}
    >
      <h3 className="text-4xl sm:text-5xl font-extrabold text-white">
        {viewed ? (
          <CountUp
            start={0}
            end={num}
            duration={2}
            separator=","
            suffix={suffix}
          />
        ) : (
          <>0{suffix}</>
        )}
      </h3>
      <p className="mt-2 text-sm sm:text-base uppercase tracking-wide text-white">
        {label}
      </p>
    </motion.div>
  );
}
