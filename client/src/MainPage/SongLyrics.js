import React, { useEffect, useState } from "react";
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
      // localStorage.setItem("clicks", 1);
      localStorage.setItem("date", date.toLocaleDateString());
      setIsPending(false);
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

  return (
    <div className="song-lyrics">
      {actualLines.map((lyric, i) => {
        if (i < props.count) {
          return (
            <div className="lyrics" key={i}>
              {lyric}
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default SongLyrics;
