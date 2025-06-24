"use client";
import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import Button from "../Common/Button";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary">
          LinkSpace
        </Link>

        <nav className="hidden md:flex gap-6">
          <Link
            href="/"
            className="text-md font-medium text-gray-700 hover:text-primary"
          >
            Anasayfa
          </Link>
          <Link
            href="/about"
            className="text-md font-medium text-gray-700 hover:text-primary"
          >
            Hakkımızda
          </Link>
          <Link
            href="/contact"
            className="text-md font-medium text-gray-700 hover:text-primary"
          >
            İletişim
          </Link>
        </nav>

        <div className="hidden md:flex gap-2">
          <Link href="/login">
            <Button variant="outline" className="text-md">
              Giriş Yap
            </Button>
          </Link>
          <Link href="/register">
            <Button className="text-md">Kayıt Ol</Button>
          </Link>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl text-gray-700 "
        >
          <HiMenu />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMenu}
          >
            <motion.div
              className="absolute right-0 top-0 h-full w-72 bg-white dark:bg-gray-900 shadow-lg p-6 flex flex-col gap-4"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold">LinkSpace</span>
                <button onClick={toggleMenu} className="text-2xl">
                  <HiX />
                </button>
              </div>

              <Link
                href="/"
                onClick={toggleMenu}
                className="text-md text-gray-700 hover:text-primary"
              >
                Anasayfa
              </Link>
              <Link
                href="/about"
                onClick={toggleMenu}
                className="text-md text-gray-700 hover:text-primary"
              >
                Hakkımızda
              </Link>
              <Link
                href="/contact"
                onClick={toggleMenu}
                className="text-md text-gray-700 hover:text-primary"
              >
                İletişim
              </Link>

              <hr className="my-2" />

              <div className="flex  flex-row justify-between gap-2">
                <Link href="/login" onClick={toggleMenu}>
                  <Button variant="outline" className="w-full">
                    Giriş Yap
                  </Button>
                </Link>
                <Link href="/register" onClick={toggleMenu}>
                  <Button className="w-full">Kayıt Ol</Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
