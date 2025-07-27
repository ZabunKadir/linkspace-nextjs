import React from "react";
import AuthHeader from "./AuthHeader";
import AuthFooter from "./AuthFooter";

const AuthLayout = ({ children }) => {
  return (
    <React.Fragment>
      <AuthHeader />
      {children}
      <AuthFooter />
    </React.Fragment>
  );
};

export default AuthLayout;
