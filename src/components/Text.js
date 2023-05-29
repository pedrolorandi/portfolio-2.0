import React from "react";
import "./Text.css";

import { FaNodeJs, FaReact, FaSass } from "react-icons/fa";
import {
  SiExpress,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiTailwindcss,
} from "react-icons/si";
import { ImEmbed2 } from "react-icons/im";

const size = "3em";

const ICONS = {
  FaNodeJs: <FaNodeJs size={size} color="#333" />,
  FaReact: <FaReact size={size} color="#333" />,
  FaSass: <FaSass size={size} color="#333" />,
  SiExpress: <SiExpress size={size} color="#333" />,
  SiNextdotjs: <SiNextdotjs size={size} color="#333" />,
  SiPostgresql: <SiPostgresql size={size} color="#333" />,
  SiPrisma: <SiPrisma size={size} color="#333" />,
  SiTailwindcss: <SiTailwindcss size={size} color="#333" />,
  ImEmbed2: <ImEmbed2 size={size} color="#333" />,
};

function Text({ title, description, techStack, textColor }) {
  return (
    <div className="flex text-block">
      <h2 style={{ color: textColor }}>{title}</h2>
      <p style={{ color: textColor }}>{description}</p>
      <div className="tech-stack-container">
        <div className="flex tech-stack">
          {techStack.map((tech) => {
            return (
              <div className="flex tech">
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
