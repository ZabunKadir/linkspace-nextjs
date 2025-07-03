"use client";
import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About */}
        <div>
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
          <p className="text-sm leading-relaxed mt-1">
            {t("aboutDescription")}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="text-lg font-semibold text-white mb-4">
            {t("quickLinks.title")}
          </h5>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition">
                {t("quickLinks.home")}
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition">
                {t("quickLinks.about")}
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white transition">
                {t("quickLinks.blog")}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                {t("quickLinks.contact")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h5 className="text-lg font-semibold text-white mb-4">
            {t("resources.title")}
          </h5>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/faq" className="hover:text-white transition">
                {t("resources.faq")}
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white transition">
                {t("resources.privacy")}
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white transition">
                {t("resources.terms")}
              </Link>
            </li>
            <li>
              <Link href="/support" className="hover:text-white transition">
                {t("resources.support")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h5 className="text-lg font-semibold text-white mb-4">
            {t("contact.title")}
          </h5>
          <ul className="space-y-3 text-sm mb-6">
            <li className="flex items-start">
              <FaMapMarkerAlt className="mt-1 mr-2 text-purple-400" />
              {t("contact.address")}
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="mr-2 text-purple-400" />
              {t("contact.phone")}
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-2 text-purple-400" />
              {t("contact.email")}
            </li>
          </ul>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="hover:text-white transition"
              aria-label={t("social.facebook")}
            >
              <FaFacebookF size={18} />
            </Link>
            <Link
              href="#"
              className="hover:text-white transition"
              aria-label={t("social.twitter")}
            >
              <FaTwitter size={18} />
            </Link>
            <Link
              href="#"
              className="hover:text-white transition"
              aria-label={t("social.instagram")}
            >
              <FaInstagram size={18} />
            </Link>
            <Link
              href="#"
              className="hover:text-white transition"
              aria-label={t("social.linkedin")}
            >
              <FaLinkedinIn size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 py-4 text-center text-sm text-gray-400">
          {t("copyright", { year })}
        </div>
      </div>
    </footer>
  );
}
