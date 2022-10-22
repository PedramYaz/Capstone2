import React, { useState } from "react";
import "./Instructions.css";
import Popup from "../Components/Popup";

function Instructions() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <>
      <button
        aria-label="Instructions"
        className="Navbar-instructions"
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
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
          <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
      </button>

      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h2 className="Instructions-title">How to Play</h2>

        <div className="Instructions-popup">
          <div className="Instructions-popup-info child1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="5.5" cy="17.5" r="2.5"></circle>
              <circle cx="17.5" cy="15.5" r="2.5"></circle>
              <path d="M8 17V5l12-2v12"></path>
              <circle cx="5.5" cy="17.5" r="2.5"></circle>
              <circle cx="17.5" cy="15.5" r="2.5"></circle>
              <path d="M8 17V5l12-2v12"></path>
            </svg>

            <span className="Instructions-text child1">
              Listen to the intro, then find the correct artist & title in the
              list.
            </span>
          </div>

          <div className="Instructions-popup-info child2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            </svg>

            <span className="Instructions-text child2">
              Skipped or incorrect attempts unlock more of the intro.
            </span>
          </div>

          <div className="Instructions-popup-info child3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
            </svg>

            <span className="Instructions-text  child3">
              Answer in as few tries as possible and share your score!
            </span>
          </div>
        </div>
      </Popup>
    </>
  );
}

export default Instructions;
