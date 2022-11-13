import React, { useState, useEffect } from "react";
import LoadingSpinner from "../Common/LoadingSpinner";
import axios from "axios";

const GetSong = (props) => {
  let url = "http://localhost:3001/songs/choice-of-the-day";
  const [name, setName] = useState();
  const [isPending, setIsPending] = useState(true);

  let today = new Date();
  let tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);
  const timer = (today - tomorrow) * -1;

  const getInfo = useEffect(() => {
    if (props.count === 0) {
      axios
        .get(url)
        .then((response) => {
          setName(response.data);
          localStorage.setItem("song_info", JSON.stringify(response.data));
        })
        .catch((error) => {
          return <div>Sorry, there was an error D: {error}</div>;
        })
        .finally(() => setIsPending(false));
      // setLines(data);
    } else {
      setName(JSON.parse(localStorage.song_info));
      setIsPending(false);
    }
  }, []);

  setInterval(getInfo, timer);

  // useEffect(() => {
  //   if (props.count === 0) {
  //     axios
  //       .get(url)
  //       .then((response) => {
  //         setName(response.data);
  //         localStorage.setItem("song_info", JSON.stringify(response.data));
  //       })
  //       .catch((error) => {
  //         return <div>There was an error {error}</div>;
  //       })
  //       .finally(() => setIsPending(false));
  //   } else {
  //     setName(JSON.parse(localStorage.song_info));
  //     setIsPending(false);
  //   }
  // }, []);
  if (isPending) {
    return <LoadingSpinner />;
  }

  console.log(name);

  if (props.count > 6) {
    return (
      <div>
        <h3>Song Name: {name.track_name}</h3>
        <h3>Artist Name: {name.artist_name}</h3>
      </div>
    );
  }
};

export default GetSong;
