import React from "react";
import "./ProgressBar.css";

function ProgressBar() {
  return (
    <div className="progress-bar">
      <progress className="progress-bar-bar" value="50" max="100"></progress>
    </div>
  );
}

export default ProgressBar;
