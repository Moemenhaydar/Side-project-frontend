import React from "react";
import Navbar from "../components/header/nav.js";
import Footer from "../components/footer/footer.js";
import { Outlet } from "react-router-dom";
import About from "../pages/about/about.js";
import SuggestProduct from "../components/suggestProduct/suggestproduct.js";
import Product from "../components/products/productvisitor.js";
const visiter = () => {
  return (
    <div>
      <Navbar />
      <Outlet/>
      <SuggestProduct/>
      <Product/>
      <About/>
      <Footer />
    </div>
  );
};

export default visiter;
