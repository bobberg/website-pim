import React from "react";
import linkedin from "./../images/linkedin.png";
import facebook from "./../images/facebook.png";
import twitter from "./../images/twitter.png";
import { prependOnceListener } from "cluster";

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="contact-heading">Contact Pim</h1>
      <div className="contact-section">
        <div className="contact-form"></div>
        <div>
          <h1>Address</h1>
          <p>
            Pim van den Berg Perspectives BV
            <br />
            Charlotte van Montpensierlaan 2c
            <br />
            1181 RR Amstelveen
          </p>

          <br />
          <p>
            Phone: 020 6412990
            <br />
            Fax: 020 6407479
            <br />
            Mobile: 06 51431255
            <br />
            E-mail: pimvandenberg@wxs.nl
          </p>
        </div>

        <div>
          <h1>Follow Pim</h1>
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
            href="http://twitter.com/pimvandenberg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="Facebook" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Contact;
