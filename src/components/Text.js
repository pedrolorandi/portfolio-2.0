import React from "react";
import "./Text.css";
import { FaGithub, ICONS } from "../data/icons";

function Text({ title, description, techStack, link }) {
  return (
    <div className="flex text-block text-component">
      <h2>{title}</h2>
      <div className="button-container">
        <a
          className="button"
          href={`https://github.com/pedrolorandi/${link}`}
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size="1.25em" color="#fff" />
          <span className="desktop">View on GitHub</span>
        </a>
      </div>
      <p>{description}</p>
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
