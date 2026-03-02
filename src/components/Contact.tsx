import React from "react";
import linkedin from "./../images/linkedin.png";
import facebook from "./../images/facebook.png";
import twitter from "./../images/twitter.png";

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="contact-heading">Contact Pim</h1>
      <div className="contact-section">
        <div className="contact-form"></div>
        <div>
          <h2>Address</h2>
          <address>
            Pim van den Berg Perspectives BV
            <br />
            Charlotte van Montpensierlaan 2c
            <br />
            1181 RR Amstelveen
          </address>
          <p>
            Phone: <a href="tel:0206412990">020 6412990</a>
            <br />
            Mobile: <a href="tel:0651431255">06 51431255</a>
            <br />
            E-mail:{" "}
            <a href="mailto:pimvandenberg@wxs.nl">pimvandenberg@wxs.nl</a>
          </p>
        </div>

        <div>
          <h2>Follow Pim</h2>
          <p>
            I actually prefer genuine contact, but you can also connect to me in
            different ways
          </p>
          <a
            id="LinkedInLink"
            href="https://www.linkedin.com/in/pim-van-den-berg-aaa226"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a
            id="FacebookLink"
            href="https://www.facebook.com/pim.vandenberg.336"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="Facebook" />
          </a>
          <a
            id="TwitterLink"
            href="https://twitter.com/pimvandenberg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="Twitter" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Contact;
