"use client";
import React from "react";
import Input from "@/components/Common/Input";
import Button from "@/components/Common/Button";
import { useFormik } from "formik";
import { forgotPasswordValidationSchema } from "./forgotPasswordSchema";
import Swal from "sweetalert2";

const ForgotPasswordPage = () => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
    },
    validationSchema: forgotPasswordValidationSchema,
    onSubmit: (values) => {
      // Burada API isteğini yapabilirsin
      Swal.fire({
        icon: "success",
        title: "Check your inbox",
        text: "If this email exists, a reset link has been sent.",
        confirmButtonColor: "#3085d6",
      });
      formik.resetForm();
    },
  });

  return (
    <div className="flex min-h-screen text-sm">
      {/* Sol resim alanı */}
      <div className="w-full relative bg-[#f9f9f9] hidden lg:flex items-center justify-center">
        <img
          src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/illustrations/bg-shape-image-light.png"
          alt="background-shape"
          className="absolute bottom-0 left-0 w-full h-auto object-cover z-0"
        />
        <img
          src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/illustrations/auth-forgot-password-illustration-light.png"
          alt="auth-illustration"
          className="relative z-10 max-w-[320px]"
        />
      </div>

      {/* Sağ form alanı */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
        <form
          onSubmit={formik.handleSubmit}
          className="w-full max-w-md space-y-4"
        >
          <div>
            <h1 className="text-xl font-semibold text-gray-800 mb-1">
              Forgot your password?
            </h1>
            <p className="text-xs text-gray-500">
              Enter your email and we’ll send you instructions to reset your password
            </p>
          </div>

          <Input
            name="email"
            label="Email Address"
            placeholder="Enter your email"
            type="email"
            value={formik.values.email || ""}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="text-sm px-3 py-2"
            error={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : null
            }
          />

          <Button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2.5 hover:bg-indigo-700"
          >
            Send Reset Link
          </Button>

          <p className="text-center text-xs text-gray-600 font-bold">
            Remember your password?{" "}
            <a href="/login" className="text-blue-600 font-medium">
              Sign in instead
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
