import React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import SongSearch from "../MainPage/SongSearch";
import SongLyrics from "../MainPage/SongLyrics";
import ProgressBar from "../ProgressBar/ProgressBar";
import Timer from "../Components/Timer";
// import GetSong from "../Components/GetSong";
// import { Link } from "react-router-dom";

/**
 * Main page
 *
 * This is where the main game is located.
 *
 * There is going to be a "start" button that you click to give you the intial
 * hint for the game. From there you will start to play.
 *
 * useState is used to keep track of your guesses as you go.
 *
 * There will be a login/register button on the page to make an ccount if
 * you please. This allows the user to keep track of their scored and to check
 * the overall leaderboards to see the average for each day.
 *
 * Also a button that shows the previous days results up to a week in the past
 *
 */

function Home() {
  // const { currentUser } = useContext(useContext)

  return (
    <div className="Home">
      <div className="Home-container">
        <Navbar />
        <p className="Home-instructions">Welcome to Lyricle</p>
        <SongLyrics />
        {/* <GetSong /> */}
        <ProgressBar />
        <SongSearch />
      </div>
      <Timer />
    </div>
  );
}

export default Home;

// How to make a button pop up with a description when hovered
// <button title="About">About</button>
