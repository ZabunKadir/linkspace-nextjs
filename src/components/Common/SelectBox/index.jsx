"use client";

import React from "react";
import { cn } from "@/utils/cn";

export default function SelectBox({
  label,
  value,
  onChange,
  options = [],
  placeholder = "Seçiniz",
  disabled = false,
  required = false,
  error,
  fullWidth = false,
  className,
}) {
  return (
    <div className={cn("flex flex-col gap-1", fullWidth && "w-full")}>
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}

          {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <select
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        className={cn(
          "rounded-lg border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
          error ? "border-red-500" : "border-gray-300",
          disabled && "bg-gray-100 cursor-not-allowed",
          fullWidth && "w-full",
          className
        )}
      >
        <option value="">{placeholder}</option>

        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {error && <span className="text-xs text-red-600">{error}</span>}
    </div>
  );
}
