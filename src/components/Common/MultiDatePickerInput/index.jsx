"use client";

import React from "react";
import DatePicker from "react-multi-date-picker";
import { cn } from "@/utils/cn";

export default function MultiDatePickerInput({
  value,
  onChange,
  label,
  placeholder = "Tarihleri seçiniz",
  required = false,
  disabled = false,
  fullWidth = false,
  className,
}) {
  return (
    <div className={cn("flex flex-col gap-1", fullWidth && "w-full")}>
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <DatePicker
        multiple
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        format="DD.MM.YYYY"
        inputClass={cn(
          "w-full rounded-lg border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
          disabled && "bg-gray-100 cursor-not-allowed",
          className
        )}
      />
    </div>
  );
}
