import React from "react";
import { Outlet } from "react-router-dom";
import WhatsAppFloat from "../common/WhatsAppFloat";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default MainLayout;
