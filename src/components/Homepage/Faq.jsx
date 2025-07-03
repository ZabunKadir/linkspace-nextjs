"use client";
import React from "react";
import CustomFaq from "../Common/Faq";
import { useTranslations } from "next-intl";

export default function FaqHomePage() {
  const t = useTranslations("faqSection");

  const faqItems = [
    { question: t("q1.question"), answer: t("q1.answer") },
    { question: t("q2.question"), answer: t("q2.answer") },
    { question: t("q3.question"), answer: t("q3.answer") },
    { question: t("q4.question"), answer: t("q4.answer") },
    { question: t("q5.question"), answer: t("q5.answer") },
    { question: t("q6.question"), answer: t("q6.answer") },
    { question: t("q7.question"), answer: t("q7.answer") }
  ];

  return (
    <div>
      <CustomFaq items={faqItems} />
    </div>
  );
}
