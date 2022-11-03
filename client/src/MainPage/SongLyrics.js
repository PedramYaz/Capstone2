import React, { useState } from "react";
import GameOver from "../Components/GameOver";
import useGet from "../hooks/useGet";
import "./SongLyrics.css";

function SongLyrics(props) {
  let url = "http://localhost:3001/songs/lyrics-of-the-day";
  const data = useGet(url);
  if (data.isLoading) {
    return <div>Loading...</div>;
  }
  if (data.error) {
    return <div>Sorry, something went wrong :(</div>;
  }

  // let lyrics = data.response.data;
  // let actualLines = lyrics.split("\n").slice(0, 7);
  const actualLines = ["one", "two", "three", "four", "five", "six"];

  return (
    // ! BELOW (L 25-29) IS IF I WANT TO REPLACE THE LYRICS WITH THE GAME OVER
    // ! POPUP,THE ONE THAT IS ACTIVE (L 31-33) IS FOR ADDING THE RESULTS AT
    // ! THE BOTTOM.
    <div className="song-lyrics">
      {/* {props.count < 6 ? (
        actualLines.map((lyric) => <div className="lyrics">{lyric}</div>)
      ) : (
        <GameOver />
      )} */}

      {actualLines.map((lyric) => (
        <div className="lyrics">{lyric}</div>
      ))}
    </div>
  );
}

export default SongLyrics;
