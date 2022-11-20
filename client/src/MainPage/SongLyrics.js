import React, { useEffect, useState } from "react";
import GameOver from "../Components/GameOver";
import "./SongLyrics.css";
import LoadingSpinner from "../Common/LoadingSpinner";

function SongLyrics(props) {
  const [lines, setLines] = useState();
  const [isPending, setIsPending] = useState(true);

  let date = new Date();

  useEffect(() => {
    if (localStorage.date < date.toLocaleDateString()) {
      let newLyrics = JSON.parse(localStorage.song_info);
      localStorage.setItem("lyrics", newLyrics.lyrics);
      setLines(localStorage.lyrics);
    } else {
      setLines(localStorage.lyrics);
      setIsPending(false);
    }
  }, []);

  if (isPending) {
    return <LoadingSpinner />;
  }

  let actualLines = lines
    .split("\n")
    .filter((line) => {
      return line !== "";
    })
    .slice(0, 6);

  // const actualLines = ["one", "two", "three", "four", "five", "six"];

  return (
    // ! BELOW (L 25-29) IS IF I WANT TO REPLACE THE LYRICS WITH THE GAME OVER
    // ! POPUP,THE ONE THAT IS ACTIVE (L 31-33) IS FOR ADDING THE RESULTS AT
    // ! THE BOTTOM.
    <div className="song-lyrics">
      {/* {props.count < 6 ? (
        actualLines.map((lyric, i) => <div className="lyrics key={i}">{lyric}</div>)
      ) : (
        <GameOver />
      )} */}

      {actualLines.map((lyric, i) => {
        if (i < props.count) {
          return (
            <div className="lyrics" key={i}>
              {lyric}
            </div>
          );
        }
      })}
    </div>
  );
}

export default SongLyrics;
