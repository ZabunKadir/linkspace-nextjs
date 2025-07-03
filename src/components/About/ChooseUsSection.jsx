"use client"

import Title from "../Common/Title"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import { useTranslations } from "next-intl"
import {
  FaSearch,
  FaBriefcase,
  FaUserCheck,
  FaBell,
  FaChartLine,
  FaMobileAlt,
  FaFileAlt,
  FaShieldAlt,
} from "react-icons/fa"
import { HiSparkles } from "react-icons/hi"

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function EnhancedChooseUsSection() {
  const t = useTranslations("chooseUsSection")

  const features = [
    { icon: FaSearch, key: "advancedJobSearch", color: "from-blue-500 to-blue-600" },
    { icon: FaBriefcase, key: "curatedListings", color: "from-green-500 to-green-600" },
    { icon: FaUserCheck, key: "verifiedEmployers", color: "from-purple-500 to-purple-600" },
    { icon: FaBell, key: "realTimeAlerts", color: "from-orange-500 to-orange-600" },
    { icon: FaChartLine, key: "analyticsInsights", color: "from-indigo-500 to-indigo-600" },
    { icon: FaMobileAlt, key: "mobileFriendly", color: "from-pink-500 to-pink-600" },
    { icon: FaFileAlt, key: "resumeBuilder", color: "from-teal-500 to-teal-600" },
    { icon: FaShieldAlt, key: "securePrivate", color: "from-red-500 to-red-600" },
  ]

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background overlay */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url("https://thepixelcurve.com/html/techwix/techwix/assets/images/bg/choose-us-bg3.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-purple-900/85 to-indigo-900/85"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20 mb-6">
            <HiSparkles className="w-4 h-4 animate-pulse" />
            {t("label")}
          </div>

          <Title level={3} align="center" color="text-white" weight="bold" className="uppercase text-lg md:text-xl mb-4">
            {t("heading")}
          </Title>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {t("subheading")}
            </span>
          </h2>

          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            {t("description")}
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map(({ icon: Icon, key, color }, idx) => (
            <motion.div
              key={key}
              className="group relative"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/20 hover:bg-white hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                <div className={`w-16 h-16 bg-gradient-to-r ${color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  <Icon className="text-white w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                    {t(`features.${key}.title`)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {t(`features.${key}.desc`)}
                  </p>
                </div>
                <div className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r ${color} rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}></div>
              </div>
              <div className={`absolute inset-0 bg-gradient-to-r ${color} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 -z-10`}></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>)
}
