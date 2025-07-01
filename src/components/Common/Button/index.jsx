"use client";

import React from "react";
import { cn } from "@/utils/cn";

export default function Button({
  children,
  varitant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  fullWidth = false,
  onClick,
  className = "",
}) {
  const baseStyle =
    "inline-flex items-center justify-center rounded-xl font-semibold transition-all focus:outline-none";
  const varitantStyle = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };
  const sizeStyle = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-5 py-3",
  };

  const isDisabled = disabled || loading;

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={cn(
        baseStyle,
        varitantStyle[varitant],
        sizeStyle[size],
        fullWidth && "w-full",
        !isDisabled ? "cursor-pointer" : "cursor-not-allowed opacity-50",
        className
      )}
    >
      {loading && (
        <span className="inline-block animate-spin mr-2 w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
      )}
      {children}
    </button>
  );
}
