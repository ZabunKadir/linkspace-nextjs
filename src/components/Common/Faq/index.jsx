"use client";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/Common/Acardion";
import { motion } from "framer-motion";
import Title from "../Title";

// Sıralı animasyon için container ve item tanımları
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

const CustomFaq = ({ items }) => {
  return (
    <div className="flex flex-col justify-center items-center mt-10 lg:mt-20 px-4">
      <div className="w-full max-w-2xl sm:max-w-3xl md:max-w-4xl text-center mb-6">
        <div className="relative font-bold text-darkPurple text-3xl sm:text-4xl md:text-5xl inline-block">

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
      </div>

      <motion.div
        className="w-full max-w-2xl sm:max-w-3xl md:max-w-4xl mt-8 px-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Accordion type="multiple" className="w-full space-y-4">
          {items.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <AccordionItem
                value={`item-${index}`}
                className="border rounded-md shadow-sm p-1 px-4"
              >
                <AccordionTrigger className="text-base sm:text-lg md:text-xl hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base md:text-lg transition-all duration-300 overflow-hidden border-t pt-3">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </div>
  );
};

export default CustomFaq;
