// components/TeamSection.jsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

// İki ekip üyesi örneği
const teamMembers = [
  {
    id: 1,
    name: "Mehmet Öztürk",
    role: "Backend Developer",
    photo:
      "https://www.deutschland.de/sites/default/files/styles/image_carousel_mobile/public/media/image/TdT-Nia-Kuenzer-Mit-Hintergrund.jpg?itok=JS-vOpmz",
    socials: {
      twitter: "https://twitter.com/mehmet",
      linkedin: "https://linkedin.com/in/mehmet",
    },
    about:
      "Mehmet, 5 yıldır backend geliştirme üzerine çalışıyor ve mikroservis mimarileri konusunda uzmandır.",
  },
  {
    id: 2,
    name: "Mehmet Öztürk",
    role: "Frontend Developer",
    photo:
      "https://www.deutschland.de/sites/default/files/styles/image_carousel_mobile/public/media/image/TdT-Nia-Kuenzer-Mit-Hintergrund.jpg?itok=JS-vOpmz",
    socials: {
      twitter: "https://twitter.com/eren",
      linkedin: "https://linkedin.com/in/eren",
    },
    about:
      "Eren, kullanıcı deneyimi ve modern frontend teknolojileri ile etkileşimli arayüzler geliştiriyor.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

export default function TeamSection() {
  // Her kart için hover kilitleme durumu: { [member.id]: boolean }
  const [blockFlip, setBlockFlip] = useState({});

  return (
    <section className="bg-gray-50 py-20">
      {/* Başlık */}
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-600">Ekibimiz</h2>
      </div>

      {/* Grid: 2 sütun */}
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 grid-cols-1 sm:grid-cols-2">
        {teamMembers.map((member, idx) => (
          <motion.div
            key={member.id}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <div className="relative h-80 w-full mx-auto [perspective:1000px] group">
              <div
                className={
                  `relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ` +
                  // blockFlip[member.id] true ise sınıfı çıkar
                  (!blockFlip[member.id]
                    ? "group-hover:[transform:rotateY(180deg)]"
                    : "")
                }
              >
                {/* Front Side */}
                <div className="absolute inset-0 bg-white rounded-2xl overflow-hidden shadow-lg [backface-visibility:hidden]">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="h-48 w-full object-cover"
                  />
                  <div
                    className="p-6 flex flex-col items-center"
                    onMouseEnter={() =>
                      setBlockFlip((prev) => ({ ...prev, [member.id]: true }))
                    }
                    onMouseLeave={() =>
                      setBlockFlip((prev) => ({ ...prev, [member.id]: false }))
                    }
                  >
                    <h3 className="text-xl font-semibold text-gray-800">
                      {member.name}
                    </h3>
                    <p className="text-gray-500 mt-1">{member.role}</p>
                    {/* Sosyal ikonlar */}
                    <div className="mt-4 flex space-x-6">
                      {member.socials.twitter && (
                        <a
                          href={member.socials.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-blue-500 text-2xl"
                        >
                          <FaTwitter />
                        </a>
                      )}
                      {member.socials.linkedin && (
                        <a
                          href={member.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-blue-700 text-2xl"
                        >
                          <FaLinkedin />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 bg-white rounded-2xl p-6 shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-start pt-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Hakkımızda
                  </h3>
                  <p className="text-gray-600 text-sm ">
                    {member.about}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
