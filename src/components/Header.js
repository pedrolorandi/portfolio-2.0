import React from "react";
import "./Header.css";

import { FaGithub, FaLinkedinIn, FaCopy, FaFileDownload } from "react-icons/fa";
import { IconContext } from "react-icons";
import portfolio from "../assets/Pedro Lorandi - Resume.pdf";

const Header = () => {
  return (
    <div className="header flex">
      <h1>Pedro Lorandi</h1>
      <div className="buttons flex">
        <a href="https://github.com/pedrolorandi" target="_blank">
          <FaGithub size="1.25em" title="github.com/pedrolorandi" />
        </a>
        <a href="https://www.linkedin.com/in/pedrolorandi/" target="_blank">
          <FaLinkedinIn size="1.25em" title="linkedin.com/in/pedrolorandi/" />
        </a>
        <div className="flex email">
          <FaCopy size="1.25em" title="Copy email" />
          <span>hello@pedrolorandi.com</span>
        </div>
        <a
          className="button"
          href={portfolio}
          download="Pedro Lorandi - Full-Stack Web Developer"
          target="_blank"
          rel="noreferrer"
        >
          <FaFileDownload size="1.25em" />
          <span>Download Resume</span>
        </a>
      </div>
    </div>
  );
};

export default Header;
