import React, { useState } from "react";
import "./About.css";
import Popup from "../Components/Popup";

function About() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <>
      <button
        aria-label="About"
        className="Navbar-about"
        onClick={() => setButtonPopup(true)}
      >
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
      </button>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h2>About</h2>
        <p className="Popup-text">
          Each daily Lyricle features a snippet of lyrics from a popular song.
          Guess in as few tries as possible, and be sure to come back every day
          for a new song.
        </p>
      </Popup>
    </>
  );
}

export default About;
