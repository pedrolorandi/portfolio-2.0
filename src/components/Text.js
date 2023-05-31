import React, { useEffect } from "react";
import "./Text.css";
import { FaGithub, ICONS } from "../data/icons";
import { motion } from "framer-motion";

function Text({
  title,
  description,
  techStack,
  textColor,
  link,
  flip,
  setFlip,
}) {
  useEffect(() => {
    setTimeout(() => {
      setFlip(false);
    }, 200);
  }, [flip]);

  return (
    <div className="flex text-block text-component">
      <div className="mobile-title">
        <h2 style={{ color: textColor }}>{title}</h2>
        <div className="button-container">
          <a
            className="button"
            href={`https://github.com/pedrolorandi/${link}`}
            target="_blank"
          >
            <FaGithub size="1.25em" color="#fff" />
            <span className="desktop">View on GitHub</span>
          </a>
        </div>
      </div>
      <p style={{ color: textColor }}>{description}</p>
      <div className="tech-stack-container">
        <div className="flex tech-stack">
          {techStack.map((tech, idx) => {
            return (
              <div key={idx} className="flex tech">
                <span>{tech.title}</span>
                {ICONS[tech.icon]}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Text;
