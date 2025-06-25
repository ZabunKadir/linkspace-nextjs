import * as yup from "yup";

const contactValidationSchema = () => {
  return yup.object().shape({
    name: yup
      .string()
      .required("First name is required.")
      .max(50, "First name must be at most 50 characters."),
    lastname: yup
      .string()
      .required("Last name is required.")
      .max(50, "Last name must be at most 50 characters."),
    email: yup
      .string()
      .email("Please enter a valid email address.")
      .required("Email is required."),
    message: yup
      .string()
      .required("Message is required.")
      .max(250, "Message must be at most 250 characters."),
  });
};

export default contactValidationSchema;
