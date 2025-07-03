"use client";
import React, { useState, useEffect, useRef } from "react";


export default function Counter({ endValue, duration }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const stepTime = 10; 
    const totalSteps = duration / stepTime;
    const increment = endValue / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        start = endValue;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, endValue, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}
