import AuthWrapper from "@/layout/AuthWrapper/AuthWrapper";
import Button from "@/ui/Button/Button";
import CommonInput from "@/ui/CommonInput/CommonInput";
import React from "react";

function Login() {
  return (
    <div>
      <AuthWrapper
        title="Login"
        subtitle="Welcome back! Please enter your details."
      >
        <div className="mb-4">
          <CommonInput label="Email Address" />
        </div>
        <div className="mb-4">
          <CommonInput label="Password" type="password" />
        </div>
        <div>
          <Button variant="contained" color="primary" className="w-full">
            Submit
          </Button>
        </div>
      </AuthWrapper>
    </div>
  );
}

export default Login;
