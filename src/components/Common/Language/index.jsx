"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
export default function LanguageSwitcher() {
  const [selectedLocale, setSelectedLocale] = useState("tr");
  const router = useRouter();
  useEffect(() => {
    const savedLocale = Cookies.get("locale");

    if (savedLocale) {
      setSelectedLocale(savedLocale);
    } else {
      const userLanguage = navigator.language || navigator.userLanguage;
      const locale = userLanguage.startsWith("tr") ? "tr" : "en";
      setSelectedLocale(locale);
      Cookies.set("locale", locale, { path: "/" });
    }
  }, []);
  const changeLocale = (locale) => {
    setSelectedLocale(locale);
    Cookies.set("locale", locale, { path: "/" });
    router.refresh();
  };
  return (
    <div className="relative w-28">
      <div className="flex items-center w-full rounded-full p-1">
        <button
          onClick={() => changeLocale("tr")}
          className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full transition-all ${
            selectedLocale === "tr" ? "bg-white shadow-md" : "opacity-50"
          }`}
        >
          <img
            src="https://productimages.hepsiburada.net/s/36/375-375/10534263423026.jpg"
            alt="Turkish Flag"
            className="w-8 h-8 object-cover rounded-full"
          />
        </button>
        <button
          onClick={() => changeLocale("en")}
          className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full transition-all ${
            selectedLocale === "en" ? "bg-white shadow-md" : "opacity-50"
          }`}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/1200px-Flag_of_the_United_Kingdom_%283-5%29.svg.png"
            alt="English Flag"
            className="w-8 h-8 object-cover rounded-full"
          />
        </button>
      </div>
    </div>
  );
}