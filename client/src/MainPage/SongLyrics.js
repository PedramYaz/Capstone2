import React from "react";
import GameOver from "../Components/GameOver";
import {
  FirstLine,
  SecondLine,
  ThirdLine,
  FourthLine,
  FifthLine,
} from "../Components/ShowSong";
import "./SongLyrics.css";

function SongLyrics() {
  let num = localStorage.getItem("clicks");
  if (num === "1") {
    return <FirstLine className="lyrics" />;
  }
  if (num === "2") {
    return <SecondLine className="lyrics" />;
  }
  if (num === "3") {
    return <ThirdLine className="lyrics" />;
  }
  if (num === "4") {
    return <FourthLine className="lyrics" />;
  }
  if (num === "5") {
    return <FifthLine className="lyrics" />;
  }
  return (
    <div>
      <GameOver />
      GAME OVER
    </div>
  );
}
// return (
//   <>
//     <div className="song-lyrics lyric-reveal">
//       {/* <div className="lyrics lyrics-top">JOEE</div>
//       <div className="lyrics">JOEE</div>
//       <div className="lyrics">JOEE</div>
//       <div className="lyrics">JOEE</div>
//       <div className="lyrics">JOEE</div> */}
//     </div>
//   </>
// );

export default SongLyrics;
