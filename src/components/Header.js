import React, { useState } from "react";
import "./Header.css";

import { FaGithub, FaLinkedinIn, FaCopy, FaFileDownload } from "react-icons/fa";
import { MdMenu, MdClose } from "react-icons/md";
import portfolio from "../assets/Pedro Lorandi - Resume.pdf";

const Header = ({ buttonColor }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  console.log(isMenuOpen);

  return (
    <div className="header flex">
      <h1>Pedro Lorandi</h1>
      <span className="menu-button" onClick={handleOpenMenu}>
        <MdMenu size="2.5em" color="white" />
      </span>
      <div className={`buttons ${isMenuOpen ? "" : "hidden"}`}>
        <span className="close-button" onClick={handleCloseMenu}>
          <MdClose size="2.5em" color="white" />
        </span>
        <a href="https://github.com/pedrolorandi" target="_blank">
          <div className="flex icon-container">
            <FaGithub
              className="FaGithub icon"
              size="1.25em"
              title="github.com/pedrolorandi"
            />

            <span>github.com/pedrolorandi</span>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/pedrolorandi/" target="_blank">
          <div className="flex icon-container">
            <FaLinkedinIn
              className="FaLinkedinIn icon"
              size="1.25em"
              title="linkedin.com/in/pedrolorandi/"
            />

            <span>linkedin.com/in/pedrolorandi</span>
          </div>
        </a>
        <div className="flex icon-container">
          <FaCopy className="FaCopy icon" size="1.25em" title="Copy email" />
          <span className="email">hello@pedrolorandi.com</span>
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
          <span>Download Resume</span>
        </a>
      </div>
    </div>
  );
};

export default Header;
