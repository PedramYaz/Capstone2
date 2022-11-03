import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

function GameReset(props) {
  let date = new Date(Date.now());
  let localDate = date.toLocaleDateString();
  localStorage.setItem("time", localDate);

  let currentDate = localStorage.getItem("time");

  if (currentDate < localDate) {
    props.setCount(0);
  }
}

export default GameReset;
