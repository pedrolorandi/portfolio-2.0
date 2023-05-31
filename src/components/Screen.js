import React from "react";
import "./Screen.css";

const Screen = ({ video, flip }) => {
  return (
    <div className="screen screen-component">
      <video src={video} loop autoPlay muted />
    </div>
  );
};

export default Screen;
