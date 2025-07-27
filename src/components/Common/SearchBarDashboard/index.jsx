"use client";

import { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import Input from "../Input";

export default function SearchWithOverlay() {
  const [isFocused, setIsFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

  const HEADER_HEIGHT = 56; // Header yüksekliğin neyse buraya yaz

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        inputRef.current &&
        !inputRef.current.contains(event.target)
      ) {
        setIsFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="relative max-w-lg w-full z-50">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            ref={inputRef}
            type="text"
            placeholder="Arama yap..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsFocused(true)}
            className={`
              transition-all duration-300
              bg-gray-100 rounded-full pl-10 pr-4 py-2 text-sm
              focus:outline-none focus:ring-2 focus:ring-indigo-500
              ${isFocused ? "w-96" : "w-62"}
            `}
          />
        </div>

        {isFocused && (
          <div
            ref={dropdownRef}
            className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-50 p-4"
          >
            {searchTerm ? (
              <p className="text-sm text-gray-700">Arama sonucu yok: "{searchTerm}"</p>
            ) : (
              <p className="text-sm text-gray-500">Bir şey yazın...</p>
            )}
          </div>
        )}
      </div>

      {isFocused && (
        <div
          onClick={() => setIsFocused(false)}
          className="fixed left-0 right-0 bottom-0 z-40"
          style={{
            top: HEADER_HEIGHT,
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            backdropFilter: "blur(4px)",
          }}
        />
      )}
    </>
  );
}
