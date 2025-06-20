"use client";

import React from "react";
import { cn } from "@/utils/cn";

export default function Description({
  children,
  as = "p",
  size = "md",
  color = "text-gray-700",
  align = "left",
  muted = false,
  className,
}) {
  const Tag = as;

  return (
    <Tag
      className={cn(
        "leading-relaxed",
        size === "sm" && "text-sm",
        size === "md" && "text-base",
        size === "lg" && "text-lg",
        align === "center" && "text-center",
        align === "right" && "text-right",
        align === "left" && "text-left",
        muted && "text-gray-500",
        !muted && color,
        className
      )}
    >
      {children}
    </Tag>
  );
}
