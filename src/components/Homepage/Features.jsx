"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  AiOutlineClockCircle,
  AiOutlineUser,
  AiOutlineGlobal,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { motion } from "framer-motion";
import { MdOutlineTrendingUp } from "react-icons/md";

const Counter = ({ endValue, duration }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = endValue / (duration / 10);
    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        start = endValue;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 10);

    return () => clearInterval(timer);
  }, [isVisible, endValue, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

const Feature = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      className="bg-white mt-20 md:mt-40"
      initial={{ opacity: 0, y: -50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="items-center max-w-screen-xl px-4 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:px-6">
        {/* Left Text */}
        <motion.div
          className="col-span-2 mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg font-medium text-blue-600">Trusted Worldwide</p>
          <h2 className="mt-3 mb-4 font-extrabold tracking-tight text-gray-900 text-2xl md:text-4xl">
            <Counter endValue={600000000} duration={2000} /> users and 10,000+ companies rely on LinkSpace
          </h2>
          <p className="font-light text-gray-600 sm:text-xl">
            LinkSpace connects talent with opportunity across the globe. We’re committed to delivering a secure, scalable job marketplace for companies and job seekers alike.
          </p>
          <div className="mt-4 flex items-center space-x-2">
            <a href="#" className="text-blue-600 hover:underline text-xl font-medium">
              Explore Features
            </a>
            <AiOutlineArrowRight className="w-6 h-6 text-blue-600" />
          </div>
        </motion.div>

        {/* Right Stats */}
        <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
          {[
            {
              icon: (
                <AiOutlineClockCircle className="w-10 h-10 mb-2 text-blue-600 md:w-12 md:h-12" />
              ),
              text: "% uptime",
              value: 99.99,
              desc: "Reliable infrastructure ensures uninterrupted access for all users.",
            },
            {
              icon: (
                <AiOutlineUser className="w-10 h-10 mb-2 text-blue-600 md:w-12 md:h-12" />
              ),
              text: "+ active users",
              value: 600000000,
              desc: "Millions trust LinkSpace to find the right job or candidate.",
            },
            {
              icon: (
                <AiOutlineGlobal className="w-10 h-10 mb-2 text-blue-600 md:w-12 md:h-12" />
              ),
              text: "+ countries served",
              value: 100,
              desc: "LinkSpace is used in over 100 countries worldwide.",
            },
            {
              icon: (
                <MdOutlineTrendingUp className="w-10 h-10 mb-2 text-blue-600 md:w-12 md:h-12" />
              ),
              text: "daily applications",
              value: 5000000,
              desc: "Over 5 million job applications processed every day.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {item.icon}
              <h3 className="mb-2 text-2xl font-bold text-blue-700">
                <Counter endValue={item.value} duration={2000} /> {item.text}
              </h3>
              <p className="font-light text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Feature;
