import React from "react";
import "./Navbar.css";
import SmileyFace from "../Navbar Buttons/SmileyFace";
import Instructions from "../Navbar Buttons/Instructions";
import Leaderboards from "../Navbar Buttons/Leaderboards";
import About from "../Navbar Buttons/About";

/**
 * Making the navbar:
 *
 * This includes:
 *  - an "i" with a circle for "information" that is an "about" pop-up
 *  - The main name of the game in the middle "Lyricle"
 *  - A little 3-bar graph that gives the leaderboards...? (national average,
 *    your average and your overall scores)
 *  - A "?" in a circle for "How to play" that describes how to play.
 *
 */

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar-info">
        <SmileyFace />
        <About />
        <h1 className="Navbar-title">Lyricle</h1>
        <Leaderboards />
        <Instructions />
      </div>
    </div>
  );
}

export default Navbar;
