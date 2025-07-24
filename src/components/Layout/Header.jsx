"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX, HiSparkles } from "react-icons/hi";
import {
  FaUser,
  FaUserPlus,
  FaHome,
  FaInfoCircle,
  FaBlog,
  FaEnvelope,
} from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import Button from "../Common/Button";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcher from "../Common/Language";
import { useTranslations } from "next-intl";
import ProfileDropdown from "../Common/ProfileDropdown";

export default function EnhancedHeaderTailwind() {
  const t = useTranslations("header");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const linkClass = (path) => {
    const isActive =
      path === "/" ? pathname === path : pathname.startsWith(path);
    return `relative text-sm font-semibold transition-all duration-300 group ${
      isActive ? "text-indigo-600" : "text-gray-700 hover:text-indigo-600"
    }`;
  };

  const btnClass = (path) => {
    const isActive = pathname === path;
    return `text-sm font-semibold transition-all duration-300 ${
      isActive ? "text-indigo-600" : "text-gray-700"
    }`;
  };

  const navItems = [
    { href: "/", label: t("home"), icon: <FaHome className="w-4 h-4" /> },
    {
      href: "/about",
      label: t("about"),
      icon: <FaInfoCircle className="w-4 h-4" />,
    },
    { href: "/blog", label: t("blog"), icon: <FaBlog className="w-4 h-4" /> },
    {
      href: "/contact",
      label: t("contact"),
      icon: <FaEnvelope className="w-4 h-4" />,
    },
  ];

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-white/20"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-14" : "h-16"
          }`}
        >
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg hover:shadow-indigo-500/25 transition-all duration-300">
                <HiSparkles className="w-5 h-5 text-white animate-pulse" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg opacity-20 blur-sm animate-pulse"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent hover:from-indigo-700 hover:to-purple-700 transition-all duration-300">
              {t("brand")}
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === item.href
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${linkClass(item.href)} relative`}
                >
                  <span className="flex items-center gap-2 hover:scale-105 transition-transform duration-200">
                    <span className="text-indigo-500 group-hover:animate-bounce">
                      {item.icon}
                    </span>
                    {item.label}
                  </span>
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <div className="hidden lg:flex items-center">
              <div className="relative group">
                <LanguageSwitcher />
              </div>
            </div>
            <Link href="/login">
              <Button
                variant="outline"
                className={`${btnClass(
                  "/register"
                )} relative overflow-hidden group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-indigo-500/25`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <FaUser className="w-4 h-4 group-hover:animate-pulse" />
                  {t("login")}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Button>
            </Link>
            <Link href="/register">
              <Button
                className={`${btnClass(
                  "/register"
                )} relative overflow-hidden group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-indigo-500/25`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <FaUserPlus className="w-4 h-4 group-hover:animate-bounce" />
                  {t("signup")}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Button>
            </Link>
          </div>
          <ProfileDropdown />

          <button
            onClick={toggleMenu}
            className="md:hidden relative p-2 rounded-lg bg-gray-100 hover:bg-gray-200 hover:scale-110 transition-all duration-300 group"
          >
            <motion.div
              animate={{ rotate: menuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="group-hover:animate-pulse"
            >
              {menuOpen ? (
                <HiX className="w-6 h-6 text-gray-700" />
              ) : (
                <HiMenu className="w-6 h-6 text-gray-700" />
              )}
            </motion.div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={toggleMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="absolute right-0 top-0 h-full w-80 bg-white/95 backdrop-blur-xl shadow-2xl border-l border-white/20"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 h-full flex flex-col">
                <div className="flex justify-between items-center mb-8">
                  <Link
                    href="/"
                    onClick={toggleMenu}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:animate-spin">
                      <HiSparkles className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      {t("brand")}
                    </span>
                  </Link>
                  <button
                    onClick={toggleMenu}
                    className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 hover:rotate-90 transition-all duration-300"
                  >
                    <HiX className="w-6 h-6 text-gray-700" />
                  </button>
                </div>

                <nav className="flex-1 space-y-2">
                  {navItems.map((item, index) => {
                    const isActive =
                      item.href === "/"
                        ? pathname === item.href
                        : pathname.startsWith(item.href);
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          onClick={toggleMenu}
                          className={`${linkClass(
                            item.href
                          )} flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:translate-x-2 hover:bg-indigo-50 hover:shadow-md group ${
                            isActive
                              ? "bg-indigo-50 translate-x-2 shadow-md"
                              : ""
                          }`}
                        >
                          <div
                            className={`transition-all duration-300 group-hover:scale-110 group-hover:animate-pulse ${
                              isActive ? "text-indigo-600" : "text-indigo-500"
                            }`}
                          >
                            {item.icon}
                          </div>
                          <span className="group-hover:font-semibold transition-all duration-300">
                            {item.label}
                          </span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                <motion.div
                  className="mb-6 p-3 bg-gradient-to-r from-gray-50 to-indigo-50 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <MdLanguage className="w-5 h-5 text-indigo-500 animate-pulse" />
                    <span className="text-sm font-medium text-gray-700">
                      Language
                    </span>
                  </div>
                  <LanguageSwitcher />
                </motion.div>

                <motion.div
                  className="space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link href="/login" onClick={toggleMenu} className="block">
                    <Button
                      variant="outline"
                      className={`${btnClass(
                        "/login"
                      )} w-full justify-center border-2 border-gray-200 hover:border-indigo-300 hover:shadow-lg hover:scale-105 transition-all duration-300 bg-white/50 backdrop-blur-sm group`}
                    >
                      <span className="flex items-center gap-2">
                        <FaUser className="w-4 h-4 group-hover:animate-bounce" />
                        {t("login")}
                      </span>
                    </Button>
                  </Link>
                  <Link href="/register" onClick={toggleMenu} className="block">
                    <Button
                      className={`${btnClass(
                        "/register"
                      )} w-full justify-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-indigo-500/25 group`}
                    >
                      <span className="flex items-center gap-2">
                        <FaUserPlus className="w-4 h-4 group-hover:animate-spin" />
                        {t("signup")}
                      </span>
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
