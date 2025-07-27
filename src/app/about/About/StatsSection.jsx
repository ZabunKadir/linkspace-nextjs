"use client"

import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import { useState } from "react"
import { useTranslations } from "next-intl"
import { FaBriefcase, FaBuilding, FaHandshake, FaUsers } from "react-icons/fa"

const CountUp = dynamic(() => import("react-countup"), { ssr: false })

const statsData = [
  {
    value: "1,200+",
    key: "jobListings",
    icon: <FaBriefcase className="w-8 h-8" />,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    value: "750+",
    key: "partnerCompanies",
    icon: <FaBuilding className="w-8 h-8" />,
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
  },
  {
    value: "98%",
    key: "successfulMatches",
    icon: <FaHandshake className="w-8 h-8" />,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    value: "10,000+",
    key: "talentsOnboarded",
    icon: <FaUsers className="w-8 h-8" />,
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export default function EnhancedStatsSection() {
  const t = useTranslations("statsSection")

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url("https://thepixelcurve.com/html/techwix/techwix/assets/images/bg/counter-bg2.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/90 to-indigo-900/90"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20 mb-6">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            {t("label")}
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {t("title")} <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">{t("highlight")}</span>
          </h2>

          <p className="text-xl text-white/80 max-w-2xl mx-auto">{t("description")}</p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {statsData.map(({ value, key, icon, color }) => (
            <StatCard key={key} value={value} label={t(key)} icon={icon} color={color} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function StatCard({ value, label, icon, color }) {
  const [viewed, setViewed] = useState(false)
  const num = Number.parseInt(value.replace(/[^0-9]/g, ""), 10)
  const suffix = value.replace(/[0-9,]/g, "")

  return (
    <motion.div
      className="group relative"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      onViewportEnter={() => setViewed(true)}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Card */}
      <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center group-hover:shadow-2xl group-hover:shadow-white/10">
        {/* Icon */}
        <div
          className={`w-16 h-16 bg-gradient-to-r ${color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}
        >
          {icon}
        </div>

        {/* Number */}
        <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3 group-hover:scale-105 transition-transform duration-300">
          {viewed ? <CountUp start={0} end={num} duration={2.5} separator="," suffix={suffix} /> : <>0{suffix}</>}
        </h3>

        {/* Label */}
        <p className="text-sm sm:text-base font-medium text-white/80 uppercase tracking-wider leading-relaxed">
          {label}
        </p>

        {/* Decorative elements */}
        <div
          className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r ${color} rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Glow effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${color} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 -z-10`}
      ></div>
    </motion.div>
  )
}