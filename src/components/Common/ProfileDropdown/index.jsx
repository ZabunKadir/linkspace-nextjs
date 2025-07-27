"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FiChevronDown } from "react-icons/fi";
export default function ProfileDropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center  hover:bg-gray-100  rounded"
      >
        <img
          src="https://www.fotoipek.com.tr/wp-content/uploads/2021/04/biyometrikk.jpg"
          alt="Profil"
          width={24}
          height={24}
          className="rounded-full object-cover"
        />
        <FiChevronDown className="w-4 h-4 text-gray-600" />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <img
                src="https://www.fotoipek.com.tr/wp-content/uploads/2021/04/biyometrikk.jpg"
                alt="Profil"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold text-sm">Eren Sefa Öztürk</p>
                <p className="text-xs text-gray-500">
                  Maltepe Üniversitesi Mezunu
                </p>
              </div>
            </div>
            <button className="mt-3 w-full text-center text-sm text-blue-600 border border-blue-600 rounded-full py-1 hover:bg-blue-50">
              <Link href="/profile">Profili Görüntüleyin</Link>
            </button>
          </div>
          <div className="py-2 text-sm text-gray-700">
            <p className="px-4 py-1 font-medium text-gray-500">Hesap</p>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Premium özellikler
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Ayarlar ve Gizlilik
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Yardım
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Dil
            </a>

            <p className="px-4 pt-4 pb-1 font-medium text-gray-500">Yönet</p>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Gönderi ve Faaliyetler
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              İş İlanı Yayınlama Hesabı
            </a>
          </div>

          <div className="border-t border-gray-200">
            <button
              onClick={() => alert("Oturum kapatıldı")}
              className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
            >
              Oturumu Kapat
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
