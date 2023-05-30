import React from "react";
import logo from "../../images/mobilia.png";
import "../header/nav.css";
const nav = () => {
  return (
    <div className="nav-contain">
      <img src={logo} alt="" className="nav-logo" />
      <ul className="nav-ul">
        <li className="nav-li">
          <a href="" className="nav-a">
            Home
          </a>
        </li>
        <li className="nav-li">
          <a href="" className="nav-a">
            Product
          </a>
        </li>
        <li className="nav-li">
          <a href="" className="nav-a">
            Our Store
          </a>
        </li>
        <li className="nav-li">
          <a href="" className="nav-a">
            About Us
          </a>
        </li>
      </ul>
      
    </div>
  );
};

export default nav;
