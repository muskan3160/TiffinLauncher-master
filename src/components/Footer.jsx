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
            href="https://www.linkedin.com/in/jaskeerat-singh-5438531a6/"
            target="_blank"
          >
            Reach Out
          </a>
        </div>
        <div className="names">
          Muskan Jaglan{" "}
          <a
            href="https://www.linkedin.com/in/jagmeet-singh-835335202/"
            target="_blank"
          >
            Reach Out
          </a>
        </div>
        <div className="names">
         Vaishnavi Khurana{" "}
          <a
            href="https://www.linkedin.com/in/avneet-kaur-116357133"
            target="_blank"
          >
            Reach Out
          </a>
        </div>
        <div className="names">
          Priyanshu Sabharwal{" "}
          <a
            href="https://www.linkedin.com/in/harsimran-singh-2422681b8/"
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
