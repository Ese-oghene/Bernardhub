import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-[var(--bg-light)] px-4">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
