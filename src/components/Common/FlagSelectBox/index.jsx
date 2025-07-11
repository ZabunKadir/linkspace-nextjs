"use client";
import React, { useMemo } from "react";
import Select from "react-select";

export default function FlagSelectBox({ value, onChange, options, error }) {
  const customStyles = {
    control: (base) => ({
      ...base,
      padding: "2px 4px",
      fontSize: "0.875rem",
      borderColor: error ? "red" : "#d1d5db",
      boxShadow: "none",
      minHeight: "36px",
    }),
    option: (base) => ({
      ...base,
      display: "flex",
      alignItems: "center",
      fontSize: "0.875rem",
    }),
    singleValue: (base) => ({
      ...base,
      display: "flex",
      alignItems: "center",
    }),
    input: (base) => ({
      ...base,
      visibility: "hidden",
    }),
  };
  const countryOptions = useMemo(
    () => [
      {
        value: "90",
        label: "Turkey",
        code: "TR",
        flag: "https://flagcdn.com/w40/tr.png",
      },
      {
        value: "1",
        label: "United States",
        code: "US",
        flag: "https://flagcdn.com/w40/us.png",
      },
      {
        value: "44",
        label: "United Kingdom",
        code: "GB",
        flag: "https://flagcdn.com/w40/gb.png",
      },
      {
        value: "49",
        label: "Germany",
        code: "DE",
        flag: "https://flagcdn.com/w40/de.png",
      },
      {
        value: "33",
        label: "France",
        code: "FR",
        flag: "https://flagcdn.com/w40/fr.png",
      },
    ],
    []
  );
  const customOptions = (options ?? countryOptions).map((opt) => ({
    ...opt,
    label: (
      <div className="flex items-center gap-2">
        <img src={opt.flag} alt={opt.code} className="w-5 h-3 object-cover" />
        <span className="text-xs">
          {opt.code} +{opt.value}
        </span>
      </div>
    ),
  }));

  const selectedOption = customOptions.find((o) => o.value === value);

  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">
        Country <span className="text-red-500">*</span>
      </label>
      <Select
        instanceId="flag-select"
        styles={customStyles}
        isSearchable={false}
        value={selectedOption}
        onChange={(opt) => onChange(opt.value)}
        options={customOptions}
        isDisabled={!customOptions.length}
      />
      {error && <span className="text-xs text-red-600">{error}</span>}
    </div>
  );
}
