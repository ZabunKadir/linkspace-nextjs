"use client";
import React from "react";
import Input from "@/components/Common/Input";
import Button from "@/components/Common/Button";
import { FaFacebookF, FaTwitter, FaGithub, FaGoogle } from "react-icons/fa";
import { useFormik } from "formik";
import { loginValidationSchema } from "./loginSchema";
import Swal from "sweetalert2";
import { useRegisterMutation } from "@/store/auth/service";

const LoginPage = () => {
  const [register, { isLoading: registerLoading }] = useRegisterMutation();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      delete values.confirmPassword;
      register(values).then((res) => {
        if (!res?.data?.error) {
          formik.resetForm();
          Swal.fire({
            icon: "success",
            title: "Registration Successful",
            text: "Your account has been created successfully!",
            confirmButtonColor: "#3085d6",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Registration Failed",
            text: res?.data?.error || "An error occurred during registration.",
            confirmButtonColor: "#d33",
          });
        }
      });
    },
  });

  const loginFields = [
    {
      name: "email",
      label: "Email or Username",
      placeholder: "Enter your email or username",
      type: "text",
    },
    {
      name: "password",
      label: "Password",
      placeholder: "Enter your password",
      type: "password",
    },
  ];
  return (
    <div className="flex min-h-screen text-sm overflow-x-hidden">
      <div className="w-full relative bg-[#f9f9f9] hidden lg:flex items-center justify-center">
        <img
          src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/illustrations/bg-shape-image-light.png"
          alt="background-shape"
          className="absolute bottom-0 left-0 w-full h-auto object-cover z-0"
        />
        <img
          src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/illustrations/auth-login-illustration-light.png"
          alt="auth-illustration"
          className="relative z-10 max-w-[420px]"
        />
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
        <form
          onSubmit={formik.handleSubmit}
          className="w-full max-w-md space-y-4 "
        >
          <div>
            <h1 className="text-xl font-semibold text-gray-800 mb-1">
              Welcome to Linkspace! 👋
            </h1>
            <p className="text-xs text-gray-500">
              Please log in to your account and get things back on track.
            </p>
          </div>
          {loginFields.map((field, index) => (
            <Input
              key={index}
              name={field.name}
              label={field.label}
              type={field.type}
              placeholder={field.placeholder}
              value={formik.values[field.name] || ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={registerLoading}
              className="text-sm px-3 py-2"
              error={
                formik.touched[field.name] && formik.errors[field.name]
                  ? formik.errors[field.name]
                  : null
              }
            />
          ))}

          {/* Remember me + Forgot */}
          <div className="flex justify-between items-center text-xs text-gray-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox" />
              Remember Me
            </label>
            <a href="#" className="text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          <Button className="w-full bg-indigo-600 text-white py-2.5 hover:bg-indigo-700">
            Sign in
          </Button>

          <p className="text-center text-xs text-gray-600 font-bold">
            New on our platform?{" "}
            <a href="/register" className="text-blue-600 font-medium">
              Create an account
            </a>
          </p>

          <div className="flex items-center justify-center gap-4 py-2 text-gray-400 text-xs">
            <div className="h-px w-full bg-gray-300" />
            or
            <div className="h-px w-full bg-gray-300" />
          </div>
          <div className="flex items-center justify-center space-x-3 pt-3 text-gray-500">
            <a
              href="#"
              className="p-2 rounded-full hover:bg-gray-100 transition"
            >
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full hover:bg-gray-100 transition"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full hover:bg-gray-100 transition"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full hover:bg-gray-100 transition"
            >
              <FaGoogle className="w-5 h-5" />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
