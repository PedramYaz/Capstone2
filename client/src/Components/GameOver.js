import React from "react";
import GetSong from "./GetSong";

const GameOver = (props) => {
  if (props.count > 6) {
    return (
      <div>
        <GetSong />
      </div>
    );
  }
};

export default GameOver;
