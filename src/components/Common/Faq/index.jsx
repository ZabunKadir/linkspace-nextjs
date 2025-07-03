"use client"

import { useState } from "react"
import { Accordion, AccordionItem, AccordionTrigger } from "@/components/Common/Acardion"
import { motion, AnimatePresence } from "framer-motion"
import { MdAdd, MdRemove } from "react-icons/md"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

const collapseVariants = {
  collapsed: { height: 0, opacity: 0, paddingTop: 0, paddingBottom: 0 },
  expanded: { height: "auto", opacity: 1, paddingTop: 24, paddingBottom: 24 },
}

const iconVariants = {
  closed: { rotate: 0, scale: 1 },
  open: { rotate: 180, scale: 1.15 },
}

const FaqItems = ({ items }) => {
  const [openItems, setOpenItems] = useState([])

  return (
    <div className="relative bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/40 px-4 py-16">
      {/* Simple Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_50%)] pointer-events-none" />

      {/* Enhanced Header */}
      <motion.div
        className="w-full max-w-5xl mx-auto text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="inline-flex items-center gap-4 mb-8"
          initial={{ scale: 0, rotate: -5 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", stiffness: 150, damping: 12 }}
        >
     
        </motion.div>

        <motion.h2
          className="text-5xl md:text-7xl  font-black mb-8 leading-none"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="block bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent mb-2">
            Frequently Asked
          </span>
          <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Questions
          </span>
        </motion.h2>

        <motion.div
          className="flex items-center justify-center gap-6 mb-8"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-400 to-blue-500" />
          <div className="relative">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-lg" />
            <div className="absolute inset-0 w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full animate-ping opacity-40" />
          </div>
          <div className="h-px w-24 bg-gradient-to-r from-indigo-500 via-purple-400 to-transparent" />
        </motion.div>
      </motion.div>

      {/* Enhanced FAQ Items */}
      <motion.div
        className="w-full max-w-5xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <Accordion type="multiple" value={openItems} onValueChange={setOpenItems} className="w-full space-y-4">
          {items.map((item, index) => {
            const val = `item-${index}`
            const isOpen = openItems.includes(val)

            return (
              <motion.div
                key={val}
                variants={itemVariants}
                className="group"
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 400, damping: 25 },
                }}
              >
                <AccordionItem
                  value={val}
                  className="relative border-0 bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  {/* Enhanced Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50/60 via-indigo-50/40 to-purple-50/60 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Subtle Border */}
                  <div className="absolute inset-[1px] bg-white/90 backdrop-blur-xl rounded-3xl" />

                  <div className="relative z-10">
                    <AccordionTrigger className="text-left hover:no-underline px-8 py-2 group-hover:bg-gradient-to-r group-hover:from-blue-50/30 group-hover:to-indigo-50/20 transition-all duration-500">
                      <div className="flex items-center justify-between w-full">
                        {/* Enhanced Question Section */}
                        <div className="flex items-center gap-6">
                          <motion.div
                            className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-white font-black shadow-xl border border-white/20"
                            whileHover={{
                              scale: 1.1,
                              rotate: 5,
                              boxShadow: "0 20px 40px -12px rgb(59 130 246 / 0.5)",
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <span className="text-lg">{String(index + 1).padStart(2, "0")}</span>
                          </motion.div>

                          <div className="flex-1">
                            <span className="font-bold text-gray-800 group-hover:text-blue-900 text-xl md:text-2xl transition-colors duration-500 leading-relaxed">
                              {item.question}
                            </span>
                          </div>
                        </div>

                 
                      </div>
                    </AccordionTrigger>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          variants={collapseVariants}
                          initial="collapsed"
                          animate="expanded"
                          exit="collapsed"
                          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-8 pb-8">
                            <motion.div
                              className="relative bg-gradient-to-br from-blue-50/70 via-indigo-50/50 to-purple-50/70 backdrop-blur-sm rounded-2xl p-8 border border-blue-200/40 shadow-inner overflow-hidden"
                              initial={{ opacity: 0, y: 20, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              transition={{ delay: 0.1, duration: 0.4 }}
                            >
                              {/* Decorative Elements */}
                              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-200/30 to-transparent rounded-full blur-xl" />
                              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-indigo-200/25 to-transparent rounded-full blur-lg" />

                              <motion.p
                                className="text-gray-700 text-lg md:text-xl leading-relaxed font-light relative z-10"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                              >
                                {item.answer}
                              </motion.p>
                            </motion.div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </AccordionItem>
              </motion.div>
            )
          })}
        </Accordion>
      </motion.div>
    </div>
  )
}

export default FaqItems
