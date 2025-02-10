import { SignIn } from "@clerk/nextjs";
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
        <p className="text-sm text-muted-foreground">
          Sign in to your account to continue
        </p>
      </div>
      <SignIn />
    </div>
  );
};

export default LoginPage;
