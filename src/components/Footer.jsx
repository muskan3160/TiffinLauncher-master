import React from "react";
import "./css/Footer.css";
import AlanEatsLogo from "../Images/TL.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="alan_logo">
        <img
          src={AlanEatsLogo}
          alt=""
        />
      </div>
      <div className="contact_us">
        <h1>Contact us</h1>
        <div className="names">
          Aakash Kumar{" "}
          <a
            href="https://www.linkedin.com/in/aakash-kumar-3a7433207"
            target="_blank"
          >
            Reach Out
          </a>
        </div>
        <div className="names">
          Muskan Jaglan{" "}
          <a
            href="https://www.linkedin.com/in/muskan-jaglan-6b645817b/"
            target="_blank"
          >
            Reach Out
          </a>
        </div>
        <div className="names">
         Vaishnavi Khurana{" "}
          <a
            href="https://www.linkedin.com/in/vaishnavi-khurana-841887192"
            target="_blank"
          >
            Reach Out
          </a>
        </div>
        <div className="names">
          Priyanshu Sabharwal{" "}
          <a
            href="https://www.linkedin.com/in/priyanshu-sabharwal-0b0075209"
            target="_blank"
          >
            Reach Out
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
