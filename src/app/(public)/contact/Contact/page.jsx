// src/components/Contact/ContactForm.jsx
"use client";

import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import contactValidationSchema from "./contactValidationSchema";
import { motion } from "framer-motion";

import { useTranslations, useLocale } from "next-intl";
import Button from "@/components/Common/Button";
import Title from "@/components/Common/Title";

const ContactFormFormik = ({ onStatusChange }) => {
  const t = useTranslations("contactSectionForm");
  const locale = useLocale();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      onStatusChange({
        type: "success",
        message: t("successMessage"),
      });
      resetForm();
    } catch {
      onStatusChange({
        type: "error",
        message: t("errorMessage"),
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ name: "", lastname: "", email: "", message: "" }}
      validationSchema={contactValidationSchema(locale)}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-4">
          {/* Name / Lastname */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700">
                {t("firstNameLabel")}
              </label>
              <Field
                name="name"
                type="text"
                placeholder={t("firstNamePlaceholder")}
                className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-ritimBlack"
              />
              <ErrorMessage
                name="name"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700">
                {t("lastNameLabel")}
              </label>
              <Field
                name="lastname"
                type="text"
                placeholder={t("lastNamePlaceholder")}
                className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-ritimBlack"
              />
              <ErrorMessage
                name="lastname"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              {t("emailLabel")}
            </label>
            <Field
              name="email"
              type="email"
              placeholder={t("emailPlaceholder")}
              className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-ritimBlack"
            />
            <ErrorMessage
              name="email"
              component="p"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              {t("messageLabel")}
            </label>
            <Field
              name="message"
              as="textarea"
              placeholder={t("messagePlaceholder")}
              maxLength={250}
              rows={4}
              className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-ritimBlack"
            />
            <ErrorMessage
              name="message"
              component="p"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Submit */}
          <Button
            type="submit"
            size="md"
            fullWidth
            variant="primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? t("sending") : t("send")}
          </Button>
        </Form>
      )}
    </Formik>
  );
};  

export default function ContactForm() {
  const t = useTranslations("contactSectionForm");
  const [formMessage, setFormMessage] = useState(null);

  useEffect(() => {
    if (formMessage) {
      const timer = setTimeout(() => setFormMessage(null), 10000);
      return () => clearTimeout(timer);
    }
  }, [formMessage]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="flex flex-col items-center justify-center w-full max-w-7xl space-y-6 md:space-y-0 md:flex-row md:space-x-8">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full text-center md:w-1/2 max-w-lg md:text-left"
        >
          <Title
            level={3}
            align="start"
            size="text-2xl md:text-4xl"
            weight="semibold"
            color="text-black"
            className="uppercase font-calsans"
          >
            {t("getInTouchHeading")}
          </Title>
          <p className="text-lg text-gray-700 mb-6 mt-5 leading-relaxed">
            {t("getInTouchDesc")}
          </p>
          <div className="flex justify-center md:justify-start">
            <img
              src="/contact.png"
              alt={t("getInTouchHeading")}
              className="w-[320px] sm:w-[400px] md:w-[490px] object-contain"
            />
          </div>
        </motion.div>

        {/* Right Side Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 max-w-lg border border-gray-300 p-6 rounded-lg shadow-md bg-white"
        >
          <h3 className="text-xl font-semibold text-darkPurple mb-4">
            {t("contactFormHeading")}
          </h3>

          <ContactFormFormik onStatusChange={setFormMessage} />

          {formMessage && (
            <p
              className={`mt-4 text-sm ${
                formMessage.type === "success"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {formMessage.message}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
