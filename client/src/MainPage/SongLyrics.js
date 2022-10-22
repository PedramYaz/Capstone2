import React from "react";
import request from "../api/api";
import "./SongLyrics.css";

function SongLyrics() {
  request();
  return (
    <>
      <div className="song-lyrics lyric-reveal">
        <div className="lyrics lyrics-top">JOEE</div>
        <div className="lyrics">JOEE</div>
        <div className="lyrics">JOEE</div>
        <div className="lyrics">JOEE</div>
        <div className="lyrics">JOEE</div>
      </div>
    </>
  );
}

export default SongLyrics;
