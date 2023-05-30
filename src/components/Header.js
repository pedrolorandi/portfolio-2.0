import React from "react";
import "./Header.css";

import { FaGithub, FaLinkedinIn, FaCopy, FaFileDownload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import portfolio from "../assets/Pedro Lorandi - Resume.pdf";

const Header = ({ textColor, buttonColor }) => {
  return (
    <div className="header flex">
      <h1 style={{ color: textColor }}>Pedro Lorandi</h1>
      <div className="buttons flex">
        <a href="https://github.com/pedrolorandi" target="_blank">
          <FaGithub
            className="FaGithub icon"
            size="1.25em"
            title="github.com/pedrolorandi"
            color={textColor}
          />
        </a>
        <a href="https://www.linkedin.com/in/pedrolorandi/" target="_blank">
          <FaLinkedinIn
            className="FaLinkedinIn icon"
            size="1.25em"
            title="linkedin.com/in/pedrolorandi/"
            color={textColor}
          />
        </a>
        <div className="flex email">
          <a href="mailto:hello@pedrolorandi.com">
            <MdEmail
              className="MdEmail icon"
              size="1.25em"
              title="hello@pedrolorandi.com"
              color={textColor}
            />
          </a>
          <FaCopy
            className="FaCopy icon"
            size="1.25em"
            title="Copy email"
            color={textColor}
          />
          <span style={{ color: textColor }}>hello@pedrolorandi.com</span>
        </div>
        <a
          className="button"
          href={portfolio}
          download="Pedro Lorandi - Full-Stack Web Developer"
          target="_blank"
          rel="noreferrer"
          style={{ backgroundColor: buttonColor }}
        >
          <FaFileDownload className="icon" size="1.25em" color="#333" />
          <span>
            <span className="mobile">Download</span> Resume
          </span>
        </a>
      </div>
    </div>
  );
};

export default Header;
