import React from "react";
import { LinkComponent, SocialComponent } from "../utils/links";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <h4 className="footer-text">
            all &copy; reserved to
            <span className="brand-color"> drink team</span>
          </h4>
          <SocialComponent classSocial="socialTop" />
        </div>
      </div>
    </footer>
  )
};

export default Footer;
