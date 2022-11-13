import React, { useEffect, useState } from "react";
import GameOver from "../Components/GameOver";
// import useGet from "../hooks/useGet";
import axios from "axios";
import "./SongLyrics.css";
import LoadingSpinner from "../Common/LoadingSpinner";

function SongLyrics(props) {
  const url = "http://localhost:3001/songs/lyrics-of-the-day";
  const [lines, setLines] = useState();
  const [isPending, setIsPending] = useState(true);

  let today = new Date();
  let tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);
  const timer = (today - tomorrow) * -1;

  const getLyrics = useEffect(() => {
    if (props.count === 0) {
      axios
        .get(url)
        .then((response) => {
          setLines(response.data);
          localStorage.setItem("lyrics", response.data);
        })
        .catch((error) => {
          return <div>Sorry, there was an error D: {error}</div>;
        })
        .finally(() => setIsPending(false));
      // setLines(data);
    } else {
      setLines(localStorage.lyrics);
      setIsPending(false);
    }
  }, []);

  setInterval(getLyrics, timer);

  if (isPending) {
    return <LoadingSpinner />;
  }

  // let lyrics = lines.data;
  let actualLines = lines.split("\n").slice(0, 6);
  // let actualLines = lyrics.split("\n").slice(0, 7);

  // const actualLines = ["one", "two", "three", "four", "five", "six"];

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

      {actualLines.map((lyric, i) => {
        if (i < props.count) {
          return (
            <div className="lyrics" key="i">
              {lyric}
            </div>
          );
        }
      })}
    </div>
  );
}

export default SongLyrics;
