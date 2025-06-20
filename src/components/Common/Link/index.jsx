"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";

export default function LinkButton({
  href = "#",
  children,
  variant = "primary",
  size = "md",
  external = false,
  fullWidth = false,
  className,
  disabled = false,
}) {
  const baseStyle =
    "inline-flex items-center justify-center rounded-xl font-semibold transition-all focus:outline-none";

  const variantStyle = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  const sizeStyle = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-5 py-3",
  };

  const combinedClass = cn(
    baseStyle,
    variantStyle[variant],
    sizeStyle[size],
    fullWidth && "w-full",
    disabled && "opacity-50 pointer-events-none cursor-not-allowed",
    className
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClass}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={combinedClass}>
      {children}
    </Link>
  );
}
