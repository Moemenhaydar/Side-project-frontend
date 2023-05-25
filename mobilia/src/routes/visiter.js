import React from "react";
import Navbar from "../components/header/nav.js";
import Footer from "../components/footer/footer.js";
import { Outlet } from "react-router-dom";

const visiter = () => {
  return (
    <div>
      <Navbar />
      <Outlet/>
      <Footer />
    </div>
  );
};

export default visiter;
