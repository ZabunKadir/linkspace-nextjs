"use client";

import React from "react";
import { cn } from "@/utils/cn";

export default function Title({
  children,
  level = 1,
  align = "left",
  weight = "bold",
  color = "text-gray-800",
  className,
}) {
  const Tag = `h${level > 6 ? 6 : level}`;

  return (
    <Tag
      className={cn(
        "tracking-tight",
        color,
        weight === "bold" && "font-bold",
        weight === "semibold" && "font-semibold",
        weight === "medium" && "font-medium",
        align === "center" && "text-center",
        align === "right" && "text-right",
        align === "left" && "text-left",
        className
      )}
    >
      {children}
    </Tag>
  );
}
