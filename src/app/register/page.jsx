"use client";
import Button from "@/components/Common/Button";
import Input from "@/components/Common/Input";
import { useRegisterMutation } from "@/store/auth/service";
import { useFormik } from "formik";
import React from "react";

const RegisterPage = () => {
  // const {data:getDatasi,isFetching:getUserLoading}= useGetUsersQuery({page:page},{refecthOnMountOrArgChange:true})
  const [register, { data: registerData, isLoading: registerLoading }] =
    useRegisterMutation();

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
    },
    onSubmit: (values) => {
      delete values?.confirmPassword;

      console.log(values);

      register(values).then((res) => {
        console.log("res", res);
        if (!res?.data?.error) {
          formik.resetForm();
          //SuccessModal
        } else {
          //ErrorModal
        }
      });
    },
  });

  const registerFields = [
    { name: "name", label: "Name", placeholder: "Name", type: "text" },
    { name: "surname", label: "Surname", placeholder: "Surname", type: "text" },
    {
      name: "email",
      label: "Email",
      placeholder: "email@example.com",
      type: "email",
    },
    {
      name: "password",
      label: "Password",
      placeholder: "Password",
      type: "password",
    },
    {
      name: "confirmPassword",
      label: "Confirm Password",
      placeholder: "Confirm Password",
      type: "password",
    },
    {
      name: "countryCode",
      label: "Country Code",
      placeholder: "e.g. 90",
      type: "text",
    },
    {
      name: "phone",
      label: "Phone",
      placeholder: "Phone Number",
      type: "text",
    },
  ];
  return (
    <div className="flex w-full items-center justify-center min-h-screen">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-4 w-1/3 bg-blue-400 border border-amber-600 p-4 rounded-lg my-auto"
      >
        {registerFields?.map((item, index) => (
          <Input
            key={index}
            name={item?.name}
            label={item?.label}
            placeholder={item?.placeholder}
            disabled={registerLoading}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[item?.name]}
            error={
              formik.touched[item?.name] && formik.errors[item?.name]
                ? formik.errors[item?.name]
                : null
            }
          />
        ))}
        <Button
          varitant="primary"
          type="submit"
          disabled={!formik.dirty}
          loading={registerLoading}
        >
          Register
        </Button>
      </form>
    </div>
  );
};

export default RegisterPage;
