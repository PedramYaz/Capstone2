import React from "react";
import "./ProgressBar.css";

function ProgressBar(props) {
  return (
    <div className="progress-bar">
      <progress
        className="progress-bar-bar"
        value={props.count * (100 / 6)}
        max="100"
      ></progress>
    </div>
  );
}

export default ProgressBar;
