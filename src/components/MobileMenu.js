import React from "react";
import "./MobileMenu.css";

import { FaGithub, FaLinkedinIn, FaFileDownload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import portfolio from "../assets/Pedro Lorandi - Resume.pdf";

const MobileMenu = ({ textColor, buttonColor }) => {
  return (
    <div className="mobile-menu mobile">
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
              className="mobile icon"
              size="1.25em"
              title="hello@pedrolorandi.com"
              color={textColor}
            />
          </a>
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
          <span>Resume</span>
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
