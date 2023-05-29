import React from "react";
import "./Screen.css";
import budgetBossScreen from "../assets/budget-boss-screen.png";
import budgetBossVideo from "../assets/budget-boss.mp4";

const Screen = ({ link }) => {
  console.log(link);

  return (
    <div className="flex screen">
      <video src={budgetBossVideo} loop autoPlay muted />
    </div>
  );
};

export default Screen;
