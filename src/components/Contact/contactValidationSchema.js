// src/components/Contact/contactValidationSchema.js
import * as yup from "yup";
import en from "../../../messages/en.json";
import tr from "../../../messages/tr.json";

/**
 * @param {"en"|"tr"} locale
 */
const contactValidationSchema = (locale) => {
  const msgs =
    locale === "tr"
      ? tr.contactSectionForm
      : en.contactSectionForm;

  return yup.object().shape({
    name: yup
      .string()
      .required(msgs.firstNameRequired)
      .max(50, msgs.firstNameMax),
    lastname: yup
      .string()
      .required(msgs.lastNameRequired)
      .max(50, msgs.lastNameMax),
    email: yup
      .string()
      .email(msgs.emailInvalid)
      .required(msgs.emailRequired),
    message: yup
      .string()
      .required(msgs.messageRequired)
      .max(250, msgs.messageMax),
  });
};

export default contactValidationSchema;
