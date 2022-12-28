import React, { useState, useEffect } from "react";
import LoadingSpinner from "../Common/LoadingSpinner";
import axios from "axios";

const GetSong = (props) => {
  let url = "http://localhost:3001/songs/choice-of-the-day";
  const [name, setName] = useState();
  const [isPending, setIsPending] = useState(true);

  let date = new Date();

  useEffect(() => {
    if (localStorage.date < date.toLocaleDateString()) {
      axios
        .get(url)
        .then((response) => {
          setName(response.data);
          localStorage.setItem("song_info", JSON.stringify(response.data));
          localStorage.setItem("lyrics", response.data.lyrics);
        })
        .catch((error) => {
          return <div>Sorry, there was an error D: {error}</div>;
        })
        .finally(() => setIsPending(false));
    } else {
      setName(JSON.parse(localStorage.song_info));
      setIsPending(false);
    }
  }, []);

  if (isPending) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <h3>Song Name: {name.track_name}</h3>
      <h3>Artist Name: {name.artist_name}</h3>
    </div>
  );
};

export default GetSong;
