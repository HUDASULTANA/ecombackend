import React from "react";
import Logo from "../Assets/Logo.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-wrapper1">
      <div className="footer-section-one1">
        <div className="footer-logo-container1">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <NavLink to='https://www.linkedin.com/in/huda-sultana-992497260/'><SiLinkedin /></NavLink>
          <NavLink to='https://www.youtube.com/@HUDASULTANA'><BsYoutube /></NavLink>
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two1">
        <div className="footer-section-columns1">
          <span>Call</span>
          <span>email</span>
          <span>Linkedin</span>
          <span>Git-hub</span>
          
        </div>
        <div className="footer-section-columns1">
          <span>88198*****</span>
          <span>hk6609878@gmail.com</span>
          <span>HUDA SULTANA</span>
          <span>HUDASULTANA</span>
        </div>
        <div className="footer-section-columns1">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;