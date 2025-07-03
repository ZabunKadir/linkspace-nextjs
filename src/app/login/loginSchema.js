// src/app/login/loginSchema.js
import * as Yup from "yup";
import en from "../../../messages/en.json";
import tr from "../../../messages/tr.json";

/**
 * @param {string} locale
 * @returns {Yup.ObjectSchema}
 */
export const loginValidationSchema = (locale) => {
  // if your locale strings are "en" or "tr" (or start with those),
  // this will pick the right block:
  const isTR = locale.toLowerCase().startsWith("tr");
  const msgs = isTR ? tr.loginSection : en.loginSection;

  return Yup.object().shape({
    email: Yup.string()
      .email(msgs.emailInvalid)
      .required(msgs.emailRequired)
      .min(5, msgs.emailMin),
    password: Yup.string()
      .required(msgs.passwordRequired)
      .min(6, msgs.passwordMin),
  });
};
