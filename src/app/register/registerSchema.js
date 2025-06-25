import * as Yup from "yup";

export const registerValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  surname: Yup.string().required("Surname is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .required("Confirm Password is required"),
  countryCode: Yup.string().required("Country Code is required"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Only numeric values allowed")
    .required("Phone is required"),
});
