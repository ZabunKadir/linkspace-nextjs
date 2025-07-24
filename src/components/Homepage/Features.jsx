"use client"

import { useState, useEffect, useRef } from "react"
import { AiOutlineClockCircle, AiOutlineUser, AiOutlineGlobal, AiOutlineArrowRight } from "react-icons/ai"
import { MdOutlineTrendingUp } from "react-icons/md"
import { HiSparkles, HiTrendingUp } from "react-icons/hi"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import Counter from "../Common/Counter"

export default function EnhancedFeature() {
  const t = useTranslations("featureSection")
  const sectionRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.3 })

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  const stats = [
    {
      icon: <AiOutlineClockCircle className="w-8 h-8 text-indigo-600" />,
      text: t("uptimeText"),
      value: 99.99,
      desc: t("uptimeDesc"),
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50",
    },
    {
      icon: <AiOutlineUser className="w-8 h-8 text-emerald-600" />,
      text: t("activeUsersText"),
      value: 600000000,
      desc: t("activeUsersDesc"),
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-50",
    },
    {
      icon: <AiOutlineGlobal className="w-8 h-8 text-purple-600" />,
      text: t("countriesText"),
      value: 100,
      desc: t("countriesDesc"),
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
    },
    {
      icon: <MdOutlineTrendingUp className="w-8 h-8 text-orange-600" />,
      text: t("dailyApplicationsText"),
      value: 5000000,
      desc: t("dailyApplicationsDesc"),
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section ref={sectionRef} className="relative py-20 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-30 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-6 relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Left Content */}
          <motion.div className="space-y-6" variants={itemVariants}>
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm text-indigo-700 text-sm font-medium border border-indigo-200 shadow-sm">
              <HiSparkles className="w-4 h-4 mr-2 animate-pulse" />
              {t("trusted")}
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  <Counter endValue={600000000} duration={2000} />
                </span>
                <br />
                <span className="text-gray-900">{t("usersCompanies")}</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">{t("description")}</p>
            </div>
          </motion.div>

          {/* Right Content - Stats Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {stats.map((item, idx) => (
              <motion.div
                key={idx}
                className="group relative"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                {/* Card */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300">
                  {/* Icon Container */}
                  <div
                    className={`w-14 h-14 ${item.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}
                  >
                    {item.icon}
                  </div>

                  {/* Stats */}
                  <div className="space-y-2">
                    <div className="flex items-baseline gap-1">
                      <span
                        className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                      >
                        <Counter endValue={item.value} duration={2000} />
                      </span>
                      <span className="text-sm font-medium text-gray-700">{item.text}</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>

                  {/* Hover Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                  ></div>

                  {/* Decorative Element */}
                  <div
                    className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r ${item.color} rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-200`}
                  ></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
