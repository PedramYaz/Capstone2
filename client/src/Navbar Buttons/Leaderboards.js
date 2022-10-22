import React, { useState } from "react";
import "../Navbar Buttons/Leaderboards.css";
import Popup from "../Components/Popup";

function Leaderboards() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <>
      <button
        aria-label="Your Stats"
        className="Navbar-leaderboard"
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
          <path d="M12 20v-6M6 20V10M18 20V4"></path>
        </svg>
      </button>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h2 className="Leaderboards-title">Leaderboards</h2>
        <p className="Popup-text">PUT LEADERBOARD STATS HERE</p>
      </Popup>
    </>
  );
}
export default Leaderboards;
