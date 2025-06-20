"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { cn } from "@/utils/cn";

export default function DatePickerInput({
  selected,
  onChange,
  label,
  placeholder = "Tarih seçiniz",
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
        selected={selected}
        onChange={onChange}
        placeholderText={placeholder}
        disabled={disabled}
        className={cn(
          "w-full rounded-lg border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
          disabled && "bg-gray-100 cursor-not-allowed",
          className
        )}
        dateFormat="dd.MM.yyyy"
      />
    </div>
  );
}
