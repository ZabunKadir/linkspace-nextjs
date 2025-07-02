"use client";
import React, { useState, useEffect, useRef } from "react";
import Button from "@/components/Common/Button";

// 6 haneli OTP kutucuklarını yöneten alt bileşen
function OtpInput({ length = 6, onComplete }) {
  const inputsRef = useRef([]);
  const [vals, setVals] = useState(Array(length).fill(""));

  // Tüm hücreler dolunca parent'a bildir
  useEffect(() => {
    if (vals.every(v => v !== "")) {
      onComplete(vals.join(""));
    }
  }, [vals, onComplete]);

  // Paste (Ctrl+V) desteği
  const handlePaste = e => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("Text");
    const digits = pasted.replace(/\D/g, "").slice(0, length).split("");
    if (digits.length === 0) return;
    const next = Array(length).fill("");
    digits.forEach((d, i) => (next[i] = d));
    setVals(next);
    inputsRef.current[digits.length - 1]?.focus();
  };

  // Rakam girişi
  const handleChange = (idx, e) => {
    const digit = e.target.value.replace(/\D/, "");
    if (!digit) return;
    setVals(prev => {
      const next = [...prev];
      next[idx] = digit.charAt(digit.length - 1);
      return next;
    });
    inputsRef.current[idx + 1]?.focus();
  };

  // Backspace ile silme ve odak yönetimi
  const handleKey = (idx, e) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      setVals(prev => {
        const next = [...prev];
        if (next[idx] !== "") {
          // dolu hücreyi temizle
          next[idx] = "";
        } else if (idx > 0) {
          // boş hücreyse önceki hücreye odaklan ve temizle
          inputsRef.current[idx - 1]?.focus();
          next[idx - 1] = "";
        }
        return next;
      });
    }
  };

  return (
    <div className="flex justify-center space-x-2 my-4" onPaste={handlePaste}>
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          type="text"
          inputMode="numeric"
          maxLength={1}
          ref={el => (inputsRef.current[i] = el)}
          className="w-10 h-12 border-2 border-gray-300 rounded-lg text-center text-xl focus:outline-none focus:border-indigo-600"
          value={vals[i]}
          onChange={e => handleChange(i, e)}
          onKeyDown={e => handleKey(i, e)}
        />
      ))}
    </div>
  );
}

export default function TwoFactorting() {
  const [code, setCode] = useState("");

  // Kod tamamlandığında burası tetiklenir
  const handleOtpComplete = otp => {
    setCode(otp);
    console.log("Girilen TFA kodu:", otp);
    // TODO: verifyTfa({ sessionToken, code: otp }) mutasyonunu burada çağır
  };

  return (
    <div className="flex min-h-screen overflow-x-hidden">
      {/* Sol panel: Vuexy illustration */}
      <div className="hidden lg:flex  w-full bg-[#f9f9f9] items-center justify-center relative">
        <img
          src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/illustrations/bg-shape-image-light.png"
          alt="bg-shape"
          className="absolute bottom-0 left-0 w-full h-auto object-cover"
        />
        <img
          src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/illustrations/auth-login-illustration-light.png"
          alt="auth-illustration"
          className="relative z-10 max-w-[420px]"
        />
      </div>

      {/* Sağ panel: Two Step Verification */}
      <div className="w-full lg:w-1/2    flex flex-col justify-center p-6">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Two Step Verification 💬
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            We sent a verification code to your mobile. Enter the code from the mobile in the field below.
            <br />
            <span className="font-mono">*****1234</span>
          </p>

          {/* 6 hücreli kod giriş bileşeni */}
          <OtpInput length={6} onComplete={handleOtpComplete} />

          {/* Doğrula butonu */}
          <Button type="submit" className="w-full bg-indigo-600 text-white py-2.5 hover:bg-indigo-700 mb-4">
            Verify my account
          </Button>

          {/* Yeniden gönder linki */}
          <button className="text-sm text-blue-600 hover:underline">
            Didn’t get the code? Resend
          </button>
        </div>
      </div>
    </div>
  );
}
