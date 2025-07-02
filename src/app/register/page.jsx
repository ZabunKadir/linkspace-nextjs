"use client";
import React from "react";
import Button from "@/components/Common/Button";
import Input from "@/components/Common/Input";
import Swal from "sweetalert2";
import { useRegisterMutation } from "@/store/auth/service";
import { useFormik } from "formik";
import { registerValidationSchema } from "./registerSchema";
import { FaFacebookF, FaTwitter, FaGithub, FaGoogle } from "react-icons/fa";
import FlagSelectBox from "@/components/Common/FlagSelectBox";

const RegisterPage = () => {
  const [register, { isLoading: registerLoading }] = useRegisterMutation();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
      confirmPassword: "",
      countryCode: "90",
      phone: "",
      terms: false,
    },
    validationSchema: registerValidationSchema,
    onSubmit: (values) => {
      const data = { ...values };
      delete data.confirmPassword;
      register(data).then((res) => {
        console.log("res", res);

        if (!res?.error) {
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
            text:
              res?.error?.data?.message ||
              "An error occurred during registration.",
            confirmButtonColor: "#d33",
          });
        }
      });
    },
  });

  const registerFields = [
    {
      name: "name",
      label: "Name",
      placeholder: "Enter your name",
      type: "text",
    },
    {
      name: "surname",
      label: "Surname",
      placeholder: "Enter your surname",
      type: "text",
    },
    {
      name: "email",
      label: "Email",
      placeholder: "Enter your email",
      type: "email",
    },
    {
      name: "password",
      label: "Password",
      placeholder: "Enter password",
      type: "password",
    },
    {
      name: "confirmPassword",
      label: "Confirm Password",
      placeholder: "Repeat password",
      type: "password",
    },
  ];

  return (
    <div className="flex min-h-screen text-sm">
      <div className=" w-full relative bg-[#f9f9f9] hidden lg:flex items-center justify-center">
        <img
          src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/illustrations/bg-shape-image-light.png"
          alt="bg-shape"
          className="absolute bottom-0 left-0 w-full h-auto object-cover z-0"
        />
        <img
          src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/illustrations/auth-register-illustration-light.png"
          alt="auth-illustration"
          className="relative z-10 max-w-[420px]"
        />
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
        <form
          onSubmit={formik.handleSubmit}
          className="w-full max-w-md space-y-4"
        >
          <div>
            <h1 className="text-xl font-semibold text-gray-800 mb-1">
              Welcome to LinkSpace 🚀
            </h1>
            <p className="text-xs text-gray-500">
              All your hiring tools in one smart place —{" "}
              <span className="text-blue-600 font-bold">LinkSpace.</span>
            </p>
          </div>
          {registerFields.map((field, index) => (
            <Input
              key={index}
              name={field.name}
              label={field.label}
              type={field.type}
              placeholder={field.placeholder}
              value={formik.values[field.name]}
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

          <div className="flex gap-2 items-start">
            <div className="w-28">
              <FlagSelectBox
                value={formik.values.countryCode}
                onChange={(val) => formik.setFieldValue("countryCode", val)}
                error={
                  formik.touched.countryCode && formik.errors.countryCode
                    ? formik.errors.countryCode
                    : null
                }
              />
            </div>
            {/* Phone Number Input */}
            <div className="flex-1">
              <Input
                name="phone"
                label="Phone"
                type="text"
                placeholder="Enter phone number"
                value={formik.values.phone}
                onChange={formik.handleChange}
                disabled={registerLoading}
                className="text-sm px-3 py-2"
                error={
                  formik.touched.phone && formik.errors.phone
                    ? formik.errors.phone
                    : null
                }
              />
            </div>
          </div>

          {/* 3. Checkbox alanı (form içinde) */}
          <div className="flex flex-col px-4">
            <div className="flex items-center space-x-2">
              <input
                name="terms" // bağlama için name ekledik
                id="terms"
                type="checkbox"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.terms}
                className="form-checkbox mt-1"
              />
              <label
                htmlFor="terms"
                className="text-xs font-bold text-gray-500"
              >
                I agree to{" "}
                <a href="/privacy" className="text-blue-500 underline">
                  privacy policy & terms
                </a>
              </label>
            </div>
            {/* 4. Manuel hata mesajı */}
            {formik.touched.terms && formik.errors.terms && (
              <p className="text-red-600 text-xs mt-1">{formik.errors.terms}</p>
            )}
          </div>

          <Button
            type="submit"
            varitant="primary"
            disabled={!formik.dirty}
            loading={registerLoading}
            className="w-full text-sm py-2.5"
          >
            Sign up
          </Button>

          <div className="text-center text-xs text-gray-500 font-bold">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 font-medium">
              Sign in instead
            </a>
          </div>
          {/* <div className="flex items-center justify-center space-x-3 pt-3 text-gray-500">
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
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
