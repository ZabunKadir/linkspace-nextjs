"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { useLocale, useTranslations } from "next-intl";
import Input from "@/components/Common/Input";
import Button from "@/components/Common/Button";
import { loginValidationSchema } from "./loginSchema";
import { useLoginMutation } from "@/store/auth/service";

export default function LoginPage() {
  const t = useTranslations("loginSection");
  const locale = useLocale();
  const router = useRouter();
  const [login, { isLoading }] = useLoginMutation();

  const formik = useFormik({
    initialValues: { email: "", password: "" },
   validationSchema: loginValidationSchema(locale),
    onSubmit: async (values) => {
      try {
        const data = await login(values).unwrap();
        if (data.twoFactorRequired) {
          router.push(
            `/twofactor?token=${encodeURIComponent(
              data.sessionToken
            )}&masked=${encodeURIComponent(data.maskedEmail)}`
          );
        } else {
          router.push("/dashboard");
        }
      } catch (err) {
        const msg = err.data?.message || err.message || t("unknownError");
        Swal.fire(t("loginErrorTitle"), msg, "error");
      }
    },
  });

  const loginFields = [
    {
      name: "email",
      label: t("emailLabel"),
      placeholder: t("emailPlaceholder"),
      type: "text",
    },
    {
      name: "password",
      label: t("passwordLabel"),
      placeholder: t("passwordPlaceholder"),
      type: "password",
    },
  ];

  return (
    <div className="flex min-h-screen text-sm overflow-x-hidden">
      {/* Left panel */}
      <div className="w-full relative bg-[#f9f9f9] hidden lg:flex items-center justify-center">
        <img
          src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/illustrations/bg-shape-image-light.png"
          alt="background shape"
          className="absolute bottom-0 left-0 w-full h-auto object-cover z-0"
        />
        <img
          src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/illustrations/auth-login-illustration-light.png"
          alt="login illustration"
          className="relative z-10 max-w-[420px]"
        />
      </div>

      {/* Right panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
        <form
          onSubmit={formik.handleSubmit}
          className="w-full max-w-md space-y-4"
        >
          <div>
            <h1 className="text-xl font-semibold text-gray-800 mb-1">
              {t("welcome")}
            </h1>
            <p className="text-xs text-gray-500">{t("subtitle")}</p>
          </div>

          {loginFields.map((field) => (
            <Input
              key={field.name}
              name={field.name}
              label={field.label}
              type={field.type}
              placeholder={field.placeholder}
              value={formik.values[field.name]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={isLoading}
              className="text-sm px-3 py-2"
              error={
                formik.touched[field.name] && formik.errors[field.name]
              }
            />
          ))}

          <div className="flex justify-between items-center text-xs text-gray-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox" />{" "}
              {t("rememberMe")}
            </label>
            <a href="#" className="text-blue-500 hover:underline">
              {t("forgotPassword")}
            </a>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-indigo-600 text-white py-2.5 hover:bg-indigo-700"
          >
            {isLoading ? t("signingIn") : t("signIn")}
          </Button>

          <p className="text-center text-xs text-gray-600 font-bold">
            {t("newHere")}{" "}
            <a href="/register" className="text-blue-600 font-medium">
              {t("signUp")}
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
