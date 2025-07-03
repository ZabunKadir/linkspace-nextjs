"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"
import { useTranslations } from "next-intl"

const teamMembers = [
  {
    id: "1",
    name: "Mehmet Öztürk",
    photo:
      "https://www.deutschland.de/sites/default/files/styles/image_carousel_mobile/public/media/image/TdT-Nia-Kuenzer-Mit-Hintergrund.jpg?itok=JS-vOpmz",
    socials: {
      twitter: "https://twitter.com/mehmet",
      linkedin: "https://linkedin.com/in/mehmet",
      github: "https://github.com/mehmet",
    },
  },
  {
    id: "2",
    name: "Eren Yılmaz",
    photo:
      "https://www.deutschland.de/sites/default/files/styles/image_carousel_mobile/public/media/image/TdT-Nia-Kuenzer-Mit-Hintergrund.jpg?itok=JS-vOpmz",
    socials: {
      twitter: "https://twitter.com/eren",
      linkedin: "https://linkedin.com/in/eren",
      instagram: "https://instagram.com/eren",
    },
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export default function EnhancedTeamSection() {
  const t = useTranslations("teamSection")
  const [blockFlip, setBlockFlip] = useState({})

  return (
    <section className="relative py-20 mt-7 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-100 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Section Heading */}
        <motion.div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full text-blue-600 text-sm font-medium border border-blue-200 mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            {t("label")}
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            {t("title")} <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{t("highlight")}</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("description")}
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {teamMembers.map((member) => (
            <motion.div key={member.id} variants={cardVariants}>
              <div className="relative h-96 w-full mx-auto [perspective:1000px] group">
                <div
                  className={
                    `relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ` +
                    (!blockFlip[member.id] ? "group-hover:[transform:rotateY(180deg)]" : "")
                  }
                >
                  {/* Front Side */}
                  <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-white/20 [backface-visibility:hidden]">
                    <div className="relative">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="h-56 w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>

                    <div
                      className="p-6 flex flex-col items-center"
                      onMouseEnter={() => setBlockFlip((prev) => ({ ...prev, [member.id]: true }))}
                      onMouseLeave={() => setBlockFlip((prev) => ({ ...prev, [member.id]: false }))}
                    >
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                      <p className="text-blue-600 font-medium mb-4">{t(`members.${member.id}.role`)}</p>

                      {/* Social icons */}
                      <div className="flex space-x-4">
                        {member.socials.twitter && (
                          <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
                            <FaTwitter className="w-4 h-4" />
                          </a>
                        )}
                        {member.socials.linkedin && (
                          <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
                            <FaLinkedin className="w-4 h-4" />
                          </a>
                        )}
                        {member.socials.github && (
                          <a href={member.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
                            <FaGithub className="w-4 h-4" />
                          </a>
                        )}
                        {member.socials.instagram && (
                          <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
                            <FaInstagram className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 shadow-2xl [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-center text-white">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>

                      <h3 className="text-2xl font-bold mb-3">{t("aboutTitle")}</h3>
                      <p className="text-white/90 leading-relaxed">{t(`members.${member.id}.about`)}</p>

                      {/* Skills or achievements */}
                      <div className="flex flex-wrap gap-2 justify-center mt-6">
                        {[
                          t("skills.leadership"),
                          t("skills.innovation"),
                          t("skills.strategy"),
                        ].map((skill, index) => (
                          <span key={index} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )}
