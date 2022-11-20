import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import SongSearchForm from "../MainPage/SongSearchForm";
import SongLyrics from "../MainPage/SongLyrics";
import ProgressBar from "../ProgressBar/ProgressBar";
import Timer from "../Components/Timer";
import GameOver from "../Components/GameOver";

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
  const [count, setCount] = useState(
    JSON.parse(localStorage.getItem("clicks"))
  );

  return (
    <div className="Home">
      <div className="Home-container">
        <Navbar />
        <br />
        <br />
        <SongLyrics count={count} />
        <GameOver count={count} />
        <ProgressBar count={count} />
        <SongSearchForm setCount={setCount} count={count} />
      </div>
      <Timer />
    </div>
  );
}

export default Home;
