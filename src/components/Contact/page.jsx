"use client";
import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import contactValidationSchema from "./contactValidationSchema";
import { motion } from "framer-motion";
import Button from "../Common/Button";
import Title from "../Common/Title";

const ContactFormFormik = ({ onStatusChange }) => {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      onStatusChange({
        type: "success",
        message: "Your message has been sent successfully.",
      });
      resetForm();
    } catch (error) {
      onStatusChange({
        type: "error",
        message:
          "An error occurred while sending your message. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ name: "", lastname: "", email: "", message: "" }}
      validationSchema={contactValidationSchema("en")}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-4">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <Field
                name="name"
                type="text"
                placeholder="Enter your first name"
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
                Last Name
              </label>
              <Field
                name="lastname"
                type="text"
                placeholder="Enter your last name"
                className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-ritimBlack"
              />
              <ErrorMessage
                name="lastname"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <Field
              name="email"
              type="email"
              placeholder="Enter your email address"
              className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-ritimBlack"
            />
            <ErrorMessage
              name="email"
              component="p"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <Field
              name="message"
              as="textarea"
              placeholder="Write your message (max 250 characters)"
              maxLength={250}
              className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-ritimBlack"
              rows={4}
            />
            <ErrorMessage
              name="message"
              component="p"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <Button
            type="submit"
            size="md"
            fullWidth="true"
            varitant="primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send"}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

const ContactForm = () => {
  const [formMessage, setFormMessage] = useState(null);

  useEffect(() => {
    if (formMessage) {
      const timer = setTimeout(() => {
        setFormMessage(null);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [formMessage]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="flex flex-col items-center justify-center w-full max-w-7xl space-y-6 md:space-y-0 md:flex-row md:space-x-8">
        {/* Left Text and Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full text-center md:w-1/2 max-w-lg md:text-left"
        >
          <Title
            level={3}
            children="Get in Touch With Us"
            align="start"
            size="text-2xl md:text-4xl"
            weight="semibold"
            color="text-black"
            className="uppercase font-calsans"
          />
          <p className="text-lg text-gray-700 mb-6 mt-5 leading-relaxed">
            If you have any questions or feedback, feel free to reach out. You
            can quickly contact us by filling out the form below.
          </p>
          <div className="flex justify-center md:justify-start">
            <img
              src="/contact.png"
              alt="Illustration"
              className="w-[320px] sm:w-[400px] md:w-[490px] object-contain"
            />
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 max-w-lg border border-gray-300 p-6 rounded-lg shadow-md bg-white"
        >
          <h3 className="text-xl font-semibold text-darkPurple mb-4">
            Contact Form
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
};

export default ContactForm;
