import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-link">
          <a href="default.asp ">
            <img src={Instagram} alt="" />
          </a>
          <a href="https://github.com/AnukalpParihar ">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/anukalpparihar/">
            <img src={LinkedIn} alt="" />
          </a>
        </div>
        <div className="logo-f">
          <img src={Logo} alt="" />
          <p>@copyright 2023</p>
        </div>
      </div>
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  );
};

export default Footer;
