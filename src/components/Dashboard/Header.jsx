"use client";

import {
  FaBell,
  FaEnvelope,
  FaCog,
  FaQuestionCircle,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { logout } from "@/store/auth/slice";
import Link from "next/link";
import { HiSparkles } from "react-icons/hi";
import ProfileDropdown from "../Common/ProfileDropdown";
import SearchWithDropdown from "../Common/SearchBarDashboard";

export default function DashboardHeader() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="w-full bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between py-3">
          {/* Sol kısım: Logo + Arama */}
          <div className="flex items-center space-x-3 flex-grow">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg hover:shadow-indigo-500/25 transition-all duration-300">
                  <HiSparkles className="w-5 h-5 text-white animate-pulse" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg opacity-20 blur-sm animate-pulse"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent hover:from-indigo-700 hover:to-purple-700 transition-all duration-300">
                Linkspace
              </span>
            </Link>

            {/* Arama Çubuğu */}
            <div className="relative max-w-lg w-full">
              <SearchWithDropdown />
            </div>
          </div>

          {/* Sağ kısım: İkonlar */}
          <div className="flex items-center space-x-6 text-gray-600 text-xl">
            <FaBell className="cursor-pointer hover:text-indigo-600" />
            <FaEnvelope className="cursor-pointer hover:text-indigo-600" />
            <FaCog className="cursor-pointer hover:text-indigo-600" />
            <FaQuestionCircle className="cursor-pointer hover:text-indigo-600" />
            <ProfileDropdown />
          </div>
        </div>
      </div>
    </header>
  );
}
