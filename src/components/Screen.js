import React from "react";
import "./Screen.css";

const Screen = ({ video }) => {
  return (
    <div className="flex screen">
      <video src={video} loop autoPlay muted />
    </div>
  );
};

export default Screen;
