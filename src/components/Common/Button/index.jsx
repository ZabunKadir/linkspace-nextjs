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

  return (
    <div>
      <button
        onClick={onClick}
        disabled={disabled || loading}
        className={cn(
          baseStyle,
          varitantStyle[varitant],
          sizeStyle[size],
          fullWidth && "w-full",
          (disabled || loading) && "opacity-50 cursor-not-allowed",
          className
        )}
      >
        {loading && (
          <svg
            className="animate-spin h-4 w-4 mr-2 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            ></path>
          </svg>
        )}

        {children}
      </button>
    </div>
  );
}
