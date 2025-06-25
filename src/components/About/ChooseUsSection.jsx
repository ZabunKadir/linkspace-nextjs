"use client";

import Title from "../Common/Title";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaBriefcase,
  FaUserCheck,
  FaBell,
  FaChartLine,
  FaMobileAlt,
  FaFileAlt,
  FaShieldAlt
} from "react-icons/fa";

const features = [
  { icon: FaSearch, title: "Advanced Job Search", desc: "Filter and discover your ideal role with powerful, multi-criteria search." },
  { icon: FaBriefcase, title: "Curated Listings", desc: "Access thousands of hand-picked opportunities posted by top employers." },
  { icon: FaUserCheck, title: "Verified Employers", desc: "Connect only with vetted, reputable companies you can trust." },
  { icon: FaBell, title: "Real-time Alerts", desc: "Get instant notifications when new jobs matching your profile go live." },
  { icon: FaChartLine, title: "Analytics & Insights", desc: "Track your applications’ performance with detailed dashboards." },
  { icon: FaMobileAlt, title: "Mobile Friendly", desc: "Search and apply on the go via our fully responsive platform." },
  { icon: FaFileAlt, title: "Resume Builder", desc: "Craft and optimize your CV with our easy-to-use templates." },
  { icon: FaShieldAlt, title: "Secure & Private", desc: "Your data is encrypted and never shared without your consent." }
];

export default function ChooseUsSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://thepixelcurve.com/html/techwix/techwix/assets/images/bg/choose-us-bg3.jpg")'
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Title
            level={3}
            align="center"
            children="Why Choose LinkSpace"
            color="text-blue-500"
            weight="bold"
            upparcase
          />
          <h2 className="text-3xl lg:text-4xl font-bold mt-2">
            Your Gateway to the Perfect Job Match
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ icon: Icon, title, desc }, index) => (
            <motion.div
              key={title}
              className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-start"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Icon className="text-blue-500 w-8 h-8 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
