import React, { useEffect, useState } from "react";
import GameOver from "../Components/GameOver";
import useGet from "../hooks/useGet";
import axios from "axios";
import "./SongLyrics.css";

async function SongLyrics(props) {
  const url = "http://localhost:3001/songs/lyrics-of-the-day";
  const [lines, setLines] = useState({});

  /**
   * ? let todaysLyrics = new Date().toDateString();
   * ? Only thing with the code below, i have to create: localStorage.setItem("todaysLyrics", todaysLyrics);
   *
   * ? we are setting todaysLyrics to be the date of today,
   * ? If the localStorage.todaysLyrics && new Date().toDateString() are not equal to the saved date in localStorage
   * ?    we set the value to "null"
   * ? If the value is still there (not set to "null")
   * ?    We leave the current state the same (the lyrics saved in the state)
   * ? else
   * ?    we make another request to the api and change the state to the new set of lyrics
   *
   * let todaysLyrics;
   *
   * if(localStorage.getItem("todays-lyrics"){
   *    todaysLyrics = JSON.parse(localStorage.getItem("todays-lyrics"));
   * })
   * ! setting todaysLyrics to null if it wasn't stored today
   * if (todaysLyrics && new Date().toDateString() !== todaysLyrics.date){
   *    todaysLyrics = null;
   * }
   * ! if todaysLyrics still has a value, it means we can use it as valid cache for today
   * if(todaysLyrics){
   *    setLyrics(lyrics: todays-lyrics.value)
   * } else {
   *   const data = useGet(url);
   *    setLyrics(data)
   * }
   *
   * let stuff = lyrics.response.data;
   * let actualStuff = lyrics.split("\n").splice(0,7);
   *
   */

  useEffect(async () => {
    let todaysDate = new Date().toDateString();
    localStorage.setItem("date", todaysDate);
    let todaysLyrics;

    if (localStorage.getItem("date")) {
      todaysLyrics = JSON.parse(localStorage.getItem("todays-lyrics"));
    }

    if (todaysLyrics && new Date.toDateString() !== todaysLyrics.date) {
      todaysLyrics = null;
    }

    if (todaysLyrics) {
      return;
    } else {
      const data = await axios.get(url).catch((error) => {
        return <div>Sorry, there was an error :( {error}</div>;
      });
      // console.log(data);
      setLines(data);
    }
  }, []);

  // const data = useGet(url);
  // if (data.isLoading) {
  //   return <div>Loading...</div>;
  // }
  // if (data.error) {
  //   return <div>Sorry, something went wrong :(</div>;
  // }

  let lyrics = lines.response.data;
  let actualLines = lyrics.split("\n").slice(0, 7);

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
