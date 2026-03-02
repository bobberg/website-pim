import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        All rights reserved by perspectives bv {new Date().getFullYear()}&copy;
      </div>
      <div className="footer-right">Created by Bob van den Berg</div>
    </footer>
  );
};
export default Footer;
