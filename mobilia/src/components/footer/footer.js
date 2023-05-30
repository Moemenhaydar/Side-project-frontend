import "./footer.css";
import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import contactUs from "../contact/contactUs";

function Footer() {
  return (
      <footer className="footer-contain" >
        
        <ul className="ul-footer">
          <li className="li-footer">
            <a className="a-footer" href="https://www.facebook.com/">
              <FaFacebook className="icon-footer"/>
            </a>
          </li>
          <li className="li-footer">
            <a className="a-footer" href="https://www.instagram.com/">
              <FaInstagram className="icon-footer"/>
            </a>
          </li>
          <li className="li-footer">
            <a
              className="a-footer"
              href="https://api.whatsapp.com/send?phone=123456789"
            >
              <FaWhatsapp className="icon-footer" />
            </a>
          </li>
         
          <li className="li-footer">
            <a className="a-footer" href="contactus/contactus.js">
              <Link to="/contact">
              Contact Us</Link>
            </a>
          </li>
        </ul>

            <p class="copyright">Mobilia © 2023</p>
      </footer>
    
  );
}

export default Footer;
