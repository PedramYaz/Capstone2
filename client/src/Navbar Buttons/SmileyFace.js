import React from "react";
import "./SmileyFace.css";

function SmileyFace() {
  return (
    <div className="Navbar-smiley-face">
      <button aria-label="Music Note" className="Navbar-smiley-face">
        <svg
          className="Navbar-svg"
          viewBox="0 0 200 200"
          width="28"
          height="28"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="100"
            cy="100"
            fill="yellow"
            r="78"
            stroke="black"
            strokeWidth="3"
          />
          <g>
            <circle cx="61" cy="82" r="12" />
            <circle cx="127" cy="82" r="12" />
          </g>
          <path d="m136.81 116.53c.69 26.17-64.11 42-81.52-.73" />
        </svg>
      </button>
    </div>
  );
}
export default SmileyFace;
