"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/Common/Acardion";
import { motion, AnimatePresence } from "framer-motion";
import Title from "../Title";

// animation variants for question fade‐in
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const collapseVariants = {
  collapsed: { height: 0, opacity: 0 },
  expanded: { height: "auto", opacity: 1 },
};

const CustomFaq = ({ items }) => {
  // track which items are open
  const [openItems, setOpenItems] = useState([]);

  return (
    <div className="flex flex-col justify-center items-center mt-10 lg:mt-20 px-4">
      <div className="w-full max-w-2xl sm:max-w-3xl md:max-w-4xl text-center mb-6">
        <Title
          level={3}
          children="Frequently Asked Questions"
          align="center"
          size="text-2xl md:text-6xl"
          weight="semibold"
          color="text-black"
          className="uppercase font-calsans"
        />
        <div className="relative mt-5">
          <span className="absolute left-0 bottom-0 w-full h-2 bg-ritimBlack"></span>
        </div>
      </div>

      <motion.div
        className="w-full max-w-2xl sm:max-w-3xl md:max-w-4xl mt-8 px-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Accordion
          type="multiple"
          value={openItems}
          onValueChange={setOpenItems}
          className="w-full space-y-4"
        >
          {items.map((item, index) => {
            const val = `item-${index}`;
            const isOpen = openItems.includes(val);
            return (
              <motion.div key={val} variants={itemVariants}>
                <AccordionItem value={val} className="border rounded-md shadow-sm p-1 px-4">
                  <AccordionTrigger className="text-base sm:text-lg md:text-xl hover:no-underline">
                    {item.question}
                  </AccordionTrigger>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        variants={collapseVariants}
                        initial="collapsed"
                        animate="expanded"
                        exit="collapsed"
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="overflow-hidden border-t pt-3 text-sm sm:text-base md:text-lg"
                      >
                        {item.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </AccordionItem>
              </motion.div>
            );
          })}
        </Accordion>
      </motion.div>
    </div>
  );
};

export default CustomFaq;
